/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import moment from 'moment';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';

import { LocalStorageKeys } from '../../constants/keys';
import Toast from '../../components/Toast/Toast';
import { Routes } from '../../navigation/Routes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { saveOrderAction, selectError } from '../OrderStep/OrderStep.slice';
import { PaymentWays, SelectThemes, expressServiceChargePer, multipleCombinePhotosPrice, videoCreatedPrice } from '../OrderStep/OrderStep.constants';
import { useLocalStorage } from '../../hooks';
import { dateFormat, monthDayFormat } from '../../constants/general';
import { remainingPaymentCardAction, selectedError as accountSelectError } from '../Account/Account.slice';
import { sendGiftCardAction } from '../PricingTiming/PricingTiming.slice';
import { useRouter } from 'next/router';

const ReturnPaymentPage = () => {
    const stripe: any = useStripe();
    const history = useRouter();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();

    const error = useAppSelector(selectError);
    const accountError = useAppSelector(accountSelectError);

    const [showError, setShowError] = useState({ open: false, message: '' });
    const [countdown, setCountdown] = useState(3);

    const orderPageDetailStorage = localStorage.getItem(LocalStorageKeys.orderPageDetail)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.orderPageDetail) || '')
        : '';
    const contectDetail: any = localStorage.getItem(LocalStorageKeys.contectDetail)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.contectDetail) || '')
        : '';
    const estimatedDeliveryDays: any = localStorage.getItem(LocalStorageKeys.estimatedDeliveryDays)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.estimatedDeliveryDays) || '')
        : '';
    const remainingOrderDetail: any = localStorage.getItem(LocalStorageKeys.remainingOrderDetail)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.remainingOrderDetail) || '')
        : '';
    const getPaymentID: any = localStorage.getItem(LocalStorageKeys.paymentID);
    const giftCardPayload: any = localStorage.getItem(LocalStorageKeys.giftCardPayload)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.giftCardPayload) || '')
        : '';

    const clearError = () => {
        setShowError({ open: false, message: '' });
    };

    useEffect(() => {
        if (error || accountError) setShowError({ open: true, message: error?.message || accountError?.message });
    }, [error, accountError]);

    useEffect(() => {
        if (stripe) {
            (async () => {
                const urlParams = new URLSearchParams(window.location.search);
                const clientSecret = urlParams.get('payment_intent_client_secret');
                const orderId = urlParams.get('orderId');
                const priceTime = urlParams.get('priceTime');

                const { error: paymentError, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

                if (!(orderId || priceTime)) {
                    if (paymentIntent) {
                        if (paymentIntent?.last_payment_error) {
                            await setShowError({ open: true, message: paymentIntent?.last_payment_error?.message });
                            setTimeout(() => {
                                history.push(Routes.home);
                            }, 3000);
                            return;
                        }
                        let payload: any = {};

                        const data: any = {
                            firstName: contectDetail?.firstName || orderPageDetailStorage?.data.fillingForm.firstName,
                            lastName: contectDetail?.surName || orderPageDetailStorage?.data.fillingForm.lastName,
                            email: contectDetail?.email || orderPageDetailStorage?.data.fillingForm.email,
                            phoneNumber: contectDetail?.phoneNumber || orderPageDetailStorage?.data.fillingForm.phoneNumber,
                            countryCode:
                                (contectDetail?.countryCode && getCountryCallingCode(contectDetail?.countryCode)) ||
                                getCountryCallingCode(orderPageDetailStorage?.data.fillingForm?.countryCode),
                            countryName: contectDetail?.countryCode || orderPageDetailStorage?.data.fillingForm?.countryCode,
                            medium_id: orderPageDetailStorage?.data?.mediumItems?.id,
                            mediumName: orderPageDetailStorage?.data?.mediumItems?.title,
                            is_photo_selected: orderPageDetailStorage?.data?.preview.length > 0,
                            combine_multiple_image_to_create_one: orderPageDetailStorage?.data?.combinePhotoPrice === multipleCombinePhotosPrice,
                            combine_multiple_image_to_create_one_price: orderPageDetailStorage?.data?.combinePhotoPrice,
                            artist_advice: orderPageDetailStorage?.data?.artistAdvice,
                            size_id: orderPageDetailStorage?.data?.selectPaintingSizeAndPrice?.sizeid,
                            sizeInText: orderPageDetailStorage?.data?.selectPaintingSizeAndPrice?.sizeInText,
                            frame_id: orderPageDetailStorage?.data?.selectedFrame?.id,
                            frameName: orderPageDetailStorage?.data?.selectedFrame?.title,
                            artist_sign: orderPageDetailStorage?.data?.artistSign,
                            how_my_video_created: orderPageDetailStorage?.data?.videoCreated === videoCreatedPrice,
                            how_my_video_created_price: orderPageDetailStorage?.data?.videoCreated,
                            estimated_delivery_date: '2023-06-16',
                            estimated_delivery_startDate: moment(estimatedDeliveryDays.formattedFutureDate, monthDayFormat).format('YYYY-MM-DD'),
                            estimated_delivery_endDate: moment(estimatedDeliveryDays.formattedFuture4Date, monthDayFormat).format('YYYY-MM-DD'),
                            is_rush_delivery: orderPageDetailStorage?.data?.expressService,
                            special_note: orderPageDetailStorage?.data?.comments,
                            shipping_method: 'Free shipping', // temp
                            shipping_method_percentage: expressServiceChargePer, // temp
                            service_type: orderPageDetailStorage?.data?.expressService ? 'Express service' : 'Free service',
                            payment_date: moment().format(dateFormat),
                            payment_description: 'initial payment',
                            images: orderPageDetailStorage?.data?.imagePerviewName,
                        };

                        if (orderPageDetailStorage?.data?.expressService) {
                            data.service_type_percentage = expressServiceChargePer;
                        }

                        if (orderPageDetailStorage?.data?.successCouponId?.Cdata) {
                            data.used_coupon_code_id = orderPageDetailStorage?.data?.successCouponId?.Cdata;
                            data.used_coupon_code_name = orderPageDetailStorage?.data?.couponCode;
                        }

                        if (orderPageDetailStorage?.data?.themesItems?.theme === SelectThemes.custom) {
                            payload = {
                                ...data,
                                isCustom: true,
                                theme_object_id_1: orderPageDetailStorage?.data?.personTheme?.id,
                                theme_object_id_2: orderPageDetailStorage?.data?.petTheme?.id,
                                themeName1: orderPageDetailStorage?.data?.personTheme?.thmObj,
                                themeName2: orderPageDetailStorage?.data?.petTheme?.thmObj,
                                theme_object_id_1_total: orderPageDetailStorage?.data?.personsCount || 0,
                                theme_object_id_2_total: orderPageDetailStorage?.data?.petsCount || 0,
                            };
                        } else {
                            payload = {
                                ...data,
                                isCustom: false,
                                theme_object_id_1: orderPageDetailStorage?.data?.themesItems?.id,
                                themeName1: orderPageDetailStorage?.data?.themesItems?.title,
                            };
                        }

                        payload.paymentMethod_id = getPaymentID;
                        payload.payment_method = PaymentWays.affirm;
                        payload.payment_mode = PaymentWays.affirm;
                        payload.paymentIntent = paymentIntent.id;

                        const result: any = await dispatch(saveOrderAction(payload));

                        if (result.type === saveOrderAction.fulfilled.toString()) {
                            localStorage.setItem(LocalStorageKeys.authUser, result.payload.token);
                            setTimeout(() => {
                                history.push(Routes.thankYou);
                            }, 3000);
                            await localStorage.removeItem(LocalStorageKeys.orderPageDetail);
                            await localStorage.removeItem(LocalStorageKeys.paymentID);
                            await localStorage.removeItem(LocalStorageKeys.estimatedDeliveryDays);
                            const contectPayload = {
                                firstName: result?.payload?.user?.user?.name || '',
                                surName: result?.payload?.user?.user?.surname || '',
                                countryCode: getCountries().find((item: any) => item === result?.payload?.user?.user?.countryName) || 'US',
                                phoneNumber: result?.payload?.user?.user?.phoneNumber || '',
                                email: result?.payload?.user?.user?.email || '',
                            };
                            localStorage.setItem(LocalStorageKeys.contectDetail, JSON.stringify(contectPayload));
                        }
                    } else if (paymentError) {
                        await setShowError({ open: true, message: paymentError.message });
                        setTimeout(() => {
                            history.push(Routes.home);
                        }, 3000);
                    }
                } else if (paymentIntent) {
                    if (priceTime || priceTime === 'true') {
                        const result: any = await dispatch(
                            sendGiftCardAction({
                                ...giftCardPayload,
                                paymentMethod_id: getPaymentID,
                                payment_method: PaymentWays.affirm,
                                payment_mode: PaymentWays.affirm,
                                paymentIntent_id: paymentIntent.id,
                            }),
                        );

                        if (result.type === sendGiftCardAction.fulfilled.toString()) {
                            setTimeout(() => {
                                // history.push({
                                //     pathname: Routes.pricingTiming,
                                //     state: { giftPaymentDone: true, data: result.payload.data },
                                // });
                            }, 3000);
                            await localStorage.removeItem(LocalStorageKeys.giftCardPayload);
                            await localStorage.removeItem(LocalStorageKeys.paymentID);
                        }
                    } else {
                        const payloadRemaining: any = {
                            paymentMethod_id: getPaymentID,
                            orderid: orderId,
                            addressid: remainingOrderDetail?.adressId,
                            payment_method: PaymentWays.affirm,
                            payment_mode: PaymentWays.affirm,
                            paymentIntent: paymentIntent.id,
                            estimated_delivery_startDate: moment(
                                remainingOrderDetail?.estimatedDeliveryDays.formattedFutureDate,
                                monthDayFormat,
                            ).format('YYYY-MM-DD'),
                            estimated_delivery_endDate: moment(
                                remainingOrderDetail?.estimatedDeliveryDays.formattedFuture4Date,
                                monthDayFormat,
                            ).format('YYYY-MM-DD'),
                            shippingPercentage: remainingOrderDetail?.shippingValue,
                            tipPercentage: remainingOrderDetail?.activeButton,
                        };

                        const result: any = await dispatch(remainingPaymentCardAction(payloadRemaining));

                        if (result.type === remainingPaymentCardAction.fulfilled.toString()) {
                            setTimeout(() => {
                                // history.push({ pathname: Routes.account, state: { remainingPaymentDone: true } });
                            }, 3000);
                            await localStorage.removeItem(LocalStorageKeys.remainingOrderDetail);
                            await localStorage.removeItem(LocalStorageKeys.paymentID);
                        }
                    }
                } else {
                    await setShowError({ open: true, message: paymentError.message });
                    setTimeout(() => {
                        history.push(Routes.home);
                    }, 3000);
                }
            })();
        }
    }, [stripe]);

    useEffect(() => {
        let timer: any;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
        }
        return () => {
            if (countdown > 0) {
                clearInterval(timer);
            }
        };
    }, [countdown]);

    return (
        <div>
            {showError.open && <Toast show={showError} setShow={clearError} message={showError.message} type="error" showIcon />}
            please do not refresh this page, auto redirect will be in {countdown} seconds
        </div>
    );
};

export default ReturnPaymentPage;

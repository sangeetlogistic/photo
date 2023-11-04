/* eslint-disable no-nested-ternary */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useCallback, useEffect, useState } from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Card, Input, Form } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import moment from 'moment';
import { LoadingOutlined, CloseOutlined } from '@ant-design/icons';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import '@stripe/stripe-js';

import { Images } from '../../theme';
import { OrderCheckOutCmp, OrderSummaryBlockCmp } from './OrderPage.component';
import CheckboxGroup from '../../components/CheckboxGroup';
import PaymentMod from './OrderStep.Payment';
import {
    multipleCombinePhotosPrice,
    videoCreatedPrice,
    SelectThemes,
    maxLengthForComments,
    expressServiceChargePer,
    CouponCodeDiscount,
    estimatedDaysWithExpress,
    estimatedDays,
    sperationDays,
} from './OrderStep.constants';
import ContactDetails from './OrderStep.Checkout.ContactDetails';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    clearError,
    clearSaveOrderError,
    isValidCouponCodeAction,
    saveOrderAction,
    selectedCouponLoading,
    selectMediumItems,
    selectThemesItems,
} from './OrderStep.slice';
import { Routes } from '../../navigation/Routes';
import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import { ICheckout } from './OrderStep.types';
import { dateFormat, monthDayFormat } from '../../constants/general';
import { calculateFun, convertBrToN, dateSeparation } from '../../utils/func';
import { LocalStorageKeys } from '../../constants/keys';
import { useDeviceDetect, useLocalStorage } from '../../hooks';
import FilledButton from '../../components/FilledButton';
import { MobileOrderPageMainCmp } from './OrderPage.MobileComponent';
import MobileHeader from './OrderStep.MobileHeader';
import MobileCheckout from './OrderStep.MobileCheckout';
import MobileFooter from './OrderStep.MobileFooter';
import { useRouter } from 'next/router';

const { TextArea } = Input;

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const Checkout = ({
    setComplateStep4,
    selectPaintingSizeAndPrice,
    selectedFrame,
    preview,
    setCombinePhotoPrice,
    combinePhotoPrice,
    setVideoCreated,
    videoCreated,
    setArtistSign,
    artistSign,
    artistAdvice,
    setExpressService,
    expressService,
    setComments,
    comments,
    personTheme,
    petTheme,
    fillingForm,
    setFillingForm,
    personsCount,
    petsCount,
    setSuccessCouponCode,
    successCouponCode,
    couponCode,
    setCouponCode,
    setSuccessCouponId,
    successCouponId,
    complateStep2,
    complateStep3,
    complateStep4,
    repeatStep2,
    repeatStep3,
    repeatStep4,
    showProgressBar,
    savedCardProccessComplete,
    setSavedCardPopup,
    clearOrderData,
    imagePerviewName,
    setImagePerviewName,
}: ICheckout) => {
    const [formIns] = Form.useForm();

    const route = useRouter();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();
    const { isMobile } = useDeviceDetect();

    const orderPageDetailStorage = localStorage?.getItem(LocalStorageKeys.orderPageDetail)
        ? JSON.parse(localStorage?.getItem(LocalStorageKeys.orderPageDetail) || '')
        : '';
    const contectDetail: any = localStorage?.getItem(LocalStorageKeys.contectDetail)
        ? JSON.parse(localStorage?.getItem(LocalStorageKeys.contectDetail) || '')
        : '';

    const themesItems = useAppSelector(selectThemesItems);
    const mediumItems = useAppSelector(selectMediumItems);
    const couponLoading = useAppSelector(selectedCouponLoading);

    const [isValidCoupon, setIsValidCoupon] = useState<string>('');
    const [advancedPaymentAmount, setAdvancedPaymentAmount] = useState<null | number>(null);
    const [estimatedDeliveryDays, setEstimatedDeliveryDays] = useState<{ formattedFutureDate: string; formattedFuture4Date: string }>({
        formattedFutureDate: '',
        formattedFuture4Date: '',
    });
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);

    const { firstName, lastName, email, phoneNumber, countryCode } = formIns.getFieldsValue();

    useEffect(() => {
        setComplateStep4(true);
        setValidPhoneNumber(true);

        return () => {
            dispatch(clearError());
            dispatch(clearSaveOrderError());
        };
    }, []);

    useEffect(() => {
        const dateRange = dateSeparation(expressService ? estimatedDaysWithExpress : estimatedDays, sperationDays);
        setEstimatedDeliveryDays(dateRange);
        localStorage?.setItem(LocalStorageKeys.estimatedDeliveryDays, JSON.stringify(dateRange));
    }, [expressService]);

    useEffect(() => {
        const array: string[] = [];
        preview?.forEach((obj) => {
            array.push(obj.name);
        });
        setImagePerviewName(array);
    }, [preview]);

    useEffect(() => {
        if (couponLoading) {
            setSuccessCouponCode?.('');
        }
    }, [couponLoading]);

    useEffect(() => {
        if (selectPaintingSizeAndPrice && selectedFrame) {
            const total: any = calculateFun(
                selectPaintingSizeAndPrice.price,
                selectedFrame.price,
                combinePhotoPrice,
                videoCreated,
                expressService,
                true,
                successCouponId,
            );
            setAdvancedPaymentAmount(total);
        }
    }, [selectPaintingSizeAndPrice, selectedFrame, successCouponId, combinePhotoPrice, videoCreated, expressService]);

    const handleCombinePhoto = (e: CheckboxChangeEvent) => {
        setCombinePhotoPrice(e.target.checked ? e.target.value : undefined);
    };

    const handleVideoCreated = (e: CheckboxChangeEvent) => {
        setVideoCreated(e.target.checked ? e.target.value : undefined);
    };

    const handleArtistSign = (e: CheckboxChangeEvent) => {
        setArtistSign(e.target.checked);
    };

    const handleSubmitCheckOut = async (
        paymentId: string | undefined,
        paymentMethod: string,
        paymentMode: string,
        paypalOrderID: string | undefined,
        paymentIntentId: string | undefined,
    ) => {
        let payload: any = {};

        const data: any = {
            firstName: firstName || fillingForm.firstName || contectDetail?.firstName || orderPageDetailStorage?.data.fillingForm.firstName,
            lastName: lastName || fillingForm.lastName || contectDetail?.surName || orderPageDetailStorage?.data.fillingForm.lastName,
            email: email || fillingForm.email || contectDetail?.email || orderPageDetailStorage?.data.fillingForm.email,
            phoneNumber: phoneNumber || fillingForm.phoneNumber || contectDetail?.phoneNumber || orderPageDetailStorage?.data.fillingForm.phoneNumber,
            countryCode:
                getCountryCallingCode(countryCode) ||
                getCountryCallingCode(contectDetail?.countryCode) ||
                getCountryCallingCode(orderPageDetailStorage?.data.fillingForm?.countryCode) ||
                getCountryCallingCode(fillingForm.countryCode),
            countryName:
                countryCode || contectDetail?.countryCode || orderPageDetailStorage?.data.fillingForm?.countryCode || fillingForm.countryCode,
            paymentMethod_id: paymentId,
            medium_id: mediumItems?.id,
            mediumName: mediumItems?.title,
            is_photo_selected: preview.length > 0,
            combine_multiple_image_to_create_one: combinePhotoPrice === multipleCombinePhotosPrice,
            combine_multiple_image_to_create_one_price: combinePhotoPrice,
            artist_advice: artistAdvice,
            size_id: selectPaintingSizeAndPrice?.sizeid,
            sizeInText: selectPaintingSizeAndPrice?.sizeInText,
            frame_id: selectedFrame?.id,
            frameName: selectedFrame?.title,
            artist_sign: artistSign,
            how_my_video_created: videoCreated === videoCreatedPrice,
            how_my_video_created_price: videoCreated,
            estimated_delivery_date: '2023-06-16',
            estimated_delivery_startDate: moment(estimatedDeliveryDays.formattedFutureDate, monthDayFormat).format('YYYY-MM-DD'),
            estimated_delivery_endDate: moment(estimatedDeliveryDays.formattedFuture4Date, monthDayFormat).format('YYYY-MM-DD'),
            is_rush_delivery: expressService,
            special_note: comments,
            shipping_method: 'Free shipping', // temp
            shipping_method_percentage: expressServiceChargePer, // temp
            service_type: expressService ? 'Express service' : 'Free service',
            payment_method: paymentMethod,
            payment_mode: paymentMode,
            payment_date: moment().format(dateFormat),
            payment_description: 'initaial payment',
            images: imagePerviewName,
            paypal_orderid: paypalOrderID,
            paymentIntent: paymentIntentId,
        };

        if (expressService) {
            data.service_type_percentage = expressServiceChargePer;
        }

        if (successCouponId?.Cdata) {
            data.used_coupon_code_id = successCouponId?.Cdata;
            data.used_coupon_code_name = couponCode;
        }

        if (themesItems?.theme === SelectThemes.custom) {
            payload = {
                ...data,
                isCustom: true,
                theme_object_id_1: personTheme?.id,
                theme_object_id_2: petTheme?.id,
                themeName1: personTheme?.thmObj,
                themeName2: petTheme?.thmObj,
                theme_object_id_1_total: personsCount || 0,
                theme_object_id_2_total: petsCount || 0,
            };
        } else {
            payload = {
                ...data,
                isCustom: false,
                theme_object_id_1: themesItems?.id,
                themeName1: themesItems?.title,
            };
        }

        const result: any = await dispatch(saveOrderAction(payload));

        if (result.type === saveOrderAction.fulfilled.toString()) {
            localStorage?.setItem(LocalStorageKeys.authUser, result.payload.token);
            clearOrderData();
            await route.push(Routes.thankYou);
            await localStorage?.removeItem(LocalStorageKeys.orderPageDetail);
            const contectPayload = {
                firstName: result?.payload?.user?.user?.name || '',
                surName: result?.payload?.user?.user?.surname || '',
                countryCode: getCountries().find((item: any) => item === result?.payload?.user?.user?.countryName) || 'US',
                phoneNumber: result?.payload?.user?.user?.phoneNumber || '',
                email: result?.payload?.user?.user?.email || '',
            };
            localStorage?.setItem(LocalStorageKeys.contectDetail, JSON.stringify(contectPayload));
        }
    };

    const handleComments = (e: any) => {
        const content = convertBrToN(e.target.value);
        setComments?.(content || '');
    };

    const handleApplyCouponCode = async () => {
        await setIsValidCoupon('');

        if (couponCode) {
            const result: any = await dispatch(isValidCouponCodeAction({ couponCode }));
            if (result.type === isValidCouponCodeAction.fulfilled.toString()) {
                setSuccessCouponCode?.(result.payload.discountedAmount);
                setSuccessCouponId?.(result.payload);
            } else if (result.type === isValidCouponCodeAction.rejected.toString()) {
                await setCouponCode?.('');
                setIsValidCoupon('Woops! Wrong Code');
            }
        }
    };

    const calculateTotal = useCallback(
        (couponCodeAmount: any) =>
            selectPaintingSizeAndPrice &&
            selectedFrame &&
            calculateFun(
                selectPaintingSizeAndPrice.price,
                selectedFrame.price,
                combinePhotoPrice,
                videoCreated,
                expressService,
                true,
                couponCodeAmount,
            ),
        [selectPaintingSizeAndPrice, selectedFrame, combinePhotoPrice, videoCreated, expressService],
    );

    return (
        <>
            {!isMobile ? (
                <OrderCheckOutCmp className="order-inner-block checkout-step">
                    <Row gutter={{ md: 48 }}>
                        <Col md={24} xl={12} className="gutter-row">
                            <Row gutter={{ md: 6 }}>
                                <Col md={12} className="gutter-row">
                                    <div className="checkout-setting-left">
                                        <div className="checkout-setting-left--item medium-theme">
                                            <div className="title-block">
                                                <h5 className="title">Theme & medium</h5>
                                                <span
                                                    className="edit-link"
                                                    onClick={() => route.push(Routes.orderStep.replace(':id', '1'))}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <FontAwesomeIcon icon={faPen} />
                                                    <span className="link-text">Edit</span>
                                                </span>
                                            </div>
                                            <div className="checkout-selection-block">
                                                <div className="checkout-selection-item theme">
                                                    <figure className="img-block">
                                                        <img src={themesItems?.image} alt="" className="" />
                                                        {themesItems?.theme === SelectThemes.custom && (
                                                            <div className="d-flex justify-center">
                                                                <output className="mx-3">{personsCount || 0}</output>
                                                                <output className="mx-3">{petsCount || 0}</output>
                                                            </div>
                                                        )}
                                                    </figure>
                                                    <p className="checkout-selection-item--title">{themesItems?.title || themesItems?.theme}</p>
                                                </div>
                                                <div className="checkout-selection-item medium">
                                                    <figure className="img-block">
                                                        <img src={mediumItems?.image} alt="" className="" />
                                                        <img src={mediumItems?.hoverImage} alt="" className="hover_image-fix" />
                                                    </figure>
                                                    <p className="checkout-selection-item--title">{mediumItems?.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-setting-left--item upload-img-item">
                                            <div className="title-block">
                                                <h5 className="title">Photos Uploaded</h5>
                                                <span
                                                    className="edit-link"
                                                    onClick={() => route.push(Routes.orderStep.replace(':id', '2'))}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <FontAwesomeIcon icon={faPen} />
                                                    <span className="link-text">Edit</span>
                                                </span>
                                            </div>
                                            {preview?.length > 0 ? (
                                                <div className="selected_images_show">
                                                    {preview.map((img, index) => (
                                                        <img src={img.url} key={index} alt="" />
                                                    ))}
                                                </div>
                                            ) : (
                                                <div
                                                    className="checkout-selection-block attachments-block"
                                                    onClick={() => route.push(Routes.orderStep.replace(':id', '2'))}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <div className="attachment-placeholder">
                                                        <div className="attachment-upload-icon-block">
                                                            <img src={Images.IconUploadFiles?.src} alt="" width="33" height="33" className="" />
                                                            <span className="text">Upload Photos</span>
                                                        </div>
                                                        <div className="attachment-upload-text">
                                                            <p className="">or Send them to</p>
                                                            <p className="link">Info@photo2painting.com</p>
                                                            <p className="">after finishing checkout process</p>
                                                        </div>
                                                    </div>
                                                    <div className="files-attachment-img-outer"></div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="checkout-setting-left--item size-frame">
                                            <div className="title-block">
                                                <h5 className="title">Size & Frame</h5>
                                                <span
                                                    className="edit-link"
                                                    onClick={() => route.push(Routes.orderStep.replace(':id', '3'))}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <FontAwesomeIcon icon={faPen} />
                                                    <span className="link-text">Edit</span>
                                                </span>
                                            </div>
                                            <div className="checkout-selection-block">
                                                <div className="checkout-selection-item">
                                                    <figure className="img-block size">{selectPaintingSizeAndPrice?.title}</figure>
                                                </div>
                                                <div className="checkout-selection-item ">
                                                    <figure className="img-block frame">
                                                        <img src={selectedFrame?.image} alt="" className="" />
                                                    </figure>
                                                    <p className="checkout-selection-item--title">{selectedFrame?.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} className="d-flex flex-col">
                                    <Card className="checkout_settings_right" bordered={false}>
                                        <div className="d-flex">
                                            <CheckboxGroup
                                                className="checkbox_wrapper"
                                                onChange={handleCombinePhoto}
                                                value={multipleCombinePhotosPrice}
                                                checked={combinePhotoPrice === multipleCombinePhotosPrice}
                                            ></CheckboxGroup>{' '}
                                            <span className={`checkbox-title ${combinePhotoPrice === multipleCombinePhotosPrice ? 'opacity-1' : ''}`}>
                                                {' '}
                                                Combine multiple photos to create one painting{' '}
                                            </span>
                                            <label className={`price_label ${combinePhotoPrice === multipleCombinePhotosPrice ? 'opacity-1' : ''}`}>
                                                (+ ${`${multipleCombinePhotosPrice}`})
                                            </label>
                                        </div>
                                        <div className="d-flex">
                                            <CheckboxGroup
                                                className="checkbox_wrapper"
                                                onChange={handleVideoCreated}
                                                checked={videoCreated === videoCreatedPrice}
                                                value={videoCreatedPrice}
                                            ></CheckboxGroup>{' '}
                                            <span className={`checkbox-title ${videoCreated === videoCreatedPrice ? 'opacity-1' : ''}`}>
                                                {' '}
                                                I would like a video of how my painting was created{' '}
                                            </span>
                                            <label className={`price_label ${videoCreated === videoCreatedPrice ? 'opacity-1' : ''}`}>
                                                (+ ${videoCreatedPrice})
                                            </label>
                                        </div>
                                        <div className="d-flex">
                                            <CheckboxGroup
                                                className="checkbox_wrapper"
                                                onChange={handleArtistSign}
                                                checked={artistSign}
                                            ></CheckboxGroup>
                                            <span className={`checkbox-title ${artistSign ? 'opacity-1' : ''}`}>
                                                {' '}
                                                I would like artist to sign my painting
                                            </span>
                                        </div>
                                    </Card>
                                    <OrderSummaryBlockCmp className="order-summary-block checkout_summery">
                                        <div className="total-summary">
                                            <div className="select-summery-details">
                                                <div className="select-summery-item">
                                                    <p className="select-summery-text">Compilation Portrait</p>
                                                    <p className="select-summery-text">{combinePhotoPrice ? `$${combinePhotoPrice}` : 'NO'}</p>
                                                </div>
                                                <div className="select-summery-item">
                                                    <p className="select-summery-text">Painting Video</p>
                                                    <p className="select-summery-text">{videoCreated ? `$${videoCreated}` : 'NO'}</p>
                                                </div>
                                                <div className="select-summery-item">
                                                    <p className="select-summery-text">Express Service</p>
                                                    <p className="select-summery-text">
                                                        {expressService
                                                            ? selectPaintingSizeAndPrice && selectedFrame && expressService
                                                                ? `$${(
                                                                      (selectPaintingSizeAndPrice.price +
                                                                          selectedFrame.price +
                                                                          (combinePhotoPrice || 0) +
                                                                          (videoCreated || 0)) *
                                                                      0.15
                                                                  ).toFixed(2)}`
                                                                : 0
                                                            : 'NO'}
                                                    </p>
                                                </div>
                                                <div className="select-summery-item">
                                                    <p className="select-summery-text">Size {selectPaintingSizeAndPrice?.title}</p>
                                                    <p className="select-summery-text">${selectPaintingSizeAndPrice?.price}</p>
                                                </div>
                                                <div className="select-summery-item">
                                                    <p className="select-summery-text">Frame {selectedFrame?.title}</p>
                                                    <p className="select-summery-text">${selectedFrame?.price}</p>
                                                </div>
                                            </div>
                                            <div className="select-summery-item sub-total">
                                                <p className="select-summery-text">SUBTOTAL</p>
                                                <div className="d-flex">
                                                    {successCouponCode && (
                                                        <p className="select-summery-text discount-price">
                                                            $
                                                            {selectPaintingSizeAndPrice &&
                                                                selectedFrame &&
                                                                calculateFun(
                                                                    selectPaintingSizeAndPrice.price,
                                                                    selectedFrame.price,
                                                                    combinePhotoPrice,
                                                                    videoCreated,
                                                                    expressService,
                                                                    null,
                                                                )}
                                                        </p>
                                                    )}
                                                    <p className="select-summery-text text-number">
                                                        $
                                                        {selectPaintingSizeAndPrice &&
                                                            selectedFrame &&
                                                            calculateFun(
                                                                selectPaintingSizeAndPrice.price,
                                                                selectedFrame.price,
                                                                combinePhotoPrice,
                                                                videoCreated,
                                                                expressService,
                                                                false,
                                                                successCouponId,
                                                            )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offer">
                                            <div className="select-offer-pricing">
                                                <div className="select-offer-pricing--today">
                                                    <p className="text-data">20% deposit due today &nbsp;</p>{' '}
                                                    {successCouponCode && (
                                                        <p className="discount-price depositdue-number">${calculateTotal(undefined)}</p>
                                                    )}
                                                    <p className="text-number depositdue-number">${calculateTotal(successCouponId)}</p>
                                                </div>
                                                <p className="note">✹ Remaining balance to be paid after painting approval</p>
                                            </div>
                                            <div className={`checkout_input ${successCouponCode && !isValidCoupon ? 'success' : ''}`}>
                                                <Input
                                                    placeholder={isValidCoupon || 'Enter Discount Code'}
                                                    className="checkoutCoupon_input"
                                                    onChange={(e: any) => {
                                                        if (!e.target.value && e.target.value === '') {
                                                            setCouponCode?.('');
                                                            setSuccessCouponCode?.('');
                                                            setSuccessCouponId?.(null);
                                                        }
                                                        setCouponCode?.(e.target.value);
                                                    }}
                                                    onPressEnter={handleApplyCouponCode}
                                                    value={couponCode}
                                                />
                                                {successCouponCode && (
                                                    <CloseOutlined
                                                        className="apply-coupan-closed"
                                                        onClick={() => {
                                                            setCouponCode?.('');
                                                            setSuccessCouponCode?.('');
                                                            setSuccessCouponId?.(null);
                                                        }}
                                                    />
                                                )}
                                                <FilledButton
                                                    color={successCouponCode && !isValidCoupon ? 'success' : 'primary'}
                                                    className="apply-coupan-button"
                                                    onClick={handleApplyCouponCode}
                                                >
                                                    {!successCouponCode ? (
                                                        <>
                                                            Apply{' '}
                                                            {!couponLoading ? (
                                                                <img src={Images.AddPluseIcon?.src} alt="add-icon-plus" />
                                                            ) : (
                                                                <LoadingOutlined spin />
                                                            )}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {couponLoading ? (
                                                                <>
                                                                    Appling <LoadingOutlined spin />
                                                                </>
                                                            ) : (
                                                                `Applied - ${
                                                                    successCouponId &&
                                                                    (successCouponId.discountIn === CouponCodeDiscount.PRICE
                                                                        ? `$${successCouponId.discountedAmount}`
                                                                        : `${successCouponId.discountedAmount}%`)
                                                                }`
                                                            )}
                                                        </>
                                                    )}
                                                </FilledButton>
                                            </div>
                                        </div>
                                    </OrderSummaryBlockCmp>
                                </Col>
                            </Row>
                            <div className="checkout_text-area">
                                <TextArea
                                    rows={2}
                                    placeholder="Enter additional comments about the order..."
                                    value={convertBrToN(comments)}
                                    maxLength={maxLengthForComments}
                                    onChange={handleComments}
                                />
                            </div>
                        </Col>
                        <Col md={24} xl={12} className="gutter-row">
                            <Card className="checkout_details_section" bordered={false}>
                                <ContactDetails
                                    fillingForm={fillingForm}
                                    setFillingForm={setFillingForm}
                                    setExpressService={setExpressService}
                                    expressService={expressService}
                                    formIns={formIns}
                                    Form={Form}
                                    estimatedDeliveryDays={estimatedDeliveryDays}
                                    setValidPhoneNumber={setValidPhoneNumber}
                                />
                                {stripePromise && (
                                    <Elements stripe={stripePromise}>
                                        <PaymentMod
                                            handleSubmitCheckOut={handleSubmitCheckOut}
                                            advancedPaymentAmount={advancedPaymentAmount}
                                            form={formIns}
                                            firstName={
                                                firstName ||
                                                fillingForm?.firstName ||
                                                contectDetail?.firstName ||
                                                orderPageDetailStorage?.data?.fillingForm?.firstName
                                            }
                                            lastName={
                                                lastName ||
                                                fillingForm?.lastName ||
                                                contectDetail?.surName ||
                                                orderPageDetailStorage?.data?.fillingForm?.lastName
                                            }
                                            email={
                                                email || fillingForm?.email || contectDetail?.email || orderPageDetailStorage?.data?.fillingForm.email
                                            }
                                            phoneNumber={
                                                phoneNumber ||
                                                fillingForm?.phoneNumber ||
                                                contectDetail?.phoneNumber ||
                                                orderPageDetailStorage?.data?.fillingForm.phoneNumber
                                            }
                                            countryCode={
                                                countryCode ||
                                                fillingForm?.countryCode ||
                                                contectDetail?.countryCode ||
                                                orderPageDetailStorage?.data?.fillingForm.countryCode
                                            }
                                            validPhoneNumber={validPhoneNumber}
                                        />
                                    </Elements>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </OrderCheckOutCmp>
            ) : (
                <MobileOrderPageMainCmp>
                    <MobileHeader
                        complateStep2={complateStep2}
                        complateStep3={complateStep3}
                        complateStep4={complateStep4}
                        repeatStep2={repeatStep2}
                        repeatStep3={repeatStep3}
                        repeatStep4={repeatStep4}
                    />
                    <MobileCheckout
                        themesItems={themesItems}
                        petsCount={petsCount}
                        personsCount={personsCount}
                        mediumItems={mediumItems}
                        preview={preview}
                        selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                        selectedFrame={selectedFrame}
                        handleCombinePhoto={handleCombinePhoto}
                        combinePhotoPrice={combinePhotoPrice}
                        handleVideoCreated={handleVideoCreated}
                        videoCreated={videoCreated}
                        handleArtistSign={handleArtistSign}
                        artistSign={artistSign}
                        expressService={expressService}
                        successCouponCode={successCouponCode}
                        successCouponId={successCouponId}
                        calculateTotal={calculateTotal}
                        isValidCoupon={isValidCoupon}
                        setCouponCode={setCouponCode}
                        handleApplyCouponCode={handleApplyCouponCode}
                        couponCode={couponCode}
                        setSuccessCouponCode={setSuccessCouponCode}
                        setSuccessCouponId={setSuccessCouponId}
                        couponLoading={couponLoading}
                        comments={comments}
                        handleComments={handleComments}
                        fillingForm={fillingForm}
                        setFillingForm={setFillingForm}
                        setExpressService={setExpressService}
                        formIns={formIns}
                        handleSubmitCheckOut={handleSubmitCheckOut}
                        advancedPaymentAmount={advancedPaymentAmount}
                        estimatedDeliveryDays={estimatedDeliveryDays}
                        Form={Form}
                        firstName={
                            firstName || fillingForm?.firstName || contectDetail?.firstName || orderPageDetailStorage?.data?.fillingForm?.firstName
                        }
                        lastName={lastName || fillingForm?.lastName || contectDetail?.surName || orderPageDetailStorage?.data?.fillingForm?.lastName}
                        email={email || fillingForm?.email || contectDetail?.email || orderPageDetailStorage?.data?.fillingForm.email}
                        validPhoneNumber={validPhoneNumber}
                        setValidPhoneNumber={setValidPhoneNumber}
                    />
                    <MobileFooter
                        showProgressBar={showProgressBar}
                        savedCardProccessComplete={savedCardProccessComplete}
                        setSavedCardPopup={setSavedCardPopup}
                    />
                </MobileOrderPageMainCmp>
            )}
        </>
    );
};

export default Checkout;

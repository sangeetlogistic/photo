/* eslint-disable no-self-compare */
/* eslint-disable consistent-return */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Alert, Col, Form, Input, Popover, Row, Select } from 'antd';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import FilledButton from '../../components/FilledButton';
import { OrderStepPayment } from './OrderPage.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearErrors, getAllCardAction, selectedCardListData, selectedRemainingPaymentError } from '../Account/Account.slice';
import { PAYPAL_CLIENT_KEY } from '../../constants/predicates';
import { useDeviceDetect, useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { clearSaveOrderError, googleApplePayAction, selectSaveOrderError, setLoading, zipPayAction } from './OrderStep.slice';
import { PaymentWays, normalDebounce } from './OrderStep.constants';
import { Images } from '../../theme';
import { Routes } from '../../navigation/Routes';
import { emailRegex } from '../../utils/func';
import Toast from '../../components/Toast/Toast';

const scriptId = 'zip-integrate-api';

const Payment = ({
    handleSubmitCheckOut,
    paymentPopup,
    handlePayment,
    advancedPaymentAmount,
    amountToShow,
    form,
    firstName,
    lastName,
    email,
    validPhoneNumber,
    handleGift,
    showGiftContent,
    giftCardAmount,
}: {
    handleSubmitCheckOut?: (
        paymentId: string | undefined,
        paymentMethod: string,
        paymentMode: string,
        paypalOrderID: string | undefined,
        paymentIntentId?: string | undefined,
    ) => void;
    paymentPopup?: any;
    handlePayment?: (
        selectDefaultPaymentId: string | undefined,
        paymentMethod?: string | undefined,
        paymentMode?: string | undefined,
        paymentIntent?: string | undefined,
    ) => void;
    advancedPaymentAmount?: any;
    amountToShow?: any;
    form?: any;
    firstName?: string;
    lastName?: string;
    email?: string;
    validPhoneNumber?: boolean;
    handleGift?: any;
    showGiftContent?: {
        form: boolean;
        payment: boolean;
        thankYou: boolean;
    };
    giftCardAmount?: number;
}) => {
    const stripe: any = useStripe();
    const elements: any = useElements();
    const localStorage = useLocalStorage();
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const authUser = localStorage.getItem(LocalStorageKeys.authUser);
    const orderPageDetailStorage = localStorage.getItem(LocalStorageKeys.orderPageDetail)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.orderPageDetail) || '')
        : '';

    const advancedPaymentAmountRef = useRef(advancedPaymentAmount);
    const amountToShowRef = useRef(amountToShow);
    const giftCardAmountRef: any = useRef(giftCardAmount || 0);

    const cardListData = useAppSelector(selectedCardListData);
    const saveOrderError = useAppSelector(selectSaveOrderError);
    const remainingPaymentError = useAppSelector(selectedRemainingPaymentError);

    const [cardError, setCardError] = useState<{
        cardNumber?: string;
        cardExpiry?: string;
        cardCvc?: string;
    }>({});
    const [selectDefaultPaymentId, setSelectDefaultPaymentId] = useState<string | null>(null);
    const [addCardPopup, setAddCardPopup] = useState(false);
    const [paymentRequest, setPaymentRequest] = useState<any>(null);
    const [socialPaymentBtn, setSocialPaymentBtn] = useState<{
        applePay: boolean;
        googlePay: boolean;
        link: boolean;
    }>({ applePay: false, googlePay: false, link: false });
    const [doPaypalApiCall, setDoPaypalApiCallApiCall] = useState<{
        open: boolean;
        data: any;
    }>({ open: false, data: null });
    const [doSocialApiCall, setDoSocialApiCall] = useState<{
        open: boolean;
        data: any;
    }>({ open: false, data: null });
    const [saveCardError, setSaveCardError] = useState(false);
    const [show, setShow] = useState(false);
    const [errorPaymentMethodShow, setErrorPaymentMethodShow] = useState(false);

    useEffect(() => {
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.sand.us.zip.co/v1/zip.js';
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (cardListData && cardListData?.length > 0) {
            setSelectDefaultPaymentId(cardListData[0].id);
        }
    }, [cardListData]);

    useEffect(() => {
        if (saveOrderError || remainingPaymentError) {
            setSaveCardError(true);
        } else {
            setSaveCardError(false);
        }
    }, [saveOrderError, remainingPaymentError]);

    // Clear Time function
    useEffect(() => {
        const timer = setTimeout(() => {
            if (saveOrderError) {
                dispatch(clearSaveOrderError());
            } else if (remainingPaymentError) {
                dispatch(clearErrors());
            }
        }, normalDebounce);

        return () => clearTimeout(timer);
    }, [saveOrderError, remainingPaymentError]);

    useEffect(() => {
        if (authUser) dispatch(getAllCardAction());
    }, []);

    useEffect(() => {
        advancedPaymentAmountRef.current = advancedPaymentAmount;
    }, [advancedPaymentAmount]);

    useEffect(() => {
        amountToShowRef.current = amountToShow;
    }, [amountToShow]);

    useEffect(() => {
        giftCardAmountRef.current = giftCardAmount;
    }, [giftCardAmount]);

    useEffect(() => {
        (async () => {
            if (doPaypalApiCall.open) {
                if (showGiftContent?.payment) {
                    await handleGift?.(
                        undefined,
                        doPaypalApiCall?.data?.paymentSource || PaymentWays.payPal,
                        doPaypalApiCall?.data?.paymentSource || PaymentWays.payPal,
                        doPaypalApiCall?.data?.orderID,
                    );
                } else if (paymentPopup) {
                    await handlePayment?.(undefined, doPaypalApiCall?.data?.paymentSource || PaymentWays.payPal);
                } else {
                    await handleSubmitCheckOut?.(
                        undefined,
                        doPaypalApiCall?.data?.paymentSource || PaymentWays.payPal,
                        doPaypalApiCall?.data?.paymentSource || PaymentWays.payPal,
                        doPaypalApiCall?.data?.orderID,
                    );
                }
                setDoPaypalApiCallApiCall({ open: false, data: null });
            }
        })();
    }, [doPaypalApiCall]);

    useEffect(() => {
        (async () => {
            if (doSocialApiCall.open) {
                if (showGiftContent?.payment) {
                    await handleGift?.(
                        doSocialApiCall?.data?.paymentMethodId,
                        socialPaymentBtn.googlePay ? PaymentWays.googlePay : PaymentWays.applePay,
                        socialPaymentBtn.googlePay ? PaymentWays.googlePay : PaymentWays.applePay,
                        undefined,
                        doSocialApiCall?.data?.paymentIntentId,
                    );
                } else if (paymentPopup) {
                    await handlePayment?.(
                        doSocialApiCall?.data?.paymentMethodId,
                        socialPaymentBtn.googlePay ? PaymentWays.googlePay : PaymentWays.applePay,
                        socialPaymentBtn.googlePay ? PaymentWays.googlePay : PaymentWays.applePay,
                        doSocialApiCall?.data?.paymentIntentId,
                    );
                } else {
                    await handleSubmitCheckOut?.(
                        doSocialApiCall?.data?.paymentMethodId,
                        socialPaymentBtn.googlePay ? PaymentWays.googlePay : PaymentWays.applePay,
                        socialPaymentBtn.googlePay ? PaymentWays.googlePay : PaymentWays.applePay,
                        undefined,
                        doSocialApiCall?.data?.paymentIntentId,
                    );
                }
                setDoSocialApiCall({ open: false, data: null });
            }
        })();
    }, [doSocialApiCall]);

    useEffect(() => {
        const totalAmount = amountToShowRef.current || advancedPaymentAmountRef.current || giftCardAmountRef.current;

        stripeRequestAction(Number(totalAmount) || 1);
    }, [stripe]);

    useEffect(() => {
        const totalAmount = Number(amountToShowRef.current || advancedPaymentAmountRef.current || giftCardAmountRef.current);

        let finalPrice;
        if (typeof totalAmount === 'number') {
            if (Number.isInteger(totalAmount)) {
                finalPrice = totalAmount.toString();
            } else {
                finalPrice = totalAmount.toFixed(2);
            }
        }

        let newfinalPrice;
        const changePrice = Number(finalPrice) * 100;

        if (typeof changePrice === 'number') {
            if (Number.isInteger(changePrice)) {
                newfinalPrice = changePrice.toString();
            } else {
                newfinalPrice = changePrice.toFixed(2);
            }
        }

        if (paymentRequest) {
            paymentRequest.update({
                total: {
                    label: 'payment',
                    amount: Number(newfinalPrice) || 0,
                },
            });
        }
    }, [paymentRequest, amountToShow, advancedPaymentAmount]);

    const checkValidationForPay = () => {
        const validEmail = email ? emailRegex(email) : null;

        return !(firstName && lastName && validEmail && validPhoneNumber);
    };
    const check = !(paymentPopup || showGiftContent?.payment) ? checkValidationForPay() : false;

    const handleSocialPay = async (e: any) => {
        if (check) {
            setShow(true);
            form?.validateFields();
            e.preventDefault();
            return;
        }

        if (paymentRequest) {
            paymentRequest.on('paymentmethod', async (ev: any) => {
                const payload = {
                    paymentMethodId: ev.paymentMethod.id,
                    amount: amountToShowRef.current || advancedPaymentAmountRef.current || giftCardAmountRef.current,
                    currency: 'usd',
                };
                if (amountToShowRef.current <= 0 || advancedPaymentAmountRef.current <= 0 || giftCardAmountRef?.current <= 0) {
                    setDoSocialApiCall({
                        open: true,
                        data: {
                            paymentMethodId: undefined,
                            paymentIntentId: undefined,
                        },
                    });
                    ev.complete('success');
                    return;
                }
                const result = await dispatch(googleApplePayAction(payload));

                if (result.type === googleApplePayAction.fulfilled.toString()) {
                    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                        result?.payload?.paymentIntent?.client_secret,
                        { payment_method: ev.paymentMethod.id },
                        { handleActions: false },
                    );

                    if (confirmError) {
                        ev.complete('fail');
                    } else {
                        ev.complete('success');
                        if (paymentIntent.status === 'requires_action') {
                            const { error } = await stripe.confirmCardPayment(result?.payload?.paymentIntent?.client_secret);
                            if (error) {
                                // The payment failed -- ask your customer for a new payment method.
                            } else {
                                setDoSocialApiCall({
                                    open: true,
                                    data: {
                                        paymentMethodId: ev.paymentMethod.id,
                                        paymentIntentId: paymentIntent?.id,
                                    },
                                });
                            }
                            // The payment has succeeded -- show a success message to your customer.
                        } else {
                            setDoSocialApiCall({
                                open: true,
                                data: {
                                    paymentMethodId: ev.paymentMethod.id,
                                    paymentIntentId: paymentIntent?.id,
                                },
                            });
                        }
                    }
                }
            });
        }
    };

    const onFinishFailed = () => {
        if (!paymentPopup && check) {
            setShow(true);
        }
        form?.validateFields();
    };

    const handleSubmit = async () => {
        if (!paymentPopup && check) {
            setShow(true);
        }

        const validation = await form?.validateFields();
        const cardElement = elements.getElement(CardNumberElement);

        dispatch(setLoading(true));
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        dispatch(setLoading(false));
        if (error) {
            setErrorPaymentMethodShow(true);
        }

        if (paymentMethod) {
            if (showGiftContent?.payment) {
                handleGift?.(paymentMethod?.id, PaymentWays.stripe, PaymentWays.creditCard);
            } else if (paymentPopup) {
                handlePayment?.(paymentMethod?.id, PaymentWays.stripe, PaymentWays.creditCard);
            } else if (validation) {
                handleSubmitCheckOut?.(paymentMethod?.id, PaymentWays.stripe, PaymentWays.creditCard, undefined);
            }
        }
    };

    const onClickPayment = () => {
        if (selectDefaultPaymentId) {
            if (paymentPopup) {
                handlePayment?.(selectDefaultPaymentId, PaymentWays.stripe, PaymentWays.creditCard);
            } else {
                handleSubmitCheckOut?.(selectDefaultPaymentId, PaymentWays.stripe, PaymentWays.creditCard, undefined);
            }
        }
    };

    const onValuesChange = async (values: any) => {
        if (values?.cardNumber) {
            await setCardError((prev) => ({
                ...prev,
                cardNumber: values?.cardNumber?.error?.message,
            }));
        }
        if (values?.cardExpiry) {
            await setCardError((prev) => ({
                ...prev,
                cardExpiry: values?.cardExpiry?.error?.message,
            }));
        }
        if (values?.cardCvc) {
            await setCardError((prev) => ({
                ...prev,
                cardCvc: values?.cardCvc?.error?.message,
            }));
        }
    };

    const handlePaymentId = (value: string) => {
        setSelectDefaultPaymentId(value);
    };

    const createOrder = async (data: any, actions: any) => {
        const validation = await form?.validateFields();

        if (!paymentPopup && validation) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: amountToShowRef.current || advancedPaymentAmountRef.current || giftCardAmountRef.current,
                        },
                    },
                ],
            });
        }

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amountToShowRef.current || advancedPaymentAmountRef.current || giftCardAmountRef.current,
                    },
                },
            ],
        });
    };

    const onApprove = async (data: any, actions: any) =>
        actions.order
            .capture()
            .then((details: any) => {
                if (data?.orderID) {
                    setDoPaypalApiCallApiCall({ open: true, data });
                }
            })
            .catch((err: any) => {});

    const onClick = (data: any, actions: any) => {
        if (check) {
            setShow(true);
        }
        if (amountToShowRef.current <= 0 || advancedPaymentAmountRef.current <= 0 || giftCardAmountRef.current <= 0) {
            setDoPaypalApiCallApiCall({ open: true, data: undefined });
            actions.reject();
        }
    };

    const handleCheckoutAffirm = async (e: any) => {
        if (check) {
            setShow(true);
            form?.validateFields();
            e.preventDefault();
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'affirm',
        });
        if (error) {
            setErrorPaymentMethodShow(true);
        }

        await localStorage.setItem(LocalStorageKeys.paymentID, paymentMethod.id);

        const payload = {
            paymentMethodId: paymentMethod.id,
            amount: amountToShowRef.current || advancedPaymentAmountRef.current || giftCardAmountRef.current,
            currency: 'usd',
            isAffirm: true,
        };

        const result: any = await dispatch(googleApplePayAction(payload));

        if (result.type === googleApplePayAction.fulfilled.toString()) {
            stripe
                .confirmAffirmPayment(result?.payload?.paymentIntent?.client_secret, {
                    payment_method: {
                        billing_details: {
                            name: `${firstName} ${lastName}`,
                            email,
                            address: {
                                line1: '1314 E Yelm Ave',
                                city: 'Yelm',
                                state: 'Washington',
                                country: 'US',
                                postal_code: 98597,
                            },
                        },
                    },
                    shipping: {
                        name: `${firstName} ${lastName}`,
                        address: {
                            line1: '1314 E Yelm Ave',
                            city: 'Yelm',
                            state: 'Washington',
                            country: 'US',
                            postal_code: 98597,
                        },
                    },
                    // Return URL where the customer should be redirected after the authorization.
                    return_url: `${window.location.origin}${Routes.return}${paymentPopup?.id ? `?orderId=${paymentPopup?.id}` : ''}${
                        showGiftContent?.payment ? `?priceTime=${true}` : ''
                    }`,
                })
                .then((data: any) => {})
                .catch((err: any) => {});
        }
    };
    const stripeRequestAction = (totalAmount: number) => {
        let finalPrice;
        if (typeof totalAmount === 'number') {
            if (Number.isInteger(totalAmount)) {
                finalPrice = totalAmount.toString();
            } else {
                finalPrice = totalAmount.toFixed(2);
            }
        }

        let newfinalPrice: any = 1;
        const changePrice = Number(finalPrice || 1) * 100;

        if (typeof changePrice === 'number') {
            if (Number.isInteger(changePrice)) {
                newfinalPrice = changePrice.toString();
            } else {
                newfinalPrice = changePrice.toFixed(2);
            }
        }

        if (stripe && totalAmount) {
            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'payment',
                    amount: Number(newfinalPrice),
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            // Check the availability of the Payment Request API.
            pr.canMakePayment().then((result: any) => {
                setSocialPaymentBtn(result);
                if (result) {
                    setPaymentRequest(pr);
                }
            });
        }
    };

    const handleCheckoutZip = async (e: any) => {
        if (check) {
            setShow(true);
            form?.validateFields();
            e.preventDefault();
            return;
        }
        const payload = {
            shopper: {
                email,
                phone: '4154154455',
            },
            order: {
                reference: 'ref_12345',
                amount: (amountToShowRef.current || advancedPaymentAmountRef.current) * 100,
                currency: 'USD',
                items: [
                    {
                        name: orderPageDetailStorage?.personTheme?.thmObj,
                    },
                ],
                shipping: {
                    pickup: false,
                },
            },
            config: {
                redirect_uri: window.location.origin,
            },
        };
        dispatch(zipPayAction(payload));
    };

    return (
        <>
            <OrderStepPayment className="checkout-add_carditcard">
                <h4 className="checkout_contactDetails_title">Payment</h4>
                <h4 className="checkout_contactDetails_title_mobile">SELECT PAYMENT METHOD</h4>
                <Row>
                    <Col xs={24} md={12}>
                        {cardListData && cardListData?.length > 0 && !addCardPopup ? (
                            <div className="payment_select-dropdown">
                                <Select onChange={handlePaymentId} defaultValue={cardListData?.[0]?.id}>
                                    {cardListData?.map((list: any, index: number) => (
                                        <Select.Option value={list?.id} key={index} className="payment_select_list_item">
                                            credit card....{list?.card?.last4}
                                        </Select.Option>
                                    ))}
                                </Select>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <FilledButton color="primary" className="checkout_creditcard-btn" onClick={onClickPayment} block>
                                            Pay ${amountToShow || advancedPaymentAmount || giftCardAmount || 0}
                                        </FilledButton>
                                    </Col>
                                    <Col span={12}>
                                        <FilledButton color="primary" className="btn_gray" onClick={() => setAddCardPopup(true)} block>
                                            New Card
                                        </FilledButton>
                                    </Col>
                                </Row>
                            </div>
                        ) : (
                            <Form onFinish={handleSubmit} onValuesChange={onValuesChange} onFinishFailed={onFinishFailed}>
                                <Form.Item name="fullName" rules={[{ required: true, message: '' }]}>
                                    <Input placeholder="Account holder Name" className="ant-input card-input-control" />
                                </Form.Item>
                                <Form.Item name="cardNumber">
                                    <CardNumberElement
                                        className={`ant-input card-input-control ${cardError.cardNumber ? 'error-input-control' : ''}`}
                                    />
                                </Form.Item>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item name="cardExpiry">
                                            <CardExpiryElement
                                                className={`ant-input card-input-control ${cardError.cardExpiry ? 'error-input-control' : ''}`}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="cardCvc">
                                            <CardCvcElement
                                                className={`ant-input card-input-control ${cardError.cardCvc ? 'error-input-control' : ''}`}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    {!saveCardError ? (
                                        <>
                                            <Col span={authUser ? 12 : 24}>
                                                <Form.Item>
                                                    <FilledButton color="primary" className="checkout_creditcard-btn" htmlType="submit">
                                                        Pay ${advancedPaymentAmount || amountToShow || giftCardAmount || 0}
                                                    </FilledButton>
                                                </Form.Item>
                                            </Col>
                                            {authUser && (
                                                <Col span={12}>
                                                    <Form.Item>
                                                        <FilledButton color="primary" className="btn_gray" onClick={() => setAddCardPopup(false)}>
                                                            Saved Card
                                                        </FilledButton>
                                                    </Form.Item>
                                                </Col>
                                            )}
                                        </>
                                    ) : (
                                        <Col span={24}>
                                            <Alert message={saveOrderError?.message || remainingPaymentError?.message} type="error" showIcon />
                                        </Col>
                                    )}
                                </Row>
                            </Form>
                        )}
                        {!paymentPopup?.open && (
                            <div className="d-flex mt-3 note2">
                                <strong>Note:</strong>
                                <div>&nbsp; We will prompt you for shipping address after you approve a mock-up of your painting.</div>
                            </div>
                        )}
                    </Col>
                    <Col xs={24} md={2} className="mt-3 mb-3">
                        <h4 className="d-flex items-center justify-center h-100">Or</h4>
                    </Col>
                    <Col xs={24} md={10}>
                        <Row className="payment_buttons items-center" id="payment-section">
                            {(socialPaymentBtn?.applePay || socialPaymentBtn?.googlePay) && paymentRequest && (
                                <>
                                    <Col xs={24} md={22}>
                                        <div className="mb-3">
                                            <PaymentRequestButtonElement
                                                options={{ paymentRequest, style: { paymentRequestButton: { height: '40px' } } }}
                                                onClick={handleSocialPay}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={24} md={22}>
                                        <h4 className="mb-3 text-center">Other Payment Options</h4>
                                    </Col>
                                </>
                            )}
                            <Col xs={24} md={22}>
                                <PayPalScriptProvider
                                    options={{
                                        clientId: PAYPAL_CLIENT_KEY,
                                    }}
                                >
                                    <PayPalButtons
                                        fundingSource={FUNDING.PAYPAL}
                                        style={{ color: 'black', height: 40 }}
                                        createOrder={createOrder}
                                        className="paypal_button"
                                        onApprove={onApprove}
                                        onClick={onClick}
                                    />
                                </PayPalScriptProvider>
                            </Col>
                            {(amountToShow > 0 || advancedPaymentAmount > 0 || giftCardAmount || 0 > 0) && (
                                <>
                                    <Col span={22}>
                                        <div className="affirm_button_box">
                                            <FilledButton className="affirm_btn" onClick={handleCheckoutAffirm}>
                                                <img src={Images.affirmButton} alt="" />
                                            </FilledButton>
                                        </div>
                                    </Col>
                                    <Col span={2}>
                                        <Popover
                                            trigger={!isMobile ? 'hover' : 'click'}
                                            content="Make 4 interest-free payments every two weeks, or divide your painting's cost into bi-monthly installments, with payment plans available for 3, 6, or 12 months."
                                            arrowPointAtCenter={false}
                                            placement="leftBottom"
                                            overlayClassName="tooltip_buttons popover_affirm"
                                            showArrow={false}
                                        >
                                            <span className="que-icon icon_affirm">
                                                <FontAwesomeIcon icon={faQuestion} />
                                            </span>
                                        </Popover>
                                    </Col>
                                    <Col span={22}>
                                        <div className="zippay_button_box">
                                            <FilledButton className="zippay_btn" onClick={handleCheckoutZip}>
                                                <img src={Images.ZipPayButton} alt="" />
                                            </FilledButton>
                                        </div>
                                    </Col>
                                    <Col span={2}>
                                        <Popover
                                            trigger={!isMobile ? 'hover' : 'click'}
                                            content="Buy the painting today, pay for it in 4 installments. You'll pay the first installment upfront, and the rest over 6 weeks."
                                            arrowPointAtCenter={false}
                                            placement="leftTop"
                                            overlayClassName="tooltip_buttons popover_zippay"
                                            getPopupContainer={() => document.getElementById('payment-section')!}
                                            showArrow={false}
                                        >
                                            <span className="que-icon icon_zippay">
                                                <FontAwesomeIcon icon={faQuestion} />
                                            </span>
                                        </Popover>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>
                </Row>
            </OrderStepPayment>
            {isMobile && show && <Toast show={show} setShow={setShow} message="Please, fill in contact details" type="error" showIcon />}
            {errorPaymentMethodShow && (
                <Toast
                    show={errorPaymentMethodShow}
                    setShow={setErrorPaymentMethodShow}
                    message="Something went wrong, Please try again later"
                    type="error"
                    showIcon
                />
            )}
        </>
    );
};

export default Payment;

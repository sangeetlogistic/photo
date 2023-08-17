/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useRef, useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Alert, Col, Form, Input, Row, Select } from 'antd';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import FilledButton from '../../components/FilledButton';
import { OrderStepPayment } from './OrderPage.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllCardAction, selectedCardListData } from '../Account/Account.slice';
import { PAYPAL_CLIENT_KEY } from '../../constants/predicates';
import { useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { googleApplePayAction, selectSaveOrderError } from './OrderStep.slice';
import { PaymentWays } from './OrderStep.constants';

const Payment = ({
    handleSubmitCheckOut,
    paymentPopup,
    handlePayment,
    advancedPaymentAmount,
    amountToShow,
    form,
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
}) => {
    const stripe: any = useStripe();
    const elements: any = useElements();
    const localStorage = useLocalStorage();
    const dispatch = useAppDispatch();
    const authUser = localStorage.getItem(LocalStorageKeys.authUser);

    const advancedPaymentAmountRef = useRef(advancedPaymentAmount);
    const amountToShowRef = useRef(amountToShow);

    const cardListData = useAppSelector(selectedCardListData);
    const saveOrderError = useAppSelector(selectSaveOrderError);

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

    useEffect(() => {
        if (cardListData && cardListData?.length > 0) {
            setSelectDefaultPaymentId(cardListData[0].id);
        }
    }, [cardListData]);

    useEffect(() => {
        if (saveOrderError) {
            setSaveCardError(true);
        } else {
            setSaveCardError(false);
        }
    }, [saveOrderError]);

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
        (async () => {
            if (doPaypalApiCall.open) {
                if (paymentPopup) {
                    await handlePayment?.(undefined, doPaypalApiCall?.data?.paymentSource);
                } else {
                    await handleSubmitCheckOut?.(
                        undefined,
                        doPaypalApiCall?.data?.paymentSource,
                        doPaypalApiCall?.data?.paymentSource,
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
                if (paymentPopup) {
                    await handlePayment?.(
                        doSocialApiCall?.data?.ev.paymentMethod.id,
                        PaymentWays.googlePay,
                        PaymentWays.googlePay,
                        doSocialApiCall?.data?.paymentIntent?.id,
                    );
                } else {
                    await handleSubmitCheckOut?.(
                        doSocialApiCall?.data?.ev.paymentMethod.id,
                        PaymentWays.googlePay,
                        PaymentWays.googlePay,
                        undefined,
                        doSocialApiCall?.data?.paymentIntent?.id,
                    );
                }
                setDoSocialApiCall({ open: false, data: null });
            }
        })();
    }, [doSocialApiCall]);

    const stripeRequestAction = (totalAmount: number) => {
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

    useEffect(() => {
        const totalAmount = amountToShowRef.current || advancedPaymentAmountRef.current;

        if (totalAmount) {
            stripeRequestAction(Number(totalAmount));
        }
    }, [stripe]);

    useEffect(() => {
        const totalAmount = Number(amountToShowRef.current || advancedPaymentAmountRef.current);

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
                    amount: Number(newfinalPrice),
                },
            });
        }
    }, [paymentRequest, amountToShow, advancedPaymentAmount]);

    const handleGooglePay = async (element: any) => {
        const validation = await form?.validateFields();
        if (paymentRequest) {
            if (!paymentPopup && validation) {
                paymentRequest.on('paymentmethod', async (ev: any) => {
                    const payload = {
                        paymentMethodId: ev.paymentMethod.id,
                        amount: amountToShowRef.current || advancedPaymentAmountRef.current,
                        currency: 'usd',
                    };
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
                                    console.log(error, 'error-confirmCardPayment');

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
            } else {
                paymentRequest.on('paymentmethod', async (ev: any) => {
                    const payload = {
                        paymentMethodId: ev.paymentMethod.id,
                        amount: amountToShowRef.current || advancedPaymentAmountRef.current,
                        currency: 'usd',
                    };
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
                                    console.log(error, 'error-confirmCardPayment');

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
        }
    };

    const onFinishFailed = () => {
        form?.validateFields();
    };

    const handleSubmit = async (values: any) => {
        setCardError({});
        const validation = await form?.validateFields();
        const cardElement = elements.getElement(CardNumberElement);
        const { paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (paymentMethod) {
            if (paymentPopup) {
                handlePayment?.(paymentMethod?.id, PaymentWays.stripe, PaymentWays.creditcard);
            } else if (validation) {
                handleSubmitCheckOut?.(paymentMethod?.id, PaymentWays.stripe, PaymentWays.creditcard, undefined);
            }
        }
    };

    const onClickPayment = () => {
        if (selectDefaultPaymentId) {
            if (paymentPopup) {
                handlePayment?.(selectDefaultPaymentId, PaymentWays.stripe, PaymentWays.creditcard);
            } else {
                handleSubmitCheckOut?.(selectDefaultPaymentId, PaymentWays.stripe, PaymentWays.creditcard, undefined);
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
                cardNumber: values?.cardExpiry?.error?.message,
            }));
        }
        if (values?.cardCvc) {
            await setCardError((prev) => ({
                ...prev,
                cardNumber: values?.cardCvc?.error?.message,
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
                            value: amountToShowRef.current || advancedPaymentAmountRef.current,
                        },
                    },
                ],
            });
        }
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amountToShowRef.current || advancedPaymentAmountRef.current,
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
            .catch((err: any) => {
                console.log(err, 'errerrerrerrerr');
            });

    return (
        <OrderStepPayment className="checkout-add_carditcard">
            <h4 className="checkout_contactDetails_title">Payment</h4>
            <Row align="middle">
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
                                        Pay ${amountToShow || advancedPaymentAmount}
                                    </FilledButton>
                                </Col>
                                <Col span={12}>
                                    <FilledButton color="primary" className="checkout_creditcard-btn" onClick={() => setAddCardPopup(true)} block>
                                        Add Card
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
                                <CardNumberElement className={`ant-input card-input-control ${cardError.cardNumber ? 'error-input-control' : ''}`} />
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
                                                    Pay ${amountToShow || advancedPaymentAmount}
                                                </FilledButton>
                                            </Form.Item>
                                        </Col>
                                        {authUser && (
                                            <Col span={12}>
                                                <Form.Item>
                                                    <FilledButton color="primary" className="btn_gray" onClick={() => setAddCardPopup(false)}>
                                                        Save Card
                                                    </FilledButton>
                                                </Form.Item>
                                            </Col>
                                        )}
                                    </>
                                ) : (
                                    <Col span={24}>
                                        <Alert message={saveOrderError?.message} type="error" showIcon />
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
                <Col xs={24} md={2}>
                    <p className="text-center">Or</p>
                </Col>
                <Col xs={24} md={10}>
                    <PayPalScriptProvider
                        options={{
                            clientId: PAYPAL_CLIENT_KEY,
                        }}
                    >
                        <PayPalButtons fundingSource={FUNDING.PAYPAL} style={{ color: 'black' }} createOrder={createOrder} onApprove={onApprove} />
                    </PayPalScriptProvider>

                    {(socialPaymentBtn?.applePay || socialPaymentBtn?.googlePay) && paymentRequest && (
                        <PaymentRequestButtonElement options={{ paymentRequest }} onClick={handleGooglePay} />
                    )}
                </Col>
            </Row>
        </OrderStepPayment>
    );
};

export default Payment;

import React, { useEffect, useRef, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Col, Form, Input, Radio, Row } from 'antd';
import { Elements } from '@stripe/react-stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { loadStripe } from '@stripe/stripe-js/pure';
import { useRouter } from 'next/router';

import { GiftCardPopUpCmp } from './PricingTiming.component';
import Payment from '../OrderStep/OrderStep.Payment';
import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import FilledButton from '../../components/FilledButton/FilledButton';
import { giftCardPrice } from './PricingTiming.constants';
import { Images } from '../../theme';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectGiftCardDetail, sendGiftCardAction } from './PricingTiming.slice';
import { useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { Routes } from '../../navigation/Routes';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const PricingTimingGiftCardPopup = ({ giftCardPopup, setGiftCardPopup }: any) => {
    const localStorage = useLocalStorage();
    const dispatch = useAppDispatch();
    const route: any = useRouter();
    const giftCardSuccessRef = useRef<any>(null);

    const giftCardDetail = useAppSelector(selectGiftCardDetail);

    const [giftCardAmount, setGiftCardAmount] = useState(giftCardPrice[0]);
    const [showGiftContent, setShowGiftContent] = useState<{
        form: boolean;
        payment: boolean;
        thankYou: boolean;
        payload:
            | {
                  senderName: string;
                  receiverName: string;
                  senderEmail: string;
                  receiverEmail: string;
                  amount: number;
              }
            | undefined;
    }>({
        form: true,
        payment: false,
        thankYou: false,
        payload: undefined,
    });

    useEffect(() => {
        (async () => {
            if (route?.query?.giftPaymentDone && route?.query?.giftPaymentDone === 'true') {
                await setGiftCardPopup(true);
                await setShowGiftContent((prev) => ({ ...prev, form: false, payment: false, thankYou: true }));
                route.push({ pathname: Routes.pricingTiming, query: { giftPaymentDone: false, data: undefined } });
            }
        })();
    }, [route?.query?.giftPaymentDone]);

    useEffect(() => {
        giftCardSuccessRef.current = route?.query?.data ? JSON.parse(route?.query?.data) : '';
    }, [route?.query?.data]);

    const onChange = (e: RadioChangeEvent) => setGiftCardAmount(e.target.value);

    const onFinish = (values: any) => {
        const payload = {
            senderName: values.name,
            receiverName: values.recipientsName,
            senderEmail: values.email,
            receiverEmail: values.recipientsEmail,
            amount: giftCardAmount,
        };
        localStorage?.setItem(LocalStorageKeys.giftCardPayload, JSON.stringify(payload));
        setShowGiftContent((prev) => ({ ...prev, form: false, payment: true, payload }));
    };

    const handleGift = async (
        paymentId: string | undefined,
        paymentMethod?: string | undefined,
        paymentMode?: string | undefined,
        paymentOrderID?: string | undefined,
        paymentIntent?: string | undefined,
    ) => {
        const result = await dispatch(
            sendGiftCardAction({
                ...showGiftContent.payload,
                paymentMethod_id: paymentId,
                payment_method: paymentMethod,
                payment_mode: paymentMode,
                payment_orderId: paymentOrderID,
                paymentIntent_id: paymentIntent,
            }),
        );
        if (result.type === sendGiftCardAction.fulfilled.toString()) {
            setShowGiftContent((prev) => ({ ...prev, form: false, payment: false, thankYou: true }));
        }
    };

    const giftCardPopupContent = (
        <div className="gift_card_section">
            {showGiftContent.form && (
                <div className="gift_card_block1">
                    <div className="gift_box_img">
                        <div>
                            <h4 className="title">E-Gift Card</h4>
                            <p>
                                Both you and your recipient will Receive an email, with the gift card attachment, so that you can always easily find
                                and use it. please Choose gift card Amount bellow, before proceeding.
                            </p>
                        </div>
                    </div>
                    <div className="giftcard_radio_price">
                        <Radio.Group onChange={onChange} value={giftCardAmount}>
                            {giftCardPrice.map((price: number, index: number) => (
                                <Radio value={price} key={index}>
                                    {price} $
                                </Radio>
                            ))}
                        </Radio.Group>
                    </div>
                    <div className="giftcard_form">
                        <Form name="basic" layout="vertical" autoComplete="off" onFinish={onFinish}>
                            <Row align="middle" gutter={{ sm: 16, md: 24 }}>
                                <Col xs={24} md={16}>
                                    <Row gutter={{ sm: 16, md: 24 }}>
                                        <Col xs={24} md={12}>
                                            <Form.Item name="name" rules={[{ required: true, message: 'name is required' }]}>
                                                <Input placeholder="Your Name" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item name="recipientsName" rules={[{ required: true, message: 'recipient’s name is required' }]}>
                                                <Input placeholder="Recipient’s Name" />
                                            </Form.Item>
                                        </Col>

                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    { required: true, message: 'email is required' },
                                                    { type: 'email', message: 'enter the valid email' },
                                                ]}
                                            >
                                                <Input placeholder="Enter your Email" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                name="recipientsEmail"
                                                rules={[
                                                    { required: true, message: 'recipient’s email is required' },
                                                    { type: 'email', message: 'enter the valid recipient’s email' },
                                                ]}
                                            >
                                                <Input placeholder="Recipient’s Email" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={24} md={8}>
                                    <FilledButton color="primary" className="btn-place-order" block htmlType="submit">
                                        Send Gift Card
                                    </FilledButton>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            )}
            {showGiftContent.payment && (
                <div className="gift_card_block2">
                    <div className="gift_card_payment">
                        <img src={Images.GiftBoxImg?.src} alt="gift-box" />
                        <div className="selected_payment">
                            <h6>Card</h6>
                            <Radio value={giftCardAmount} checked>
                                {giftCardAmount} $
                            </Radio>
                        </div>
                    </div>
                    <div className="block_pay">
                        <div className="text-center">
                            <h3>SELECT PAYMENT METHOD</h3>
                        </div>
                        {stripePromise && (
                            <Elements stripe={stripePromise}>
                                <Payment handleGift={handleGift} giftCardAmount={giftCardAmount} showGiftContent={showGiftContent} />
                            </Elements>
                        )}
                    </div>
                </div>
            )}
            {showGiftContent.thankYou && (
                <div className="gift_card_block3">
                    <div className="gift_card_payment">
                        <img src={Images.GiftBoxImg?.src} alt="gift-box" />
                        <div className="selected_payment">
                            <h6>Card</h6>
                            <h5>{giftCardSuccessRef.current?.amount || giftCardDetail?.amount || giftCardAmount} $ </h5>
                        </div>
                        <div className="icon_top">
                            <FontAwesomeIcon icon={faCircleCheck} size="2xl" color="#83CF59" />
                        </div>
                    </div>
                    <div className="thankyou_content text-center">
                        <h3 className="thank">Thank you!</h3>
                        <p className="hedline">
                            Hi {giftCardSuccessRef.current?.senderName || giftCardDetail?.senderName}, your purchase was successful
                        </p>
                        <p className="desc">the gift card has been sent to your recipient</p>
                        <Row justify="center">
                            <Col xs={24} md={8}>
                                <FilledButton color="primary" className="btn-place-order" block>
                                    View My Orders
                                </FilledButton>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </div>
    );
    return (
        <GiftCardPopUpCmp
            onCancel={() => {
                setGiftCardAmount(giftCardPrice[0]);
                setShowGiftContent({ form: true, payment: false, thankYou: false, payload: undefined });
                setGiftCardPopup(false);
            }}
            open={giftCardPopup}
            content={giftCardPopupContent}
            closable={false}
            className=""
        />
    );
};

export default PricingTimingGiftCardPopup;

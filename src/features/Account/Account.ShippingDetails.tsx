import React, { useEffect } from 'react';
import { Button, Col, Popover, Radio, Row, Select, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';
import { ShippingAddressDetail } from './Account.component';
import PaymentMod from '../OrderStep/OrderStep.Payment';
import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import { tipPercentages } from './Account.constants';
import { useDeviceDetect } from '../../hooks';
import FilledButton from '../../components/FilledButton';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const estimateDeliveryContent = (
    <>
        <b>Please note that the date doesn&apos;t take into account</b>
        <br />
        <br />
        <p>
            1.) Modification requests you may submit after viewing the online proof. Each such modification request may delay the turnaround by 2-3
            days.
        </p>
        <br />
        <p>
            2.) The time we wait for you to approve the online proof that we send you or to complete the payment, so please check your emails
            regularly and try to respond as quickly as you can.
        </p>
    </>
);

const ShippingAddress = ({
    setShippingAddressDetail,
    paymentPopup,
    handlePayment,
    isDefaultAddress,
    shippingValue,
    setShippingValue,
    activeButton,
    setActiveButton,
    amountToShow,
    setAmountToShow,
}: any) => {
    const { isMobile } = useDeviceDetect();

    useEffect(() => {
        let amount: any;

        if (paymentPopup.remainingAmount > 0) {
            amount = (Number(paymentPopup?.remainingAmount) + Number(paymentPopup?.remainingAmount) * ((activeButton + shippingValue) / 100)).toFixed(
                2,
            );
        } else if (!activeButton && !shippingValue) {
            amount = (Number(paymentPopup?.totalAmount) + Number(paymentPopup?.totalAmount) * ((activeButton + shippingValue) / 100)).toFixed(2);
        } else {
            amount = (paymentPopup?.totalAmount * ((activeButton + shippingValue) / 100)).toFixed(2);
        }

        setAmountToShow(amount);
    }, [paymentPopup?.remainingAmount, paymentPopup?.totalAmount, activeButton, shippingValue]);

    const onChange = (e: RadioChangeEvent) => {
        setShippingValue(e.target.value);
    };

    const handleButtonClick = (buttonId: number | null) => {
        setActiveButton(buttonId);
    };

    return (
        <ShippingAddressDetail className="popup_padding" id="shipping-address-popup">
            <h4 className="checkoutDetails_title">SHIPPING ADDRESS</h4>
            {!isDefaultAddress ? (
                <FilledButton type="primary" className="checkout-details-button" onClick={() => setShippingAddressDetail(true)}>
                    ADD SHIPPING ADDRESS
                    <FontAwesomeIcon icon={faCirclePlus} size="xl" />
                </FilledButton>
            ) : (
                <div className="shippingAddressDetail_select-dropdown">
                    <Select onClick={() => setShippingAddressDetail(true)} open={false} value={isDefaultAddress}></Select>
                </div>
            )}
            <div className="estimate_detail-content-box">
                <div className="estimate_detail-left">
                    <div className="checkout_estimate_title">
                        <h3>ESTIMATED DELIVERY</h3>
                        <Popover
                            trigger={!isMobile ? 'hover' : 'click'}
                            content={estimateDeliveryContent}
                            arrowPointAtCenter={false}
                            overlayClassName="order-step-tooltip estimate_tooltip"
                            getPopupContainer={() => document.getElementById('shipping-address-popup')!}
                            showArrow={false}
                        >
                            <span className="que-icon">?</span>
                        </Popover>
                    </div>
                    <h4 className="date">{shippingValue === 15 ? '7-10' : '12-14'} Business Days</h4>
                    <p>Depending on the shipping method you will choose after approving the online proofing of your painting.</p>
                </div>
                <div className="shipping_method-right">
                    <div className="checkout_sooner_title">
                        <h3>Shipping Method</h3>
                    </div>
                    <Radio.Group onChange={onChange} value={shippingValue}>
                        <Space direction="vertical">
                            <Radio value={0}>Free Shipping</Radio>
                            <Radio value={15}>Express Shipping (+15%)</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </div>
            <Row gutter={{ xs: 12, sm: 24, xl: 48 }} className="tip-box justify-between">
                <Col xs={{ span: 24, order: 2 }} md={{ span: 10, order: 1 }} xl={10}>
                    <div className="copy-code_box">
                        <p className="mb-0">Remaining Payment: </p>
                        <p className="amount mb-0">${amountToShow || paymentPopup?.totalAmount}</p>
                    </div>
                </Col>
                <Col xs={{ span: 24, order: 1 }} md={{ span: 14, order: 1 }} xl={12}>
                    <div className="right-box_content">
                        <h4 className="tip-box-title">Did you like your painting?</h4>
                        <div>Support your artist with the small tip...</div>
                        <p className="mb-0">Your artist will highly appreciate any type of tip. Thank you in advance!</p>
                        <div className="tip-button_block">
                            {tipPercentages.map(({ id, value }) => (
                                <Button key={id} className={`tipButton ${activeButton === id ? 'active' : ''}`} onClick={() => handleButtonClick(id)}>
                                    {value}
                                </Button>
                            ))}
                            <input type="hidden" className="tipvalue" value="no tip" />
                        </div>
                    </div>
                </Col>
            </Row>
            {stripePromise && (
                <Elements stripe={stripePromise}>
                    <PaymentMod
                        paymentPopup={paymentPopup}
                        handlePayment={handlePayment}
                        amountToShow={amountToShow === (paymentPopup?.totalAmount).toFixed(2) ? paymentPopup?.remainingAmount : amountToShow}
                    />
                </Elements>
            )}
        </ShippingAddressDetail>
    );
};

export default ShippingAddress;

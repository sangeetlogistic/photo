import React, { useEffect } from 'react';
import { Button, Col, Popover, Radio, Row, Select, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';
import { ShippingAddressDetail } from './Account.component';
import PaymentMod from '../OrderStep/OrderStep.Payment';
import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import { tipPercentages } from './Accout.constants';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

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
    useEffect(() => {
        const amount = (
            Number(paymentPopup?.remainingAmount) +
            Number(paymentPopup?.remainingAmount) * ((activeButton + shippingValue) / 100)
        ).toFixed(2);

        setAmountToShow(amount);
    }, [paymentPopup?.remainingAmount, activeButton, shippingValue]);

    const onChange = (e: RadioChangeEvent) => {
        setShippingValue(e.target.value);
    };

    const handleButtonClick = (buttonId: number | null) => {
        setActiveButton(buttonId);
    };

    return (
        <ShippingAddressDetail className="popup_padding">
            <h4 className="checkoutDetails_title">SHIPPING ADDRESS</h4>
            {!isDefaultAddress ? (
                <Button type="primary" className="checkout-details-button" onClick={() => setShippingAddressDetail(true)}>
                    ADD SHIPPING ADDRESS
                    <FontAwesomeIcon icon={faCirclePlus} size="xl" />
                </Button>
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
                            trigger="hover"
                            // content={estimateDeliveryContent}
                            arrowPointAtCenter={false}
                            overlayClassName="order-step-tooltip tooltip-combine-photo"
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
                <Col xs={24} md={12} xl={10}>
                    <div className="copy-code_box">
                        <p className="mb-0">Remaining Payment: </p>
                        <p className="amount mb-0">${amountToShow}</p>
                    </div>
                </Col>
                <Col xs={24} md={12} xl={12}>
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
                    <PaymentMod paymentPopup={paymentPopup} handlePayment={handlePayment} amountToShow={amountToShow} />
                </Elements>
            )}
        </ShippingAddressDetail>
    );
};

export default ShippingAddress;

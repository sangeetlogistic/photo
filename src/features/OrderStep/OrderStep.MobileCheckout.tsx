/* eslint-disable no-nested-ternary */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import React, { useEffect } from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Card, Input } from 'antd';
import { useRouter } from 'next/router';

import { LoadingOutlined, CloseOutlined } from '@ant-design/icons';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Images } from '../../theme';
import { OrderCheckOutCmp, OrderStep3Cmp, OrderSummaryBlockCmp } from './OrderPage.component';
import CheckboxGroup from '../../components/CheckboxGroup';
import PaymentMod from './OrderStep.Payment';
import { multipleCombinePhotosPrice, videoCreatedPrice, SelectThemes, CouponCodeDiscount, depositDue } from './OrderStep.constants';
import ContactDetails from './OrderStep.Checkout.ContactDetails';
import { Routes } from '../../navigation/Routes';
import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import { calculateFun } from '../../utils/func';
import FilledButton from '../../components/FilledButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectStep3Detail, setSelectSize } from './OrderStep.slice';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const Checkout = ({
    themesItems,
    petsCount,
    personsCount,
    mediumItems,
    preview,
    selectPaintingSizeAndPrice,
    selectedFrame,
    handleCombinePhoto,
    combinePhotoPrice,
    handleVideoCreated,
    videoCreated,
    handleArtistSign,
    artistSign,
    expressService,
    successCouponCode,
    successCouponId,
    calculateTotal,
    isValidCoupon,
    setCouponCode,
    handleApplyCouponCode,
    couponCode,
    setSuccessCouponCode,
    setSuccessCouponId,
    couponLoading,
    fillingForm,
    setFillingForm,
    setExpressService,
    formIns,
    Form,
    handleSubmitCheckOut,
    advancedPaymentAmount,
    estimatedDeliveryDays,
    firstName,
    lastName,
    email,
    validPhoneNumber,
    setValidPhoneNumber,
}: any) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const step3Detail = useAppSelector(selectStep3Detail);

    useEffect(
        () => () => {
            dispatch(setSelectSize({ painting: true, frame: false }));
        },
        [],
    );

    return (
        <OrderCheckOutCmp className="order-inner-block mobile-order-inner-block checkout-step">
            <Row gutter={24}>
                <Col span={24}>
                    <h2 className="text-center check-summary-headings">ORDER DETAILS</h2>
                </Col>
                <Col span={24} className="gutter-row">
                    <Row gutter={{ sm: 24, xl: 12 }}>
                        <Col span={24} className="gutter-row">
                            <div className="checkout-setting-left">
                                <div className="checkout-setting-left--item medium-theme">
                                    <div className="title-block">
                                        <h5 className="title">Selected Theme & Medium</h5>
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
                                            {preview.map((img: any, index: number) => (
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
                                    <OrderStep3Cmp className="mobile-order-inner-block step-3 px-0 py-0">
                                        <div className="select-size-frame-card d-flex">
                                            <div className="frame-size-block justify-center">
                                                <label className="select-size-label">
                                                    <input
                                                        type="radio"
                                                        className="select-size-input-radio"
                                                        name="paintingSize"
                                                        defaultChecked={
                                                            step3Detail?.size?.length > 0 &&
                                                            step3Detail?.size?.find((obj: any) => obj?.id === selectPaintingSizeAndPrice?.id)
                                                        }
                                                    />
                                                    <div className="select-size-block-outer">
                                                        <div className="select-size-wrap">
                                                            <div className="d-flex justify-between items-center">
                                                                <span className="painting-size">{`${selectPaintingSizeAndPrice?.title}`}</span>
                                                                <span className="twenty_per_text">{`$${selectPaintingSizeAndPrice?.price}`}</span>
                                                            </div>
                                                            <div className="d-flex justify-between items-center">
                                                                <span className="painting-size">20% Due Now: </span>
                                                                <span className="painting-rate-red text-red">
                                                                    ${Math.round(selectPaintingSizeAndPrice?.price * depositDue)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="select-frame-block justify-center frame-auto">
                                                <label htmlFor="paintingFrame" className="select-frame-label" key={1}>
                                                    <input type="radio" className="select-frame-input-radio" name="paintingFrame" defaultChecked />
                                                    <div className="select-frame-block-outer">
                                                        <div className="select-frame-wrap">
                                                            {' '}
                                                            <figure className="img-block">
                                                                <span className="frame-rate">${selectedFrame?.price}</span>
                                                                <img src={selectedFrame?.image} className="select-frame-img" alt="" />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <span className="frame-name">{selectedFrame?.title}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </OrderStep3Cmp>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} className="d-flex flex-col">
                            <h2 className="text-center check-summary-headings mt-3">FINANCIAL SUMMARY</h2>
                            <div className="title-block mt-3">
                                <h5 className="title">Attributes Selected</h5>
                            </div>
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
                                    <CheckboxGroup className="checkbox_wrapper" onChange={handleArtistSign} checked={artistSign}></CheckboxGroup>
                                    <span className={`checkbox-title ${artistSign ? 'opacity-1' : ''}`}>
                                        {' '}
                                        I would like artist to sign my painting
                                    </span>
                                </div>
                            </Card>
                            <div className="title-block mt-3">
                                <h5 className="title">Financial Summary</h5>
                            </div>
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
                                    <div className="select-offer-pricing mt-3">
                                        <div className="select-offer-pricing--today">
                                            <p className="text-data">20% deposit due today &nbsp;</p>{' '}
                                            {successCouponCode && <p className="discount-price depositdue-number">${calculateTotal(undefined)}</p>}
                                            <p className="text-number depositdue-number">${calculateTotal(successCouponId)}</p>
                                        </div>
                                        <p className="note">✹ Remaining balance to be paid after painting approval</p>
                                    </div>
                                    <div className={`checkout_input mt-3 ${successCouponCode && !isValidCoupon ? 'success' : ''}`}>
                                        <Input
                                            placeholder={isValidCoupon || 'Enter Discount Code'}
                                            className="checkoutCoupon_input"
                                            onChange={(e: any) => setCouponCode?.(e.target.value)}
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
                </Col>
                <Col span={24} className="gutter-row">
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
                                    firstName={firstName}
                                    lastName={lastName}
                                    email={email}
                                    validPhoneNumber={validPhoneNumber}
                                />
                            </Elements>
                        )}
                    </Card>
                </Col>
            </Row>
        </OrderCheckOutCmp>
    );
};

export default Checkout;

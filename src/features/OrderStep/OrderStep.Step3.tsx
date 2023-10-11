/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IconFrameLock, IconSelectFrameSize, PopularStar } from '../../assets/customSVG';
import { Images } from '../../theme';
import { OrderStep3Cmp } from './OrderPage.component';
import { OrderSteps } from './OrderStep.constants';
import { clearError, OrderStep, selectedSize, selectStep3Detail, setSelectSize } from './OrderStep.slice';
import OrderSummary from './OrderStep.Step3.OrderSummary';
import { IStep3 } from './OrderStep.types';
import { calculateFun } from '../../utils/func';
import { useDeviceDetect } from '../../hooks';
import MobileFooter from './OrderStep.MobileFooter';
import { MobileOrderPageMainCmp } from './OrderPage.MobileComponent';
import MobileHeader from './OrderStep.MobileHeader';
import MobileStep3 from './OrderStep.MobileStep3';

const classWithPaintingSize: { [x: string]: string } = {
    '8x10': '_8X10',
    '11x14': '_11X14',
    '12x16': '_12X16',
    '16x20': '_16X20',
    '20x24': '_20X24',
    '24x30': '_24X30',
    '24x36': '_24X36',
    '30x40': '_30X40',
    '36x48': '_36X48',
    '48x72': '_48X72',
};

const Step3 = ({
    setComplateStep2,
    selectPaintingSizeAndPrice,
    setSelectPaintingSizeAndPrice,
    selectedFrame,
    setSelectedFrame,
    setRepeatStep3,
    combinePhotoPrice,
    videoCreated,
    complateStep3,
    expressService,
    successCouponCode,
    successCouponId,
    complateStep2,
    complateStep4,
    repeatStep2,
    repeatStep3,
    repeatStep4,
    savedCardProccessComplete,
    setSavedCardPopup,
    showProgressBar,
    selectPaintingSize,
    setSelectPaintingSize,
    selectedPaintingFraming,
    setSelectedPaintingFraming,
    isNoteFadeList,
    setIsNoteFadeList,
    currentSlideMobile,
    setCurrentSlideMobile,
    viewOrderSummary,
    setViewOrderSummary,
    personsCount,
    petsCount,
}: IStep3) => {
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();

    const selectSize = useAppSelector(selectedSize);

    const step3Detail = useAppSelector(selectStep3Detail);

    const [selectSizeSlider, setSelectSizeSlider] = useState(null);

    useEffect(() => {
        dispatch(OrderStep(OrderSteps.step3));
        setComplateStep2(true);
        setRepeatStep3(false);

        return () => {
            setRepeatStep3(true);
            dispatch(clearError());
            if (!isMobile) dispatch(setSelectSize({ painting: true, frame: false }));
            setSelectSizeSlider?.(null);
            setSelectPaintingSize?.(false);
        };
    }, []);

    const handleInputSelection = (list: any) => (event: any) => {
        setSelectPaintingSizeAndPrice({
            id: event ? Number(event?.target?.id) : list?.id,
            price: list?.newprice || list.price,
            framingServiceAvailable: list.isFrame,
            title: `${list?.size_id?.height}” x ${list?.size_id?.width}”`,
            sizeInText: `${list?.size_id?.height}x${list?.size_id?.width}`,
            sizeid: list?.size_id?.id,
        });
    };

    const handleFrameChange = (list: any) => (event: any) => {
        setSelectedFrame({
            id: event ? Number(event?.target?.id) : list?.id,
            title: list.name,
            price: list.price,
            image: list.frameImageUrl,
        });
    };

    return (
        <>
            {!isMobile ? (
                <OrderStep3Cmp className="order-inner-block step-3">
                    <Row gutter={{ md: 24, lg: 32, xl: 48 }}>
                        <Col md={16} xl={14}>
                            <div className="select-size-frame-card">
                                <div className="order-frame-nav-tab">
                                    <div
                                        className={`order-frame-nav-item ${selectSize.painting ? 'active' : 'selected'}`}
                                        onClick={() =>
                                            dispatch(
                                                setSelectSize({
                                                    painting: true,
                                                    frame: false,
                                                }),
                                            )
                                        }
                                        tabIndex={0}
                                        role="button"
                                    >
                                        <span className="">{selectSize.painting ? 'Select Painting Size' : 'Size Selected'}</span>
                                        <i className="icon">
                                            <IconSelectFrameSize />
                                            <img src={Images.OrderIconstepEdit} alt="" height="25" width="25" className="icon-edit" />
                                        </i>
                                    </div>
                                    <div
                                        className={`order-frame-nav-item ${selectSize.frame ? 'active' : ''} ${
                                            complateStep3 ? 'selected pe-none' : ''
                                        }`}
                                    >
                                        <span className="">{!complateStep3 ? 'Framing' : 'Frame Selected'}</span>
                                        <i className="icon">
                                            {!complateStep3 ? (
                                                <IconFrameLock />
                                            ) : (
                                                <img src={Images.OrderIconstepSelected} alt="" height="25" width="25" className="icon-selected" />
                                            )}
                                        </i>
                                    </div>
                                </div>
                                {selectSize.painting && (
                                    <>
                                        <div className="frame-size-block">
                                            {step3Detail?.size?.map((list: any, index: number) => (
                                                <label htmlFor={list.id} className="select-size-label" key={index}>
                                                    <input
                                                        type="radio"
                                                        className="select-size-input-radio"
                                                        name="paintingSize"
                                                        id={list.id}
                                                        onChange={handleInputSelection(list)}
                                                        checked={selectPaintingSizeAndPrice?.id === list.id}
                                                        disabled={list.isFade}
                                                    />
                                                    <div className={`select-size-block-outer ${list.isFade ? 'opacity05' : ''} `}>
                                                        {(index === 3 || index === 4) && (
                                                            <div className="selection-popular">
                                                                <PopularStar />
                                                                <span className="">Popular</span>
                                                            </div>
                                                        )}
                                                        <div className="select-size-wrap">
                                                            <span className="painting-size">
                                                                {`${list?.size_id?.height}” x ${list?.size_id?.width}”`}
                                                            </span>
                                                            <span className="painting-rate">{`$${list?.newprice || list?.price}`}</span>
                                                        </div>
                                                        <i className="icon">
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </i>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {selectSize.frame && (
                                    <div className="select-frame-block">
                                        {step3Detail?.frame
                                            ?.filter((obj: any) => obj?.sizeid?.id === selectPaintingSizeAndPrice?.sizeid)
                                            ?.map((list: any, index: number) => (
                                                <label htmlFor={list.id} className="select-frame-label" key={index}>
                                                    <>
                                                        <input
                                                            type="radio"
                                                            className="select-frame-input-radio"
                                                            name="paintingFrame"
                                                            id={list.id}
                                                            onChange={handleFrameChange(list)}
                                                            checked={list.id === selectedFrame?.id}
                                                        />
                                                        <div className="select-frame-block-outer">
                                                            <div className="select-frame-wrap">
                                                                <figure className="img-block">
                                                                    <span className="frame-rate">${list.price}</span>
                                                                    <img src={list.frameImageUrl} className="select-frame-img" alt="" />
                                                                </figure>
                                                                <span className="frame-name">{list.name}</span>
                                                            </div>
                                                        </div>
                                                    </>
                                                </label>
                                            ))}
                                    </div>
                                )}
                                <div className={`size-info-outer ${selectSize.painting ? '' : 'invisible'}`}>
                                    <div className="size-info-left">
                                        <div className="sub-total-price-block ">
                                            <div className="sub-total-label">SUB TOTAL PRICE:</div>
                                            <span className="sub-total-price">{`$${calculateFun(
                                                selectPaintingSizeAndPrice?.price,
                                                selectedFrame?.price,
                                                combinePhotoPrice,
                                                videoCreated,
                                                expressService,
                                                false,
                                                successCouponId,
                                            )}`}</span>
                                        </div>
                                        <div className="sub-info-block-inner">
                                            <h4 className="title">
                                                <span className="">20% DEPOSIT DUE TODAY &nbsp;</span>
                                                <span className="text-primary">
                                                    {`$${calculateFun(
                                                        selectPaintingSizeAndPrice?.price,
                                                        selectedFrame?.price,
                                                        combinePhotoPrice,
                                                        videoCreated,
                                                        expressService,
                                                        true,
                                                        successCouponId,
                                                    )}`}
                                                </span>
                                            </h4>
                                            <p className="note">✹ Remaining balance to be paid after painting approval</p>
                                        </div>
                                    </div>
                                    {!selectPaintingSizeAndPrice?.framingServiceAvailable && (
                                        <div className="size-info-right">
                                            <p className="select-size-message">! FOR SELECTED SIZE, WE CAN NOT PROVIDE FRAMING SERVICE</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col md={8} xl={6}>
                            {selectSize.painting && (
                                <div className="frame-select-preview">
                                    <img src={Images.OrderPaintingImgBg} alt="" className="f-s-bg" />

                                    <img src={Images.OrderPaintingImgLight} alt="" className="f-s-light" />
                                    {step3Detail?.size?.map((preview: any, index: number) => (
                                        <img
                                            key={index}
                                            src={preview?.size_id?.sizeImageUrl}
                                            alt=""
                                            className={`f-painting ${classWithPaintingSize[`${preview.size_id.height}x${preview.size_id.width}`]} ${
                                                preview?.id === selectPaintingSizeAndPrice?.id ? 'active' : ''
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                            {selectSize.frame && (
                                <OrderSummary
                                    selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                                    selectedFrame={selectedFrame}
                                    combinePhotoPrice={combinePhotoPrice}
                                    videoCreated={videoCreated}
                                    expressService={expressService}
                                    successCouponCode={successCouponCode}
                                    successCouponId={successCouponId}
                                    personsCount={personsCount}
                                    petsCount={petsCount}
                                />
                            )}
                        </Col>
                    </Row>
                </OrderStep3Cmp>
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
                    <MobileStep3
                        selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                        selectedFrame={selectedFrame}
                        combinePhotoPrice={combinePhotoPrice}
                        videoCreated={videoCreated}
                        selectSize={selectSize}
                        step3Detail={step3Detail}
                        handleInputSelection={handleInputSelection}
                        handleFrameChange={handleFrameChange}
                        classWithPaintingSize={classWithPaintingSize}
                        selectPaintingSize={selectPaintingSize}
                        setSelectPaintingSize={setSelectPaintingSize}
                        selectedPaintingFraming={selectedPaintingFraming}
                        setSelectedPaintingFraming={setSelectedPaintingFraming}
                        isNoteFadeList={isNoteFadeList}
                        setIsNoteFadeList={setIsNoteFadeList}
                        currentSlide={currentSlideMobile}
                        setCurrentSlide={setCurrentSlideMobile}
                        viewOrderSummary={viewOrderSummary}
                        setViewOrderSummary={setViewOrderSummary}
                        selectSizeSlider={selectSizeSlider}
                        setSelectSizeSlider={setSelectSizeSlider}
                        personsCount={personsCount}
                        petsCount={petsCount}
                    />
                    <MobileFooter
                        showProgressBar={showProgressBar}
                        savedCardProccessComplete={savedCardProccessComplete}
                        setSavedCardPopup={setSavedCardPopup}
                        selectPaintingSize={selectPaintingSize}
                        setSelectPaintingSize={setSelectPaintingSize}
                        setSelectSizeSlider={setSelectSizeSlider}
                        selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                        viewOrderSummary={viewOrderSummary}
                        setViewOrderSummary={setViewOrderSummary}
                    />
                </MobileOrderPageMainCmp>
            )}
        </>
    );
};

export default Step3;

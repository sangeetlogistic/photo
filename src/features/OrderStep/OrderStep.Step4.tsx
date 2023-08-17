import { Checkbox, Col, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import BannerVideo from '../../components/BannerVideo';
import { paintingProcess } from '../../constants/general';
import { Images } from '../../theme';
import { OrderStep4Cmp } from './OrderPage.component';
import { OrderSteps, videoCreatedPrice } from './OrderStep.constants';
import { clearError, OrderStep } from './OrderStep.slice';
import OrderSummary from './OrderStep.Step3.OrderSummary';
import { IStep4 } from './OrderStep.types';
import { useDeviceDetect } from '../../hooks';
import { MobileOrderPageMainCmp } from './OrderPage.MobileComponent';
import MobileHeader from './OrderStep.MobileHeader';
import MobileStep4 from './OrderStep.MobileStep4';
import MobileFooter from './OrderStep.MobileFooter';

const Step4 = ({
    setComplateStep3,
    selectPaintingSizeAndPrice,
    selectedFrame,
    setRepeatStep4,
    setVideoCreated,
    videoCreated,
    combinePhotoPrice,
    setArtistSign,
    artistSign,
    expressService,
    successCouponCode,
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
    viewOrderSummary,
    setViewOrderSummary,
    personsCount,
    petsCount,
}: IStep4) => {
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();

    const handleVideoCreated = (e: CheckboxChangeEvent) => {
        setVideoCreated(e.target.checked ? e.target.value : undefined);
    };

    const handleArtistSign = (e: CheckboxChangeEvent) => {
        setArtistSign(e.target.checked);
    };

    useEffect(() => {
        dispatch(OrderStep(OrderSteps.step4));
        setComplateStep3(true);
        setRepeatStep4(false);
        return () => {
            setRepeatStep4(true);
            dispatch(clearError());
        };
    }, []);

    return (
        <>
            {!isMobile ? (
                <OrderStep4Cmp className="order-inner-block step-4">
                    <Row gutter={{ md: 24, lg: 32, xl: 48 }}>
                        <Col className="gutter-row" md={16} lg={14}>
                            <div className="select-attrs">
                                <Row gutter={{ md: 24 }}>
                                    <Col className="gutter-row" md={10} xxl={12}>
                                        {paintingProcess && <BannerVideo bannerVideo={paintingProcess} poster={Images.TourPaintingVideoThumb} />}
                                    </Col>
                                    <Col className="gutter-row" md={14} xxl={12}>
                                        <div className="select-attrs--info">
                                            <div className="d-flex">
                                                <Checkbox
                                                    onChange={handleVideoCreated}
                                                    checked={videoCreated === videoCreatedPrice}
                                                    value={videoCreatedPrice}
                                                ></Checkbox>
                                                <div className="content">
                                                    <span className="check-box-lable-text">I would like a video of how painting was created.</span>{' '}
                                                    <span className="text-primary fw-bold">+ ${videoCreatedPrice}</span>
                                                </div>
                                            </div>
                                            <p className="select-attrs--info--desc">
                                                We will shoot a video of the artist painting your portrait from beginning to end and then we’ll edit
                                                it into a 2-minute time-lapse video which will be sent to you via email post video on social media,
                                                tag us and get $150 store credits!
                                            </p>
                                            <div className="select-attrs--info--post">
                                                <span className="text">post video on social media, tag us and get $150 store credits!</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={{ md: 24 }}>
                                    <Col className="gutter-row" md={10} xxl={12}>
                                        <img src={Images.SelectAttributesImg} alt="" width="444" height="182" className="attr-img" />
                                    </Col>
                                    <Col className="gutter-row" md={14} xxl={12}>
                                        <div className="select-attrs--info">
                                            <div className="d-flex">
                                                <Checkbox onChange={handleArtistSign} checked={!!artistSign}></Checkbox>
                                                <span className="check-box-lable-text">I would like Artist to Sign my painting</span>
                                            </div>
                                            <p className="select-attrs--info--desc">Our artist will sign your painting after it is finished</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="gutter-row" md={8} xl={6}>
                            <OrderSummary
                                selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                                selectedFrame={selectedFrame}
                                videoCreated={videoCreated}
                                combinePhotoPrice={combinePhotoPrice}
                                expressService={expressService}
                                successCouponCode={successCouponCode}
                                depositSection
                                successCouponId={successCouponId}
                                personsCount={personsCount}
                                petsCount={petsCount}
                            />
                        </Col>
                    </Row>
                </OrderStep4Cmp>
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
                    <MobileStep4
                        handleVideoCreated={handleVideoCreated}
                        handleArtistSign={handleArtistSign}
                        artistSign={artistSign}
                        expressService={expressService}
                        successCouponCode={successCouponCode}
                        successCouponId={successCouponId}
                        selectedFrame={selectedFrame}
                        selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                        videoCreated={videoCreated}
                        viewOrderSummary={viewOrderSummary}
                        setViewOrderSummary={setViewOrderSummary}
                    />
                    <MobileFooter
                        showProgressBar={showProgressBar}
                        savedCardProccessComplete={savedCardProccessComplete}
                        setSavedCardPopup={setSavedCardPopup}
                        viewOrderSummary={viewOrderSummary}
                        setViewOrderSummary={setViewOrderSummary}
                    />
                </MobileOrderPageMainCmp>
            )}
        </>
    );
};

export default Step4;

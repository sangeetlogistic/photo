/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Button, Checkbox, Col, Row } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import BannerVideo from '../../components/BannerVideo';
import { paintingProcess } from '../../constants/general';
import { Images } from '../../theme';
import { OrderStep4Cmp } from './OrderPage.component';
import { videoCreatedPrice } from './OrderStep.constants';
import OrderSummary from './OrderStep.Step3.OrderSummary';
import { OrderSummaryThemeModal } from './OrderPage.MobileComponent';

const MobileStep4 = ({
    selectPaintingSizeAndPrice,
    selectedFrame,
    videoCreated,
    combinePhotoPrice,
    handleVideoCreated,
    handleArtistSign,
    artistSign,
    expressService,
    successCouponCode,
    successCouponId,
    viewOrderSummary,
    setViewOrderSummary,
    personsCount,
    petsCount,
}: any) => (
    <OrderStep4Cmp className="mobile-order-inner-block step-4">
        <Row gutter={24}>
            <Col className="gutter-row" span={24}>
                <div className="select-attrs">
                    <Row gutter={{ md: 24 }}>
                        <Col className="gutter-row" span={24}>
                            {paintingProcess && <BannerVideo bannerVideo={paintingProcess} poster={Images.TourPaintingVideoThumb?.src} />}
                        </Col>
                        <Col className="gutter-row" span={24}>
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

                                <div className="select-attrs--info--post">
                                    <span className="text">post video on social media, tag us and get $150 store credits!</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={{ md: 24 }}>
                        <Col className="gutter-row" span={24}>
                            <img src={Images.SelectAttributesImg} alt="" width="444" height="182" className="attr-img" />
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div className="select-attrs--info">
                                <div className="d-flex items-center">
                                    <Checkbox onChange={handleArtistSign} checked={!!artistSign}></Checkbox>
                                    <span className="check-box-lable-text">I would like Artist to Sign my painting</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div onClick={() => setViewOrderSummary(true)} tabIndex={0} role="button" className="orderSummary_button">
                    <button type="button" className="summary_button">
                        VIEW ORDER SUMMARY
                        <img src={Images.BoxIcon} alt="boxicon" className="mx-3" />
                    </button>
                </div>
            </Col>

            <OrderSummaryThemeModal>
                <div className={`bottom_drawer ${viewOrderSummary ? 'modal_show' : ''}`}>
                    <div className="custom-back" tabIndex={0} role="button">
                        <div className="relative">
                            <Button type="link" className="icon-close" icon={<CloseOutlined />} onClick={() => setViewOrderSummary(false)} />
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
                        </div>
                    </div>
                </div>
            </OrderSummaryThemeModal>
        </Row>
    </OrderStep4Cmp>
);
export default MobileStep4;

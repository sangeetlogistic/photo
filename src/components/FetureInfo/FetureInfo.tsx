import { Col, Row } from 'antd';
import React from 'react';

import { Images } from '../../theme';
import FilledButton from '../FilledButton';
import { FeatureInfoBlockCmp } from './FetureInfo.component';

const FetureInfo = () => (
    <FeatureInfoBlockCmp>
        <Row
            gutter={[
                { xs: 8, sm: 8, lg: 0 },
                { xs: 8, sm: 8, lg: 0 },
            ]}
        >
            <Col className="gutter-row" xs={12} md={4}>
                <div className="feature-inner-block">
                    <figure className="">
                        <img src={Images.HandPainted?.src} alt="hand-painted" />
                    </figure>
                    <span>100% Hand-Painted by Experienced Artists</span>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} md={4}>
                <div className="feature-inner-block">
                    <figure className="">
                        <img src={Images.OnlineProofing?.src} alt="online-proofing" />
                    </figure>
                    <span>FREE Online Proofing</span>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} md={4}>
                <div className="feature-inner-block">
                    <figure className="">
                        <img src={Images.RatedIcon?.src} alt="rated-icon" />
                    </figure>
                    <span>Rated 5/5 on TrustPilot.com</span>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} md={4}>
                <div className="feature-inner-block">
                    <figure className="">
                        <img src={Images.Time?.src} alt="time-icon" />
                    </figure>
                    <span>Satisfaction Guaranteed or Your Money Back</span>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} md={4}>
                <div className="feature-inner-block">
                    <figure className="">
                        <img src={Images.Shipping?.src} alt="shipping-icon" />
                    </figure>
                    <span>FREE Shipping</span>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} md={4}>
                <div className="feature-inner-block">
                    <figure className="">
                        <img src={Images.HappyFace?.src} alt="happy-face" />
                    </figure>
                    <span>Excellent Customer Service Experience</span>
                </div>
            </Col>
        </Row>
        <div className="mobile-btn-row">
            <FilledButton size="large" className="text-uppercase" color="secondaryGRD">
                get started now
            </FilledButton>
        </div>
    </FeatureInfoBlockCmp>
);

export default FetureInfo;

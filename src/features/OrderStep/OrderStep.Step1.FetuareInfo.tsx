import React from 'react';
import { Col, Row } from 'antd';

import LazyImage from '../../components/LazyImage';
import { Images } from '../../theme';

const feture = [
    {
        image: Images.HandPainted,
        info: '100% Hand-Painted by Experienced Artists',
    },
    {
        image: Images.OnlineProofing,
        info: 'FREE Online Proofing',
    },
    {
        image: Images.Time,
        info: 'Satisfaction Guaranteed or Your Money Back',
    },
    {
        image: Images.Shipping,
        info: 'FREE Shipping',
    },
];

const FetuareInfo = () => (
    <Row>
        {feture.map((obj, index) => (
            <Col span={4} key={index}>
                <div className="feature-inner-block">
                    <figure className="">
                        <LazyImage effect="opacity" src={obj.image} alt="" />
                    </figure>
                    <span>{obj.info}</span>
                </div>
            </Col>
        ))}
    </Row>
);

export default FetuareInfo;

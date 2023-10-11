import React from 'react';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';

import CustomerReview from '../CustomerReview';
import FilledButton from '../FilledButton';
import { TourPaintingsBlock } from './TourPaintings.component';
import { ITourPaintings } from './TourPaintings.types';
import BannerVideo from '../BannerVideo';

const TourPaintings = (props: ITourPaintings) => {
    const { title, content, btnTitle, reviewTitle, rate, bannerVideo, poster, onClick } = props;

    return (
        <TourPaintingsBlock>
            <h3 className="title">{title}</h3>
            <Row gutter={{ xs: 30, lg: 32, xl: 50, xxl: 80 }}>
                <Col className="gutter-row" xs={24} md={16}>
                    {bannerVideo && <BannerVideo className="responsive-video" bannerVideo={bannerVideo} poster={poster} />}
                </Col>
                <Col className="gutter-row" xs={24} md={8}>
                    <div className="tour-photo-data-wrap">
                        <div className="tour-photo-top">
                            <div className="tour-text">{parse(`${content}`)}</div>
                            <FilledButton className="text-uppercase btn-tour" color="primaryGRD" onClick={onClick} size="large">
                                {btnTitle}
                            </FilledButton>
                        </div>
                        <CustomerReview title={reviewTitle} rate={rate} className="tour-class-review" />
                    </div>
                </Col>
            </Row>
        </TourPaintingsBlock>
    );
};
export default TourPaintings;

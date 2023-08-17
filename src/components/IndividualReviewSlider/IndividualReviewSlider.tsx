import React, { useRef } from 'react';
import { Card, Col } from 'antd';

import { data } from './IndividualReviewSlider.data';
import { IIndividualReviewCard, IIndividualReviewSlider } from './IndividualReviewSlider.types';
import CustomerReview from '../CustomerReview';
import { CustomerReviewBlock, IndivdualSliderRowCmp } from './IndividualReviewSlider.component';
import { Images } from '../../theme/index';
import Rating from '../Rating';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import SliderCarousel from '../SliderCarousel';
import LazyImage from '../LazyImage';

const ReviewCard = (props: { obj: IIndividualReviewCard }) => {
    const { obj } = props;

    return (
        <Card className="review-slide-card">
            <div className="reviw-top-sec">
                <p className="reviewer-name">{obj.name}</p>
                <p className="reviewer-title">{obj.title}</p>
                <Rating disabled defaultValue={obj.rate} allowHalf />
                <p className="reviewer-text">{obj.content}</p>
            </div>
            <div className="review-footer">
                <LazyImage className="s-trust-logo" src={Images.TrustpilotLogo} alt="" effect="opacity" width="75" height="20" />
                <span className="r-date">{obj.date}</span>
            </div>
        </Card>
    );
};

const IndividualReviewSlider = ({ title, subTitle }: IIndividualReviewSlider) => {
    const sliderRef = useRef<any>(null);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                },
            },
        ],
    };

    const handlePrevious = () => sliderRef?.current?.slickPrev();
    const handleNext = () => sliderRef?.current?.slickNext();

    return (
        <CustomerReviewBlock className="customer-review-block">
            <h2 className="sec-sub-title">{title}</h2>
            <p className="sub-title-text">{subTitle}</p>
            <IndivdualSliderRowCmp gutter={{ lg: 40 }} className="customer_review-row">
                <Col md={7} className="customer-single-review-col gutter-row">
                    <CustomerReview
                        className="customer-single-review-block"
                        title={
                            <div>
                                Customer review - <span className="text-success">Excellent</span>
                            </div>
                        }
                        rate={4.9}
                        totalReviews={1356}
                    />
                </Col>
                <Col md={17} className="cusotmer-review-slider-col gutter-row">
                    <div className="individual-review-slider-block">
                        <PrevBtn handlePrevious={handlePrevious} />
                        <div className="individual-review-slider-block-wrapp">
                            {data.length > 0 && (
                                <SliderCarousel settings={settings} ref={sliderRef}>
                                    {data.map((obj: IIndividualReviewCard, index) => (
                                        <ReviewCard key={index} obj={obj} />
                                    ))}
                                </SliderCarousel>
                            )}
                        </div>
                        <NextBtn handleNext={handleNext} />
                    </div>
                </Col>
            </IndivdualSliderRowCmp>
        </CustomerReviewBlock>
    );
};

export default IndividualReviewSlider;

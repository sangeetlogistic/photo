import React, { useRef } from 'react';
import { Card, Col } from 'antd';

import { IIndividualReviewSlider } from './IndividualReviewSlider.types';
import CustomerReview from '../CustomerReview';
import { CustomerReviewBlock, IndivdualSliderRowCmp } from './IndividualReviewSlider.component';
import { Images } from '../../theme/index';
import Rating from '../Rating';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import SliderCarousel from '../SliderCarousel';
import FilledButton from '../FilledButton';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';
import { TRUSTPILOT_REVIEW } from '../../constants/predicates';
import Image from 'next/image';

const ReviewCard = (props: { obj: any; onClick: any }) => {
    const { obj, onClick } = props;
    const { isMobile } = useDeviceDetect();
    return (
        <Card className="review-slide-card" onClick={onClick}>
            <div className="reviw-top-sec">
                <Rating disabled value={Number(obj?.ratings || 0)} allowHalf />
                <p className="reviewer-title">{obj?.title}</p>
                <p className="reviewer-text">{obj?.description}</p>
            </div>
            <div className="review-footer">
                <div className="left_profile">
                    <p className="reviewer-name">
                        {obj?.firstName} {obj?.lastName}
                    </p>
                    <div className="country ">
                        <Image className="country-icon" src={obj?.country?.countryFlagImageUrl} alt="" width="75" height="20" />
                        {obj?.country?.country_name}
                    </div>
                </div>
                <FilledButton className="verified_button">
                    Verified <img src={!isMobile ? Images.shieldIcon?.src : Images.shieldIconMobile?.src} alt="" />
                </FilledButton>
            </div>
        </Card>
    );
};

const IndividualReviewSlider = ({ title, subTitle, trustPilots, totalRating }: IIndividualReviewSlider) => {
    const sliderRef = useRef<any>(null);

    const settings = {
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        arrows: false,
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
    const onClick = () => window.open(TRUSTPILOT_REVIEW, '_blank');

    return (
        <CustomerReviewBlock className="customer-review-block">
            {trustPilots?.length > 0 ? (
                <>
                    <h2 className="sec-sub-title">{title}</h2>
                    <p className="sub-title-text">{subTitle}</p>
                    <IndivdualSliderRowCmp gutter={{ lg: 40 }} className="customer_review-row">
                        <Col sm={18} md={7} className="customer-single-review-col">
                            <CustomerReview
                                className="customer-single-review-block"
                                title="Excellent Customer Reviews"
                                rate={totalRating || trustPilots?.TotalRating}
                            />
                        </Col>
                        <Col sm={24} md={17} className="cusotmer-review-slider-col gutter-row">
                            <div className="individual-review-slider-block">
                                <PrevBtn handlePrevious={handlePrevious} />
                                <div className="individual-review-slider-block-wrapp">
                                    <SliderCarousel settings={settings} ref={sliderRef}>
                                        {trustPilots?.map((obj: any, index: number) => (
                                            <ReviewCard key={index} obj={obj} onClick={onClick} />
                                        ))}
                                    </SliderCarousel>
                                </div>
                                <NextBtn handleNext={handleNext} />
                            </div>
                        </Col>
                    </IndivdualSliderRowCmp>
                </>
            ) : null}
        </CustomerReviewBlock>
    );
};

export default IndividualReviewSlider;

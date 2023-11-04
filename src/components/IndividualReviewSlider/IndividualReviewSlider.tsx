import React, { useRef } from 'react';
import { Card } from 'antd';

import { IIndividualReviewSlider } from './IndividualReviewSlider.types';
import CustomerReview from '../CustomerReview';
import { CustomerReviewBlock, IndivdualSliderRowCmp } from './IndividualReviewSlider.component';
import { Images } from '../../theme/index';
import Rating from '../Rating';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import SliderCarousel from '../SliderCarousel';
import FilledButton from '../FilledButton';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';

const ReviewCard = (props: { obj: any }) => {
    const { obj } = props;
    const { isMobile } = useDeviceDetect();
    return (
        <Card className="review-slide-card">
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
                        <img className="country-icon" src={obj?.country?.countryFlagImageUrl} alt="" width="75" height="20" />
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

    return (
        <CustomerReviewBlock className="customer-review-block">
            <>
                <h2 className="sec-sub-title">{title}</h2>
                <p className="sub-title-text">{subTitle}</p>
                <IndivdualSliderRowCmp className="customer_review-row">
                    <div className="customer-single-review-col">
                        <CustomerReview
                            className="customer-single-review-block"
                            title="Excellent Customer Reviews"
                            rate={totalRating || trustPilots?.TotalRating}
                        />
                    </div>
                    <div className="individual-review-slider-block-wrapp">
                        <PrevBtn handlePrevious={handlePrevious} darkArrow />
                        <SliderCarousel settings={settings} ref={sliderRef}>
                            {trustPilots?.map((obj: any, index: number) => (
                                <ReviewCard key={index} obj={obj} />
                            ))}
                        </SliderCarousel>
                        <NextBtn handleNext={handleNext} darkArrow />
                    </div>
                </IndivdualSliderRowCmp>
            </>
        </CustomerReviewBlock>
    );
};

export default IndividualReviewSlider;

import React, { useRef } from 'react';
import moment from 'moment';

import { Images } from '../../theme';
import BannerVideo from '../BannerVideo';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import Rating from '../Rating';
import SliderCarousel from '../SliderCarousel';
import { PaintingRevealProcessBlockCmp } from './PaintingRevealProcess.component';

const PaintingRevealProcess = ({ detail }: any) => {
    const sliderRef = useRef<any>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    centerMode: false,
                    variableWidth: true,
                    centerPadding: '0',
                },
            },
        ],
    };
    const handlePrevious = () => sliderRef?.current?.slickPrev();
    const handleNext = () => sliderRef?.current?.slickNext();

    return (
        <PaintingRevealProcessBlockCmp className="painting-reveal-process-section">
            <h2 className="sec-sub-title">
                <i className="icon">
                    <img src={Images.IconHeart} alt="" className="" />
                </i>
                Enjoy the painting reveal process..
            </h2>
            <div className="painting-reveal-process-slider-wrap">
                <PrevBtn handlePrevious={handlePrevious} />
                <div className="painting-reveal-process-slider-block">
                    {detail?.length > 0 && (
                        <SliderCarousel settings={settings} ref={sliderRef}>
                            {detail.map((obj: any, index: number) => (
                                <div className="slide" key={index}>
                                    <div>
                                        <div className="painting-reveal-slide-video">
                                            <BannerVideo bannerVideo={obj.videoUrl} poster={obj.videoThumbUrl || ''} />
                                        </div>
                                        <div className="painting-reveal-slide-data">
                                            <div className="p-slider-data-top">
                                                <div className="p-name-rating">
                                                    <span className="p-name title-font">{`${obj.firstName || ''} ${obj.lastName || ''}`}</span>
                                                    <Rating disabled defaultValue={obj.ratings} allowHalf />
                                                </div>
                                                <h5 className="p-title">{obj.title}</h5>
                                                <div className="p-content">{obj.description}</div>
                                            </div>
                                            <div className="p-footer">{moment.utc(obj.commentedDate).format('D MMMM YYYY')}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </SliderCarousel>
                    )}
                </div>
                <NextBtn handleNext={handleNext} />
            </div>
        </PaintingRevealProcessBlockCmp>
    );
};

export default PaintingRevealProcess;

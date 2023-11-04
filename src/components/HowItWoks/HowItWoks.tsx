import React, { useRef, useState } from 'react';

import { HowItWorkBlockCmp } from './HowItWoks.component';
import { Images } from '../../theme';
import SliderCarousel from '../SliderCarousel';
import BannerVideo from '../BannerVideo';
import Image from 'next/image';

const HowItWoks = ({ detail, info, howItWorkTitle, howItWorkShortDiscription }: any) => {
    const sliderRef = useRef<any>(null);

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        variableWidth: true,
        swipeToSlide: true,
        beforeChange: (current: number, next: number) => setActiveSlide(next),
    };

    const handlePrevious = () => sliderRef?.current?.slickPrev();
    const handleNext = () => sliderRef?.current?.slickNext();
    const handleSteps = (stepNo: number) => {
        sliderRef?.current?.slickGoTo(stepNo);
    };

    return (
        <HowItWorkBlockCmp>
            <div className="section-title-block text-center">
                <h2 className="text-uppercase">{howItWorkTitle || 'HOW IT WORKS?'} </h2>
                <p className="mb-0 text-light">
                    {howItWorkShortDiscription || 'Follow simple, three steps to order your precious custom painting from a photo...'}
                </p>
            </div>
            <div className="how-it-work-icon">
                <Image src={Images.HowItWorkIcon?.src} alt="how-it-work" className="" fill loading="lazy" />
            </div>
            {detail?.length > 0 && (
                <SliderCarousel settings={settings} ref={sliderRef}>
                    {detail?.map((obj: any, index: number) => (
                        <div className="slide" key={index}>
                            <BannerVideo bannerVideo={obj.videoUrl} poster={obj.videoThumbUrl || ''} className="how-it-work-video" />
                            <div className="create-overlay"></div>
                        </div>
                    ))}
                </SliderCarousel>
            )}
            <p className="how-it-work-info">{info}</p>
            <div className="how-it-work-slider-pagination">
                <button type="button" className="button how-btn-prev" onClick={handlePrevious}>
                    <img src={Images.SliderPrevIconWhite.src} alt="slider-prev-icon" className="mob-arrow-icon" />
                    <Image src={Images.HowItWorkArrowLeft?.src} alt="how-it-work-arrow-left" fill className="desktop-arrow-icon prev" loading="lazy" />
                </button>
                <div className="step-btn-wrap">
                    {detail &&
                        detail.map((obj: any, index: number) => (
                            <button
                                type="button"
                                className={`button step-btn ${activeSlide === index ? 'btn-active' : ''}`}
                                onClick={() => handleSteps(index)}
                                key={index}
                            >
                                <span className="">{`Step ${index + 1}`}</span>
                            </button>
                        ))}
                </div>
                <button type="button" className="button how-btn-next" onClick={handleNext}>
                    <img src={Images.SliderNextIconWhite.src} alt="slider-next-icon" className="mob-arrow-icon" />
                    <Image src={Images.HowItWorkArrowRight?.src} alt="how-it-work-arrow-right" fill className="desktop-arrow-icon next" loading="lazy" />
                </button>
            </div>
        </HowItWorkBlockCmp>
    );
};

export default HowItWoks;

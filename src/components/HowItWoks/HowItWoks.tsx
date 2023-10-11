import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { HowItWorkBlockCmp } from './HowItWoks.component';
import { Images } from '../../theme';
import SliderCarousel from '../SliderCarousel';
import BannerVideo from '../BannerVideo';

const HowItWoks = ({ detail, info }: any) => {
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
                <h2 className="text-uppercase"> HOW IT WORKS?</h2>
                <p className="mb-0 text-light">Follow simple, three steps to order your precious custom painting from a photo...</p>
            </div>
            <div className="how-it-work-icon">
                <img src={Images.HowItWorkIcon?.src} alt="" className="" width="100" height="100" />
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
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <img src={Images.HowItWorkArrowLeft?.src} alt="" className="" />
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
                    <FontAwesomeIcon icon={faAngleRight} />
                    <img src={Images.HowItWorkArrowRight?.src} alt="" className="" />
                </button>
            </div>
        </HowItWorkBlockCmp>
    );
};

export default HowItWoks;

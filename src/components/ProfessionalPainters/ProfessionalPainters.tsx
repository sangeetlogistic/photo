/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useState } from 'react';
import { Col, Row } from 'antd';

import AnalogClock from '../AnalogClock';
import { timezone } from './ProfessionalPainters.data';
import { ProfessionalPainterMobileSliderCmp, ProfessionalPaintersCmp } from './ProfessionalPainters.component';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import SliderCarousel from '../SliderCarousel';
import { Images } from '../../theme';
import { useDeviceDetect } from '../../hooks';
import Image from 'next/image';

const ProfessionalPainters = ({ detail }: any) => {
    const { isMobile } = useDeviceDetect();

    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState();
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        useTransform: false,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    initialSlide: 0,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: true,
                    centerPadding: '0',
                    useCSS: true,
                    useTransform: true,
                    arrows: false,
                },
            },
        ],
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);
        },
    };

    const mobileSettings = {
        fade: true,
        swipe: false,
        slide: false,
        arrows: false,
    };

    const handlePrevious = () => nav1?.slickPrev();
    const handleNext = () => nav1?.slickNext();
    const handleSlideClick = (index: number) => {
        if (index === currentSlide) {
            // Clicked on the current slide, do nothing
            return;
        }
        if (index === currentSlide - 1 || (currentSlide === 0 && index === detail.length - 1)) {
            nav1.slickPrev();
        } else if (index === currentSlide + 1 || (currentSlide === detail.length - 1 && index === 0)) {
            nav1.slickNext();
        } else {
            nav1.slickNext();
        }
    };

    return (
        <ProfessionalPaintersCmp className="professional-painter-section">
            <Row gutter={{ xs: 0, lg: 16 }}>
                <Col className="gutter-row p2p-paint-col" xs={24} md={14}>
                    <div className="pro-paint-data-block">
                        <h3 className="info-painters-title">
                            <span className="info-paing-number">124</span>
                            <div className="info-paint-title-text">
                                <div className="">PROFESSIONAL</div>
                                <div className="">
                                    PAINTERS
                                    <span>worldwide are ready to paint your photo</span>
                                </div>
                            </div>
                        </h3>
                        {!isMobile && (
                            <>
                                <p className="">
                                    Our talented painters come from various corners of the world. They use their cultural insights to turn your
                                    picture to painting on canvas.
                                </p>
                                <p>No wonder why working with a team from different time zones is an honor for us!</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col className="gutter-row p2p-desktop-watch-col" xs={24} md={10}>
                    <Row className="">
                        {timezone.map((obj, index) => (
                            <Col className="" xs={8} key={index}>
                                <AnalogClock timezone={obj.timezone} title={obj.title} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="professional-painter-slider-block">
                        <PrevBtn handlePrevious={handlePrevious} />
                        <div className="professional-painter-slider-block-inner">
                            {detail?.length > 0 && (
                                <SliderCarousel settings={settings} ref={(slider1: any) => setNav1(slider1)} asNavFor={nav2}>
                                    {detail?.map((obj: any, index: number) => (
                                        <React.Fragment key={index}>
                                            <figure className="professional-painter-slider-img-block" onClick={() => handleSlideClick(index)}>
                                                <span className="lazy-load-image-loaded ">
                                                    <Image
                                                        src={obj.profilePicUrl}
                                                        alt=""
                                                        //  width="100%"
                                                        fill
                                                        className=''
                                                    />
                                                </span>
                                            </figure>
                                            <div className="professional-painter-slide-data">
                                                <h3>Meet</h3>
                                                <h4>{`${obj.firstName || ''} ${obj.lastName || ''}`}</h4>
                                                <p>{obj.painterIntro}</p>
                                                <p className="author-originate">originated from {obj.originatedFrom}</p>
                                                <div className="hand-box-wrap">
                                                    <img src={Images.ProfessionalPainterSliderHandBtmNew?.src} alt="" className="hand-btm" />
                                                    <span className="hand-top">
                                                        <span className="lazy-load-image-loaded">
                                                            <img src={Images.ProfessionalPainterSliderHandTop?.src} alt="" className="" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </SliderCarousel>
                            )}
                        </div>
                        <NextBtn handleNext={handleNext} />
                    </div>
                </Col>
            </Row>
            {isMobile && (
                <ProfessionalPainterMobileSliderCmp>
                    {detail?.length > 0 && (
                        <SliderCarousel
                            className="professional-painter-slider-mobile"
                            ref={(slider2: any) => setNav2(slider2)}
                            settings={mobileSettings}
                        >
                            {detail?.map((obj: any, index: number) => (
                                <React.Fragment key={index}>
                                    <div className="professional-painter-slide-data">
                                        <h3>Meet</h3>
                                        <h4>{`${obj.firstName || ''} ${obj.lastName || ''}`}</h4>
                                        <p>{obj.painterIntro}</p>
                                        <p className="author-originate"> originated from {obj.originatedFrom}</p>
                                        <div className="hand-box-wrap">
                                            <img src={Images.ProfessionalPainterSliderHandBtmNew?.src} alt="" className="hand-btm" />
                                            <span className="hand-top">
                                                <span className="lazy-load-image-loaded">
                                                    <img src={Images.ProfessionalPainterSliderHandTop?.src} alt="" className="" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </SliderCarousel>
                    )}
                </ProfessionalPainterMobileSliderCmp>
            )}
            <Row className="p2p-mobile-watch-col">
                {timezone.map((obj, index) => (
                    <Col className="" xs={8} key={index}>
                        <AnalogClock timezone={obj.timezone} title={obj.title} />
                    </Col>
                ))}
            </Row>
        </ProfessionalPaintersCmp>
    );
};
export default memo(ProfessionalPainters);

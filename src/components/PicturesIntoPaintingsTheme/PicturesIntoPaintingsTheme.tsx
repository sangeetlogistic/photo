import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Col } from 'antd';
import { PictureThemeSliderBlock, PictureThemeSliderRow } from './PicturesIntoPaintingsTheme.component';
import FilledButton from '../FilledButton';
import { Images } from '../../theme';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import SliderCarousel from '../SliderCarousel';
import LazyImage from '../LazyImage';

const PicturesIntoPaintingsTheme = ({ detail }: any) => {
    const sliderRef = useRef<any>(null);
    const history = useHistory();

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        draggable: true,
        centerMode: false,
        useCSS: true,
        useTransform: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: true,
                    centerPadding: '0',
                    draggable: true,
                },
            },
        ],
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);
        },
    };

    const handlePrevious = () => sliderRef?.current?.slickPrev();

    const handleNext = () => sliderRef?.current?.slickNext();

    const handleSlideClick = (index: number) => {
        if (index === currentSlide) {
            // Clicked on the current slide, do nothing
            return;
        }
        if (index === currentSlide - 1 || (currentSlide === 0 && index === detail.length - 1)) {
            sliderRef.current.slickPrev();
        } else if (index === currentSlide + 1 || (currentSlide === detail.length - 1 && index === 0)) {
            sliderRef.current.slickNext();
        } else {
            sliderRef.current.slickNext();
        }
    };

    return (
        <>
            <PictureThemeSliderRow>
                <Col>
                    <PrevBtn handlePrevious={handlePrevious} />
                    <PictureThemeSliderBlock className="">
                        {detail?.length > 0 && (
                            <SliderCarousel settings={settings} ref={sliderRef}>
                                {detail.map((obj: any, index: number) => (
                                    <div key={index} onClick={() => handleSlideClick(index)} tabIndex={0} role="button">
                                        <figure className="">
                                            <LazyImage src={obj.sliderImageUrl} alt="" width="100%" effect="opacity" />
                                        </figure>
                                        <div className="slider-text-wrap">
                                            <p className="title-font title-color">{obj.name}</p>
                                            <FilledButton
                                                className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append"
                                                type="link"
                                                size="small"
                                                onClick={() => history.replace('gallery/theme/custom-landscape-paintings/medium/all')}
                                            >
                                                View Gallery
                                                <span className="icon-append">
                                                    <LazyImage src={Images.ViewGalleryArrow} alt="" effect="opacity" width="" />
                                                </span>
                                            </FilledButton>
                                        </div>
                                    </div>
                                ))}
                            </SliderCarousel>
                        )}
                    </PictureThemeSliderBlock>
                    <NextBtn handleNext={handleNext} />
                </Col>
            </PictureThemeSliderRow>
        </>
    );
};

export default PicturesIntoPaintingsTheme;

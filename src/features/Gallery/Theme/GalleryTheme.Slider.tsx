import React, { useRef } from 'react';

import SliderCarousel from '../../../components/SliderCarousel';
import { NextBtn, PrevBtn } from '../../../components/PrevNextBtn/PrevNextBtn';
import { PhotosPaintingThemeSliderBlock } from '../Gallery.component';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { clearGalleryData, selectSliderData } from '../Gallery.slice';
import Image from 'next/image';

const GalleryThemeSlider = ({ storeSelectedData, setStoreSelectedData }: any) => {
    const sliderRef = useRef<any>(null);
    const dispatch = useAppDispatch();
    const sliderData = useAppSelector(selectSliderData);

    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        speed: 700,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                },
            },
        ],
        beforeChange: (current: number, next: number) => {
            const selectedData = sliderData[next];
            setStoreSelectedData?.((prev: any) => ({
                ...prev,
                pageNumber: 1,
                currentSlide: next,
                selectedData: { obj: selectedData, index: next },
            }));
            dispatch(clearGalleryData());
        },
    };

    const handlePrevious = () => {
        sliderRef?.current?.slickPrev();
    };
    const handleNext = () => {
        sliderRef?.current?.slickNext();
    };

    const handleSlideClick = (index: number) => {
        if (index === storeSelectedData?.currentSlide) {
            // Clicked on the current slide, do nothing
            return;
        }
        if (
            index === storeSelectedData?.currentSlide - 1 ||
            index === storeSelectedData?.currentSlide - 2 ||
            (storeSelectedData?.currentSlide === 0 && index === sliderData?.length - 1) ||
            (storeSelectedData?.currentSlide === 0 && index === sliderData?.length - 2)
        ) {
            sliderRef.current.slickPrev();
        } else if (index === storeSelectedData?.currentSlide + 1 || (storeSelectedData?.currentSlide === sliderData?.length - 1 && index === 0)) {
            sliderRef.current.slickNext();
        } else {
            sliderRef.current.slickNext();
        }
    };

    return (
        <PhotosPaintingThemeSliderBlock>
            <PrevBtn handlePrevious={handlePrevious} />
            <div className="blur_div left"></div>
            {sliderData?.length > 0 && (
                <SliderCarousel settings={settings} ref={sliderRef}>
                    {sliderData?.map((obj: any, index: number) => (
                        <div
                            key={index}
                            onClick={() => handleSlideClick(index)}
                            className={`slider-theme-item-box ${storeSelectedData.currentSlide === index ? 'active-item' : ''}`}
                            role="button"
                            tabIndex={0}
                        >
                            <figure className="fig_sqr">
                                <span className="lazy-load-image-loaded ">
                                    <Image fill src={obj.sliderImageUrl} alt={obj.sliderImageAlt} className="theme-carousel-image" />
                                </span>
                            </figure>
                            <div className="slider-text-wrap">
                                <p className="title-font title-color">{obj.name}</p>
                            </div>
                        </div>
                    ))}
                </SliderCarousel>
            )}
            <div className="blur_div right"></div>
            <NextBtn handleNext={handleNext} />
        </PhotosPaintingThemeSliderBlock>
    );
};

export default GalleryThemeSlider;

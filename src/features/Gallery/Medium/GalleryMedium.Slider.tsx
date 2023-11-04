import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import SliderCarousel from '../../../components/SliderCarousel';
import { NextBtn, PrevBtn } from '../../../components/PrevNextBtn/PrevNextBtn';
import { PhotosPaintingMediumSliderBlock } from '../Gallery.component';
import { useAppDispatch } from '../../../app/hooks';
import { clearGalleryData } from '../Gallery.slice';

const GalleryMediumSlider = ({ storeSelectedData, setStoreSelectedData, sliderData, isInitial }: any) => {
    const param: { mediumId?: string; themeId?: string } | null = useParams();
    const sliderRef = useRef<any>(null);
    const dispatch = useAppDispatch();
    const [initial, setInitial] = useState(false);

    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        focusOnSelect: initial,
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
            if (!isInitial) {
                dispatch(clearGalleryData());
            }
        },
    };

    useEffect(() => {
        sliderData?.forEach((data: any, index: any) => {
            if (data?.slug === param?.mediumId) {
                sliderRef?.current?.slickGoTo(index);
            }
        });
        setTimeout(() => {
            setInitial(true);
        }, 1000);
    }, []);

    const handlePrevious = () => {
        sliderRef?.current?.slickPrev();
    };
    const handleNext = () => {
        sliderRef?.current?.slickNext();
    };

    return (
        <PhotosPaintingMediumSliderBlock>
            <PrevBtn handlePrevious={handlePrevious} />
            <div className="blur_div left"></div>
            {sliderData?.length > 0 && (
                <SliderCarousel settings={settings} ref={sliderRef}>
                    {sliderData?.map((obj: any, index: number) => (
                        <div
                            key={index}
                            className={`slider-item-box ${storeSelectedData.currentSlide === index ? 'active-item' : ''}`}
                            role="button"
                            tabIndex={0}
                        >
                            <figure className="image_bg_white ">
                                <Image
                                    src={obj.sliderHoverImageUrl}
                                    alt={obj.sliderHoverImageAlt || ''}
                                    fill
                                    className={`p2p-carousel-image-active  ${storeSelectedData.currentSlide === index ? '' : 'image_visible'}`}
                                />
                                <Image src={obj.sliderImageUrl} alt={obj.sliderImageAlt || ''} fill className="p2p-carousel-image" />
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
        </PhotosPaintingMediumSliderBlock>
    );
};

export default GalleryMediumSlider;

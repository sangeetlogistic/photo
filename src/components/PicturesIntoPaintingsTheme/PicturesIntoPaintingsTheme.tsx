import React, { useRef, useState } from 'react';
import { Col } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

import { PictureThemeSliderBlock, PictureThemeSliderRow } from './PicturesIntoPaintingsTheme.component';
import { Images } from '../../theme';
import { NextBtn, PrevBtn } from '../PrevNextBtn';
import SliderCarousel from '../SliderCarousel';
import { Routes } from '../../navigation/Routes';
import { useRouter } from 'next/router';

const PicturesIntoPaintingsTheme = ({ detail }: any) => {
    const sliderRef = useRef<any>(null);
    const route = useRouter();
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
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
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
                <PrevBtn handlePrevious={handlePrevious} />
                <PictureThemeSliderBlock className="">
                    {detail?.length > 0 && (
                        <SliderCarousel settings={settings} ref={sliderRef}>
                            {detail.map((obj: any, index: number) => (
                                <div key={index} onClick={() => handleSlideClick(index)} tabIndex={0} role="button">
                                    <figure className="">
                                        <Image src={obj.sliderImageUrl} alt="" fill className="" loading="lazy" />
                                    </figure>
                                    <div className="slider-text-wrap">
                                        <h3 className="title-font title-color">{obj.name}</h3>
                                        <Link
                                            className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append"
                                            type="link"
                                            href={Routes.galleryTheme
                                                .replace(':themeId', obj?.slug || '')
                                                .replace(':mediumId', route.asPath === Routes.home ? 'all' : route.asPath.split('/')[1])}
                                            rel="canonical"
                                        >
                                            View Gallery
                                            <span className="icon-append">
                                                <Image src={Images.ViewGalleryArrow?.src} alt="" fill loading="lazy" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </SliderCarousel>
                    )}
                </PictureThemeSliderBlock>
                <NextBtn handleNext={handleNext} />
            </PictureThemeSliderRow>
        </>
    );
};

export default PicturesIntoPaintingsTheme;

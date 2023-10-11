import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import { NextBtn, PrevBtn } from '../PrevNextBtn';
import { PhotosPaintingMediumSliderBlock } from './PhotosIntoPaintingsMedium.component';
import FilledButton from '../FilledButton';
import { Images } from '../../theme';
import SliderCarousel from '../SliderCarousel';
import { useDeviceDetect } from '../../hooks';
import { Routes } from '../../navigation/Routes';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PhotosIntoPaintingsMedium = ({ detail }: any) => {
    const pathname = usePathname();
    const sliderRef = useRef<any>(null);
    const { isMobile } = useDeviceDetect();
    const history = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        arrows: false,
        infinite: isMobile,
        variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 6,
        speed: 500,
        draggable: isMobile,
        centerMode: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    draggable: true,
                    centerPadding: '0',
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        beforeChange: (current: number, next: number) => {
            isMobile && setCurrentSlide(next);
        },
    };

    const handlePrevious = () => {
        sliderRef?.current?.slickPrev();
        if (currentSlide <= 0) {
            setCurrentSlide(detail.length - 1);
        } else {
            setCurrentSlide((prev) => prev - 1);
        }
    };
    const handleNext = () => {
        sliderRef?.current?.slickNext();
        if (currentSlide >= detail.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide((prev) => prev + 1);
        }
    };
    const handleMouseEvent = (index: number) => {
        setCurrentSlide(index);
        sliderRef?.current?.slickGoTo(index);
    };
    const handleSlideClick = (index: number) => {
        setCurrentSlide(index);
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
            <PhotosPaintingMediumSliderBlock className="photo-paint-medium-slider-block">
                <PrevBtn handlePrevious={handlePrevious} />
                {detail.length > 0 && (
                    <SliderCarousel settings={settings} ref={sliderRef}>
                        {detail.map((obj: any, index: number) => (
                            <div
                                key={index}
                                onMouseEnter={() => !isMobile && handleMouseEvent(index)}
                                onClick={() => isMobile && handleSlideClick(index)}
                                className={`${currentSlide === index ? 'active-item' : ''}`}
                                role="button"
                                tabIndex={0}
                            >
                                <figure className="">
                                    <span className="lazy-load-image-loaded">
                                        <Image
                                            src={obj.sliderHoverImageUrl}
                                            alt=""
                                            // width="100%"
                                            className="mediums-carousel-image-active "
                                            fill
                                        />
                                    </span>
                                    <span className="lazy-load-image-loaded">
                                        <Image
                                            src={obj.sliderImageUrl}
                                            alt=""
                                            // width="100%"
                                            className="mediums-carousel-image "
                                            fill
                                        />
                                    </span>
                                </figure>
                                <div className="slider-text-wrap">
                                    <p className="title-font title-color">{obj.name}</p>

                                    <FilledButton
                                        className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append"
                                        type="link"
                                        size="small"
                                        onClick={() =>
                                            history.push(
                                                Routes.galleryMedium
                                                    .replace(':mediumId', obj?.slug || '')
                                                    .replace(':themeId', pathname === Routes.home ? 'all' : pathname.split('/')[1]),
                                            )
                                        }
                                    >
                                        View Gallery
                                        <span className="icon-append">
                                            <span className="lazy-load-image-loaded">
                                                <img src={Images.ViewGalleryArrow?.src} alt="" width="" />
                                            </span>
                                        </span>
                                    </FilledButton>
                                </div>
                            </div>
                        ))}
                    </SliderCarousel>
                )}
                <NextBtn handleNext={handleNext} />
            </PhotosPaintingMediumSliderBlock>
        </>
    );
};

export default PhotosIntoPaintingsMedium;

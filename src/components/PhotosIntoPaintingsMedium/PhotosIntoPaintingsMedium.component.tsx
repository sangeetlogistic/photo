import { rgba } from 'polished';
import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const PhotosPaintingMediumSliderBlock = styled.div`
    position: relative;
    .slider-btn {
        top: calc(50% - 15px);
        display: none;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            top: 50%;
            display: flex;
        }
        &.slider-prev {
            left: 15px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                left: 0;
            }
        }
        &.slider-next {
            right: 15px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                right: 0;
            }
        }
    }
    .slick-list {
        display: flex;
        align-items: center;
        padding: 5.333vw 0;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            justify-content: center;
            padding: 0;
        }
    }
    .slick-track {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 0;
        height: auto;
        max-height: 53.33vw;
        margin-left: 31vw;

        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            height: 16vw;
            margin: 0;
            padding: 1.9vw 0;
            margin-left: 0;
        }
    }
    .slick-slide {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        transform-origin: center center;
        position: relative;
        z-index: 2;
        min-width: calc(40vw);
        width: calc(40vw);
        margin: 0 6px;
        height: unset;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            width: 7.808vw;
            min-width: unset;
            margin: 0 0.521vw;
        }

        > div {
            transform-origin: center center;
            text-align: center;
            > div {
                transform: scale(0.8);
                transition: all 0.3s ease;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    transform: scale(0.9);
                }
            }
            figure {
                width: 40vw;
                height: 40vw;
                border: 1px solid #eceff8;
                margin: 0;
                transition: all 0.3s ease;
                background-color: ${Colors.white};
                overflow: hidden;
                position: relative;
                border-radius: 50%;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    width: 7.808vw;
                    height: 7.808vw;
                    margin: 0 auto;
                    border: 1px solid ${rgba(Colors.blueLight, 0)};
                }
                .lazy-load-image-loaded {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                    position: absolute;
                    transition: all 0.5s ease-in-out;
                    inset: 0;
                    &.mediums-carousel-image {
                        opacity: 1;
                        padding: 0.26vw;
                    }
                    &.mediums-carousel-image-active {
                        opacity: 0;
                    }
                }
            }
            .slider-text-wrap {
                margin: 10px 0 0 0;
                transition: all 0.4s ease-in-out;
                transform: scale(1);
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin: 0.521vw 0 0 0;
                }
                .title-font {
                    color: ${Colors.gray95};
                    font-size: 16px;
                    font-weight: 600;
                    margin: 0;
                    transition: font-size 0.3s ease-in-out;
                    transform-origin: center 6.767vw;
                    text-align: center;
                    white-space: nowrap;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: 1.042vw;
                        margin: 0;
                        white-space: nowrap;
                    }
                }
                .link-btn-blue {
                    font-family: ${Fonts.titleFont};
                    font-weight: 700;
                    opacity: 0;
                    transition: all 0.5s ease-in;
                    display: inline-flex;
                    height: unset;
                    color: ${Colors.secondary};
                    .icon-append {
                        width: 25px;
                        height: 22px;
                        margin-left: 3px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: ${convertPxToVw('30')}vw;
                            height: ${convertPxToVw('28')}vw;
                            margin-left: 0.521vw;
                        }

                        img {
                            width: 100%;
                            height: 100%;
                            position: static !important;
                        }
                    }
                }
            }
        }
        &.slick-slide {
            z-index: 1;
            > div {
                > .active-item {
                    transform: scale(1);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        transform: scale(1.15);

                        .link-btn-blue {
                            transform: scale(0.75) translate3d(0, 0, 0);
                            font-size: 0.833vw;
                        }
                    }
                    figure {
                        border: 1px solid ${rgba(Colors.blueLight, 1)};
                        img {
                            &.mediums-carousel-image-active {
                                opacity: 1;
                                z-index: 1;
                            }
                        }
                    }
                    .slider-text-wrap {
                        transform: scale(1.25);

                        .link-btn-blue {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
`;

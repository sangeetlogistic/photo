import { Row } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const PictureThemeSliderRow = styled.div`
    margin-bottom: 32px;
    position: relative;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        margin-bottom: 2.206vw;
    }
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        margin-bottom: 5.206vw;
    }
    .slider-btn {
        top: calc(50% - 25px);
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
`;

export const PictureThemeSliderBlock = styled.div`
    .slick-slider {
        align-items: center;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-right: calc((3.646vw + 4.167vw) * -1);
            min-height: 22.31vw;
        }
    }
    .slick-track {
        display: flex;
        margin: auto;
        margin-left: 33.6vw;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-left: 15.5vw;
            min-height: unset;
        }
    }
    .slick-list {
        padding: 10.667vw 0 !important;

        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding: 4.604vw 0 !important;
            min-height: unset;
        }
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            padding: 2.604vw 0 !important;
        }
    }
    .slick-slide {
        margin: 0 10px 0 0;
        width: 33.6vw;
        min-width: 33.6vw;
        transition: all 0.5s ease;
        transform: scale(1);
        transform-origin: center center;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin: 0 2.083vw 0 0;
            width: 10.417vw;
            min-width: unset;
        }
        cursor: pointer;
        > div {
            transform: scale(1);
            transition: all 0.5s ease;
            > div {
                text-align: center;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    text-align: left;
                }
                figure {
                    border: 1px solid ${rgba(Colors.blueLight, 0.3)};
                    border-radius: 18px;
                    margin: 0;
                    overflow: hidden;
                    transition: all 0.5s ease;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        height: 180px;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        padding: 1px;
                        border-radius: 0.938vw;
                        margin: 0 0 0 0;
                        width: ${convertPxToVw('200')}vw;
                        height: ${convertPxToVw('245')}vw;
                    }

                    > img {
                        border-radius: 18px;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center center;
                        transition: all 0.5s ease;
                        position: static !important;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            border-radius: 0.885vw;
                        }
                    }
                }
                .slider-text-wrap {
                    margin: 10px 0 0 0;
                    transition: all 0.4s ease-in-out;
                    transform: scale(0.9);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin: 0.521vw 0 0 0;
                    }
                    .title-font {
                        color: ${Colors.gray95};
                        font-size: 14px;
                        font-weight: 600;
                        margin: 0 0 0 0;
                        transition: font-size 0.4s ease-in-out;
                        text-align: center;
                        white-space: normal;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            text-align: left;
                            white-space: nowrap;
                            font-size: 1.301vw;
                            line-height: 1.823vw;
                        }
                    }
                    .link-btn-blue {
                        font-family: ${Fonts.titleFont};
                        font-size: 12px;
                        font-weight: 700;
                        opacity: 0;
                        transition: all 0.5s ease-in-out;
                        display: inline-flex;
                        height: unset;
                        color: ${Colors.secondary};
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            font-size: 0.833vw;
                        }
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
        }
        &.slick-current {
            transform: scale(1.25);
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: 10.417vw;
                min-width: unset;
            }
            > div {
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin: 0;
                }
                > div {
                    figure {
                        border: 1px solid ${rgba(Colors.blueLight, 1)};
                    }
                    .slider-text-wrap {
                        transform: scale(1);
                        .link-btn-blue {
                            opacity: 1;
                        }
                    }
                }
            }
        }
        &.slick-slide {
            &:not(.slick-current) {
                transform: translateX(-5.333vw);
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    transform: translateX(-1.4vw);
                }
            }
        }
        &.slick-active {
            ~ .slick-slide {
                &:not(.slick-current) {
                    transform: translateX(5.333vw);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        transform: translateX(1.7vw);
                    }
                }
            }
        }
    }
`;

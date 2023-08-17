import { rgba } from 'polished';
import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

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
        /* margin: 0 0.781vw; */
        height: 210px;
        max-height: 53.33vw;
        margin-left: 31vw;
        @media (min-width: ${`${MediaBreakpoints.upSm}px`}) {
            height: 16vw;
        }
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin: 0;
            padding: 1.9vw 0;
            margin-left: 0;
        }
    }
    .slick-slide {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        transform-origin: center center;
        /* transform: scale(1); */
        position: relative;
        z-index: 2;
        min-width: calc(40vw);
        width: calc(40vw);
        margin: 0 6px;
        height: unset;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            width: 7.808vw;
            /* width: 11.563vw; */
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
                .ant-btn-sm {
                    font-family: ${Fonts.titleFont};
                    font-weight: 700;
                    opacity: 0;
                    transition: all 0.5s ease-in;
                    display: inline-flex;
                    height: unset;
                    .icon-append {
                        width: 20px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: 1.406vw;
                            height: 1.145vw;
                        }
                        .lazy-load-image-loaded {
                            display: block !important;
                            width: 100%;
                            height: 100%;
                        }
                        img {
                            width: 100%;
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

                        .ant-btn-sm {
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
                        /* .title-font {
              color: ${Colors.gray120};
              @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                font-size: 1.301vw;
                line-height: 1.823vw;
              }
            } */
                        .ant-btn-sm {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
`;

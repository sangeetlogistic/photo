import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const ProfessionalPaintersCmp = styled.div`
    position: 'relative';
    &.professional-painter-section {
        position: relative;
    }
    .p2p-paint-col {
        flex: 0 0 100%;
        max-width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            flex: 0 0 58.33333333%;
            max-width: 58.33333333%;
        }
    }
    .p2p-desktop-watch-col {
        display: none;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            display: flex;
        }
    }

    .p2p-mobile-watch-col {
        display: flex;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            display: none;
        }
    }
    .pro-paint-data-block {
        margin-bottom: 32px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-bottom: 0.781vw;
        }
        .info-painters-title-block {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            margin-left: -7px;
            margin-right: -7px;
            font-family: ${Fonts.primaryFont};
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-left: 0;
                margin-right: 0;
                margin-bottom: 1.406vw;
            }
            .info-paing-number {
                font-size: 68px;
                line-height: 35px;
                margin-left: -7px;
                color: ${Colors.gray110};
                font-weight: 700;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-size: 5.62vw;
                    line-height: 3.9vw;
                    margin-left: 0;
                }
            }
            h2.info-paint-title-text {
                font-size: 24px;
                line-height: 22px;
                font-weight: 700;
                font-family: ${Fonts.titleFont};
                margin-bottom: 0;
                font-size: 26px;
                line-height: 28px;
                margin-left: 8px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-size: 2.5vw;
                    line-height: 1.823vw;
                    margin-left: 16px;
                }
                > div {
                    display: flex;
                    align-items: center;
                    + div {
                        margin-top: 0.26vw;
                    }
                    span {
                        font-family: ${Fonts.primaryFont};
                        font-size: 12px;
                        line-height: 15px;
                        font-weight: 400;
                        margin-left: 2px;
                        color: ${Colors.gray80};
                        margin-right: -7px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin-right: 0;
                            font-size: 0.833vw;
                            line-height: 1.042vw;
                            margin-left: 0.781vw;
                        }
                    }
                }
            }
        }
        > p {
            margin: 0;
            line-height: 0.937vw;
        }
    }
    .professional-painter-slider-block {
        --ProfPainterSlidWidth: 10.417vw;
        --ProfPainterSlidHeight: 15.365vw;
        --ProfPainterSlidActiveWidth: 36.563vw;
        --ProfPainterSlidActiveHeight: 29.792vw;
        margin: 0 -25px 32px -25px;
        position: relative;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin: 0;
            margin-top: calc(((var(--ProfPainterSlidActiveHeight) - var(--ProfPainterSlidHeight)) - 4.167vw) * -1);
        }

        .slider-btn {
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                top: unset;
                transform: translateX(0);
                bottom: calc(var(--ProfPainterSlidHeight) / 2);
            }
            &.slider-prev {
                left: 15px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    left: calc(var(--ProfPainterSlidActiveWidth) - 8.646vw);
                }
            }
            &.slider-next {
                right: 15px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    right: 0;
                }
            }
        }
        .professional-painter-slider-block-inner {
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-right: calc((3.646vw + 4.167vw) * -1);
            }
        }
        .slick-slider {
            .slick-list {
                display: flex;
                align-items: center;
                .slick-track {
                    display: flex;
                    align-items: center;
                    margin-left: calc((46.67vw + 3vw) / 2);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        align-items: flex-end;
                        height: var(--ProfPainterSlidActiveHeight);
                        margin-left: 0;
                    }
                    .slick-slide {
                        width: 46.67vw;
                        flex: 0 0 46.67vw;
                        cursor: pointer;
                        transition: all 0.5s ease;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: var(--ProfPainterSlidWidth);
                            flex: 0 0 var(--ProfPainterSlidWidth);
                            height: 16.45vw;
                            padding-bottom: 1.042vw;
                            border-radius: 0.625vw;
                            margin-right: 2.083vw;
                            position: relative;
                            overflow: hidden;
                            display: flex;
                            align-items: flex-end;
                            transform-origin: left bottom;
                        }
                        > div {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: flex-start;
                            position: relative;
                            transition: all 0.5s ease;
                            transform-origin: center center;
                            transform: scale(0.85);
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                transform: scale(1);
                                transform-origin: left bottom;
                            }
                            &:before {
                                content: '';
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                right: 0;
                                left: 0;
                                z-index: -1;
                                border-radius: 0.625vw;
                                border: 1px solid ${Colors.reviewCardbrd};
                                opacity: 0;
                                width: var(--ProfPainterSlidActiveWidth) !important;
                            }
                            .professional-painter-slider-img-block {
                                width: 100%;
                                height: 68.8vw;
                                cursor: pointer;
                                transition: height 0.5s ease;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    width: ${convertPxToVw('200')}vw;
                                    height: ${convertPxToVw('300')}vw;
                                    margin: 0;
                                    transform: scale(1);
                                }

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    object-position: center center;
                                    border-radius: 15px;
                                    transition: height 0.5s ease;
                                    position: relative !important;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        border-radius: 0.625vw;
                                    }
                                }
                            }

                            .professional-painter-slide-data {
                                width: 14.688vw;
                                opacity: 0;
                                visibility: hidden;
                                transition: all 0.5s ease;
                                padding-right: 0;
                                position: absolute;
                                top: 1.042vw;
                                left: calc((18.75vw + 3.125vw));

                                h3 {
                                    font-size: 1.25vw;
                                    line-height: 1.823vw;
                                    font-family: ${Fonts.primaryFont};
                                    margin: 0;
                                    &.painter-name {
                                        font-size: 0.833vw;
                                        font-weight: 700;
                                        line-height: 1.146vw;
                                        font-family: ${Fonts.primaryFont};
                                        margin-bottom: 0.625vw;
                                    }
                                }

                                p {
                                    font-size: 0.625vw;
                                    line-height: 0.833vw;
                                    padding-right: 4.01vw;
                                    &.author-originate {
                                        font-style: italic;
                                        color: ${Colors.gray50};
                                        padding-right: 0;
                                    }
                                }
                                .hand-box-wrap {
                                    width: 3.542vw;
                                    height: 5.313vw;
                                    position: absolute;
                                    right: 0;
                                    top: 0.156vw;

                                    img {
                                        &.hand-btm {
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                    .hand-top {
                                        width: 1.875vw;
                                        height: 2.552vw;
                                        position: absolute;
                                        left: 0.104vw;
                                        top: 0.104vw;
                                        transform: rotate(0deg) scale(1);
                                        transform-origin: 60% 78%;
                                        animation: handMove 0.8s infinite alternate;
                                        img {
                                            width: 100%;
                                            height: 100%;
                                        }
                                        .lazy-load-image-loaded {
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                    @keyframes handMove {
                                        0% {
                                            transform: rotate(0deg) scale(1.3);
                                        }
                                        50% {
                                            transform: rotate(10deg) scale(1.3);
                                        }

                                        100% {
                                            transform: rotate(-19deg) scale(1.1);
                                        }
                                    }
                                }
                            }
                        }
                        &.slick-active {
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                height: var(--ProfPainterSlidActiveHeight);
                                padding-bottom: 1.042vw;
                                overflow: visible;
                            }
                            > div {
                                transform: scale(1);
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    padding: 1.042vw 0 1.042vw 1.042vw;
                                    display: flex;
                                    align-items: flex-start;
                                    width: var(--ProfPainterSlidActiveWidth) !important;
                                    position: absolute;
                                    left: 0;
                                    bottom: 0;
                                }
                                &:before {
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        opacity: 1;
                                        border: 1px solid ${Colors.reviewCardbrd};
                                    }
                                }
                                .professional-painter-slider-img-block {
                                    margin: 0;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        margin-right: 2.083vw;
                                        flex: 0 0 ${convertPxToVw('360')}vw;
                                        width: ${convertPxToVw('360')}vw;
                                        height: ${convertPxToVw('532')}vw;
                                    }
                                }
                                .professional-painter-slide-data {
                                    opacity: 1;
                                    visibility: visible;
                                    top: 1.042vw;
                                    display: none;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        display: block;
                                    }
                                }
                            }
                        }
                        &.slick-active {
                            ~ .slick-slide {
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    transform: translateX(20.042vw);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const ProfessionalPainterMobileSliderCmp = styled.div`
    margin: 0 -25px 24px -25px;
    .professional-painter-slide-data {
        width: 100%;
        position: relative;
        padding: 0 80px 0 18px;
        h3 {
            font-size: 24px;
            line-height: 33px;
            margin: 0;
        }
        h4 {
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
            margin-bottom: 5px;
        }
        p {
            font-size: 12px;
            line-height: 16px;
            padding-right: 4.01vw;
            &.author-originate {
                font-style: italic;
                color: ${Colors.gray50};
                padding-right: 0;
                font-weight: 600;
            }
        }
        .hand-box-wrap {
            width: 68px;
            height: 102px;
            position: absolute;
            right: 0;
            top: 9px;

            img {
                &.hand-btm {
                    width: 100%;
                    height: auto;
                }
            }
            .hand-top {
                width: 36px;
                height: 50px;
                position: absolute;
                left: 2px;
                top: 2px;
                transform: rotate(0deg) scale(1);
                transform-origin: 60% 78%;
                animation: handMove 0.8s infinite alternate;
                img {
                    width: 100%;
                    height: 100%;
                }
                .lazy-load-image-loaded {
                    width: 100%;
                    height: 100%;
                }
            }
            @keyframes handMove {
                0% {
                    transform: rotate(0deg) scale(1.3);
                }
                50% {
                    transform: rotate(10deg) scale(1.3);
                }

                100% {
                    transform: rotate(-19deg) scale(1.1);
                }
            }
        }
    }
`;

import styled from 'styled-components';
import { Colors, MediaBreakpoints } from '../../theme';

export const PaintingRevealProcessBlockCmp = styled.section`
    --secPdng: 4.167vw;
    padding: 48px 25px;
    background-color: ${Colors.white};
    border-radius: 0;
    position: relative;
    z-index: 1;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        border-radius: 0.625vw 0.625vw 0 0;
        padding: 2.5vw var(--secPdng);
    }
    .sec-sub-title {
        display: flex;
        font-size: 18px;
        line-height: 22px;
        max-width: 300px;
        margin: 0 auto;
        margin-bottom: 30px;
        text-transform: uppercase;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            font-size: 1.25vw;
            line-height: 1.823vw;
            margin-bottom: 2.5vw;
            text-transform: unset;
            max-width: unset;
        }
        .icon {
            display: inline-block;
            margin-right: 8px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                display: none;
            }
        }
    }
    .painting-reveal-process-slider-wrap {
        position: relative;
        .slider-btn {
            width: 58px;
            height: 58px;
            bottom: 23px;
            top: unset;
            transform: translateX(0);
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: 3.021vw;
                height: 3.021vw;
                bottom: unset;
                top: 50%;
                transform: translateX(-50%);
            }
            &.slider-prev {
                left: -10px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    left: 0;
                    margin-left: -2.083vw;
                }
            }
            &.slider-next {
                right: -10px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    right: 0;
                }
            }
        }
        .painting-reveal-process-slider-block {
            margin-right: -25px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-right: calc((var(--secPdng) + 1.042vw) * -1);
            }
            .slick-track {
                display: flex;
                align-items: center;
            }
            .slick-slide {
                width: 83.467vw;
                margin: 0 6px;
                border-radius: 20px;
                border: 1px solid ${Colors.transparent};
                box-shadow: 0px 0px 1.927vw rgba(16, 18, 35, 0.03);
                height: 100%;
                position: relative;
                z-index: 1;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin-left: 0;
                    margin-right: 1.042vw;
                    max-width: 34.063vw;
                    width: 34.33%;
                    border-radius: 1.042vw;
                }
                &::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    margin: -1px;
                    border-radius: 20px;
                    z-index: -1;
                    background: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        border-radius: 1.042vw;
                    }
                }
                > div {
                    background: ${Colors.pageContetBg};
                    padding: 16px;
                    border-radius: 20px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        padding: 0.781vw;
                        border-radius: 1.042vw;
                    }
                    .slide {
                        > div {
                            display: flex;
                            flex-direction: column;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                flex-direction: row;
                            }
                            .painting-reveal-slide-video {
                                width: 100%;
                                max-width: 74.667vw;
                                height: 68.267vw;
                                overflow: hidden;
                                border-radius: 8px;
                                background-color: ${Colors.gray110};
                                margin: 0 auto;
                                margin-bottom: 18px;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    max-width: 14.583vw;
                                    flex: 0 0 14.583vw;
                                    height: 13.333vw;
                                    margin-right: 0.885vw;
                                    margin-bottom: 0;
                                    border-radius: 0.417vw;
                                }
                                .video-react-video,
                                .video-react {
                                    max-width: 100%;
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 8px;
                                    border: 0;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        border-radius: 0.417vw;
                                    }
                                }
                                .video-react-controls-enabled {
                                    padding-top: 0 !important;
                                }
                                .video-react-video,
                                .video-react-poster {
                                    border-radius: 8px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        border-radius: 0.417vw;
                                    }
                                }
                                .video-react-control-bar {
                                    border-radius: 0 0 8px 8px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        border-radius: 0 0 0.417vw 0.417vw;
                                    }
                                }
                                .video-react-big-play-button {
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        font-size: 3vw;
                                        width: 3.958vw;
                                        height: 3.958vw;
                                    }
                                    &:before {
                                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                            line-height: 3.958vw;
                                        }
                                    }
                                }
                            }
                            .painting-reveal-slide-data {
                                flex: auto;
                                flex-direction: column;
                                justify-content: space-between;
                                .p-slider-data-top {
                                    margin-bottom: 40px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        margin-bottom: 1.042vw;
                                    }
                                    .p-name-rating {
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: space-between;
                                        margin-bottom: 0.365vw;
                                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                            flex-direction: row;
                                            align-items: center;
                                        }
                                        .p-name {
                                            font-size: 12px;
                                            line-height: 16px;

                                            font-weight: 600;
                                            color: ${Colors.gray120};
                                            order: 2;
                                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                                font-size: 0.625vw;
                                                order: 1;
                                            }
                                        }
                                        .ant-rate {
                                            font-size: 20px;
                                            order: 1;
                                            display: flex;
                                            justify-content: center;
                                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                                font-size: 1.042vw;
                                                order: 2;
                                            }
                                            li:not(:last-child) {
                                                margin-right: 5px;
                                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                                    margin-right: 0.417vw;
                                                }
                                            }
                                        }
                                    }
                                    .p-title {
                                        font-size: 18px;
                                        line-height: 22px;
                                        font-weight: 600;
                                        margin-bottom: 7;
                                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                            font-size: 0.833vw;
                                            line-height: 1.146vw;
                                            margin-bottom: 0.417;
                                        }
                                    }
                                    .p-content {
                                        font-size: 16px;
                                        line-height: 20px;
                                        color: ${Colors.gray50};
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        display: -webkit-box !important;
                                        -webkit-line-clamp: 6;
                                        -webkit-box-orient: vertical;
                                        white-space: normal;
                                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                            font-size: 0.729vw;
                                            line-height: 0.938vw;
                                        }
                                    }
                                }
                                .p-footer {
                                    padding-top: 13px;
                                    font-size: 14px;
                                    text-align: center;
                                    color: #7595d5;
                                    border-top: 1px solid ${Colors.reviewCardbrd};
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        padding-top: 0.365vw;
                                        font-size: 0.625vw;
                                        text-align: right;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

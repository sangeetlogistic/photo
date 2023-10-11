import { Row } from 'antd';
import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const IndivdualSliderRowCmp = styled(Row)`
    padding: 1px;
    border: 1px solid ${Colors.transparent};
    border-radius: 20px;
    border-bottom: 0;
    margin: 0 -19px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        flex-wrap: nowrap !important;
        border: 0;
        margin: 0;
        overflow: visible;
    }
    .customer-single-review-col {
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            padding-right: 0;
            margin-right: 1.5rem;
        }
    }
    .cusotmer-review-slider-col {
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            padding: 0 16px 0 0px;
            margin: 0 -28px;
        }

        .individual-review-slider-block {
            /* max-width: 306px; */
            margin: 0 auto;
            position: relative;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                max-width: unset;
                margin: 0;
                position: static;
            }
            .slider-btn {
                &.slider-prev {
                    left: 15px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        left: 0;
                    }
                }
                &.slider-next {
                    right: -50px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        right: 0;
                    }
                }
            }
            .individual-review-slider-block-wrapp {
                position: relative;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    overflow: hidden;
                    margin-right: calc((3.646vw + 6.167vw) * -1);
                }

                .slick-list {
                    padding: 1px;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        overflow: visible;
                    }
                }
                .slick-list,
                .slick-track {
                    height: unset;
                    display: flex;
                }

                .slick-slide {
                    margin-left: 24px;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        opacity: 0.5;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-left: 1.25vw;
                        height: auto;
                    }
                    > div {
                        padding: 1px;
                        height: 100%;
                        width: 100%;
                        z-index: -1;
                        border-radius: 20px;
                        position: relative;
                        transition: all 0.3s ease;
                        background-image: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                        background: transparent;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            border-radius: 1.042vw;
                            width: ${convertPxToVw('316')}vw;
                            background-image: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                        }
                    }
                    &.slick-current {
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            opacity: 1;
                        }
                        > div {
                            height: 100%;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                background-image: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                            }
                        }
                    }
                }
                .review-slide-card {
                    border-radius: 20px;
                    border: none;
                    background-color: ${Colors.pureBlack};
                    position: relative;
                    height: 100%;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        background-color: ${Colors.white};
                        border-radius: 1.042vw;
                    }
                    .ant-card-body {
                        padding: 24px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            padding: 1.041vw 1.562vw;
                        }
                        .reviw-top-sec {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                display: block;
                            }

                            .reviewer-title {
                                font-family: ${Fonts.titleFont};
                                font-weight: 600;
                                font-size: 16px;
                                line-height: normal;
                                color: ${Colors.white};
                                margin: 0 0 8px 0;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    color: ${Colors.pureBlack};
                                    font-size: ${convertPxToVw('16')}vw;
                                    margin: 0 0 ${convertPxToVw('8')}vw 0;
                                }
                            }
                            .ant-rate {
                                font-size: 15px;
                                margin-bottom: 16px;
                                display: flex;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: ${convertPxToVw('16')}vw;
                                    margin-bottom: ${convertPxToVw('5')}vw;
                                }
                                /* > .ant-rate-star {
                                    > div {
                                        > div {
                                            height: 18px;
                                            display: flex;
                                            align-items: flex-start;
                                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                                height: 1.042vw;
                                            }
                                        }
                                    }
                                } */
                                .ant-rate-star svg {
                                    width: 1.2em;
                                    height: 1.2em;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        width: ${convertPxToVw('20')}vw;
                                        height: ${convertPxToVw('20')}vw;
                                    }
                                }
                            }
                            .reviewer-text {
                                margin-bottom: 0;
                                font-size: ${convertPxToVw('14')}vw;
                                color: ${Colors.pureBlack};
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                * {
                                    display: inline;
                                }
                                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                    color: ${Colors.gray10};
                                    font-size: 14px;
                                    line-height: 18px;
                                    order: 4;
                                }
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 0.729vw;
                                    line-height: 0.938vw;
                                }
                            }
                        }

                        .review-footer {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin-top: 24px;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                padding-top: 0.521vw;
                                margin-top: ${convertPxToVw('24')}vw;
                            }
                            .reviewer-name {
                                font-family: ${Fonts.titleFont};
                                font-weight: 600;
                                font-size: 12px;
                                line-height: 16px;
                                letter-spacing: 0.02em;
                                color: ${Colors.gray40};
                                margin-bottom: 0;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: ${convertPxToVw('14')}vw;
                                    line-height: normal;
                                }
                            }
                            .country {
                                font-weight: 400;
                                font-size: 10px;
                                line-height: 12px;
                                letter-spacing: 0.02em;
                                color: ${Colors.gray40};
                                display: flex;
                                align-items: center;
                                margin-bottom: 0;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: ${convertPxToVw('12')}vw;
                                    line-height: normal;
                                }
                                .country-icon {
                                    height: 12px;
                                    width: auto;
                                    margin-right: 5px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        height: ${convertPxToVw('14')}vw;
                                    }
                                }
                            }
                            .verified_button {
                                font-family: ${Fonts.titleFont};
                                font-weight: 600;
                                font-size: 12px;
                                line-height: 16px;
                                letter-spacing: 0.02em;
                                background: ${Colors.white};
                                color: ${Colors.gray100};
                                border-radius: 13px;
                                display: flex;
                                padding: 6px 10px;
                                justify-content: center;
                                align-items: center;
                                gap: 4px;
                                height: unset;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    color: ${Colors.white};
                                    background: ${Colors.gray100};
                                    font-size: ${convertPxToVw('12')}vw;
                                    padding: ${convertPxToVw('6')}vw ${convertPxToVw('12')}vw;
                                    border-radius: ${convertPxToVw('20')}vw;
                                }
                                img {
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        width: ${convertPxToVw('16')}vw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .slider-btn {
                background-color: ${Colors.pureBlack};
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    border: 1px solid ${Colors.gray10};
                }
                .arrow_icon {
                    color: ${Colors.white};
                }
            }
        }
    }
`;

export const CustomerReviewBlock = styled.div`
    &.customer-review-block {
        margin-bottom: 30px;
        .customer_review-row {
            margin: 0;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                overflow: visible;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                margin: 0 -25px;
                margin-top: 2.5vw;
            }
        }
        .sub-title-text {
            margin-bottom: 20px;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                line-height: 15px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-bottom: 0;
            }
        }
    }
`;

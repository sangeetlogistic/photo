import { Row } from 'antd';
import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const IndivdualSliderRowCmp = styled(Row)`
    /* border: 1px solid ${Colors.reviewCardbrd}; */
    padding: 1px;
    border: 1px solid ${Colors.transparent};
    border-radius: 20px;
    border-bottom: 0;
    margin: 0 -19px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -2;
        border-radius: 20px;
        display: block;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            display: none;
        }
    }
    &::before {
        background: rgb(217, 224, 242);
        background: linear-gradient(to bottom, rgba(217, 224, 242, 1) 0%, rgba(217, 224, 242, 0) 100%);
    }
    &::after {
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        z-index: -1;
        background-color: ${Colors.pageContetBg};
    }
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        flex-wrap: nowrap !important;
        border: 0;
        margin: 0;
        overflow: visible;
    }
    .customer-single-review-col {
        width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            padding-right: 0;
            margin-right: 3rem;
        }
        /* flex: 0 0 100%;
    max-width: 100%;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
    .customer-single-review-block {
      overflow: hidden;
      padding: 0;
      background-color: ${Colors.pageContetBg};
      @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        max-width: 25vw;
        padding: 1px;
      }
    } */
    }
    .cusotmer-review-slider-col {
        @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
            padding: 0 25px 20px 25px;
        }
        /* max-width: 100%;
    flex: 0 0 100%;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
      padding: 0;
    } */
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
                --sliderBtnPosition: 23px;
                &.slider-prev {
                    left: calc(var(--sliderBtnPosition) * -1);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        left: 0;
                    }
                }
                &.slider-next {
                    right: calc(var(--sliderBtnPosition) * -1);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        right: 0;
                    }
                }
            }
            .individual-review-slider-block-wrapp {
                overflow: hidden;
                position: relative;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin-right: calc((3.646vw + 4.167vw) * -1);
                }
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 5.208vw;
                    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(250 250 250) 100%);
                    z-index: 1;
                    display: none;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: block;
                    }
                }
                .slick-list {
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        padding-bottom: 15px;
                    }
                }
                .slick-list,
                .slick-track {
                    height: unset;
                    display: flex;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        height: 15vw;
                        display: block;
                    }
                }
                .slick-slide {
                    margin-left: 1.25vw;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        height: auto;
                    }
                    > div {
                        padding: 1px;
                        height: unset;
                        width: unset;
                        z-index: -1;
                        border-radius: 20px;
                        position: relative;
                        transition: all 0.3s ease;
                        background-image: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                        background: transparent;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            border-radius: 1.042vw;
                            width: 14.583vw;
                            /* border: 0.078vw solid #d9e0f2; */
                            background-image: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                        }
                    }
                    &.slick-current {
                        > div {
                            background-image: linear-gradient(to bottom, #d9e0f2 0%, rgba(217, 224, 242, 0) 148.26%);
                            height: 100%;
                        }
                    }
                }
                .review-slide-card {
                    border-radius: 20px;
                    border: 1px solid ${Colors.transparent};
                    background-color: ${Colors.pageContetBg};
                    box-shadow: 0px 0px 1.927vw rgba(16, 18, 35, 0.03);
                    position: relative;
                    height: 100%;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        border-radius: 1.042vw;
                    }
                    .ant-card-body {
                        /* padding: 1.563vw 1.042vw 1.146vw 2.083vw; */
                        padding: 16px 30px;
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
                            .reviewer-name {
                                font-family: ${Fonts.titleFont};
                                font-weight: 600;
                                font-size: 12px;
                                line-height: 16px;
                                letter-spacing: 0.02em;
                                color: ${Colors.gray120};
                                margin-bottom: 7px;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 0.625vw;
                                    line-height: 1.042vw;
                                }
                            }
                            .reviewer-title {
                                font-family: ${Fonts.titleFont};
                                font-weight: 600;
                                font-size: 16px;
                                line-height: normal;
                                color: ${Colors.gray120};
                                margin: 0 0 0.469vw 0;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 0.833vw;
                                    margin: 0 0 0.469vw 0;
                                }
                            }
                            .ant-rate {
                                font-size: 15px;
                                margin-top: 6px;
                                margin-bottom: 6px;
                                display: flex;
                                order: 3;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 1.042vw;
                                    margin-bottom: 1.042vw;
                                    margin-top: 0;
                                    order: unset;
                                }
                                > .ant-rate-star {
                                    display: flex;
                                    > div {
                                        display: flex;
                                        align-items: flex-start;
                                        > div {
                                            height: 18px;
                                            display: flex;
                                            align-items: flex-start;
                                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                                height: 1.042vw;
                                            }
                                        }
                                    }
                                }
                            }
                            .reviewer-text {
                                font-size: 14px;
                                line-height: 18px;
                                margin-bottom: 0;
                                @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    order: 4;
                                }
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 0.729vw;
                                    line-height: 0.938vw;
                                }
                            }
                        }

                        .review-footer {
                            padding-top: 10px;
                            border-top: 1px solid ${Colors.reviewCardbrd};
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                padding-top: 0.521vw;
                                margin-top: 2.603vw;
                            }
                            .s-trust-logo {
                                max-width: 76px;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    max-width: 3.958vw;
                                }
                            }
                            .r-date {
                                font-size: 12px;
                                line-height: 15px;
                                color: ${Colors.blueLight};
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 0.625vw;
                                    line-height: 0.781vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const CustomerReviewBlock = styled.div`
    &.customer-review-block {
        /* margin-bottom: 100px; */
        .customer_review-row {
            margin: 0 -20px;
            margin-top: 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin: 0 -25px;
                margin-top: 2.5vw;
            }
        }
        .sub-title-text {
            margin-bottom: 20px;
            @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-top: 14px;
                line-height: 15px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-bottom: 0;
            }
        }
    }
`;

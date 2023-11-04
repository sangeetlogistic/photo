import { Row } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const IndivdualSliderRowCmp = styled.div`
    padding: 1px;
    border: 1px solid ${Colors.transparent};
    border-radius: 20px;
    border-bottom: 0;
    margin: 0 -19px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    &.customer_review-row {
        margin: 0;
        margin-bottom: 30px;
        flex-wrap: wrap;
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            overflow: visible;
        }
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            flex-wrap: nowrap !important;
            border: 0;
            margin: 0;
            overflow: visible;
            margin-top: 2.5vw;
        }
    }

    .customer-single-review-col {
        width: 100%;
        margin-bottom: 24px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            width: auto;
            padding-right: 0;
            margin-bottom: 0;
            margin-right: ${convertPxToVw('87')}vw;
        }
        .customer-single-review-block {
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: ${convertPxToVw('388')}vw;
            }
            .ant-card-body {
                padding: 8px 16px 15px 16px;
                margin: 0;
                border: 1px solid ${rgba(Colors.reviewCardbrd, 0.5)};
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    padding: ${convertPxToVw('16')}vw ${convertPxToVw('29')}vw ${convertPxToVw('24')}vw !important;
                    margin: 0;
                    height: ${convertPxToVw('223')}vw;
                }

                .single-review-wrapper {
                    .single-reviwe-title {
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            font-size: ${convertPxToVw('23.5')}vw;
                            margin: 0 0 8px 0;
                        }
                    }
                    .customer-review-and-rate {
                        .review-and-rate-wrap {
                            margin: 0;
                            .customer-rating {
                                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                    line-height: 33px;
                                    margin-right: 12px;
                                }
                            }
                            .ant-rate {
                                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                    font-size: 12px;
                                }
                                .ant-rate-star {
                                    &:not(:last-child) {
                                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                            margin-right: 6px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .single-review-btm-logo {
                    margin: 0 -12px;
                    flex: auto;
                    justify-content: center;
                    padding: 8px 0 0 0;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-left: 0;
                        margin-right: 0;
                        padding: 0;
                        justify-content: space-between;
                        margin: ${convertPxToVw('32')}vw 0 ${convertPxToVw('31')}vw;
                    }
                    .img-1 {
                        width: 90px;
                        margin: 0 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin: 0;
                            width: ${convertPxToVw('120')}vw;
                        }
                        img {
                            height: 24px;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                    .img-2 {
                        width: 62px;
                        margin: 0 12px;
                        order: 3;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin: 0;
                            width: ${convertPxToVw('83')}vw;
                            order: 2;
                        }
                        img {
                            height: 24px;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                    .img-3 {
                        width: 73px;
                        margin: 0 12px;
                        order: 2;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin: 0;
                            width: ${convertPxToVw('73')}vw;
                            order: 3;
                        }
                        img {
                            height: 24px;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                }
            }
        }
    }
    .individual-review-slider-block-wrapp {
        position: relative;
        width: 100%;
        flex: 0 0 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            width: auto;
            flex: 0 0 70%;
            max-width: 70%;
            margin: 0;
        }

        .slider-btn {
            background-color: ${Colors.pureBlack};
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                border: 1px solid ${Colors.gray10};
            }
            .arrow_icon {
                color: ${Colors.white};
            }
            &.slider-prev {
                left: -10px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    left: calc(${convertPxToVw('36')}vw * -1);
                }
            }
            &.slider-next {
                right: -12px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    right: 0;
                }
            }
        }
        .slick-slider {
            position: relative;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                overflow: hidden;
                margin-right: calc((3.646vw + 6.167vw) * -1);
            }
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
            margin-left: 6px;
            margin-right: 6px;
            position: relative;
            z-index: 1020;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                opacity: 0.5;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-right: 0;
                margin-left: ${convertPxToVw('16')}vw;
                height: auto;
            }
            > div {
                height: 100%;
                width: 100%;
                z-index: -1;
                border-radius: 20px;
                position: relative;
                transition: all 0.3s ease;
                background: transparent;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    border-radius: 1.042vw;
                    width: ${convertPxToVw('316')}vw;
                }
            }
            &.slick-current {
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    opacity: 1;
                }
                > div {
                    height: 100%;
                }
            }
        }
        .review-slide-card {
            border-radius: 20px;
            border: none;
            background-color: ${Colors.pureBlack};
            position: relative;
            height: 100%;
            border: 1px solid ${Colors.gray10};
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
                    padding: 1.25vw;
                    height: ${convertPxToVw('223')}vw;
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
                        > span {
                            line-height: ${convertPxToVw('16')}vw;
                        }
                    }
                }
            }
        }
    }
`;

export const CustomerReviewBlock = styled.div`
    &.customer-review-block {
        margin-bottom: 30px;
        .sec-sub-title {
            text-align: center;
            margin-bottom: 14px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                text-align: left;
                margin-bottom: 0;
            }
        }
        .sub-title-text {
            margin-bottom: 20px;
            text-align: center;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                line-height: 15px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-bottom: 0;
                text-align: left;
            }
        }
    }
`;

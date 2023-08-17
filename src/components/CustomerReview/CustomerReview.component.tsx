import { Card } from 'antd';
import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const CustomerReviewCardCmp = styled(Card)`
    border: 0 !important;
    position: relative;
    border-radius: 20px !important;
    width: 100%;
    /* background-image: linear-gradient(
    to bottom,
    #d9e0f2 0%,
    rgba(217, 224, 242, 0) 148.26%
    ); */
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        border-radius: 1.042vw !important;
    }
    .ant-card-body {
        background-color: ${Colors.pageContetBg};
        display: flex;
        justify-content: space-between;
        border-radius: 20px !important;
        padding: 16px 25px;
        height: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            border: 0.078vw solid #d9e0f2;
            /* min-height: 15vw; */
            flex-direction: column;
            padding: 1.301vw 2.9vw !important;
            border-radius: 1.042vw !important;
        }
    }
    .single-review-wrapper {
        .single-reviwe-title {
            font-family: ${Fonts.primaryFont};
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            margin: 0 0 1.041vw;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                font-size: 1.25vw;
                line-height: 1.354vw;
            }
            .text-success {
                color: ${Colors.success};
            }
        }
        .customer-review-and-rate {
            display: inline-block;
            .review-and-rate-wrap {
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin-bottom: 10px;
                }
                .customer-rating {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 25px;
                    color: ${Colors.gray120};
                    margin-right: 10px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: 2.5vw;
                        line-height: 1.823vw;
                        margin-right: 0.625vw;
                    }
                }
                .ant-rate {
                    font-size: 15px;
                    display: flex;
                    flex-wrap: nowrap;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: 1.667vw;
                    }
                }
            }
            .total-review {
                font-size: 12px;
                line-height: 15px;
                margin-top: 0.781vw;
                margin-bottom: 0;
                font-weight: 600;
                text-align: left;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-size: 0.625vw;
                    line-height: 0.781vw;
                }
                .total-review-label {
                    color: ${Colors.gray40};
                    margin-right: 0.625vw;
                    font-weight: 400;
                }
            }
        }
    }
    .single-review-btm-logo {
        text-align: center;
        margin-left: auto;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-left: unset;
        }
        .lazy-load-image-loaded {
            width: 26vw;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: 7.808vw;
            }
            img {
                width: 100%;
                height: auto;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin-top: 1.822vw;
                }
            }
        }
    }
`;

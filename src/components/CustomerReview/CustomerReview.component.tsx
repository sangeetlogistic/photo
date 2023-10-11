import { Card } from 'antd';
import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const CustomerReviewCardCmp = styled(Card)`
    border: 0 !important;
    position: relative;
    border-radius: 20px !important;
    width: 100%;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        border-radius: 1.042vw !important;
    }
    .ant-card-body {
        background-color: ${Colors.pageContetBg};
        display: flex;
        border-radius: 20px !important;
        padding: 16px 20px;
        height: 100%;
        border: 1px solid #d9e0f2;
        margin-bottom: 1.5rem;
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            flex-wrap: wrap;
        }
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            border: 0.078vw solid #d9e0f2;
            justify-content: space-between;
            /* min-height: 15vw; */
            flex-direction: column;
            padding: ${convertPxToVw('16')}vw ${convertPxToVw('30')}vw !important;
            border-radius: 1.042vw !important;
        }
    }
    .single-review-wrapper {
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            width: 100%;
            text-align: center;
        }
        .single-reviwe-title {
            font-size: 18px;
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                display: block;
                font-family: ${Fonts.titleFont};
                margin: ${convertPxToVw('8')}vw 0 ${convertPxToVw('8')}vw;
                font-size: ${convertPxToVw('24')}vw;
                line-height: 1.354vw;
            }
        }
        .customer-review-and-rate {
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                display: inline-block;
            }
            .review-and-rate-wrap {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: ${convertPxToVw('6')}vw;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    margin-bottom: 10px;
                }
                .customer-rating {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 25px;
                    color: ${Colors.gray120};
                    font-family: ${Fonts.titleFont};
                    margin-right: 10px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: ${convertPxToVw('32')}vw;
                        line-height: normal;
                        margin-right: 0.625vw;
                    }
                }
                .ant-rate {
                    font-size: 18px;
                    display: flex;
                    flex-wrap: nowrap;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: 1.667vw;
                    }
                    .ant-rate-star svg {
                        width: 1.5em;
                        height: 1.5em;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: ${convertPxToVw('32')}vw;
                            height: ${convertPxToVw('32')}vw;
                        }
                    }
                }
            }
        }
    }
    .single-review-btm-logo {
        text-align: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-left: unset;
            margin-top: ${convertPxToVw('36')}vw;
            margin-bottom: ${convertPxToVw('30')}vw;
        }
        .lazy-load-image-loaded img {
            height: 28px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                height: 1.75vw;
            }
        }
    }
`;

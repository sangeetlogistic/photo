import { rgba } from 'polished';
import styled from 'styled-components';
import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const ThankYouWrap = styled.div`
    display: flex;
    align-items: center;
    padding-top: 6.5rem;
    padding-bottom: 1rem;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        padding-bottom: 0;
        height: 100vh;
        padding-top: ${PagePdngTopEqualHeaderHeight};
    }
`;
export const ThankYouCmp = styled.div`
    padding: 0 ${convertPxToVw('100')}vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .thankyou-row {
        margin: 0 calc(${convertPxToVw('26')}vw * -1);
        .thankyou-col {
            padding: 0 ${convertPxToVw('26')}vw;
        }
        .thankyou-box-col {
            width: 100%;
            text-align: center;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                max-width: calc((${convertPxToVw('26')}vw * 2) + ${convertPxToVw('708')}vw);
            }
            .thank-you-img {
                max-width: 100%;
            }
            .thank-you-title-block {
                color: ${Colors.success};
                margin-bottom: ${convertPxToVw('18')}vw;
                h3 {
                    font-family: ${Fonts.titleFont};
                    text-transform: uppercase;
                    color: ${Colors.success};
                    margin-bottom: 12px;
                    font-size: 24px;
                    line-height: 35px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-bottom: ${convertPxToVw('12')}vw;
                        font-size: ${convertPxToVw('46')}vw;
                        line-height: ${convertPxToVw('35')}vw;
                    }
                }
                p {
                    font-weight: 600;
                    margin: 0;
                }
            }
            .next-step-block {
                font-family: ${Fonts.titleFont};
                h4 {
                    font-weight: 600;
                    font-size: 26px;
                    line-height: 35px;
                    margin-bottom: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: ${convertPxToVw('24')}vw;
                        line-height: ${convertPxToVw('35')}vw;
                        margin-bottom: ${convertPxToVw('12')}vw;
                    }
                }
                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: ${Colors.gray80};
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: ${convertPxToVw('18')}vw;
                        line-height: ${convertPxToVw('25')}vw;
                    }
                }
            }
        }
        .thankyou-detail-col {
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: ${convertPxToVw('854')}vw;
                flex: 0 0 ${convertPxToVw('854')}vw;
            }
            .thankyou-detail-col-2 {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .thank-you-card {
                background-color: ${Colors.white};
                padding: 14px 18px;
                border-radius: 12px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    padding: ${convertPxToVw('25')}vw ${convertPxToVw('33')}vw;
                    border-radius: 0;
                }
                &.order-detail {
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        border-radius: ${convertPxToVw('8')}vw 0 0 ${convertPxToVw('8')}vw;
                    }
                    height: 100%;
                }
                &.order-info {
                    border-bottom-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        border-radius: 0 ${convertPxToVw('8')}vw 0 0;
                    }
                    h4 {
                        margin-bottom: 0;
                    }
                }
                &.estimated-delivery-card {
                    display: flex;
                    margin-top: 14px;
                    margin-bottom: 14px;
                    padding: 14px 18px;
                    border-radius: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-top: ${convertPxToVw('14')}vw;
                        margin-bottom: 0;
                        padding: ${convertPxToVw('14')}vw ${convertPxToVw('16')}vw;
                        border-radius: 0 0 ${convertPxToVw('8')}vw 0;
                    }
                    .icon {
                        margin-right: 16px;
                        flex-basis: 140px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin-right: ${convertPxToVw('16')}vw;
                            flex-basis: ${convertPxToVw('150')}vw;
                            width: ${convertPxToVw('150')}vw;
                        }
                        img {
                            width: 100%;
                        }
                    }
                    .estimated-delivery-data {
                        flex: auto;
                    }
                    h4 {
                        color: ${Colors.gray100};
                        margin-bottom: 0;
                        text-transform: capitalize;
                    }
                    p {
                        margin-bottom: 0;
                        color: ${Colors.gray40};
                        font-size: 14px;
                        line-height: 17px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                            line-height: ${convertPxToVw('17')}vw;
                        }
                        span {
                            color: ${Colors.gray100};
                        }
                    }
                }
                &.shipping-info-detail {
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-top: ${convertPxToVw('22')}vw;
                        padding: ${convertPxToVw('26')}vw ${convertPxToVw('30')}vw;
                        border-radius: ${convertPxToVw('8')}vw;
                    }

                    h4 {
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin-bottom: ${convertPxToVw('15')}vw;
                        }
                    }
                    .shipping-detail-block {
                        display: flex;
                        align-items: top;
                        flex-wrap: wrap;
                        font-family: ${Fonts.titleFont};
                        text-transform: capitalize;
                        margin-top: 0.75rem;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin-top: 0;
                            font-size: ${convertPxToVw('14')}vw;
                        }
                        .shipping-detail-left {
                            width: 100%;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                width: ${convertPxToVw('230')}vw;
                                flex-basis: ${convertPxToVw('230')}vw;
                                margin-right: ${convertPxToVw('78')}vw;
                            }
                        }
                        .shipping-detail-right {
                            flex: auto;
                        }
                        .shipping-detail-row {
                            display: flex;
                            align-items: center;
                            font-weight: 500;
                            color: ${Colors.gray40};
                            margin-bottom: 14px;
                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                font-size: 14px;
                            }
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                margin-bottom: ${convertPxToVw('10')}vw;
                            }
                            &:last-child {
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    margin-bottom: 0;
                                }
                            }
                            .label {
                                color: ${Colors.gray120};
                                font-weight: 600;
                                padding-right: 1.5rem;
                                text-transform: none;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    flex: 0 0 ${convertPxToVw('70')}vw;
                                    padding-right: ${convertPxToVw('10')}vw;
                                }
                            }
                            .info {
                                text-transform: lowercase;
                            }
                        }
                    }
                }
                h4 {
                    font-family: ${Fonts.titleFont};
                    color: ${Colors.gray80};
                    text-transform: uppercase;
                    font-weight: 600;
                    font-size: 16px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        font-size: ${convertPxToVw('16')}vw;
                        margin-bottom: ${convertPxToVw('30')}vw;
                    }
                }
                .order-table {
                    width: 100%;
                    tr {
                        td,
                        th {
                            font-family: ${Fonts.titleFont};
                            font-weight: 500;
                            border-bottom: 1px solid ${rgba(Colors.gray10, 0.4)};
                            text-transform: capitalize;
                            vertical-align: top;
                            padding: 12px 0;
                            font-size: 14px;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                font-size: ${convertPxToVw('14')}vw;
                            }
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                padding: ${convertPxToVw('12')}vw 0;
                            }
                            .note {
                                color: ${Colors.gray40};
                                padding-right: 10px;
                                display: block;
                                font-size: 12px;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: ${convertPxToVw('12')}vw;
                                    line-height: ${convertPxToVw('18')}vw;
                                }
                            }
                        }
                        th {
                            color: ${Colors.gray40};
                            text-align: left;
                        }
                        td {
                            color: ${Colors.gray80};
                            text-align: right;
                            .ex-data {
                                color: ${Colors.gray40};
                                padding-right: 10px;
                            }
                        }
                    }
                    tbody {
                        tr {
                            &:last-child {
                                td,
                                th {
                                    /* border-bottom: 1px dashed ${Colors.gray100}; */
                                    border-bottom: 0;
                                }
                            }
                        }
                    }
                    tfoot {
                        tr {
                            td,
                            th {
                                font-weight: 600;
                                color: ${Colors.gray80};
                                border-top: 1px dashed ${Colors.gray100};
                                border-bottom: 0;
                            }
                            th {
                                text-transform: uppercase;
                            }
                            td {
                                .discount-price {
                                    color: ${Colors.gray80};
                                    text-decoration: line-through;
                                    padding-right: 10px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        padding-right: ${convertPxToVw('10')}vw;
                                        font-size: ${convertPxToVw('14')}vw;
                                    }
                                }
                                color: ${Colors.primary};
                            }
                        }
                    }
                }
            }
        }
    }
`;

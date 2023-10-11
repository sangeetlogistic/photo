import { rgba } from 'polished';
import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../../theme';
import { convertPxToVw } from '../../../utils/func';

export const FooterCmp = styled.footer`
    background: ${Colors.footerBg};
    color: ${Colors.white};
    padding: 64px 36px 36px 36px;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        padding: 69px 6.5vw 5.206vw 6.5vw;
    }
    .footer-subscribe {
        .title {
            font-size: 24px;
            line-height: 1.5 !important;
            font-weight: 600;
            color: ${Colors.white};
            margin-bottom: 24px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-bottom: 1.041vw;
            }
        }
        .subscription-form {
            max-width: 819px;
            width: 100%;
            margin: 0 auto;
            position: relative;
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                width: calc(100% / 2);
            }
            > .ant-row {
                /* padding-right: 1.771vw; */
                /* padding-right: 34px; */
            }
            .ant-form-item {
                .ant-form-item-control-input-content {
                    .ant-input {
                        font-size: 12px;
                        line-height: 0.781vw;
                        padding: 10px;
                        height: 50px;
                        border-radius: 8px;
                        border: 1px solid ${Colors.white};
                        &::placeholder {
                            color: ${Colors.gray50};
                        }
                    }
                }
            }
            .f-subscription-btn {
                cursor: pointer;
                top: 0;
                right: -18px;
                /* width: 5.313vw; */
                width: 102px;
                height: 50px;
                position: absolute;
                background-color: transparent;
                border: 0;
                padding: 0;
                z-index: 2;
                text-align: left;
                img {
                    /* width: 4.375vw; */
                    width: 84px;
                    height: 50px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    right: 10px;
                    top: 0;
                    border-radius: 50px;
                    background-color: ${Colors.secondary};
                    z-index: -1;
                    box-shadow: 0px 0px 0.938vw rgba(45, 115, 255, 0.45);
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        border-radius: 4.167vw;
                    }
                }
            }
        }
    }
    .footer-mid {
        display: grid;
        padding-top: 30px;
        grid-template-columns: repeat(1, 1fr);
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
            padding-top: 6px;
        }
        .footer-link {
            color: ${Colors.footerLink};
            @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                font-size: 0.725vw;
            }
        }
        .f-title {
            font-size: 18px;
            font-weight: 600;
            line-height: 25px;
            margin-bottom: 16px;
            color: ${Colors.pageContetBg};
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                font-size: 16px;
                margin-bottom: 0.833vw;
                line-height: 1.302vw;
            }

            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 0.938vw;
            }
        }
        .footer-menu-block {
            display: flex;
            justify-content: flex-start;
            .footer-menu-wrap {
                padding-top: 1.301vw;
                width: 100%;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    max-width: 320px;
                    /* max-width: 16.667vw; */
                }
            }
            .footer-link-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0.625vw 0.521vw;
                li {
                    font-size: 16px;
                    margin-bottom: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        /* font-size: 0.625vw; */
                        font-size: 12px;
                        margin-bottom: 0;
                    }
                    a {
                        /* line-height: 0.781vw; */
                        line-height: 16px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            line-height: 15px;
                        }
                    }
                }
            }
        }
        .footer-review-section {
            display: flex;
            justify-content: center;
            margin: 0 -23px;
            order: 3;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin: 0;
                order: unset;
            }
            .footer-review-block {
                overflow: hidden;
                border: 0 !important;
                padding: 1px;
                border-radius: 16px;
                border: 1px solid ${Colors.gray100} !important;
                background: none;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    border: 1px solid rgba(217, 224, 242, 0.5) !important;
                    max-width: 24.917vw;
                    width: 100%;
                    margin: 0;
                    margin-top: 1.301vw;
                    border-radius: ${convertPxToVw('16')}vw;
                }
                .ant-card-body {
                    background-color: transparent;
                    border-radius: 1.042vw;
                    min-height: unset;
                    border: none;
                    .single-review-wrapper {
                        text-align: center;
                        .single-reviwe-title {
                            color: ${Colors.white};
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                margin-top: ${convertPxToVw('16')}vw;
                                margin-bottom: ${convertPxToVw('16')}vw;
                            }
                        }
                        .customer-review-and-rate {
                            .review-and-rate-wrap {
                                .customer-rating {
                                    color: ${Colors.white};
                                }
                            }
                        }
                    }
                    .single-review-btm-logo {
                        border-radius: 16px;
                        background: ${Colors.pureBlack};
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            padding: ${convertPxToVw('16')}vw ${convertPxToVw('32')}vw;
                            margin-top: ${convertPxToVw('16')}vw;
                            margin-bottom: ${convertPxToVw('8')}vw;
                        }
                    }
                }
            }
        }

        .footer-blog-block {
            order: 2;
            margin: 20px 0 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                display: flex;
                justify-content: flex-end;
                margin: 0;
                order: unset;
            }
            .footer-blog-wrap {
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin: 0 auto;
                    /* max-width: 180px; */
                    padding-top: 1.301vw;
                    max-width: 280px;
                    width: 100%;
                    margin: 0 40px 0 auto;
                }
                .footer-blog-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 0.625vw 0;
                    li {
                        font-size: 16px;
                        margin-bottom: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            font-size: 11px;
                            margin-bottom: 0;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                            /* font-size: 0.625vw; */
                            font-size: 12px;
                        }
                        a {
                            /* line-height: 0.781vw; */
                            line-height: 15px;
                        }
                    }
                }
            }
        }
    }
    .footer-btm-block {
        padding-top: 48px;
        position: relative;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 3.802vw;
        }
        .footer-social-media-link {
            display: flex;
            align-items: center;
            margin-bottom: 73px;
            justify-content: center;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-bottom: 0;
                justify-content: flex-start;
            }
            a {
                width: 59px;
                height: 59px;
                margin-right: 21px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    margin-right: 1.042vw;
                }
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: 42px;
                    height: 42px;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: 59px;
                    height: 59px;
                }
                &:last-child {
                    margin-right: 0;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .footerd-dropdown-block {
            padding: 25px 15px;
            border-radius: 10px;
            background-color: ${Colors.gray120};
            display: flex;
            margin: 0 -10px;
            justify-content: space-between;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin: 0;
                /* min-width: 320px; */
                min-width: 17.667vw;
                padding: 1.042vw 1.302vw;
                border-radius: 0.521vw;
            }

            .f-filter-block {
                flex: 1;
                margin-right: 10px;
                .f-label {
                    font-size: 14px;
                    display: block;
                    color: #919098;
                    @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                        font-size: 0.573vw;
                        line-height: 0.833vw;
                    }
                }
                &.f-filter-block-1 {
                    flex: 0 0 113px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        flex: 0 0 5.885vw;
                    }
                }
                &.f-filter-block-2 {
                    flex: 0 0 72px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        flex: 0 0 3.75vw;
                    }
                }
                &.f-filter-block-3 {
                    flex: 0 0 auto;
                    margin-right: 0;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        flex: 0 0 auto;
                    }
                }
                .ant-select {
                    width: 100%;
                    position: relative;
                    &.ant-select-focused {
                        .ant-select-selector {
                            box-shadow: none;
                        }
                    }
                    &.ant-select-open {
                        .ant-select-arrow {
                            transform: rotate(90deg);
                        }
                    }
                    .ant-select-selector {
                        border: 1px solid ${Colors.transparent};
                        background-color: ${Colors.transparent};
                        padding: 0;
                        height: unset;
                        align-items: center;
                        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                            height: 1.667vw;
                        }
                        .ant-select-selection-item {
                            font-family: ${Fonts.titleFont};
                            font-size: 14px;
                            font-weight: 700;
                            color: ${Colors.white};
                            padding-right: 20px;
                            line-height: 48px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: 1.25vw;
                                line-height: 2.25;
                            }
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                font-size: 0.729vw;
                            }
                        }
                        .ant-select-selection-search {
                            left: 0;
                            right: 0;
                        }
                    }
                    .ant-select-arrow {
                        font-size: 16px;
                        color: ${Colors.white};
                        transition: all 0.3s ease;
                        right: 5px;
                        margin-top: -5px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin-top: -6px;
                            font-size: 0.833vw;
                            transform: rotate(-90deg);
                        }
                    }
                }
            }
        }
        .footer-copy-right {
            font-size: 12px;
            text-align: center;
            color: ${rgba(Colors.white, 0.5)};
            margin-top: 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                font-size: 11px;
                margin-top: 0;
                position: absolute;
                left: 50%;
                bottom: 0.26vw;
                transform: translateX(-50%);
            }
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                /* font-size: 0.625vw; */
                font-size: 12px;
            }
        }
    }
`;

import { rgba } from 'polished';
import styled from 'styled-components';
import { Colors, Fonts, Images, MediaBreakpoints } from '../../theme';

export const AfterBeforeCmp = styled.section<any>`
    &.after-before-section {
        margin: 10vh auto 4vh auto;
        margin-bottom: 30vw;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-bottom: 0;
            margin: 0;
            padding: 2.688vw 0 4.688vw 0;
        }
        .after-before-container {
            padding: 60px 14px;
            border-radius: 22px;
            background: ${Colors.white};
            box-shadow: 0px -0.26vw 1.25vw rgba(102, 107, 116, 0.07);
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                padding: 2.604vw 4.167vw;
                margin: 0 10.411vw;
                border-radius: 1.146vw;
            }
            .after-before-wrapper {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                    margin-right: 2.603vw;
                }
                .after-before-content-block {
                    width: 100%;
                    margin-bottom: 10vw;
                    text-align: center;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-bottom: 20px;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                        max-width: 18.75vw;
                        margin-bottom: 0;
                        text-align: left;
                    }
                    .sec-sub-title {
                        font-size: 24px;
                        line-height: 35px;
                        margin: 0 0 16px 0;
                        text-align: center;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            font-size: 1.8vw;
                            line-height: 2.2vw;
                            margin: 0 0 1vw 0;
                            text-align: left;
                        }
                    }
                    .after-before-text-block {
                        margin-bottom: calc(1vw + 20px);
                        text-align: center;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            margin-bottom: 20px;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                            margin-bottom: 3.75vw;
                        }
                        p {
                            font-size: 14px;
                            line-height: 18px;
                            color: ${Colors.gray50};
                            text-align: left;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                font-size: 1vw;
                                line-height: 1.3vw;
                            }
                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                    .btn-turn-photo {
                        width: 268px;
                        font-family: ${Fonts.titleFont};
                        font-weight: normal;
                        box-shadow: 0 10px 10px -8px rgb(238 66 102 / 40%), 0 5px 10px -8px rgb(250 94 126 / 40%);
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            width: unset;
                            border-radius: 0.729vw;
                        }
                    }
                }
            }

            .after-before-img-block {
                border-radius: 22px;
                overflow: hidden;
                position: relative;
                /* height: 92.8vw; */
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    height: 26.042vw;
                    border-radius: 1.146vw;
                }

                > div:not(.swiper-text-block, .mobile-dobule-arrow-row) {
                    /* height: 92.8vw !important; */
                    position: relative;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        height: 26.042vw !important;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        height: 8.854vw;
                        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
                    }
                    > :nth-child(3) {
                        &::before,
                        &::after {
                            position: absolute;
                            content: '';
                            width: 13px;
                            height: 8px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        &::before {
                            top: -1px;
                            background: url(${Images.AfterBeforeTopCurve?.src}) no-repeat center top;
                        }
                        &::after {
                            bottom: -1px;
                            background: url(${Images.AfterBeforeBtmCurve?.src}) no-repeat center top;
                        }
                    }
                    > :nth-child(4),
                    > :nth-child(5) {
                        z-index: 3;
                        > div {
                            font-family: ${Fonts.titleFont};
                            font-size: 14px;
                            font-weight: 700;
                            top: unset !important;
                            transform: translate(0, 0) !important;
                            line-height: 19px;
                            bottom: 10px;
                            left: 7px !important;
                            border-radius: 15px;
                            padding: 5px 16px !important;
                            text-transform: capitalize;
                            color: ${Colors.white};
                            opacity: 1 !important;
                            background-color: ${rgba(Colors.gray120, 0.2)} !important;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                font-size: 0.729vw;
                                line-height: 0.729vw;
                                bottom: 0.833vw;
                                left: 0.833vw !important;
                                padding: 0.521vw 0.885vw !important;
                            }
                        }
                    }
                    > :nth-child(5) {
                        > div {
                            left: unset !important;
                            right: 0.833vw !important;
                        }
                    }
                }

                .swiper-text-block {
                    position: absolute;
                    left: 50%;
                    bottom: 1.406vw;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 3;
                    display: none;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: flex;
                    }
                    .text-block-wrap {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .text-block {
                            font-family: ${Fonts.titleFont};
                            color: ${Colors.white};
                            font-size: 14px;
                            line-height: 35px;
                            font-weight: 700;
                            margin: 0 9px;
                            transition: all 0.5s ease-in;
                            transform: scale(1);
                            animation: SwipeText 1s infinite alternate;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                font-size: 0.729vw;
                                line-height: 1.823vw;
                            }
                        }
                        .icon-arrow {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0 1px;
                            animation: ArrowAnim 1s infinite alternate;
                        }
                        @keyframes SwipeText {
                            0% {
                                transform: scale(1);
                                margin: 0 3px;
                            }
                            100% {
                                transform: scale(1.1);
                                margin: 0 9px;
                            }
                        }
                        @keyframes ArrowAnim {
                            0% {
                                /* transform: scale(1); */
                                margin: 0 0;
                            }
                            100% {
                                /* transform: scale(1.1); */
                                margin: 0 2px;
                            }
                        }
                    }
                }
                .mobile-dobule-arrow-row {
                    position: absolute !important;
                    height: auto !important;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    right: 0;
                    display: flex;
                    padding: 0 8px;
                    justify-content: space-between;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: none;
                    }
                    .mobil-icon {
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

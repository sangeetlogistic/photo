import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const HowItWorkBlockCmp = styled.div<any>`
    /* margin: 0 calc((80px + 45px) * -1); */
    /* margin: 0 calc((3.646vw + 2.344vw) * -1); */
    margin: 31px 0 0 0;
    padding: 66px 0 100px;
    border-radius: 12px;
    position: relative;
    z-index: 1;
    background: radial-gradient(50% 50% at 50% 50%, #0c0b0b 0%, #151515 46.87%);
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        margin: 0 calc(((4.167vw) / 2));
        padding: 13vh 3vw;
    }
    .how-it-work-icon {
        content: '';
        position: absolute;
        z-index: -1;
        top: 66px;
        right: 20px;
        width: 35px;
        height: 35px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            top: 5.938vw;
            right: 6.563vw;
            width: 5.208vw;
            height: 5.208vw;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .text-light {
        color: ${Colors.gray10};
    }
    .section-title-block {
        /* margin-bottom: 5.208vw; */
        text-align: left;
        padding: 0 30px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            text-align: center;
            padding: 0;
        }
        h2 {
            font-size: 32px;
            line-height: 35px;
            text-transform: uppercase;
            margin-bottom: 10px;
            font-family: ${Fonts.primaryFont};
            color: ${Colors.white};
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                letter-spacing: 0.052vw;
                font-size: 2.915vw;
                line-height: 1.822vw;
                margin-bottom: 0.729vw;
            }
        }
    }
    .slick-slider {
        margin: 70px 0 24px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin: 7vh 0;
        }
        .slick-track {
            display: flex;
            align-items: center;
            .slick-slide {
                padding: 0;
                > div {
                    /* margin: 0 -1.301vw; */
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin: 0 -1.301vw;
                    }
                    > .slide {
                        position: relative;
                        overflow: hidden;
                        height: 100%;
                        &::before,
                        &::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            width: 45%;
                            z-index: 99;
                            visibility: hidden;
                        }
                        &::after {
                            left: auto;
                            right: 0px;
                            bottom: 70px;
                        }
                        .how-it-work-video,
                        .video-react {
                            border: 0;
                            width: 81.33vw;
                            transform: scale(0.9);
                            border-radius: 10px;
                            background: ${Colors.white};
                            transition: all 0.4s ease-in-out;
                            cursor: pointer;
                            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                width: 32vw;
                                height: 40vh;
                                transform: scale(0.7);
                                border-radius: 0.521vw;
                                transition: transform 0.4s ease-in-out;
                            }
                            .video-react-video,
                            .video-react-poster {
                                border-radius: 10px;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    border-radius: 0.521vw;
                                }
                            }
                            .video-react-control-bar {
                                border-radius: 0 0 10px 10px;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    border-radius: 0 0 0.521vw 0.521vw;
                                }
                            }
                            .video-react-big-play-button {
                                width: 20.267vw;
                                height: 20.267vw;
                                font-size: 9vw;
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    font-size: 4.167vw;
                                    width: 4.583vw;
                                    height: 4.583vw;
                                }
                                &::before {
                                    line-height: 20.267vw;
                                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                        line-height: 4.583vw;
                                    }
                                }
                            }
                        }
                        .create-overlay {
                            &::before,
                            &::after {
                                content: '';
                                position: absolute;
                                left: 0;
                                right: 0px;
                                height: 44.5%;
                                bottom: 7px;
                                visibility: hidden;
                            }
                            &::before {
                                right: 100px;
                            }
                            &:after {
                                bottom: auto;
                                top: 0;
                            }
                        }
                    }
                }
                &.slick-center {
                    z-index: 2;
                    > div {
                        > .slide {
                            &::after,
                            &::before {
                                /* visibility: hidden; */
                                /* z-index: -1; */
                            }
                            .create-overlay {
                                &::before,
                                &::after {
                                    /* visibility: hidden; */
                                    /* z-index: -1; */
                                }
                            }
                            .how-it-work-video,
                            .video-react {
                                transform: scale(1);
                                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                                    transform: scale(1);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .how-it-work-info {
        font-size: 14px;
        margin: 0 auto 36px auto;
        color: ${Colors.gray10};
        @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
            max-width: 270px;
        }
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            width: 70%;
            margin-bottom: 3.646vw;
            font-size: 0.729vw;
            text-align: center;
        }
    }
    .how-it-work-slider-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        .button {
            font-family: ${Fonts.titleFont};
            color: ${Colors.white};
            cursor: pointer;
            font-weight: 600;
            background: none;
            border: 0;
            display: flex;
            font-size: 18px;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            position: relative;
            padding: 0;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                font-size: 1.563vw;
                height: 2.344vw;
            }
            &.how-btn-prev,
            &.how-btn-next {
                /* width: 2.083vw; */
                /* width: 40px; */
                width: 43px;
                height: 43px;
                background-color: ${Colors.gray100};
                border-radius: 50px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    width: auto;
                    height: unset;
                    background-color: ${Colors.transparent};
                }
                .svg-inline--fa {
                    display: block;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: none;
                    }
                }
                img {
                    /* width: 100%; */
                    width: 2.083vw;
                    display: none;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: block;
                    }
                }
            }
        }
        .step-btn-wrap {
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 256px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin: 0 5.052vw;
                min-width: 210px;
            }
            .button {
                letter-spacing: -0.02em;
                color: ${Colors.gray40};
                margin-right: 10px;
                transform-origin: right center;
                transition: all 0.1s ease-in-out;
                min-height: 29px;
                min-width: 58px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-size: 1.563vw;
                    margin-right: 2.083vw;
                    min-height: unset;
                    min-width: unset;
                }
                span {
                    transition: all 0.1s ease-in-out;
                    transform: scale(1);
                    font-size: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        transform: scale(0.8);
                        font-size: 1.563vw;
                    }
                }
                &:last-child {
                    margin-right: 0;
                }
                &:before,
                &:after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    background-color: ${Colors.white};
                    transition: all 0.3s ease-in-out;
                    bottom: 0;
                    border-radius: 0.313vw;
                    display: block;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: block;
                        height: 0.313vw;
                    }
                }
                &:before {
                    left: 0;
                    width: 0;
                }
                &:after {
                    left: calc(100% - 2px);
                    width: 0;
                    transition-duration: 0.2s;
                    transition-delay: 0.4s;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        left: calc(100% - 6px);
                    }
                }
                &.btn-active {
                    font-weight: 700;
                    color: ${Colors.white};
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        padding-bottom: 0.99vw;
                    }
                    span {
                        transform: scale(1);
                        font-size: 18px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            transform: scale(1);
                            font-size: 1.563vw;
                        }
                    }
                    &:before {
                        width: calc(100% - 2px);
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: calc(100% - 0.677vw);
                        }
                    }
                    &:after {
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: 0.313vw;
                        }
                    }
                }
            }
        }
    }
`;

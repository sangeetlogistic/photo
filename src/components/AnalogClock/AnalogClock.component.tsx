import { rgba } from 'polished';
import styled from 'styled-components';

import { Colors, MediaBreakpoints } from '../../theme';

export const AnalogClockBlock = styled.div`
    text-align: center;
    margin-bottom: 1.667vw;
    .analog-clock-wrapper {
        .analog-clock-outer {
            width: 82px;
            height: 82px;
            margin: 0 auto;
            padding: 7px;
            background: ${Colors.white};
            border: 1px solid ${Colors.featureHvrBg};
            border-radius: 50%;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: 6.25vw;
                height: 6.25vw;
                padding: 0.521vw;
            }
            .analog-clock {
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 1px solid ${Colors.featureHvrBg};
                box-shadow: -3px 7px 11px rgba(40, 52, 77, 0.08), inset 0px 0px 8px #bdcff2;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    box-shadow: -0.156vw 0.365vw 0.573vw rgba(40, 52, 77, 0.08), inset 0px 0px 0.417vw #bdcff2;
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0.104vw;
                    height: 0.104vw;
                    background-color: ${Colors.featureHvrBg};
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                }
                .analog-clock-dot {
                    width: 0.104vw;
                    height: 100%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1;
                    &::before,
                    &::after {
                        content: '';
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        background-color: ${Colors.featureHvrBg};
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            width: 0.104vw;
                            height: 0.104vw;
                        }
                    }
                    &::before {
                        top: 4px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            top: 0.365vw;
                        }
                    }
                    &::after {
                        bottom: 4px;
                        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                            bottom: 0.365vw;
                        }
                    }
                    &.analog-clock-dot-2 {
                        transform: rotate(90deg);
                    }
                }
                .analog-clock-inner-radial {
                    position: absolute;
                    left: 16px;
                    right: 16px;
                    top: 16px;
                    bottom: 16px;
                    border-radius: 50%;
                    border: 0.5px solid ${Colors.featureHvrBg};
                    z-index: 1;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        left: 1.25vw;
                        right: 1.25vw;
                        top: 1.25vw;
                        bottom: 1.25vw;
                    }
                }
                .hand {
                    position: absolute;
                    top: 0%;
                    left: 50%;
                    width: 1px;
                    height: 50%;
                    background-color: ${Colors.black};
                    transform-origin: bottom;
                    z-index: 3;
                    &.hour-hand {
                        transform: rotate(0deg);
                        background-color: ${Colors.primary};
                        top: 20%;
                        height: 30%;
                    }

                    &.minute-hand {
                        transform: rotate(0deg);
                        width: 1px;
                        background-color: ${Colors.blueMenu};
                        top: 10%;
                        height: 40%;
                    }

                    &.second-hand {
                        transform: rotate(0deg);
                        width: 1px;
                        background: ${rgba(Colors.reviewCardbrd, 0.5)};
                        top: 10%;
                        height: 40%;
                    }
                }
            }
        }
    }

    .title {
        font-weight: 400;
        line-height: 1.823vw;
        text-transform: uppercase;
        color: ${Colors.gray80};
        margin-bottom: 0;
        margin-top: 8px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-top: 0;
        }
    }
`;

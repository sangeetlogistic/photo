import styled from 'styled-components';

import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const FaqPageMain = styled.section`
    padding-top: ${PagePdngTopEqualHeaderHeight};
    min-height: 100vh;
    .faq-content {
        padding: 50px 10px 25px 10px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding: 2.479vw 1.25vw 4vw 2.25vw;
        }
        .faq-content-container {
            padding: 0 12px;
        }
        .responsive-video {
            border: 0;
            width: 100%;
            height: 50vh;
        }
        h2 {
            font-size: 24px;
            margin-bottom: 1rem;
            padding-left: 0;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: ${convertPxToVw('56')}vw;
                line-height: ${convertPxToVw('35')}vw;
                margin-bottom: 1.25vw;
            }
        }
        .gutter-row {
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                flex-wrap: nowrap;
            }
        }
        .video_left_block {
            max-width: 100%;
            padding-left: 10px;
            padding-right: 10px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding-right: 40px;
            }
            .video-block {
                position: relative;
                padding-top: 1rem;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding-top: 1.5vw;
                }
                .video-block-inner {
                    position: sticky;
                    top: 0;
                    h2 {
                        font-family: ${Fonts.titleFont};
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            padding-left: 2.3vw;
                        }
                    }
                    .how-it-work-steps-block {
                        display: flex;
                        padding-top: 1rem;
                        flex-wrap: wrap;
                        margin: 0 -12px;
                        margin-bottom: 20px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            padding-top: 1.25vw;
                            margin: 0 -0.2vw;
                        }
                        .how-it-work-steps-block-step {
                            padding: 0 0.2vw;
                            display: block;
                            width: 50%;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: 25%;
                            }
                            .how-it-work-steps-block-step-inner {
                                background: ${Colors.white};
                                box-shadow: 0px 0px 37px rgba(16, 18, 35, 0.03);
                                border-radius: 24px;
                                cursor: pointer;
                                position: relative;
                                margin: 10px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    padding: 0 0.2vw;
                                    margin: 0;
                                }
                            }
                            img {
                                width: 100%;
                                height: auto;
                                opacity: 1;
                                transition: all 0.5s;
                            }
                            .how-it-work-steps-thumb-text {
                                position: absolute;
                                height: 100%;
                                top: 0;
                                left: 0;
                                right: 0;
                                opacity: 0;
                                transition: all 0.5s;
                                cursor: pointer;
                                border-radius: 10px;
                                padding: 1rem;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    border-radius: 1.4vw;
                                }
                                p {
                                    font-size: 12px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: 0.65vw;
                                        line-height: 0.98vw;
                                        margin: 0;
                                    }
                                }
                            }
                            &:hover {
                                .how-it-work-steps-block-step-inner {
                                    > img {
                                        opacity: 0;
                                    }
                                    .how-it-work-steps-thumb-text {
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .our-faq-card {
            background-color: ${Colors.white};
            border-radius: 10px;
            padding: 14px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                border-radius: 1vw;
                padding: 1.5vw 2.4vw 2vw;
            }
            h2 {
                font-family: ${Fonts.titleFont};
                margin-bottom: 16px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin-bottom: 1vw;
                }
            }
            .ant-collapse {
                &.our-faq-collapse-block {
                    --thumbBG: #969699;
                    --scrollbarBG: #dedee0;
                    overflow: auto;
                    scrollbar-width: thin;
                    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-left: -0.6vw;
                        max-height: calc(100vh - 5vw);
                    }
                    &::-webkit-scrollbar {
                        width: 11px;
                    }
                    &::-webkit-scrollbar-track {
                        background: var(--scrollbarBG);
                        border-radius: 6px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: var(--thumbBG);
                        border-radius: 6px;
                        border: 3px solid var(--scrollbarBG);
                    }
                }
                > .ant-collapse-item {
                    > .ant-collapse-header {
                        color: ${Colors.gray110};
                        display: flex;
                        align-items: center;
                        padding: 10px 18px 10px 22px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            padding: 0.729vw 18px 0.729vw 22px;
                            line-height: 0.95vw;
                        }
                        > .ant-collapse-expand-icon {
                            display: flex;
                            align-items: center;
                            .ant-collapse-arrow {
                                transition: all 0.3s ease;
                                font-size: 16px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: 1.25vw;
                                }
                            }
                        }
                        > .ant-collapse-header-text {
                            font-family: ${Fonts.titleFont};
                            font-weight: 700;
                            font-size: 18px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: 1.25vw;
                            }
                        }
                    }
                    &.ant-collapse-item-active {
                        > .ant-collapse-header {
                            > .ant-collapse-expand-icon {
                                .ant-collapse-arrow {
                                    transform: rotate(90deg);
                                }
                            }
                        }
                    }
                    .ant-collapse-content {
                        .ant-collapse-content-box {
                            padding: 16px 0;
                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                font-size: 14px;
                            }
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                padding: 1.041vw 0;
                            }
                            ul,
                            ol {
                                padding-left: 20px;
                                li {
                                    margin-bottom: 10px;
                                }
                            }
                        }
                        .ant-collapse {
                            .ant-collapse-item {
                                margin-bottom: 10px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    margin-bottom: 0.3vw;
                                }
                                .ant-collapse-header {
                                    background-color: ${Colors.pageContetBg};
                                    border-radius: 6px;
                                    display: inline-flex;
                                    padding: 10px 18px 10px 22px;
                                    width: 100%;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        width: auto;
                                        padding: 0.729vw 18px 0.729vw 22px;
                                        line-height: 0.95vw;
                                    }

                                    > .ant-collapse-expand-icon {
                                        display: flex;
                                        align-items: center;
                                        color: ${Colors.blueMenu};
                                        .ant-collapse-arrow {
                                            transition: all 0.3s ease;
                                            font-size: 14px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                font-size: 0.8vw;
                                            }
                                        }
                                    }
                                    > .ant-collapse-header-text {
                                        font-weight: 600;
                                        color: ${Colors.gray80};
                                        font-size: 14px;
                                        line-height: 20px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: 0.8vw;
                                            line-height: 0.95vw;
                                        }
                                    }
                                }
                                &.ant-collapse-item-active {
                                    > .ant-collapse-header {
                                        > .ant-collapse-expand-icon {
                                            .ant-collapse-arrow {
                                                font-size: 14px;
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    font-size: 1.1vw;
                                                }
                                            }
                                        }
                                        > .ant-collapse-header-text {
                                            color: ${Colors.gray120};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

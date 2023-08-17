import styled from 'styled-components';
import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts } from '../../theme';

export const FaqPageMain = styled.section`
    padding-top: ${PagePdngTopEqualHeaderHeight};
    min-height: 100vh;
    .faq-content {
        /* display: flex; */
        padding: 2.479vw 0.25vw 4vw 2.25vw;
        .faq-content-container {
            padding: 0 12px;
        }
        .responsive-video {
            border: 0;
            width: 100%;
            height: 50vh;
        }
        h2 {
            font-size: 2.4vw;
            line-height: 2.2vw;
            margin-bottom: 1.25vw;
        }

        .video-block {
            padding-top: 1.5vw;
            position: relative;
            .video-block-inner {
                position: sticky;
                top: 0;
                h2 {
                    padding-left: 2.3vw;
                }
                .how-it-work-steps-block {
                    padding-top: 1.25vw;
                    display: flex;
                    margin: 0 -0.2vw;
                    .how-it-work-steps-block-step {
                        padding: 0 0.2vw;
                        display: block;
                        width: 25%;
                        .how-it-work-steps-block-step-inner {
                            padding: 0 0.2vw;
                            background: ${Colors.white};
                            box-shadow: 0px 0px 37px rgba(16, 18, 35, 0.03);
                            border-radius: 24px;
                            cursor: pointer;
                            position: relative;
                        }
                        img {
                            width: 100%;
                            height: auto;
                            opacity: 1;
                            transition: all 0.5s;
                        }
                        .how-it-work-steps-thumb-text {
                            padding: 1.55vw;

                            position: absolute;
                            height: 100%;
                            top: 0;
                            left: 0;
                            right: 0;
                            opacity: 0;
                            transition: all 0.5s;
                            cursor: pointer;
                            border-radius: 1.4vw;
                            p {
                                font-size: 0.65vw;
                                line-height: 0.98vw;
                                margin: 0;
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
        .our-faq-card {
            border-radius: 1vw;
            padding: 1.5vw 2.4vw 2vw;
            background-color: ${Colors.white};
            h2 {
                margin-bottom: 1vw;
            }
            .ant-collapse {
                &.our-faq-collapse-block {
                    --thumbBG: #969699;
                    --scrollbarBG: #dedee0;
                    margin-left: -0.6vw;
                    max-height: calc(100vh - 5vw);
                    overflow: auto;
                    scrollbar-width: thin;
                    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
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
                        padding: 0.729vw 18px 0.729vw 22px;
                        line-height: 0.95vw;
                        > .ant-collapse-expand-icon {
                            display: flex;
                            align-items: center;
                            .ant-collapse-arrow {
                                font-size: 1.25vw;
                                transition: all 0.3s ease;
                            }
                        }
                        > .ant-collapse-header-text {
                            font-family: ${Fonts.titleFont};
                            font-size: 1.25vw;
                            font-weight: 700;
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
                            padding: 1.041vw 0;
                        }
                        .ant-collapse {
                            .ant-collapse-item {
                                margin-bottom: 0.3vw;
                                .ant-collapse-header {
                                    background-color: ${Colors.pageContetBg};
                                    border-radius: 6px;
                                    display: inline-flex;
                                    padding: 0.729vw 18px 0.729vw 22px;
                                    line-height: 0.95vw;

                                    > .ant-collapse-expand-icon {
                                        display: flex;
                                        align-items: center;
                                        color: ${Colors.blueMenu};
                                        .ant-collapse-arrow {
                                            font-size: 0.8vw;
                                            transition: all 0.3s ease;
                                        }
                                    }
                                    > .ant-collapse-header-text {
                                        font-size: 0.8vw;
                                        line-height: 0.95vw;
                                        font-weight: 700;
                                        color: ${Colors.gray80};
                                    }
                                }
                                &.ant-collapse-item-active {
                                    > .ant-collapse-header {
                                        > .ant-collapse-expand-icon {
                                            .ant-collapse-arrow {
                                                font-size: 1.1vw;
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
    }
`;

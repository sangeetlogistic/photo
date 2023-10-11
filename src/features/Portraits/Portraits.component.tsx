import styled from 'styled-components';
import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const HeroSection = styled.section<{ detailPageCoverImage: string }>`
    position: relative;
    z-index: 1000;
    background-color: ${Colors.transparent};
    background: ${(props) => (props.detailPageCoverImage ? `url('${props.detailPageCoverImage}') ` : '')};
    background-size: 235%;
    background-position: center 50px;
    height: 110vw;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        height: 75vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
    }
    .hero__container {
        padding-top: 96px;
        height: 100%;
        @media (max-width: ${`${MediaBreakpoints.upMd}px`}) {
            background: linear-gradient(180deg, rgba(22, 22, 38, 0.65) -22.69%, rgba(20, 20, 29, 0) 100%);
        }
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            padding-top: ${PagePdngTopEqualHeaderHeight};
        }
    }
    .hnd-image-outer {
        width: 180px;
        position: absolute;
        z-index: 3;
        bottom: 10px;
        right: -40px;
        display: block;
        margin: 0;
        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
            bottom: -4.6875vw;
            right: 10vw;
            width: unset;
            max-width: 20vw;
            z-index: 1;
        }
        img {
            width: 100%;
        }
    }
`;
export const PortraitsHeroSectionCmp = styled.div`
    padding: 0 3.646vw;
    /* height: 24.479vw; */
    height: 100%;
    color: ${Colors.white};
    position: relative;
    z-index: 1;
    .hero-content-wrapp {
        display: flex;
        height: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            align-items: center;
        }
        .hero-texts-block {
            text-align: center;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                max-width: 30.2vw;
                text-align: left;
            }
            h1 {
                font-family: ${Fonts.titleFont};
                color: ${Colors.white};
                font-size: 16px;
                line-height: 17px;
                font-weight: 500;
                margin: 0 0 2px 0;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-family: ${Fonts.titleFontLight};
                    font-size: 2.083vw;
                    font-weight: 200;
                    margin: 0 0 0.625vw 0;
                    line-height: 1.823vw;
                }
            }
            .hero-sub-text {
                margin: 0;
                @media (max-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: 12px;
                    margin-top: 5px;
                    line-height: 15px;
                }
            }
        }
        .btn-row {
            text-align: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                bottom: 70px;
                .ant-btn-primary {
                    height: 3.229vw;
                }
            }
        }
    }
`;
export const PageBackground = styled.div<{ backgroundRepeatImage: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.backgroundRepeatImage ? `url('${props.backgroundRepeatImage}') repeat-y` : '')};
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        background-size: 130%;
        width: 100%;
        height: 100%;
    }
    .page-hero {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const PortraitsFAQCmp = styled.section`
    padding-top: 3.8vw;
    .portraits-content-wrapper {
        position: relative;
        background: ${Colors.pageContetBg};
        border-radius: 0.6vw 0.6vw 0 0;
        padding: 5vw;
        z-index: 1;
        color: ${Colors.gray85};
        font-size: 18px;
        line-height: 30px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin: 0 auto;
        }
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            max-width: 65vw;
            padding: 6.5vw 12vw;
        }
        .social-menu {
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                position: absolute;
                left: 3.645vw;
            }
            .content-ul {
                margin: 10px 0;
                list-style: none;
                padding: 0;
                li {
                    margin-bottom: 16px;
                    padding: 6px;
                    display: inline-block;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        padding: 0;
                        display: block;
                    }
                    &::before {
                        display: none;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .ant-btn-circle {
                        padding: 0;
                        display: flex;
                        align-items: center;
                        width: 18px;
                        height: 18px;
                        justify-content: center;
                        min-width: unset;
                        font-size: 11px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            width: 2vw;
                            height: 2vw;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        h2 {
            font-size: 26px;
            line-height: 36px;
            font-family: ${Fonts.primaryFont};
            letter-spacing: -0.04em;
            color: ${Colors.gray110};
            margin-bottom: 1.2vw;
            font-weight: 700;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 2vw;
                line-height: 2.4vw;
            }
        }
        h3 {
            font-family: ${Fonts.primaryFont};
            font-weight: 700;
            font-size: 22px;
            line-height: 32px;
            margin-top: 40px;
            margin-bottom: 15px;
            color: ${Colors.gray85};
            letter-spacing: -0.04em;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 30px;
                line-height: 42px;
            }
        }
        h4 {
            font-size: 24px;
            font-weight: 700;
            color: ${Colors.black};
            margin: 0 0 10px;
        }
        p {
            margin-top: 0;
            margin-bottom: 15px;
            letter-spacing: 0.09px;
        }
        ol {
            padding-left: 25px;
            list-style: decimal;
            li {
                font-size: 18px;
                line-height: 32px;
                margin-bottom: 1.041vw;
                &::marker {
                    font-weight: 700;
                }
            }
        }
        ul {
            margin: 10px 0;
            list-style: none;
            padding: 0;
            li {
                padding-left: 20px;
                position: relative;
                margin-bottom: 1.041vw;
                &:before {
                    content: '';
                    position: absolute;
                    top: 13px;
                    left: 0;
                    width: 7px;
                    height: 7px;
                    background-color: rgb(57, 57, 57);
                    border-radius: 50px;
                }
            }
        }
        .portraits-faq-block {
            margin-top: 40px;
        }
        .portraits-accordian {
            font-size: 16px;
            /* background: ${Colors.white}; */
            border: 0;
            .ant-collapse-item {
                margin-top: 20px;
                border-color: #44596b;
                .ant-collapse-header {
                    font-size: 21px;
                    font-weight: 700;
                    padding: 20px 30px 20px 0;
                    color: ${Colors.gray120};
                    letter-spacing: -0.04em;
                    &::before,
                    &::after {
                        content: '';
                        height: 2px;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transition: all 0.2s ease-in-out;
                        width: 14px;
                        background-color: #44596b;
                    }
                    &::before {
                        transform: rotate(90deg);
                    }
                    .ant-collapse-expand-icon {
                        display: none;
                    }
                }
                .ant-collapse-content {
                    color: ${Colors.gray110};
                    background: ${Colors.transparent};
                    border-color: ${Colors.transparent};
                    .ant-collapse-content-box {
                        padding: 0;
                        padding-bottom: 16px;
                        font-size: 18px;
                        line-height: 30px;
                        color: #393939;
                        letter-spacing: 0.09px;
                        *:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
                &.ant-collapse-item-active {
                    .ant-collapse-header {
                        &::before {
                            transform: rotate(0deg);
                        }
                    }
                }
                ~ .ant-collapse-item {
                    /* margin-top: 20px; */
                }
            }
        }
    }
`;

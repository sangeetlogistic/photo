import styled from 'styled-components';
import { rgba } from 'polished';

import { Colors, MediaBreakpoints } from '../../../theme';
import { MobileHeaderHeight, PagePdngTopEqualHeaderHeight } from '../../../constants/general';

export const MainHeader = styled.header`
    &.header-top {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        /* z-index: 3; */
        z-index: 1020;
        padding: 0 7px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            padding: 0 0.521vw;
        }

        .header-container {
            padding: 0 30px;
            background: ${Colors.white};
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 0 0 14px 14px;
            position: relative;
            height: ${MobileHeaderHeight};
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                padding: 0 3.123vw;
                height: ${PagePdngTopEqualHeaderHeight};
                border-radius: 0.729vw;
            }
            .mobile-menu-back-btn {
                color: ${Colors.gray120};
                padding: 20px 0;
                background: transparent;
                border: 0;
                font-size: 22px;
                height: auto;
                display: none;
                cursor: pointer;
            }
            .site-logo {
                cursor: pointer;
                padding: 1.458vw 0;
                width: 100%;
                max-width: 125px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    max-width: 9vw;
                }
                .lazy-load-image-loaded {
                    width: 100%;
                }
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .p2p-menu {
                width: 100%;
            }
            .p2p-menu {
                margin-left: auto;
                flex: auto;
                display: flex;
                justify-content: flex-end;
                height: 100%;
                width: 100%;
                .p2p-menu-wrap {
                    width: 100%;
                }
                .p2p-menu-mobile-wrap {
                    display: flex;
                    justify-content: flex-end;
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        display: none;
                    }
                    .ant-menu-item {
                        font-size: 16px;
                    }
                }
            }
            .top-menu {
                display: flex;
                border-bottom: 0;
                margin-left: auto;
                align-items: center;
                height: 100%;
                justify-content: flex-end;
                &::after,
                &::before {
                    display: none;
                }
                > .ant-menu-item:not(:last-child),
                .ant-menu-submenu:not(:last-child) {
                    margin-right: 3vw;
                }
                > .ant-menu-item,
                .ant-menu-submenu {
                    font-size: 0.85vw;
                    font-weight: 600;
                    /* line-height: 1.042vw; */
                    line-height: 1.145vw;
                    padding: 0;
                    margin: 0;
                    top: unset;
                    bottom: unset;
                    color: ${Colors.gray80};
                    border-left: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.1);
                    position: relative;
                    > .ant-menu-title-content {
                        font-size: 0.85vw;
                        line-height: 1.145vw;
                    }
                    &::after,
                    &::before {
                        content: '';
                        position: absolute;
                        border: 0;
                        height: 0.052vw;
                        border-radius: 50%;
                        background-color: ${Colors.primary};
                        bottom: -0.156vw;
                        transition: all 0.3s ease-in;
                        width: 0;
                    }
                    &::after {
                        left: 0;
                    }
                    &::before {
                        right: 0;
                        transition-delay: 0.1s;
                    }
                    &.ant-menu-submenu-open,
                    &.ant-menu-submenu-active,
                    &.ant-menu-item-active,
                    &.p2p-menu-item-selected {
                        /* color: ${Colors.gray100}; */
                        color: ${Colors.gray80};
                        .ant-menu-title-content {
                            color: ${Colors.gray80} !important;
                        }
                        &::before {
                            width: 2px;
                        }
                        &::after {
                            width: calc(100% - 6px);
                        }
                        .ant-menu-title-content {
                            color: ${Colors.gray100};
                        }
                    }
                    &.user-icon {
                        padding: 0;
                        display: flex;
                        align-items: center;
                        &::after,
                        &::before {
                            display: none;
                        }
                        .ant-menu-title-content {
                            .lazy-load-image-background {
                                width: 2.448vw;
                                height: 2.5vw;
                                display: flex !important;
                                align-items: center;
                                justify-content: center;
                                color: ${Colors.blueMenu};
                                background-color: ${Colors.white};
                                box-shadow: 0vw 0.208vw 1.77vw rgb(16 18 35 / 10%);
                                border-radius: 0.885vw;
                            }
                            img {
                                width: 0.75vw;
                            }
                        }
                    }
                    &.get-started-btn-li {
                        display: flex;
                        align-items: center;
                        line-height: normal;
                        width: 8.79vw;
                        height: 2.49vw;
                        background-color: ${rgba(Colors.white, 0.6)};
                        margin-right: 0.8vw;
                        margin-left: 0.96vw;
                        border-radius: 0.75vw;
                        box-shadow: 0 0.729vw 1.353vw -0.469vw rgb(91 135 224 / 40%), 0 0.416vw 0.521vw -0.26vw #5b87e066;
                        &::after,
                        &::before {
                            display: none;
                        }
                        .ant-btn {
                            letter-spacing: 0.008vw;
                            font-weight: 600;
                            font-size: 0.85vw;
                            width: 8.79vw;
                            height: 2.49vw;
                            padding: 0;
                            border-radius: 0.729vw;
                            box-shadow: 0 0.156vw 0.365vw ${rgba(Colors.secondary, 0.3)};
                        }
                        &.header-cta {
                            right: calc((0.521vw + 3.123vw + 0.8vw) - 0.75vw);
                            position: fixed;
                            box-shadow: 0 0 0vw 1.041vw rgb(255 255 255 / 60%);
                            &.hide-getStartedCTA {
                                visibility: hidden;
                                opacity: 0 !important;
                            }
                        }
                    }
                }
            }
            .mobile-top-menu {
                display: flex;
                align-items: center;
                border: 0;
                justify-content: end;
                .ant-menu-item,
                .ant-menu-submenu,
                .mobile-user-icon {
                    &:before,
                    &:after {
                        display: none;
                    }
                    &.ant-menu-submenu-active {
                        &:before,
                        &:after {
                            display: none;
                        }
                    }
                }

                .ant-menu-item,
                .ant-menu-submenu {
                    padding: 0 2px;
                }
                .mobile-user-icon {
                    .ant-menu-title-content {
                        span {
                            width: 30px;
                            height: 30px;
                            display: flex;
                            .lazy-load-image-background {
                                display: flex !important;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                    }
                }
                .mobile-toggle-icon {
                    .mega-toggle-animated-box {
                        position: relative;
                        width: 30px;
                        height: 30px;
                        display: block;
                        &:before,
                        &:after {
                            content: '';
                            position: absolute;
                            height: 4px;
                            background-color: ${Colors.gray120};
                            border-radius: 8px;
                            right: 0;
                            transition: all 0.2s ease-in-out;
                            transform-origin: center center;
                        }
                        &:before {
                            width: 22px;
                            top: 8px;
                        }
                        &:after {
                            top: 16px;
                            width: 16px;
                        }
                    }
                    &.ant-menu-submenu-open {
                        .mega-toggle-animated-box {
                            &:before,
                            &:after {
                                top: 50%;
                                width: 22px;
                            }
                            &:before {
                                transform: rotate(45deg);
                            }
                            &:after {
                                transform: rotate(-45deg);
                            }
                        }
                    }
                }
            }
        }
        &.mobile-menu-open {
            position: fixed;
            .header-container {
                box-shadow: unset;
                .mobile-user-icon {
                    display: none;
                }
            }

            &.mobile-detail-menu {
                .site-logo {
                    display: none;
                }
                .mobile-menu-back-btn {
                    display: flex;
                }
            }
        }
    }
`;

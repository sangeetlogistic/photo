import styled from 'styled-components';
import { convertPxToVw } from '../../utils/func';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const BlogThemeCmp = styled.div`
    &.p2p_blog_content {
        background-color: ${Colors.pageContetBg};
        margin-top: 90px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin-top: 5.55vw;
            padding: 2vw 0;
        }
        .blog_container {
            margin: 0 auto;
            max-width: calc(100% - 50px);
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                max-width: calc(100% - 115px);
            }
        }
        .blog_left-innr {
            box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
            background-color: ${Colors.white};
            border-radius: 32px;
            padding: 16px 24px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                border-radius: 1.6vw;
                padding: ${convertPxToVw('32')}vw ${convertPxToVw('24')}vw;
            }
            img {
                width: 90%;
                margin: 0 auto;
            }
            .search_input_block {
                position: relative;
                margin-top: 40px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin-top: ${convertPxToVw('40')}vw;
                }
                .search_input {
                    border: 1px solid rgba(217, 224, 242, 0.5);
                    border-radius: 24px;
                    background: ${Colors.pageContetBg};
                    color: #18181a;
                    width: 100%;
                    padding: 10px 16px;
                    font-size: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        border-radius: ${convertPxToVw('24')}vw;
                        font-size: ${convertPxToVw('12')}vw;
                        padding: ${convertPxToVw('12')}vw ${convertPxToVw('16')}vw;
                    }
                }
                .icon-top {
                    position: absolute;
                    color: ${Colors.gray40};
                    top: 8px;
                    font-size: 18px;
                    right: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        top: ${convertPxToVw('9')}vw;
                        right: ${convertPxToVw('14')}vw;
                    }
                }
            }
        }
        .blog-left-tags {
            margin-top: 0.2vw;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            .tags_button {
                border: 1px solid rgba(217, 224, 242, 0.5);
                background: ${Colors.white};
                color: ${Colors.gray80};
                font-weight: 400;
                font-family: 'Source Sans Pro', sans-serif;
                display: inline-block;
                transition: all 0.4s ease-in-out;
                width: auto;
                cursor: pointer;
                border-radius: 24px;
                font-size: 12px;
                padding: 6px 10px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    border-radius: ${convertPxToVw('24')}vw;
                    font-size: ${convertPxToVw('12')}vw;
                    padding: ${convertPxToVw('6')}vw ${convertPxToVw('10')}vw;
                }
                &:hover,
                &.active {
                    background: #5b87e0;
                    color: ${Colors.white};
                }
            }
        }
        .blog_right-innr {
            .blog_right--top {
                display: none;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    .blog-top-left {
                        width: 70%;
                        h2 {
                            color: #3c3c40;
                            font-size: 14px;
                            text-transform: uppercase;
                            font-family: ${Fonts.titleFont};
                            margin-bottom: 12px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('16')}vw;
                                margin-bottom: ${convertPxToVw('8')}vw;
                            }
                        }
                        .ant-form-item-control-input-content {
                            position: relative;
                            .subscribe_form-conrol {
                                background: ${Colors.pageContetBg};
                                box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
                                border-radius: 0.4vw;
                                border: 1px solid ${Colors.reviewCardbrd};
                                width: 100%;
                                color: #807e8c;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    padding: ${convertPxToVw('20')}vw ${convertPxToVw('26')}vw;
                                    font-size: ${convertPxToVw('14')}vw;
                                }
                            }
                            .icon-right {
                                position: absolute;
                                color: ${Colors.black};
                                top: 8px;
                                font-size: 20px;
                                right: 12px;
                                cursor: pointer;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: ${convertPxToVw('36')}vw;
                                    top: ${convertPxToVw('5')}vw;
                                    right: ${convertPxToVw('14')}vw;
                                }
                            }
                        }
                    }
                    .blog-top-right {
                        width: 30%;
                        ul {
                            list-style: none;
                            display: flex;
                            margin: 0;
                            gap: 14px;
                            justify-content: flex-end;
                            li {
                                a {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background: ${Colors.white};
                                    width: 45px;
                                    height: 45px;
                                    border-radius: 15px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        border-radius: 0.75vw;
                                        width: ${convertPxToVw('59')}vw;
                                        height: ${convertPxToVw('59')}vw;
                                    }
                                    img {
                                        width: auto;
                                        max-height: 1.25vw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .blog_content_main {
                @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
                    margin-top: 2rem;
                }
                .blog_content-gap {
                    row-gap: 40px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        row-gap: 70px;
                    }
                }
                .blog_list {
                    .blog-img {
                        background-color: ${Colors.white};
                        height: 400px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            height: ${convertPxToVw('428')}vw;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: fill;
                            object-position: center;
                        }
                    }
                    .blog-content {
                        margin-top: 15px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-top: 0.8vw;
                        }
                        .blog-title {
                            color: ${Colors.black};
                            font-family: ${Fonts.titleFont};
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 25px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: 1.2vw;
                                line-height: 1.6vw;
                            }
                        }
                        .blog-excerpt {
                            text-transform: capitalize;
                            color: #6c6c73;
                            font-weight: 400;
                            font-size: 12px;
                            margin-top: 10px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 4;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: 0.6vw;
                                letter-spacing: 0.01em;
                                margin-top: 0.25vw;
                            }
                        }
                    }
                }
            }
            .button-bottom {
                margin-top: 50px;
                text-align: center;
                .btn_white {
                    background: #ffffff;
                    width: 100%;
                    margin: 0 auto;
                    display: block;
                    color: #215dd5;
                    font-family: 'Avenir Next Medium';
                    font-weight: normal;
                    border: 0;
                    box-shadow: 0px 0.3vw 0.5vw #eee;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        border-radius: 0.89vw;
                        max-width: 8.55vw;
                        font-size: 0.65vw;
                        line-height: 1.75vw;
                        padding: 0.4vw 0.5vw;
                    }
                }
            }
        }
    }
`;

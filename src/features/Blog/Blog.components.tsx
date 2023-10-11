import styled from 'styled-components';
import { convertPxToVw } from '../../utils/func';
import { Colors, Fonts, Images, MediaBreakpoints } from '../../theme';

export const BlogGlobal = styled.div`
    .blog-left-tags {
        margin-top: 1rem;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin-top: 0.2vw;
        }
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
            font-size: 14px;
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
`;
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
                    color: ${Colors.black};
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
                            color: ${Colors.gray100};
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
        .blog_content_main {
            position: relative;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
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
                            font-size: ${convertPxToVw('24')}vw;
                            line-height: ${convertPxToVw('32')}vw;
                        }
                    }
                    .blog-excerpt {
                        text-transform: capitalize;
                        color: #6c6c73;
                        font-weight: 400;
                        font-size: 14px;
                        margin-top: 10px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        * {
                            display: inline;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                            letter-spacing: 0.01em;
                            margin-top: 0.25vw;
                        }
                    }
                }
            }
        }
    }
`;

export const BlogDetailPageCmp = styled.div`
    background-image: url(${Images.BlogDetailImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    padding-top: 100px;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        padding-top: 8vw;
    }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        opacity: 0.5;
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        height: 100px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            height: 12.5vw;
        }
    }
    .p2p_blog_post_detail {
        margin-left: auto;
        margin-right: auto;
        background: #ffffff;
        position: relative;
        z-index: 1;
        max-width: calc(100% - 20px);
        border-radius: 12px 12px 0px 0px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            max-width: 75vw;
            border-radius: ${convertPxToVw('12')}vw ${convertPxToVw('12')}vw 0px 0px;
            padding-top: ${convertPxToVw('70')}vw;
            padding-left: ${convertPxToVw('129')}vw;
            padding-right: ${convertPxToVw('23')}vw;
        }
        .bolg_post_article {
            display: flex;
            flex-wrap: wrap;
            .left_detail-blog {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding-right: 6.4vw;
                    width: 71%;
                }
                .blog_title {
                    color: ${Colors.black};
                    text-transform: uppercase;
                    font-family: ${Fonts.titleFont};
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 31px;
                    padding: 14px 16px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: 0;
                        font-size: ${convertPxToVw('40')}vw;
                        line-height: 2.4vw;
                        margin-bottom: 1.2vw;
                    }
                }
                .blog_post-meta {
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        padding: 12px 16px;
                    }
                    .post_meta-left {
                        .tags_button {
                            margin-bottom: 0.85vw;
                        }
                        .top-tag {
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                margin-bottom: 0.85vw;
                            }
                        }
                        .time_block {
                            background: linear-gradient(170.88deg, #ee4266 8.65%, #fa5e7e 130.52%);
                            border: 1px px solid ${Colors.primary};
                            color: ${Colors.white};
                            font-weight: 700;
                            border-radius: 20px;
                            padding: 4px 6px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                border-radius: 1.2vw;
                                font-size: 0.53vw;
                            }
                            .anticon {
                                margin-right: 0.25vw;
                            }
                        }
                        .update_at {
                            margin-left: 16px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: 0.5vw;
                                line-height: 0.65vw;
                                color: ${Colors.gray80};
                                margin-left: ${convertPxToVw('16')}vw;
                            }
                        }
                    }
                }
                .post_meta-right {
                    display: flex;
                    align-items: center;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        margin-top: 16px;
                        font-size: 16px;
                    }
                    .profile_img {
                        img {
                            width: 42px;
                            height: 42px;
                            border-radius: 50px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: ${convertPxToVw('42')}vw;
                                height: ${convertPxToVw('42')}vw;
                            }
                        }
                    }
                    .profile_content {
                        color: ${Colors.gray80};
                        margin-left: 1rem;
                        h4 {
                            font-family: ${Fonts.titleFont};
                            margin-bottom: 0;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-weight: 700;
                                margin-bottom: 0.2vw;
                                font-size: 0.8vw;
                                line-height: 1vw;
                            }
                        }
                        p {
                            font-weight: 400;
                            margin-top: 0;
                            margin-bottom: 0;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: 0.5vw;
                                line-height: 0.65vw;
                            }
                        }
                    }
                }
                .blog_post-image {
                    display: inline-block;
                    width: 100%;
                    padding: 12px 16px;
                    padding-top: 0;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: 0;
                        padding-top: 0.35vw;
                        padding-bottom: 2.3vw;
                    }
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
                .editor-content {
                    font-size: 16px;
                    padding: 16px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: 0;
                        font-size: ${convertPxToVw('18')}vw;
                        line-height: ${convertPxToVw('26')}vw;
                    }
                    h2 {
                        font-family: ${Fonts.primaryFont};
                        font-size: 24px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('32')}vw;
                            line-height: ${convertPxToVw('36')}vw;
                            margin-bottom: ${convertPxToVw('20')}vw;
                        }
                        strong {
                            font-weight: 600 !important;
                        }
                    }
                    ul {
                        li {
                            margin-bottom: 16px;
                            font-size: 16px;
                            line-height: 24px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('18')}vw;
                                line-height: ${convertPxToVw('30')}vw;
                                margin-bottom: ${convertPxToVw('16')}vw;
                            }
                        }
                    }
                }
                .blog_post-content {
                    .p2p_memorybox_outer {
                        .memorybox_wrapper {
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                margin-top: 50px;
                                font-size: 18px;
                            }
                            .caterogy_name {
                                text-align: center;
                                font-family: ${Fonts.titleFont};
                                font-weight: 700;
                                margin: 0;
                                font-size: 24px;
                                line-height: 35px;
                                padding: 0 10px;
                                color: ${Colors.primary};
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: ${convertPxToVw('24')}vw;
                                    line-height: ${convertPxToVw('35')}vw;
                                    padding: 0.8vw 0.5vw;
                                    background-color: ${Colors.primary};
                                    border-radius: ${convertPxToVw('56')}vw;
                                    color: ${Colors.white};
                                }
                            }
                            .outer_blog_box {
                                background: ${Colors.white};
                                border: 1px solid rgba(217, 224, 242, 0.5);
                                border-radius: 24px;
                                margin-top: 24px;
                                padding: 24px;
                                margin-bottom: 40px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    box-shadow: 0px 0px ${convertPxToVw('37')}vw 0px rgba(16, 18, 35, 0.02);
                                    border-radius: ${convertPxToVw('24')}vw;
                                    margin-top: ${convertPxToVw('24')}vw;
                                    padding: ${convertPxToVw('24')}vw;
                                    margin-bottom: ${convertPxToVw('24')}vw;
                                }
                                .memoerybox_main {
                                    position: relative;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        display: flex;
                                        flex-wrap: wrap;
                                        align-items: center;
                                        padding-left: 3.5vw;
                                    }
                                    .number_left {
                                        position: absolute;
                                        left: 8px;
                                        top: 8px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            left: 0;
                                            top: 0;
                                            bottom: 0;
                                            margin: auto;
                                            height: 2vw;
                                        }
                                        span {
                                            background: #fafafa;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            color: #6c6c73;
                                            font-family: ${Fonts.titleFont};
                                            font-weight: 700;
                                            margin: 0;
                                            width: 40px;
                                            height: 40px;
                                            border-radius: 20px;
                                            font-size: 24px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                width: 2vw;
                                                height: 2vw;
                                                border-radius: 1.6vw;
                                                font-size: 1.2vw;
                                                line-height: 1.75vw;
                                            }
                                        }
                                    }
                                    .memorybox_img {
                                        height: 260px;
                                        margin-bottom: 2rem;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            margin-bottom: 0;
                                            height: auto;
                                            width: 42%;
                                        }
                                        img {
                                            display: block;
                                            margin: 0 auto;
                                            object-fit: contain;
                                            max-width: 100%;
                                            border-radius: 8px;
                                            object-position: center;
                                            height: 250px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                max-height: 296px;
                                                margin-bottom: 0;
                                                border-radius: 0.4vw;
                                            }
                                        }
                                    }
                                    .mmry_rating_box {
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            width: 58%;
                                        }
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            padding-left: 3vw;
                                        }
                                        > h3 {
                                            font-family: ${Fonts.titleFont};
                                            font-weight: 700;
                                            margin-bottom: 24px;
                                            font-size: 32px;
                                            line-height: 35px;
                                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                                text-align: center;
                                            }
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                line-height: 1.75vw;
                                                font-size: 1.6vw;
                                                margin-bottom: 1.2vw;
                                            }
                                        }
                                        a {
                                            color: ${Colors.black};
                                            &:hover {
                                                color: ${Colors.primary};
                                            }
                                        }
                                        .icon_num_text {
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            margin-bottom: 16px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                justify-content: flex-start;
                                                margin-bottom: 0.5vw;
                                            }
                                        }
                                        .icon_text {
                                            display: flex;
                                            align-items: center;
                                            flex: 0 0 40%;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                flex: 0 0 45%;
                                            }
                                        }
                                        .icon-size {
                                            background-color: #fafafa;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            border-radius: 50%;
                                            width: 40px;
                                            height: 40px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                width: 2.4vw;
                                                height: 2.4vw;
                                            }
                                            img {
                                                display: block;
                                                margin: 0 auto;
                                                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                                    width: 24px;
                                                }
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    max-height: 1.2vw;
                                                }
                                            }
                                        }
                                        span {
                                            color: ${Colors.black};
                                            font-weight: 700;
                                            padding-left: 1rem;
                                            font-size: 16px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                padding-left: 0.8vw;
                                                font-size: ${convertPxToVw('16')}vw;
                                                line-height: ${convertPxToVw('18')}vw;
                                            }
                                        }
                                    }
                                    .btn_amazon {
                                        background-color: #f7cf60;
                                        box-shadow: 0px 0.6vw 1.6vw rgba(247, 207, 96, 0.16);
                                        text-transform: capitalize;
                                        color: ${Colors.black};
                                        font-weight: 700;
                                        height: unset;
                                        display: flex;
                                        align-items: center;
                                        text-align: center;
                                        border-radius: 12px;
                                        font-size: 16px;
                                        padding: 16px 24px;
                                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                            margin: 10px auto;
                                        }
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            border-radius: 0.6vw;
                                            margin: 1vw 0;
                                            letter-spacing: 0.01em;
                                            font-size: 1vw;
                                            padding: 0.86vw 1.2vw;
                                        }
                                        span {
                                            padding: 0;
                                        }
                                    }
                                }
                                .text {
                                    flex: 0 0 30%;
                                    color: #6c6c73;
                                    font-weight: 600;
                                    font-size: 16px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        flex: 0 0 40%;
                                        font-size: 1vw;
                                        line-height: 1vw;
                                    }
                                }
                                .str-image {
                                    position: relative;
                                    line-height: 0;
                                }
                                p {
                                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                        font-size: 16px;
                                    }
                                }
                            }
                            .content_editor {
                                p {
                                    font-size: 16px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: ${convertPxToVw('18')}vw;
                                        line-height: ${convertPxToVw('26')}vw;
                                    }
                                }
                            }
                            p > a {
                                color: ${Colors.blueLight};
                                text-decoration: underline;
                            }
                            .hand-img {
                                position: absolute;
                                transform: rotate(-20.55deg);
                                right: -40px;
                                top: 130px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    bottom: 0;
                                    top: unset;
                                    right: -7vw;
                                }
                                img {
                                    max-width: 148px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        max-width: 10vw;
                                    }
                                }
                            }
                        }
                        .countdown-section {
                            background: rgba(250, 250, 250, 0.5);
                            border: 1px solid rgba(217, 224, 242, 0.5);
                            padding: 10px 16px;
                            margin-bottom: 1.5rem;
                            border-radius: 16px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                border-radius: 0.8vw;
                                padding: 1.4vw 2.4vw;
                                margin-bottom: 1.6vw;
                            }
                            .countdown-section-inner {
                                display: flex;
                                flex-wrap: wrap;
                                align-items: center;
                                .countdown-section-left {
                                    text-align: center;
                                    width: 100%;
                                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                    }
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        width: 23%;
                                    }
                                    > img {
                                        max-width: 60px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            max-width: 2.5vw;
                                        }
                                    }
                                    .timer_content {
                                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                            margin-left: 1rem;
                                        }
                                        .end-text {
                                            line-height: normal;
                                            text-align: center;
                                            text-transform: capitalize;
                                            color: #aaaaad;
                                            font-size: 14px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                letter-spacing: -0.02em;
                                                font-size: 0.7vw;
                                                margin-bottom: 0.25vw;
                                                margin-top: 0.25vw;
                                            }
                                        }
                                        .timer-main .block {
                                            text-transform: capitalize;
                                            color: ${Colors.gray100};
                                            font-family: ${Fonts.titleFont};
                                            font-weight: 700;
                                            padding: 0;
                                            font-size: 32px;
                                            line-height: 30px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                font-size: 1.6vw;
                                                line-height: 0.89vw;
                                                padding-bottom: 0.25vw;
                                                padding-top: 0.25vw;
                                            }
                                        }
                                        .time-over {
                                            font-size: 24px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                font-size: 1vw;
                                                padding-bottom: 0.25vw;
                                                padding-top: 0.25vw;
                                            }
                                        }
                                        ul {
                                            display: flex;
                                            justify-content: space-between;
                                            list-style: none;
                                            padding: 0;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                margin: 0.25vw 0;
                                                padding: 0 0.6vw;
                                            }
                                            li {
                                                margin: 0;
                                                color: #aaaaad;
                                                text-align: center;
                                                text-transform: capitalize;
                                                font-size: 12px;
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    line-height: 0.8999999999999999vw;
                                                    font-size: 0.7vw;
                                                }
                                            }
                                        }
                                    }
                                }
                                .countdown-section-right {
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        width: 77%;
                                        padding-left: 2.4vw;
                                    }
                                    .countdown-title {
                                        h2 {
                                            color: ${Colors.gray100};
                                            text-transform: uppercase;
                                            font-family: ${Fonts.titleFont};
                                            font-weight: 700;
                                            font-size: 14px;
                                            text-align: center;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                font-size: 1vw;
                                                text-align: left;
                                                line-height: 1.75vw;
                                            }
                                        }
                                    }
                                    .countdown-email {
                                        .ant-form-item {
                                            margin-bottom: 12px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                margin-bottom: 0;
                                            }
                                            .ant-input {
                                                padding: 10px;
                                                border: none;
                                                font-size: 12px;
                                                border-bottom: 2px solid rgba(217, 224, 242, 0.5);
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    font-size: ${convertPxToVw('12')}vw;
                                                }
                                            }
                                            .ant-form-item-explain-error {
                                                bottom: -25px;
                                                font-size: 10px;
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    bottom: ${convertPxToVw('-20')}vw;
                                                    font-size: ${convertPxToVw('10')}vw;
                                                    margin: 0.25vw 0;
                                                }
                                            }
                                        }
                                        .ant-btn {
                                            font-size: 12px;
                                            padding: 12px 14px;
                                            height: unset;
                                            font-weight: 700;
                                            margin-top: 1rem;
                                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                                width: 100%;
                                            }
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                margin-top: 0;
                                                font-size: ${convertPxToVw('12')}vw;
                                                padding: ${convertPxToVw('12')}vw;
                                            }
                                        }
                                    }
                                    .countdown-twenty_block {
                                        display: flex;
                                        list-style: none;
                                        margin-top: 16px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            margin-top: ${convertPxToVw('20')}vw;
                                        }
                                        .countdown-twenty-inner {
                                            h4 {
                                                line-height: normal;
                                                color: ${Colors.primary};
                                                text-transform: uppercase;
                                                margin: 0;
                                                font-family: ${Fonts.titleFont};
                                                font-weight: 600;
                                                font-size: 14px;
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    font-size: 0.73vw;
                                                }
                                            }
                                            p {
                                                color: ${Colors.gray80};
                                                margin: 0;
                                                font-size: 10px;
                                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                    font-size: 0.89vw;
                                                    line-height: 1.15vw;
                                                    letter-spacing: 0.01em;
                                                }
                                            }
                                        }
                                    }
                                    .countdown-tooltip {
                                        cursor: help;
                                        .anticon {
                                            color: #dedee0;
                                            margin-left: 16px;
                                        }
                                    }
                                }
                            }
                        }
                        .prop_cons_main {
                            .prop_block {
                                h4 {
                                    color: ${Colors.black};
                                    font-family: ${Fonts.titleFont};
                                    border-radius: 50px;
                                    background-color: #dbfbb9;
                                    border: 1px solid rgba(217, 224, 242, 0.5);
                                    text-align: center;
                                    margin: 0;
                                    font-size: 24px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: 1.2vw;
                                        line-height: 1.75vw;
                                        border-radius: 1.6vw;
                                        padding: 0.25vw 0.5vw;
                                    }
                                }
                                ul {
                                    list-style: none;
                                    margin-top: 1.25rem;
                                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                        padding: 0;
                                    }
                                    li {
                                        text-transform: capitalize;
                                        color: #6c6c73;
                                        font-weight: 600;
                                        position: relative;
                                        font-size: 14px;
                                        line-height: 18px;
                                        padding-left: 0;
                                        margin-bottom: 16px;
                                        padding-left: 16px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            line-height: ${convertPxToVw('20')}vw;
                                            padding-left: 0;
                                            font-size: ${convertPxToVw('14')}vw;
                                            letter-spacing: 0.01em;
                                            margin: 0 0 1vw;
                                        }
                                        &::before {
                                            content: '';
                                            border-radius: 50%;
                                            background: #83cf59;
                                            position: absolute;
                                            width: 8px;
                                            height: 8px;
                                            left: 0;
                                            top: 5px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                width: 0.4vw;
                                                height: 0.4vw;
                                                left: -20px;
                                                top: 0.3vw;
                                            }
                                        }
                                    }
                                }
                            }
                            .cons_block {
                                h4 {
                                    color: ${Colors.black};
                                    font-family: ${Fonts.titleFont};
                                    border-radius: 50px;
                                    background-color: rgba(255, 15, 0, 0.24);
                                    border: 1px solid rgba(217, 224, 242, 0.5);
                                    text-align: center;
                                    margin: 0;
                                    font-size: 24px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: 1.2vw;
                                        line-height: 1.75vw;
                                        border-radius: 1.6vw;
                                        padding: 0.25vw 0.5vw;
                                    }
                                }
                                ul {
                                    list-style: none;
                                    margin-top: 1.25rem;
                                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                        padding-left: 0;
                                    }
                                    li {
                                        text-transform: capitalize;
                                        color: #6c6c73;
                                        font-weight: 600;
                                        position: relative;
                                        font-size: 14px;
                                        line-height: 18px;
                                        padding-left: 16px;
                                        margin-bottom: 16px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            padding-left: 0;
                                            line-height: ${convertPxToVw('20')}vw;
                                            font-size: ${convertPxToVw('14')}vw;
                                            letter-spacing: 0.01em;
                                            margin: 0 0 1vw;
                                        }
                                        &::before {
                                            content: '';
                                            border-radius: 50%;
                                            background: ${Colors.primary};
                                            position: absolute;
                                            width: 8px;
                                            height: 8px;
                                            left: 0;
                                            top: 5px;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                width: 0.4vw;
                                                height: 0.4vw;
                                                left: -20px;
                                                top: 0.3vw;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .last_post {
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        padding: 8px 16px;
                    }
                    h2 {
                        font-weight: 700;
                        line-height: 42px;
                        color: #393939;
                        font-size: 20px;
                        letter-spacing: -0.04em;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-top: 40px;
                            margin-bottom: 15px;
                            font-size: ${convertPxToVw('30')}vw;
                        }
                    }
                    p {
                        font-size: 16px;
                        line-height: 23px;
                        margin-top: 0;
                        margin-bottom: 20px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: 16px;
                            font-size: ${convertPxToVw('18')}vw;
                            letter-spacing: 0.005em;
                        }
                    }
                    a {
                        color: ${Colors.blueLight};
                    }
                }
            }
            .post_content-2 {
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    padding: 8px 16px;
                }
                .bg-gray {
                    background: #fafafa;
                    padding: 10px;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        height: 100%;
                    }
                }
            }
        }
        .right_detail-blog {
            position: sticky;
            top: 10px;
            align-self: flex-start;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                display: none;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                width: 29%;
            }
            .right-portion-inner {
                background: #fafafa;
                overflow-y: auto;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    border-radius: 2vw;
                    padding: 1.6vw 3.2vw 2vw 1.6vw;
                    max-height: calc(100vh - 10px);
                }
                .table-portion {
                    h2 {
                        color: ${Colors.black};
                        font-family: ${Fonts.titleFont};
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: 0.8vw;
                            line-height: 1.75vw;
                            font-size: 1.2vw;
                        }
                    }
                    .main-tabs {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        > li {
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                margin-bottom: 0.8vw;
                            }
                            .title {
                                color: ${Colors.gray100};
                                margin: 0;
                                font-family: ${Fonts.titleFont};
                                font-weight: 400;
                                span {
                                    color: ${Colors.gray100};
                                    margin: 0;
                                    font-family: ${Fonts.titleFont};
                                    font-weight: 400;
                                    cursor: pointer;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: 0.8vw;
                                    }
                                }
                            }
                            .sub-tab {
                                padding: 0;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    margin-top: 0.4vw;
                                    margin-left: 1vw;
                                }
                                li {
                                    margin-bottom: 0.4vw;
                                    list-style: none;
                                    display: flex;
                                    > span {
                                        display: inline-block;
                                        margin-right: 5px;
                                        vertical-align: top;
                                        line-height: normal;
                                    }
                                    h3 {
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin: 0;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: 0.8vw;
                                            line-height: 1.09vw;
                                            color: ${Colors.gray100};
                                        }
                                        span {
                                            color: ${Colors.gray100};
                                            margin: 0;
                                            font-family: ${Fonts.titleFont};
                                            font-weight: 400;
                                            cursor: pointer;
                                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                                font-size: 0.7vw;
                                            }
                                            &:hover {
                                                color: ${Colors.blueMenu};
                                                text-decoration: underline;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .subs-portion {
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: 0.4vw;
                    }
                    h2 {
                        color: ${Colors.gray100};
                        text-transform: uppercase;
                        font-family: ${Fonts.titleFont};
                        font-weight: 400;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: 0.4vw;
                            font-size: 0.8vw;
                        }
                    }
                    .ant-form-item {
                        margin-bottom: 16px;
                        .ant-input {
                            padding: 12px;
                            color: #807e8c;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('12')}vw;
                                border-radius: 0.4vw;
                                border: 1px solid #d9e0f2;
                            }
                        }
                    }
                    .submit_button {
                        background-color: transparent;
                        border: none;
                        padding: 0;
                        position: absolute;
                        top: -1px;
                        right: 14px;
                        img {
                            width: 40px;
                        }
                    }
                }
            }
        }
    }
    .slider_bottom_blg {
        background-color: transparent;
        margin-top: 30px;
        padding: 0 16px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding-bottom: 4vw !important;
            margin-top: 90px;
        }
        .blog_content_main {
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        }
        h4 {
            color: ${Colors.black};
            font-family: ${Fonts.titleFont};
            text-transform: capitalize;
            font-size: 20px;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                margin-bottom: 0;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: 1.2vw;
            }
        }
        .slick-slide {
            padding-bottom: 5px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding: 0 1rem;
            }
        }
    }
`;

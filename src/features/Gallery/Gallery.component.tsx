import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const GalleryMediumThemeCmp = styled.section`
    position: relative;
    background: #fafafa;
    padding-top: 75px;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        padding-top: 5.808vw;
    }
    .filter_slider {
        position: relative;
        margin: 0rem;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin: ${convertPxToVw('30')}vw ${convertPxToVw('323')}vw;
        }
        .gallery_slider_top {
            padding: 0;
            .mediums-carousel-image {
                padding: 0;
            }
            .active-item .ant-btn-sm {
                display: none;
            }
            .slick-track {
                height: unset;
            }
        }
    }
    .gallery_section {
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin: 0 4.425vw;
            margin-top: 2.425vw;
        }
        .gallery_container {
            position: relative;
            background: #ffffff;
            z-index: 1;
            padding: 0 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                box-shadow: 0vw 0vw 1.926vw rgb(28 16 35 / 3%);
                border-radius: 1.249vw 1.249vw 0 0;
                padding: 0 4.164vw;
            }
            .gallery_top_header {
                position: relative;
                border-bottom: 0.052vw solid #d9e0f2;
                padding: 1.5rem 0;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    text-align: center;
                    padding: 1.5vw 0;
                }
                .gallery_title {
                    text-transform: uppercase;
                    color: ${Colors.gray120};
                    margin: 0;
                    font-weight: 700;
                    font-family: ${Fonts.titleFont};
                    font-size: 24px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        font-size: ${convertPxToVw('56')}vw;
                    }
                }
                .select_filter {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    .ant-select {
                        width: 180px;
                        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                            width: ${convertPxToVw('194')}vw;
                        }
                    }
                    .ant-select-selector {
                        background-color: #fafafa;
                        border: 1px solid #d9e0f2;
                        border-radius: 8px;
                        align-items: center;
                        color: ${Colors.gray50};
                        font-size: 14px;
                        height: 42px;
                    }
                    .ant-select-focused {
                        .ant-select-selector {
                            box-shadow: none;
                        }
                    }
                    .ant-select-selection-item {
                        flex: unset;
                    }
                    .ant-select-open {
                        .ant-select-selection-item {
                            color: ${Colors.gray50};
                        }
                    }
                }
            }
            .gallery_masonry {
                padding-top: 3rem;
                padding-bottom: 3rem;
                .custom-oil-paintings {
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        margin-bottom: ${convertPxToVw('94')}vw;
                    }
                    .gallery_image_video_box {
                        .gallery_image_box {
                            position: relative;
                            .galleryItem_imageOriginal {
                                object-fit: cover;
                                transition: all 0.5s ease;
                                border-radius: 20px;
                                width: 100%;
                                position: relative !important;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    border-radius: 1.041vw;
                                }
                                &.image_visible {
                                    position: absolute !important;
                                }
                            }
                            &::after {
                                position: absolute;
                                content: '';
                                top: 0;
                                left: 0;
                                border-radius: 20px;
                                width: 100%;
                                height: 100%;
                                background-image: linear-gradient(358deg, rgba(16, 18, 35, 0.6) 32.33%, rgba(16, 18, 35, 0) 98.2%);
                            }
                            .img_btn_bottom {
                                position: absolute;
                                bottom: 1rem;
                                right: 1rem;
                                z-index: 1;
                                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                    bottom: 1vw;
                                    right: 1vw;
                                }
                                .btn_view_photo {
                                    background: rgba(255, 255, 255, 0.9);
                                    margin: 0 auto;
                                    color: ${Colors.black};
                                    height: 30px;
                                    padding: 0 0.75rem;
                                    font-size: 12px;
                                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                        font-size: 0.65vw;
                                        border-radius: 0.7vw;
                                        height: 1.75vw;
                                    }
                                    img {
                                        margin-left: 0.25rem;
                                    }
                                }
                            }
                            .btn_left {
                                right: unset;
                                left: 1rem;
                                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                    left: 1vw;
                                }
                            }
                            .img_painting {
                                position: absolute;
                                left: 0;
                                right: 0;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .gallery_video_box {
                            border-radius: 20px;
                            overflow: hidden;
                            position: relative;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                border-radius: 1.041vw;
                            }
                            .video-react {
                                .video-react-big-play-button {
                                    color: #215dd5;
                                    background-color: rgba(255, 255, 255, 0.7);
                                    z-index: 1060;
                                    font-size: 20px;
                                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                        font-size: 2.167vw;
                                    }
                                }
                            }
                            .video-react-fluid {
                                height: 350px;
                                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                    height: ${convertPxToVw('520')}vw;
                                }
                            }
                            .galleryItem_video {
                                position: absolute;
                                z-index: 1020;
                                top: 0;
                                bottom: 0;
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: flex-end;
                                padding: 2rem;
                                background-image: linear-gradient(358deg, rgba(16, 18, 35, 0.6) 32.33%, rgba(16, 18, 35, 0) 98.2%);
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    border-radius: 1.041vw;
                                }
                                .content_video {
                                    color: #d9e0f2;
                                    font-size: 16px;
                                    font-weight: 400;
                                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                        font-size: ${convertPxToVw('18')}vw;
                                    }
                                }
                            }

                            .video-react-has-started.video-react-user-inactive.video-react-playing
                                .video-react-control-bar.video-react-control-bar-auto-hide {
                                z-index: 1080;
                            }
                        }
                        .galleryItem_info {
                            margin-top: 1rem;
                            padding: 0 16px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                margin-top: 0.781vw;
                                padding: 0 1.041vw;
                            }
                            .galleryItem_name {
                                font-weight: 600;
                                color: ${Colors.gray120};
                                margin: 0;
                                font-size: 16px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: 1.041vw;
                                    line-height: 1.562vw;
                                }
                            }
                            .galleryItem_size {
                                text-align: right;
                                color: ${Colors.gray50};
                                font-size: 14px;
                                margin-bottom: 0;
                                line-height: 20px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: 0.833vw;
                                    line-height: 1.041vw;
                                }
                            }
                            .galleryItem_meta {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                .galleryItem_author {
                                    display: flex;
                                    align-items: center;
                                    img {
                                        object-fit: cover;
                                        border-radius: 50%;
                                        width: 40px;
                                        height: 40px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            width: 3.227vw;
                                            height: 3.227vw;
                                        }
                                    }
                                    span {
                                        font-weight: 600;
                                        color: ${Colors.gray50};
                                        font-size: 12px;
                                        line-height: 13px;
                                        margin-left: 12px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: 0.729vw;
                                            line-height: 0.937vw;
                                            margin-left: 0.729vw;
                                        }
                                    }
                                }
                                .galleryItem_taxonomy {
                                    color: ${Colors.gray50};
                                    background: rgba(217, 224, 242, 0.5);
                                    font-size: 12px;
                                    border-radius: 6px;
                                    padding: 0.35rem 1rem;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        line-height: 0.781vw;
                                        font-size: 0.625vw;
                                        border-radius: 0.364vw;
                                        padding: 0.416vw 0.625vw;
                                    }
                                }
                            }
                        }
                    }

                    .blog_content_box {
                        .inner_content {
                            border-radius: 20px;
                            border: 1px solid #d9e0f2;
                            padding: 20px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                padding: ${convertPxToVw('50')}vw;
                            }
                        }
                        .summary_content {
                            .top-content {
                                display: flex;
                                justify-content: space-between;
                                .left_content {
                                    h6 {
                                        color: var(--Grey-80, #6c6c73);
                                        font-family: ${Fonts.titleFont};
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 700;
                                        line-height: 26px;
                                        text-transform: uppercase;
                                        margin-bottom: 0;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: ${convertPxToVw('20')}vw;
                                            line-height: ${convertPxToVw('35')}vw;
                                        }
                                    }
                                    p {
                                        font-size: 12px;
                                        margin-bottom: 0;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: ${convertPxToVw('14')}vw;
                                        }
                                    }
                                }
                                .right_content {
                                    .price {
                                        font-size: 18px;
                                        font-weight: 700;
                                        color: ${Colors.primary};
                                        font-family: ${Fonts.titleFont};
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: ${convertPxToVw('20')}vw;
                                            line-height: ${convertPxToVw('35')}vw;
                                        }
                                    }
                                }
                            }
                        }
                        .summary_list {
                            margin: 1rem 0;
                            table {
                                width: 100%;
                                td {
                                    padding: 0.25rem 0;
                                    border-bottom: 1px solid #d9e0f2;
                                    color: ${Colors.gray80};
                                    font-family: ${Fonts.titleFont};
                                    font-weight: 500;
                                    vertical-align: middle;
                                    text-transform: capitalize;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: ${convertPxToVw('14')}vw;
                                        line-height: ${convertPxToVw('35')}vw;
                                    }
                                }
                                .font-bold {
                                    color: #3c3c40;
                                    text-align: right;
                                    font-weight: 700;
                                }
                            }
                        }
                        .button_get_start {
                            font-weight: 600;
                            font-family: ${Fonts.titleFont};
                            text-transform: uppercase;
                            width: 100%;
                            margin-top: 1rem;
                            box-shadow: 0 5px 20px rgb(238 66 102 / 40%);
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                box-shadow: 0 0.25vw 0.8vw rgb(238 66 102 / 40%);
                                font-size: ${convertPxToVw('16')}vw;
                                line-height: ${convertPxToVw('35')}vw;
                                height: ${convertPxToVw('74')}vw;
                            }
                        }
                        .customer-single-review-block {
                            margin-top: 2rem;
                            .ant-card-body {
                                background: ${Colors.transparent};
                                border: none;
                                padding-left: 0 !important;
                                padding-right: 0 !important;
                                margin-bottom: 0;
                                .single-review-wrapper {
                                    text-align: center;
                                    .single-reviwe-title {
                                        display: block;
                                    }
                                }
                                .single-review-btm-logo {
                                    margin-top: 1rem;
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }
                .p2p_loadMore {
                    display: flex;
                    justify-content: center;
                    .p2p_loadMore_button {
                        color: #215dd5;
                        background: #ffffff;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-family: ${Fonts.titleFont};
                        font-weight: 600;
                        box-shadow: 0px 4px 34px rgb(16 18 35 / 10%);
                        font-size: 14px;
                        height: 48px;
                        margin-bottom: 16px;
                        margin-top: 16px;
                        border-radius: 6px;
                        padding: 0 2.5rem;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('16')}vw;
                            height: 3.8vw;
                            border-radius: 0.89vw;
                            padding: 0 4.3vw;
                            margin-bottom: 3.5vw;
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }
    .blur_div {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            width: ${convertPxToVw('150')}vw;
            height: 100%;
        }
        &.left {
            left: 0;
            background: linear-gradient(90deg, rgba(250, 250, 250, 0.8) 36.11%, rgba(250, 250, 250, 0) 100%);
        }
        &.right {
            background: linear-gradient(270deg, rgba(250, 250, 250, 0.8) 36.11%, rgba(250, 250, 250, 0) 100%);
            right: 0;
        }
    }
`;

export const PhotosPaintingMediumSliderBlock = styled.div`
    position: relative;
    margin: 2vw 0;
    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        margin: 2rem 0;
    }
    .slick-slider {
        .slick-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .slider-item-box {
                margin-top: 1.95rem;
                transition: all 0.5s ease;
                display: block !important;
                text-align: center;
                .image_bg_white {
                    transition: all 0.5s ease;
                    border-radius: 50%;
                    background: #ffffff;
                    position: relative;
                    margin-bottom: 0;
                    width: 130px;
                    height: 130px;
                    margin: 0 16px;
                    display: block;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin: 0;
                        width: ${convertPxToVw('180')}vw;
                        height: ${convertPxToVw('180')}vw;
                    }
                    img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        padding: 0.65vw;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        object-fit: cover;
                        transition: all 0.5s ease;
                    }
                    .p2p-carousel-image-active {
                        z-index: 1;
                    }
                }
                .slider-text-wrap {
                    margin-top: 10px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: 0;
                    }
                    .title-font {
                        color: ${Colors.gray95};
                        font-family: ${Fonts.titleFont};
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        text-align: center;
                        line-height: 30px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('20')}vw;
                            line-height: ${convertPxToVw('35')}vw;
                        }
                    }
                }

                &.active-item {
                    transform: scale(1.25);
                    .image_bg_white {
                        border: 1px solid #5b87e0;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            border: 0.052vw solid #5b87e0;
                        }
                    }
                    .title-font {
                        transform: scale(1.25);
                        color: ${Colors.gray120};
                    }
                }
            }
        }
    }
`;

export const PhotosPaintingThemeSliderBlock = styled.div`
    .slick-list {
        padding: 20px 0 !important;
        overflow: hidden;
        .slick-track {
            display: flex;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                display: flex;
            }
            .slick-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                margin-top: 2rem;
                transition: all 0.5s ease;
                transform: scale(0.75);
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    transform: scale(0.95);
                    margin-top: 2.5vw;
                }
                .slider-theme-item-box {
                    transition: all 0.5s ease;
                    .fig_sqr {
                        position: relative;
                        padding: 1px;
                        border-radius: 10px;
                        border: 1px solid rgba(217, 224, 242, 1);
                        transition: all 0.5s ease;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin: 0 1vw ${convertPxToVw('10')}vw 1vw;
                            border-radius: 0.885vw;
                        }
                        img {
                            width: 100%;
                            height: 100% !important;
                            object-fit: cover;
                            object-position: center center;
                            transition: all 0.5s ease;
                            border-radius: 10px;
                            position: relative !important;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                border-radius: 0.885vw;
                                height: ${convertPxToVw('280')}vw !important;
                            }
                        }
                    }
                    &.active-item {
                        transform: scale(1.25);
                        .fig_sqr {
                            border: 1px solid rgba(91, 135, 234, 1);
                        }
                        .title-font {
                            transform: scale(1.25);
                            color: ${Colors.gray120};
                        }
                    }
                }
                .slider-text-wrap {
                    margin-top: 10px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: 0;
                    }
                    .title-font {
                        color: ${Colors.gray95};
                        font-family: ${Fonts.titleFont};
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        text-align: center;
                        line-height: 20px;
                        margin-bottom: 30px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: ${convertPxToVw('30')}vw;
                            font-size: ${convertPxToVw('20')}vw;
                            line-height: ${convertPxToVw('35')}vw;
                        }
                    }
                }
                &.slick-current {
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-left: 1.35vw;
                        margin-right: 1.35vw;
                    }
                }
            }
        }
    }

    .slider-btn {
        &.slider-prev {
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                left: calc(${convertPxToVw('16px')}vw * -1) !important;
            }
        }
        &.slider-next {
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                right: calc(${convertPxToVw('16px')}vw * -1) !important;
            }
        }
    }
`;

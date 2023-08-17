import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const TourPaintingsBlock = styled.div`
    /* padding: 8.594vw 0; */
    padding: 42px 0;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        padding: 3vw 0 9.787vw;
    }
    .title {
        line-height: 25px;
        margin-bottom: 20px;
        text-align: center;
        font-family: ${Fonts.titleFont};
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            text-align: left;
            line-height: 1.823vw;
            margin-bottom: 2.969vw;
        }
    }
    .video-react,
    .responsive-video {
        width: 100%;
        border-radius: 12px;
        border: 0;
        background-size: cover;
        background-color: ${Colors.gray110};
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            /* height: 31vw; */
            border-radius: 0.521vw;
        }
        .video-react-video,
        .video-react-poster {
            border-radius: 12px;
        }
        .video-react-control-bar {
            border-radius: 0 0 12px 12px;
        }
    }
    .tour-photo-data-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            max-width: 22.917vw;
            margin: 0 auto;
        }
        .tour-photo-top {
            margin-top: 12px;
            margin-bottom: 38px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                max-width: 18.74vw;
            }
            .tour-text {
                color: #807e8c;
                margin-bottom: 24px;
                @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-weight: 600;
                    line-height: 18px;
                    font-size: 14px;
                }
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    line-height: 1.2vw;
                    font-size: 0.89vw;
                    margin-bottom: 1.771vw;
                }
            }
            .btn-tour {
                font-family: ${Fonts.titleFont};
                font-weight: 700;
                margin: 0 auto;
                display: block;
                box-shadow: 0 2vw 7vw rgb(238 66 102 / 40%), 0 2vw 7vw rgb(238 66 102 / 40%);
                @media (max-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    &:hover {
                        box-shadow: none;
                    }
                }
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-weight: 200;
                    box-shadow: 0 0.26vw 1.041vw -0.781vw rgb(238 66 102 / 40%), 0 0.26vw 1.041vw -0.26vw rgb(250 94 126 / 40%);
                    min-width: 18.75vw;
                }
            }
        }
        .tour-class-review {
            margin: 0 -19px;
            background-color: ${Colors.pageContetBg};
            width: 100%;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin: 0;
            }
            .ant-card-body {
                min-height: unset;
                border: 0.078vw solid #d9e0f2;
            }
        }
        .lazy-load-image-loaded img {
            margin-top: 0;
        }
    }
`;

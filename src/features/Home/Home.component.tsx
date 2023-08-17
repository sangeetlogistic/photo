import styled from 'styled-components';
import { MobileHeaderHeight, PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const HomeHeroSection = styled.section`
    padding-top: ${MobileHeaderHeight};
    position: relative;
    background-color: ${Colors.transparent};
    height: auto;
    background: linear-gradient(180deg, #161626 -22.69%, rgba(20, 20, 29, 0) 100%);
    height: 379px;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        height: 30vh;
        padding-top: ${PagePdngTopEqualHeaderHeight};
    }
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        height: 70vh;
        padding-top: ${PagePdngTopEqualHeaderHeight};
    }
`;

export const HomeHeroSectionCmp = styled.div`
    padding: 0 3.646vw;
    height: 100%;
    color: ${Colors.white};
    .hero-content-wrapp {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 25px 0;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            justify-content: space-around;
            padding: 0;
        }
        .hero-texts-block {
            text-align: center;
            h1 {
                font-family: ${Fonts.titleFont};
                color: ${Colors.white};
                font-size: 16px;
                line-height: 17px;
                font-weight: 400;
                margin: 0 0 2px 0;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-family: ${Fonts.titleFontLight};
                    font-size: 2.083vw;
                    font-weight: 200;
                    margin: 0 0 0.625vw 0;
                    line-height: 1.822vw;
                }
            }
            .hero-sub-text {
                margin: 0;
                font-size: 12px;
                margin-top: 5px;
                line-height: 15px;
                font-weight: normal;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-size: 0.833vw;
                    margin-top: 0px;
                    line-height: 1.041vw;
                }
            }
        }
        .btn-row {
            text-align: center;
            .ant-btn-primary {
                font-weight: 600;
                min-width: 268px;
                padding: 19px 20px;
                font-size: 12px;
                line-height: 16px;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    font-size: 0.833vw;
                    min-width: unset;
                    padding: 1.041vw 2.343vw;
                    line-height: 1.145vw;
                    height: auto;
                }
            }
        }
    }
`;

export const PageBackground = styled.div<{ bgSectionImg: string }>`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .background_video {
        object-fit: cover;
        @media (max-width: ${`${MediaBreakpoints.upMd}px`}) {
            height: 407px;
        }
        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
            width: 100%;
            height: 90vw;
        }
        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
            height: unset;
            object-fit: cover;
        }
    }
    .page-bg-section {
        background: ${(props) => (props.bgSectionImg ? `url('${props.bgSectionImg}') repeat-y` : '')};
        background-size: 130%;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;

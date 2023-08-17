import styled from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';

export const FeatureInfoBlockCmp = styled.section`
    position: relative;
    background-color: ${Colors.white};
    .feature-inner-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 25px;
        transition: all 0.5s ease;
        text-align: center;
        height: 100%;
        background-color: ${Colors.pageContetBg};
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            padding: 0.938vw 4.479vw 1.25vw 4.479vw;
        }
        figure {
            margin: 0;
            width: auto;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                width: 2.5vw;
                height: 2.5vw;
            }
            img {
                width: 36px;
                margin: 0 auto;
                display: block;
                height: 36px;
                object-fit: contain;
                @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                    width: 2.082vw;
                    height: 2.082vw;
                }
            }
        }
        span {
            font-size: 14px;
            line-height: 18px;
            margin-top: 7px;
            transition: all 0.5s ease;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                font-size: 0.729vw;
                line-height: 0.885vw;
                margin-top: 0.521vw;
            }
        }
        &:hover {
            background-color: ${Colors.featureHvrBg};
            span {
                color: ${Colors.gray120};
            }
        }
    }
    .mobile-btn-row {
        text-align: center;
        padding: 48px 0 67px;
        display: block;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            display: none;
        }
        .ant-btn {
            font-family: ${Fonts.titleFont};
            width: 278px;
            box-shadow: 0 10px 20px #afc5f0;
        }
    }
`;

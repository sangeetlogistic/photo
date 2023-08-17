import styled from 'styled-components';
import { Colors, MediaBreakpoints } from '../../theme';

const PageContentWrapper = styled.section`
    padding: 24px 25px 40px 25px;
    margin: 0;
    background-color: ${Colors.pageContetBg};
    border-radius: 24px;
    box-shadow: 0px 0px 1.927vw rgba(28, 16, 35, 0.03);
    position: relative;
    z-index: 1;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        padding: 3.646vw;
        margin: 0 4.167vw;
        border-radius: 1.25vw 1.25vw 0.625vw 0.625vw;
    }
    &.top-content-wrap {
        padding-bottom: 0;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 50vh;
            left: 0;
            bottom: -49vh;
            background-color: ${Colors.pageContetBg};
            z-index: -1;
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                display: block;
            }
        }
    }
    &.btm-content-wrap {
        padding-top: 0;
        margin-top: -30px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-top: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        &:before {
            content: '';
            position: absolute;
            height: 50vh;
            width: 100%;
            left: 0;
            top: -50vh;
            background-color: ${Colors.pageContetBg};
            z-index: -1;
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                display: block;
            }
        }
    }
`;

export default PageContentWrapper;

import styled from 'styled-components';

import { MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const AboutUsCmp = styled.section`
    padding-top: 96px;
    padding-bottom: 30px;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        padding-top: 5.521vw;
    }
    .container {
        max-width: 90%;
        margin: 0 auto;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            max-width: ${convertPxToVw('1200')}vw;
        }
    }
    figure {
        margin-top: 2.5vw;
        img {
            width: 100%;
        }
    }
`;

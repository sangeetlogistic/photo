import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const FourZeroFourCmp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .notfound-img {
        text-align: center;
        img {
            width: 100%;
            height: 100%;
        }
        h1 {
            font-family: ${Fonts.titleFont};
            font-weight: 700;
            color: ${Colors.black};
            line-height: 38px;
            font-size: 30px;
            margin-bottom: 8px;
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                line-height: ${convertPxToVw('48')}vw;
                font-size: ${convertPxToVw('42')}vw;
                margin-bottom: ${convertPxToVw('8')}vw;
            }
        }
        .back_button {
            margin-top: 1rem;
        }
    }
`;

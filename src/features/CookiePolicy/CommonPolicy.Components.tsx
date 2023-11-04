import styled from 'styled-components';

import { MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const CommonPolicyCmp = styled.section`
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
    .cookie_section {
        margin-top: 3.5rem;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin-top: ${convertPxToVw('120')}vw;
        }
        h1 {
            color: #444f5b;
            font-weight: 900;
            font-size: 24px;
            margin: 0 0 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin: 0 0 ${convertPxToVw('20')}vw;
                font-size: ${convertPxToVw('46')}vw;
                line-height: 1.3;
            }
        }
        h2 {
            color: #444f5b;
            font-weight: 500;
            font-size: 24px;
            margin: 0 0 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin: 0 0 ${convertPxToVw('20')}vw;
                font-size: ${convertPxToVw('28')}vw;
                line-height: 1.3;
            }
        }
        .editor_content_cookie {
            h5 {
                color: #444f5b;
                font-size: 18px;
                font-weight: bold;
                line-height: 26px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: ${convertPxToVw('22')}vw;
                    line-height: ${convertPxToVw('26')}vw;
                    margin: 0 0 0.937vw;
                }
            }
            h3 {
                color: #444f5b;
                font-weight: 400;
                padding: 0;
                font-size: 16px;
                line-height: 24px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: 1.249vw;
                    line-height: 1.666vw;
                    margin: 0 0 1.041vw;
                }
            }
            p {
                color: #444f5b;
                font-weight: 400;
                font-size: 14px;
                margin: 10px 0;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: ${convertPxToVw('18')}vw;
                    line-height: ${convertPxToVw('26')}vw;
                    margin: 0.469vw 0;
                }
            }
            ul {
                li {
                    color: #212529;
                    font-size: 14px;
                    margin: 12px 0;
                    line-height: 1.75;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        font-size: ${convertPxToVw('18')}vw;
                        line-height: ${convertPxToVw('26')}vw;
                    }
                }
            }
            h4 {
                color: #212529;
                font-size: 20px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin: ${convertPxToVw('24')}vw 0 ${convertPxToVw('15')}vw 0;
                    font-size: ${convertPxToVw('20')}vw;
                    line-height: 1.3;
                }
            }
        }
    }
`;

import React from 'react';
import styled from 'styled-components';

import { Colors, MediaBreakpoints } from '../../theme';
import Images from '../../theme/Images';

const SliderBtnCmp = styled.span`
    &.slider-btn {
        width: 9.067vw;
        height: 9.067vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Colors.white};
        position: absolute;
        border-radius: 50%;
        box-shadow: 0 0.208vw 1.771vw rgba(16, 18, 35, 0.1);
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        user-select: none;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            width: 3.021vw;
            height: 3.021vw;
        }
        cursor: pointer;
        &:focus {
            outline: unset;
        }
        &.slider-prev {
            left: 0;
        }
        &.slider-next {
            right: 0;
        }
        .arrow_icon {
            color: ${Colors.primary};
        }
    }
`;

export const PrevBtn = (props: { handlePrevious: () => void; darkArrow?: boolean }) => (
    <SliderBtnCmp className="slider-btn slider-prev" onClick={props.handlePrevious} role="button" tabIndex={0}>
        <img src={!props?.darkArrow ? Images.SliderArrowPrev.src : Images.SliderPrevIconWhite.src} alt="" className="" />
    </SliderBtnCmp>
);

export const NextBtn = (props: { handleNext: () => void; darkArrow?: boolean }) => (
    <SliderBtnCmp className="slider-btn slider-next" onClick={props.handleNext} role="button" tabIndex={0}>
        <img src={!props?.darkArrow ? Images.SliderArrowNext.src : Images.SliderNextIconWhite.src} alt="" className="" />
    </SliderBtnCmp>
);

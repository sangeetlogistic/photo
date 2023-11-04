import React from 'react';
import styled from 'styled-components';

import { Images, MediaBreakpoints } from '../../theme';

const FramePreviewCmp = styled.div`
    &.frame-select-preview {
        display: flex;
        justify-content: center;
        position: relative;
        align-items: center;
        height: 100%;
        z-index: 0;
        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
            height: 50vh;
        }
        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
            height: 60vh;
        }
        .f-s-bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            border-radius: 1.562vw;
        }
        .f-painting {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
            z-index: 2;
            opacity: 0;
            &.active {
                display: block;
                animation: fadeIn 0.2s;
                opacity: 1;
            }
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
        .f-s-light {
            position: absolute;
            width: 100%;
            object-fit: contain;
            z-index: 3;
        }
    }
    &.gift_card_frame {
        position: absolute;
        top: 0;
        z-index: 1080;
        height: 100%;
        left: 0;
        max-width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            max-width: 17.3vw;
            height: 44vh;
        }
    }
`;

const classWithPaintingSize: { [x: string]: string } = {
    '8x10': '_8X10',
    '11x14': '_11X14',
    '12x16': '_12X16',
    '16x20': '_16X20',
    '20x24': '_20X24',
    '24x30': '_24X30',
    '24x36': '_24X36',
    '30x40': '_30X40',
    '36x48': '_36X48',
    '48x72': '_48X72',
};

const FramePreview = ({ classNamePriview, obj }: any) => (
    <FramePreviewCmp className={`frame-select-preview ${classNamePriview}`}>
        <img src={Images.OrderPaintingImgBg?.src} alt="order-painting-img" className="f-s-bg" />
        <img src={Images.OrderPaintingImgLight?.src} alt="order-painting-img-light" className="f-s-light" />
        <img
            key={obj.id}
            src={obj?.sizeImageUrl}
            alt={obj?.sizeImageAlt || ''}
            className={`f-painting ${classWithPaintingSize[`${obj.height}x${obj.width}`]} active`}
        />
    </FramePreviewCmp>
);

export default FramePreview;

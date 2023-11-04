import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

import { Colors, Fonts, MediaBreakpoints } from '../../theme';

const backgroundColors: { [x: string]: string } = {
    primaryGRD: Colors.primaryGRD,
    secondaryGRD: Colors.secondaryGRD,
    primary: Colors.primary,
    secondary: Colors.secondary,
    gray: Colors.gray55,
    success: Colors.success,
    grayLight: Colors.gray40,
};

const FilledButtonCmp = styled(Button)`
    font-family: ${Fonts.primaryFont};
    background: ${(props: { color: string }) => backgroundColors[props.color] || ''};
    border: 0;
    color: ${Colors.white};
    font-size: 12px;
    line-height: 18px;
    padding: 12px 21px;
    height: 48px;
    border-radius: 14px;
    transition: all 0.3s ease;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        font-size: 0.833vw;
        line-height: 18px;
        border-radius: 0.729vw;
        padding: 0.781vw 1.563vw;
        line-height: 0.938vw;
        height: 2.5vw;
    }

    &:hover,
    &:active,
    &:focus {
        background: ${(props: { color: string }) => backgroundColors[props.color] || ''};
    }

    &[disabled],
    &[disabled]:hover,
    &[disabled]:focus,
    &[disabled]:active {
        border: 0;
        color: ${Colors.white};
        background: ${(props: { color: string }) => backgroundColors[props.color] || '#ddd'};
        opacity: 0.3;
        box-shadow: none !important;
    }

    &.ant-btn-lg {
        font-size: 12px;
        line-height: 16px;
        height: 56px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            height: 3.646vw;
            font-size: 0.833vw;
            line-height: 1.146vw;
            letter-spacing: 0.01em;
        }
    }
    &.ant-btn-link {
        display: inline-flex;
        align-items: center;
        &.link-btn-height-auto {
            height: auto;
        }
        &.link-btn-no-pdng {
            padding: 0;
        }
        &.link-btn-blue {
            color: ${Colors.secondary};
        }
        &.link-btn-icon-append {
            .icon-append {
                margin-left: 0.521vw;
            }
        }
    }
`;

const FilledButton = (props: any) => (
    <FilledButtonCmp type="primary" {...props}>
        {props.children}
    </FilledButtonCmp>
);

export default FilledButton;

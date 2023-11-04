import React from 'react';
import { Checkbox } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../theme';

const CheckboxGroupCmp = styled(Checkbox)`
    &.checkbox_wrapper {
        display: flex;
        height: fit-content;
        align-items: flex-start;
        margin-top: 1.25vw;
        margin-left: 0px;
        &:first-child {
            margin-top: 0;
        }
        b {
            width: 4vw;
            text-align: end;
        }
    }
    .ant-checkbox {
        width: 1.198vw;
        height: 1.198vw;
        top: 0;
        &::after {
            border-radius: 0.313vw;
        }
        &.ant-checkbox-checked {
            .ant-checkbox-inner {
                border-color: ${Colors.primary};
            }
        }
        .ant-checkbox-inner {
            width: 1.198vw;
            height: 1.198vw;
            border-color: #3c3c40;
            border-radius: 0.313vw;
            &::after {
                left: 50%;
                top: calc(50% - 1px);
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
        + span {
            padding: 0;
            display: flex;
            color: ${Colors.gray40};
            line-height: 1vw;
        }
    }
`;

const CheckboxGroup = (props: any) => (
    <>
        <CheckboxGroupCmp {...props}>{props.children}</CheckboxGroupCmp>
    </>
);

export default CheckboxGroup;

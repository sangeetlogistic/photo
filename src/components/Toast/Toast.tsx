import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Alert } from 'antd';

import { convertPxToVw } from '../../utils/func';
import { useAppDispatch } from '../../app/hooks';

const ToastCmp = styled(Alert)`
    padding: 8.5px 16px !important;
    align-items: center;
    top: ${convertPxToVw('40')}vw;
    white-space: nowrap;
    border-radius: 2px;
    position: fixed;
    z-index: 2050;
    width: fit-content;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    background-color: #fff;
    border: none;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    @media (max-width: 575px) {
        width: 80%;
        white-space: normal;
        align-items: center;
        top: 25px;
    }

    .ant-alert-description {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
    }

    .ant-alert-icon {
        margin-right: 6px;
        svg {
            font-size: 18px;
            display: flex;
            cursor: pointer;
        }
    }
    .ant-alert-message {
        font-size: 16px;
    }
`;

const Toast = (props: any) => {
    const autoDisappearIn = 5000;
    let timeId: any;
    const dispatch = useAppDispatch();
    useEffect(() => {
        timeId = setTimeout(() => {
            if (props?.reduxStyle) {
                dispatch(props.setShow(false));
            } else {
                props.setShow(false);
            }
        }, autoDisappearIn);
        return () => {
            clearTimeout(timeId);
        };
    }, [props.show, props.message]);
    return props.show ? <ToastCmp {...props} /> : <></>;
};

export default Toast;

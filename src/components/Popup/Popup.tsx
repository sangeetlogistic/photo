import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

import FilledButton from '../FilledButton';
import { defaultZIndex } from './Popup.constants';
import { convertPxToVw } from '../../utils/func';
import { Colors, Images, MediaBreakpoints } from '../../theme';
import LazyImage from '../LazyImage';

interface IPopup {
    title?: string;
    open: boolean;
    onCancel?: () => void;
    content?: any;
    closable?: boolean;
    hiddenFooter?: boolean;
    submitBtn?: string;
    cancelBtn?: string;
    className?: string;
    width?: number;
    afterClose?: () => void;
    zIndex?: number;
    wrapClassName?: string;
    resultClass?: boolean;
    loading?: boolean;
    maskClosable?: boolean;
    okDisabled?: boolean;
    [x: string]: any;
}

const PopupCmp = styled(Modal)<any>`
    width: 90% !important;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        width: 50% !important;
    }
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        width: 45% !important;
    }
    .ant-modal-content {
        border-radius: ${convertPxToVw('32')}vw;
        .ant-modal-body {
            height: 100%;
            padding: ${convertPxToVw('50')}vw;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                padding: 1rem;
                padding-bottom: 3.25rem;
                font-size: 14px;
            }
        }
        .ant-modal-footer {
            padding: 0;
            border: 0;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            bottom: calc(${convertPxToVw('23')}vw * -1);
            .ant-btn {
                padding: 0;
                color: ${Colors.primary};
                background: ${Colors.white};
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48px;
                height: 48px;
                border-radius: 48px;
                @media (min-width: ${`${MediaBreakpoints.downSm}px`}) {
                    width: ${convertPxToVw('58')}vw;
                    height: ${convertPxToVw('58')}vw;
                    border-radius: ${convertPxToVw('58')}vw;
                }
                .lazy-load-image-loaded {
                    img {
                        width: 13px;
                        height: 13px;
                        @media (min-width: ${`${MediaBreakpoints.downSm}px`}) {
                            width: ${convertPxToVw('13')}vw;
                            height: ${convertPxToVw('13')}vw;
                        }
                    }
                }
            }
        }
    }
`;

const PopupWrapper = (props: any) => {
    const { maskClosable, ...rest } = props;
    return <PopupCmp maskClosable={maskClosable || false} centered transitionName="" {...rest} />;
};

const Popup = ({ title, open, closable, className = '', onCancel, content, width, afterClose, zIndex, ...rest }: IPopup) => {
    const btn: Array<JSX.Element | null> = [];

    if (onCancel) {
        btn.push(
            <FilledButton key="back" type="primary" onClick={onCancel}>
                <LazyImage src={Images.MenuCloseIcon} alt="" className="" effect="opacity" width="" />
            </FilledButton>,
        );
    }

    return (
        <PopupWrapper
            title={title}
            open={open}
            onCancel={onCancel}
            closable={closable}
            footer={btn}
            //   hiddenFooter={hiddenFooter}
            className={className}
            width={width}
            afterClose={afterClose}
            zIndex={zIndex || defaultZIndex}
            {...rest}
        >
            {content}
        </PopupWrapper>
    );
};

export default Popup;

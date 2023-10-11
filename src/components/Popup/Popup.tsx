import React, { useEffect } from 'react';
import { Modal } from 'antd';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import FilledButton from '../FilledButton';
import { defaultZIndex } from './Popup.constants';
import { convertPxToVw } from '../../utils/func';
import { Colors, Images, MediaBreakpoints } from '../../theme';
import { useDeviceDetect } from '../../hooks';

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

const slideIn = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const PopupCmp = styled(Modal)<any>`
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    margin: 0 auto;
    width: 100% !important;
    &.custom-modal {
        animation-name: ${slideIn};
        &.hidden {
            animation-name: ${slideOut};
        }
    }

    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        padding-bottom: 0;
        top: unset;
        margin-top: 3rem;
    }
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        width: 100% !important;
        top: 0;
        max-width: 80.5vw;
    }
    @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
        width: 65% !important;
        top: 0;
    }
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        width: 45% !important;
    }
    .ant-modal-content {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            border-radius: ${convertPxToVw('32')}vw;
        }
        .ant-modal-body {
            height: 100%;
            padding: ${convertPxToVw('40')}vw;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                padding: 1.25rem;
                font-size: 14px;
            }
        }
        .ant-modal-close-x {
            .fa-xmark {
                color: ${Colors.black};
                font-size: 22px;
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
    return <PopupCmp maskClosable={maskClosable || false} {...rest} />;
};

let popupContainer;
const Popup = ({ title, open, closable, className = '', onCancel, content, width, afterClose, zIndex, ...rest }: IPopup) => {
    const { isMobile } = useDeviceDetect();

    const btn: Array<JSX.Element | null> = [];

    if (onCancel) {
        btn.push(
            <FilledButton key="back" type="primary" onClick={onCancel}>
                <span className="lazy-load-image-loaded">
                    <img src={Images.MenuCloseIcon?.src} alt="" className="" width="" />
                </span>
            </FilledButton>,
        );
    }

    useEffect(() => {
        const DISABLE_SCROLLING_CLASS = 'scroll-disabled';

        const handleKeyboardOpen = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;
            document.body.classList.add(DISABLE_SCROLLING_CLASS);
            document.body.style.top = `-${scrollPosition}px`;
        };

        const handleKeyboardClose = () => {
            document.body.classList.remove(DISABLE_SCROLLING_CLASS);
            const scrollPosition = parseFloat(document.body.style.top);
            document.body.style.removeProperty('top');
            window.scrollTo(0, Math.abs(scrollPosition));
        };

        if (isMobile) {
            if (open) {
                handleKeyboardOpen();
            } else {
                handleKeyboardClose();
            }

            const parentPopup = document.getElementById('parent-popup-element');
            if (parentPopup) {
                const popupElement = parentPopup.querySelector('.ant-modal-root');
                if (popupElement) {
                    popupElement.addEventListener('resize', () => {
                        if (open && window.innerHeight < window.outerHeight) {
                            handleKeyboardOpen();
                        } else {
                            handleKeyboardClose();
                        }
                    });
                }
            }
        }

        return () => {
            const parentPopup = document.getElementById('parent-popup-element');
            if (isMobile && parentPopup) {
                const popupElement = parentPopup.querySelector('.ant-modal-root');
                if (popupElement) {
                    popupElement.removeEventListener('resize', () => {
                        if (open && window.innerHeight < window.outerHeight) {
                            handleKeyboardOpen();
                        } else {
                            handleKeyboardClose();
                        }
                    });
                }
            }
        };
    }, [open]);

    if (isMobile) {
        popupContainer = document.getElementById('parent-popup-element')!;
    } else {
        popupContainer = undefined;
    }

    return (
        <div id="parent-popup-element">
            <PopupWrapper
                title={title}
                open={open}
                onCancel={onCancel}
                closable={isMobile ? true : closable}
                footer={isMobile ? null : btn}
                className={`${className} ${isMobile && (open ? 'custom-modal' : 'custom-modal hidden')}`}
                closeIcon={<FontAwesomeIcon icon={faClose} />}
                width={width}
                centered={!isMobile}
                afterClose={afterClose}
                zIndex={zIndex || defaultZIndex}
                getContainer={popupContainer}
                {...rest}
            >
                {content}
            </PopupWrapper>
        </div>
    );
};

export default Popup;

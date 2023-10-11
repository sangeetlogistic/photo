import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Images } from '../../theme';
const LoadingFadedDiv = styled.div<{ show: boolean; isfull?: boolean }>`
    position: ${(props) => (props.isfull ? 'fixed' : 'absolute')};
    width: 100%;
    height: 100%;
    z-index: 1060;
    left: 0;
    top: 0;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    opacity: 1;
    visibility: visible;
    transition: 0.3s linear;
    color: #fff;
    img {
        width: 30px;
        height: 30px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%) scale(2);
    }
    background: rgba(0, 0, 0, 0.55);
`;

const LoadingCover = ({ show, isFullScreen = true }: { show: boolean; isFullScreen?: boolean }) => {
    useEffect(() => {
        if (show) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [show]);
    return (
        <LoadingFadedDiv show={show} isfull={isFullScreen}>
            <img src={Images.LoaderIcon} alt="loader" />
        </LoadingFadedDiv>
    );
};
export default LoadingCover;

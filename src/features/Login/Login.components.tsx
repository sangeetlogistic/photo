import { rgba } from 'polished';
import styled from 'styled-components';

import Popup from '../../components/Popup';
import { Colors, Fonts } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const LoginPopUpCmp = styled(Popup)`
    width: 100% !important;
    max-width: ${convertPxToVw('1005')}vw;
    .ant-modal-content {
        .ant-modal-body {
            min-height: 85vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-popup-content {
            text-align: center;
            .login-popup-img {
                max-width: 100%;
            }
            .login-popup-wrap-block {
                width: 100%;
                max-width: 426px;
                margin: ${convertPxToVw('48')}vw auto 0 auto;
            }
            .ptp_alertbox {
                .ant-alert-description {
                    line-height: normal;
                }
            }
            h4 {
                font-size: 14px;
                line-height: normal;
                color: ${Colors.black};
                margin-bottom: 16px;
            }
            p {
                font-size: 16px;
                text-align: left;
                color: ${Colors.gray80};
                margin-bottom: ${convertPxToVw('27')}vw;
            }
            .login-form {
                padding: 0 55px;
                > .ant-form-item {
                    margin-bottom: 16px;
                    .ant-input {
                        font-family: ${Fonts.titleFont};
                        height: 40px;
                        background: ${rgba(Colors.pageContetBg, 1)};
                        border: 1px solid ${rgba(Colors.reviewCardbrd, 0.5)};
                        border-radius: 8px;
                    }
                }
                .ant-bnt {
                    font-family: ${Fonts.titleFont};
                }
                .login-btn {
                    height: 48px;
                    margin-bottom: 27px;
                }
            }
        }
    }
`;

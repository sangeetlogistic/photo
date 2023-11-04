import { rgba } from 'polished';
import styled from 'styled-components';

import Popup from '../../components/Popup';
import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';

export const AccountMainCmp = styled.section``;

export const AccountWrapCmp = styled.div`
    padding-top: 96px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        padding-top: ${PagePdngTopEqualHeaderHeight};
    }
    .account-data-block {
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding: 2.5vw 5.208vw;
        }
        .account-data-head {
            display: flex;
            align-items: center;
            margin-bottom: 2.5vw;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                padding: 0 24px;
                margin-bottom: 20px;
            }
            .account-head-icon {
                width: 74px;
                height: 74px;
                margin-right: 15px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: 8.854vw;
                    height: 8.854vw;
                    border-radius: 8.854vw;
                    margin: 0 1.563vw 0 0;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .account-head-right {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    flex-wrap: wrap;
                }
                .account-data-heade-title {
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        width: 100%;
                    }
                    h2 {
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            font-size: 16px;
                            line-height: inherit;
                            margin: 0;
                            letter-spacing: 0;
                        }
                    }
                    h2,
                    h3 {
                        color: ${Colors.gray100};
                        font-family: ${Fonts.titleFont};
                        text-transform: uppercase;
                    }
                    h3 {
                        line-height: normal;
                        margin: 0;
                        font-size: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: 1.667vw;
                            line-height: 1.823vw;
                            margin-bottom: 1.25vw;
                        }
                    }
                }
                .ant-btn-primary {
                    border-radius: 0.7vw;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        height: 7vw;
                        font-size: 2.5vw;
                        padding: 0 7vw;
                        margin-bottom: 10px;
                    }
                }
            }
        }
        .account-tab {
            .ant-tabs-nav {
                padding: 0 20px;
                margin: 0;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding: 0;
                    padding-left: 2.083vw;
                    margin-bottom: 1.094vw;
                }
                &::before {
                    border-color: ${Colors.transparent};
                }
                .ant-tabs-tab {
                    font-family: ${Fonts.titleFont};
                    color: ${Colors.gray60};
                    font-weight: 700;
                    padding: 0;
                    font-size: 16px;
                    line-height: 35px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        font-size: 1.25vw;
                        line-height: 1.823vw;
                    }
                    + .ant-tabs-tab {
                        margin: 0 0 0 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin: 0 0 0 2.5vw;
                        }
                    }
                    &.ant-tabs-tab-active {
                        .ant-tabs-tab-btn {
                            color: ${Colors.gray100};
                        }
                    }
                }
                .ant-tabs-ink-bar {
                    height: 1px;
                }
            }
        }
        .store-credit-balance-wrap {
            display: flex;
            align-items: center;
            font-size: ${convertPxToVw('24')}vw;
            font-family: ${Fonts.titleFont};
            font-weight: 700;
            color: ${Colors.gray80};
            .store-credit-balance {
                .balance {
                    margin-left: ${convertPxToVw('16')}vw;
                }
            }
            .icon {
                margin-left: ${convertPxToVw('8')}vw;
            }
        }
        .personal-detail-card {
            border-radius: ${convertPxToVw('32')}vw;
            border-color: ${Colors.reviewCardbrd};
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                border-radius: 32px;
                margin-top: 30px;
            }
            .ant-card-body {
                padding: ${convertPxToVw('50')}vw ${convertPxToVw('100')}vw;
                .ant-space-item {
                    position: relative;
                    .position_select {
                        bottom: 0;
                        top: unset;
                        width: 94px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            width: ${convertPxToVw('220')}vw;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                            width: ${convertPxToVw('180')}vw;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            width: ${convertPxToVw('120')}vw;
                        }
                    }
                    .ant-form-item {
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: ${convertPxToVw('24')}vw;
                        }
                    }
                }
            }
        }
    }
`;

export const ShippingAddressCmp = styled.div`
    &.shipping_address_form {
        .title-font {
            font-weight: 700;
            color: ${Colors.black};
            margin: 0 0 1.25vw;
            padding: 0;
            font-size: 24px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: 1.249vw;
                line-height: 1.822vw;
            }
        }
        .position_select {
            bottom: 0;
            top: unset;
            width: 94px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                width: ${convertPxToVw('220')}vw;
            }
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                width: ${convertPxToVw('180')}vw;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: ${convertPxToVw('120')}vw;
            }
        }
        .ant-form-item {
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                margin-bottom: 15px;
            }
        }
        .ant-form-item-label {
            line-height: 0.833vw;
            text-transform: capitalize;
            color: ${Colors.gray80};
            font-weight: 600;
            font-family: ${Fonts.titleFont};
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                padding-bottom: 5px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: 0.8vw;
            }
            > label {
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    font-size: 16px;
                    line-height: 18px;
                }
            }
        }
        .ant-input,
        .ant-select-selector {
            width: 100%;
            background: #ffffff;
            color: ${Colors.black};
            font-family: ${Fonts.titleFont};
            border: 0.052vw solid ${Colors.reviewCardbrd};
            height: 48px;
            border-radius: 8px;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                font-size: 14px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                height: 36px;
                font-size: ${convertPxToVw('20')}vw;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                height: 2.499vw;
                border-radius: 0.416vw;
                font-size: ${convertPxToVw('16')}vw;
            }
        }
        .ant-select-selection-item {
            padding-right: 0;
            line-height: 48px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                line-height: 4.5vw;
            }
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                line-height: 3.5vw;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                line-height: 2.5vw;
            }
        }
        .save__address {
            display: flex;
            margin-top: 1.5vw;
            justify-content: center;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                margin-bottom: 1rem;
            }
            .save_address-btn {
                display: flex;
                justify-content: center;
                font-weight: 600;
                text-align: center;
                text-transform: uppercase;
                align-items: center;
                gap: 0.5vw;
                font-size: 14px;
                border: 1px solid #ee4266;
                background-color: ${Colors.white};
                color: ${Colors.black};
                width: 100%;
                height: unset;
                border-radius: 14px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    border: 0.052vw solid #ee4266;
                    color: ${Colors.white};
                    background-color: ${Colors.primary};
                    width: 10vw;
                    height: 2.863vw;
                    border-radius: 0.729vw;
                    font-size: 0.729vw;
                    line-height: 0.729vw;
                }
                &:hover {
                    color: ${Colors.black};
                    background-color: #fff;
                }
            }
        }
        .icon-red {
            color: ${Colors.primary};
            cursor: pointer;
        }
    }
`;
export const HelpIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        width: ${convertPxToVw('22')}vw;
        height: ${convertPxToVw('22')}vw;
    }
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const AccountOrderBlock = styled.div`
    padding: 45px 30px 40px;
    border-top: 1px solid ${Colors.reviewCardbrd};
    border-radius: 32px;
    background: ${Colors.white};
    box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        margin-top: 30px;
    }
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        border-radius: 1.667vw;
        padding: 2.344vw 2.135vw 1.875vw 2.135vw;
    }
    + .account-order-block {
        margin-top: 20px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin-top: ${convertPxToVw('20')}vw;
        }
    }
    .view-more-link {
        font-weight: 600;
        color: ${Colors.blueMenu};
        padding: 0;
        height: unset;
        font-size: 14px;
        margin: 0 auto;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            font-size: ${convertPxToVw('14')}vw;
            margin: 0;
            line-height: ${convertPxToVw('18')}vw;
        }
    }
    .account-order-row {
        display: flex;
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            flex-wrap: wrap;
            justify-content: center;
        }
        .product-img {
            width: 220px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                width: calc(10.99vw + 0.729vw);
                flex-basis: calc(10.99vw + 0.729vw);
                margin-right: 1.406vw;
            }
            .product-img-inner {
                position: relative;
                margin: 0;
                z-index: 1;
                cursor: pointer;
                &::after,
                &::before {
                    content: '';
                    position: absolute;
                    border-radius: 30px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        border-radius: 0.781vw;
                    }
                    background-color: ${rgba(Colors.gray100, 0.5)};
                }
                &::before {
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                &::after {
                    z-index: -1;
                    top: 12px;
                    bottom: 12px;
                    left: 14px;
                    right: -14px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        top: 0.625vw;
                        bottom: 0.625vw;
                        left: 0.729vw;
                        right: -0.729vw;
                    }
                }
                img {
                    width: 100%;
                    border-radius: 30px;
                    height: 160px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        border-radius: 0.781vw;
                        height: 8vw;
                    }
                    object-fit: cover;
                    display: block;
                    ~ img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: -1;
                    }
                }
                .prod-number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${Colors.white};
                    background-color: ${rgba(Colors.white, 0.2)};
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: 700;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        width: 2.396vw;
                        height: 2.396vw;
                        border-radius: 2.396vw;
                        font-size: 0.938vw;
                    }
                }
            }
        }
        .account-order-content {
            flex: auto;
            display: flex;
            justify-content: space-between;
            color: ${Colors.gray100};
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                font-size: 0.729vw;
                flex-wrap: wrap;
            }
            .clr-gray {
                color: ${Colors.gray40};
            }
            .text-success {
                color: ${Colors.success};
            }
            .label {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding-right: 0.521vw;
                }
            }

            .d-flex {
                align-items: center;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    justify-content: space-between;
                }
            }
            .inner-row {
                display: flex;
                align-items: center;
            }
            .badge {
                font-family: ${Fonts.titleFont};
                color: ${Colors.white};
                background-color: ${Colors.success};
                font-size: 12px;
                line-height: 13px;
                padding: 5px 10px;
                text-transform: capitalize;
                font-weight: 600;
                border-radius: 40px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding: 0.208vw 1.042vw;
                    border-radius: 0.9vw;
                    font-size: 0.75vw;
                    margin-right: 0.208vw;
                }
            }
            .acc-ord-cmn-block {
                padding-right: 1.042;
                display: flex;
                flex-direction: column;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    width: 100%;
                    margin: 0px 0 24px;
                }
                .title-block {
                    font-weight: 600;
                    display: flex;
                    font-size: 18px;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        justify-content: space-between;
                        margin: 0 0 12px;
                        padding: 0 0 7px;
                        border-bottom: 1px solid rgb(222 222 224 / 20%);
                    }
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        font-size: 0.938vw;
                    }
                    margin-bottom: ${convertPxToVw('16')}vw;
                    span {
                        margin-right: 0.469vw;
                    }
                }
                .inner-row {
                    margin-bottom: ${convertPxToVw('6')}vw;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        font-size: 14px;
                        justify-content: space-between;
                    }
                }
                .label {
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        width: ${convertPxToVw('65')}vw;
                        flex-basis: ${convertPxToVw('65')}vw;
                    }
                }
                .value {
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        flex: auto;
                    }
                }
            }
            .acc-ord-numb-block {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 25px 0 30px 0px;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    font-size: 14px;
                }
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('380')}vw;
                    margin: 0;
                }
                .inner-row {
                    margin-bottom: ${convertPxToVw('16')}vw;
                }
                .label {
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        max-width: ${convertPxToVw('70')}vw;
                        flex-basis: ${convertPxToVw('70')}vw;
                    }
                }
                .value {
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        flex: auto;
                    }
                }
            }
            .acc-ord-detail-block {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('197')}vw;
                }
            }
            .order-shipping {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('284')}vw;
                }
            }
            .order-finance {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('538')}vw;
                }
                .finance-block {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: ${Colors.gray08};
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        padding: 12px;
                        padding-bottom: 0;
                        border-radius: 10px;
                        flex-wrap: wrap;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: ${convertPxToVw('10')}vw ${convertPxToVw('40')}vw;
                        border-radius: ${convertPxToVw('12')}vw;
                        margin-bottom: ${convertPxToVw('18')}vw;
                    }
                    .finance-inner-block {
                        display: flex;
                        font-size: 14px;
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            flex-wrap: wrap;
                            width: 100%;
                            margin: 0px 0 12px;
                            justify-content: space-between;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                        }
                        .label {
                            padding: 0;
                            white-space: nowrap;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: ${convertPxToVw('84')}vw;
                                margin-right: ${convertPxToVw('10')}vw;
                            }
                        }
                    }
                }
                .finance-btn-row {
                    display: flex;
                    justify-content: space-between;
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        flex-wrap: wrap;
                    }
                    .coupan-code-block {
                        font-family: ${Fonts.titleFont};
                        color: ${Colors.gray100};
                        font-weight: 600;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-transform: uppercase;
                        background-color: ${Colors.couponBg};
                        font-size: 16px;
                        height: auto;
                        margin: 1rem 0;
                        border: 2px dashed ${Colors.primary};
                        border-radius: 14px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('16')}vw;
                            margin: 0;
                            padding: 0;
                            border-radius: ${convertPxToVw('12')}vw;
                            width: ${convertPxToVw('282')}vw;
                            height: ${convertPxToVw('48')}vw;
                        }
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            padding: 12px 15px;
                        }
                    }
                    .coupan-code-block-btn-opacity {
                        opacity: 0.5 !important;
                    }
                    .btn-review {
                        box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
                        width: 100%;
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            height: 51px;
                            font-size: 16px;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            width: ${convertPxToVw('218')}vw;
                            height: ${convertPxToVw('48')}vw;
                        }
                    }
                }
            }
        }
    }
`;

export const PostUnBoxingVideoBlock = styled.div`
    display: flex;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        margin-top: ${convertPxToVw('58')}vw;
        border-radius: ${convertPxToVw('16')}vw;
        padding: ${convertPxToVw('40')}vw ${convertPxToVw('40')}vw;
        border: 1px solid ${Colors.reviewCardbrd};
    }

    .unboxing-row {
        display: flex;
        flex-wrap: wrap;
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            padding: 1.5rem;
        }
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin: 0 calc(${convertPxToVw('17')}vw * -1);
        }
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            > .unboxing-col {
                margin: 0 ${convertPxToVw('17')}vw;
            }
        }
    }
    .video-block {
        overflow: hidden;
        width: 100%;
        height: 225px;
        border-radius: 12px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            width: ${convertPxToVw('402')}vw;
            border-radius: ${convertPxToVw('12')}vw;
            height: ${convertPxToVw('225')}vw;
        }
        img,
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: ${convertPxToVw('12')}vw;
        }
    }
    .unboxing-video-data {
        width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            width: ${convertPxToVw('440')}vw;
            margin-left: ${convertPxToVw('34')}vw;
        }
        h3 {
            display: flex;
            font-weight: 600;
            align-items: center;
            font-size: 16px;
            margin-top: 12px;
            margin-bottom: 12px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin-top: 0;
                margin-bottom: ${convertPxToVw('12')}vw;
                font-size: ${convertPxToVw('24')}vw;
            }
            .icon {
                margin-left: 5px;
                cursor: help;
            }
        }
        .unboxing-video-text-block {
            color: ${Colors.gray100};
            margin-bottom: 16px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin-bottom: ${convertPxToVw('24')}vw;
            }
            p {
                margin: 0;
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: ${convertPxToVw('12')}vw;
                    line-height: ${convertPxToVw('15')}vw;
                }
            }
        }
        .unboxing-social-block {
            h4 {
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 13px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: ${convertPxToVw('14')}vw;
                    margin-bottom: ${convertPxToVw('13')}vw;
                }
            }
            .ub-social-icon-wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .ub-social-icon-block {
                    display: flex;
                    align-items: flex-end;
                    .social-icon-link {
                        padding: 0;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            width: ${convertPxToVw('40')}vw;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .icon {
                        cursor: help;
                        margin-left: 6px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-left: ${convertPxToVw('2')}vw;
                        }
                        img {
                            width: 18px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: 1vw;
                            }
                        }
                    }
                }
            }
        }
    }
    .unboxing-mid-and {
        display: flex;
        align-items: center;
        width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            width: ${convertPxToVw('253')}vw;
        }
        .and-wrap {
            position: relative;
            overflow: hidden;
            text-align: center;
            width: 100%;
            span {
                position: relative;
                z-index: 2;
                font-weight: 600;
                color: ${Colors.gray100};
                display: inline-block;
                background-color: ${Colors.pageContetBg};
                font-size: 32px;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    margin: 1rem 0;
                }
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: ${convertPxToVw('32')}vw;
                    line-height: ${convertPxToVw('32')}vw;
                    padding: ${convertPxToVw('24')}vw;
                }
            }
            &::before {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    border-bottom: 1px dashed ${Colors.gray10};
                }
            }
        }
    }
    .unboxing-upload-col {
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            width: ${convertPxToVw('415')}vw;
        }
        p {
            color: ${Colors.gray100};
            margin-bottom: 30px;
            font-size: 12px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: ${convertPxToVw('12')}vw;
                line-height: ${convertPxToVw('15')}vw;
            }
        }
        .ant-alert-with-description {
            margin-top: 1rem;
            .ant-alert-description {
                line-height: normal;
            }
        }
        .upload-input-block-progress-bar {
            .ant-progress-outer {
                padding-right: 0;
                margin-right: 0;
                .ant-progress-inner {
                    border-radius: 10px;
                    background-color: #fef4f6;
                    border: 2px solid ${Colors.primary};
                    position: relative;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        border-radius: 0.65vw;
                    }
                    &::after {
                        font-family: ${Fonts.titleFont};
                        content: 'Uploading...';
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        text-transform: uppercase;
                        font-weight: 700;
                        color: ${Colors.white};
                        font-size: 14px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: 0.8vw;
                        }
                    }
                    .ant-progress-bg {
                        height: 60px !important;
                        border-radius: 0;
                        background-color: ${Colors.primary};
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            height: 3.6vw !important;
                        }
                    }
                }
            }
            .ant-progress-text {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                padding: 0 20px;
                color: ${Colors.white};
            }
        }

        .upload-input-block {
            font-family: ${Fonts.titleFont};
            font-weight: 600;
            text-transform: uppercase;
            color: ${Colors.gray100};
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            justify-content: center;
            font-size: 12px;
            height: 60px;
            border-radius: 12px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: ${convertPxToVw('12')}vw;
                height: ${convertPxToVw('68')}vw;
                border-radius: ${convertPxToVw('12')}vw;
            }
            background-color: ${Colors.couponBg};
            background-image: repeating-linear-gradient(0deg, #f9e8ec, #f9e8ec 6px, #0000 10px, #0000 15px, #f9e8ec 15px),
                repeating-linear-gradient(90deg, #f9e8ec, #f9e8ec 6px, #0000 10px, #0000 15px, #f9e8ec 15px),
                repeating-linear-gradient(180deg, #f9e8ec, #f9e8ec 6px, #0000 6px, #0000 15px, #f9e8ec 15px),
                repeating-linear-gradient(270deg, #f9e8ec, #f9e8ec 6px, #0000 6px, #0000 15px, #f9e8ec 15px);
            background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
            background-position: 0 0, 0 0, 100% 0, 0 100%;
            background-repeat: no-repeat;
            box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
            input[type='file'] {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
            }
            .icon {
                width: 26px;
                height: 26px;
                margin-right: 16px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('44')}vw;
                    height: ${convertPxToVw('44')}vw;
                    margin-right: ${convertPxToVw('16')}vw;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

export const ViewOrderDetailPopupCmp = styled(Popup)`
    max-width: 100%;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        width: 100% !important;
        max-width: ${convertPxToVw('1200')}vw;
    }
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        max-width: ${convertPxToVw('1000')}vw;
    }
    .ant-modal-content {
        .ant-modal-body {
            .account-orde-detail-wrap {
                .account-orde-detail-row {
                    margin: 0 calc(${convertPxToVw('25')}vw * -1);
                    .account-orde-detail-col {
                        padding: 0 ${convertPxToVw('20')}vw;
                    }
                }
                .account-orde-detail-2 {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .account-order-card {
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        text-align: center;
                        margin-top: 1rem;
                    }
                    &.order-detail {
                        border-radius: ${convertPxToVw('8')}vw 0 0 ${convertPxToVw('8')}vw;
                        h4 {
                            margin-bottom: 1rem;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                margin-bottom: 1rem;
                            }
                        }
                    }
                    &.order-info {
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            margin-top: 1rem;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            border-radius: 0 ${convertPxToVw('8')}vw 0 0;
                        }
                        h4 {
                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                margin-bottom: 1rem;
                            }
                        }
                    }
                    &.estimated-delivery-card {
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: 0;
                            margin-top: ${convertPxToVw('14')}vw;
                            border-radius: 0 0 ${convertPxToVw('8')}vw 0;
                        }
                        .icon {
                            height: fit-content;
                            margin-right: 1rem;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                flex-basis: ${convertPxToVw('53')}vw;
                                width: ${convertPxToVw('53')}vw;
                                height: ${convertPxToVw('53')}vw;
                                margin-right: ${convertPxToVw('16')}vw;
                            }
                            img {
                                width: 53px;
                                height: 53px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .estimated-delivery-data {
                            flex: auto;
                            text-align: left;
                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                margin-top: 1rem;
                            }
                            p {
                                .d-block-date {
                                    display: block;
                                }
                            }
                        }
                        h4 {
                            color: ${Colors.gray100};
                            margin-bottom: 0;
                        }
                        p {
                            margin-bottom: 0;
                            color: ${Colors.gray40};
                            font-size: 14px;
                            line-height: 17px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('14')}vw;
                                line-height: ${convertPxToVw('17')}vw;
                            }
                            span {
                                color: ${Colors.gray100};
                            }
                        }
                    }
                    &.shipping-info-detail {
                        margin-top: 20px;
                        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                            margin-top: ${convertPxToVw('40')}vw;
                            border-radius: ${convertPxToVw('8')}vw;
                        }

                        h4 {
                            margin-bottom: 16px;
                            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                                margin-bottom: 5px;
                            }
                        }
                        .shipping-detail-block {
                            display: flex;
                            align-items: top;
                            font-family: ${Fonts.titleFont};
                            text-transform: capitalize;
                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                flex-wrap: wrap;
                            }
                            .shipping-detail-left {
                                font-size: 14px;
                                width: 100%;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: ${convertPxToVw('14')}vw;
                                    width: ${convertPxToVw('230')}vw;
                                    flex-basis: ${convertPxToVw('230')}vw;
                                    margin-right: ${convertPxToVw('78')}vw;
                                }
                            }
                            .shipping-detail-right {
                                flex: auto;
                            }
                            .shipping-detail-row {
                                display: flex;
                                align-items: center;
                                font-weight: 500;
                                color: ${Colors.gray40};
                                margin-bottom: 10px;
                                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                    justify-content: space-between;
                                }
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    margin-bottom: ${convertPxToVw('10')}vw;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                }
                                .label {
                                    color: ${Colors.gray120};
                                    font-weight: 600;
                                    flex: 0 0 ${convertPxToVw('70')}vw;
                                    padding-right: ${convertPxToVw('10')}vw;
                                }
                                .info {
                                    text-transform: lowercase;
                                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                        text-align: right;
                                    }
                                }
                            }
                        }
                    }
                    h4 {
                        font-family: ${Fonts.titleFont};
                        color: ${Colors.gray80};
                        text-transform: uppercase;
                        font-weight: 600;
                        margin-bottom: ${convertPxToVw('30')}vw;
                        font-size: 16px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('16')}vw;
                        }
                    }
                    .order-table {
                        width: 100%;
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            font-size: 14px;
                        }
                        tr {
                            td,
                            th {
                                font-family: ${Fonts.titleFont};
                                font-weight: 500;
                                border-bottom: 1px solid ${rgba(Colors.gray10, 0.4)};
                                text-transform: capitalize;
                                vertical-align: top;
                                padding: 10px;
                                .note {
                                    color: ${Colors.gray40};
                                    padding-right: 10px;
                                    display: block;
                                    font-size: 12px;
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        line-height: ${convertPxToVw('18')}vw;
                                        font-size: ${convertPxToVw('12')}vw;
                                    }
                                }
                                &.text-dark-gray {
                                    color: ${Colors.gray100};
                                }
                            }
                            th {
                                color: ${Colors.gray40};
                                text-align: left;
                            }
                            td {
                                color: ${Colors.gray80};
                                text-align: right;
                                .ex-data {
                                    color: ${Colors.gray40};
                                    padding-right: 10px;
                                }
                            }
                        }
                        tbody {
                            tr {
                                &:last-child {
                                    td,
                                    th {
                                        border-bottom: 0;
                                    }
                                }
                            }
                        }
                        tfoot {
                            tr {
                                td,
                                th {
                                    font-weight: 600;
                                    color: ${Colors.gray80};
                                    border-top: 1px dashed ${Colors.gray100};
                                    border-bottom: 0;
                                }
                                th {
                                    text-transform: uppercase;
                                }
                                td {
                                    .discount-price {
                                        color: ${Colors.gray80};
                                        text-decoration: line-through;
                                        font-size: 14px;
                                        padding-right: 10px;
                                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                            font-size: ${convertPxToVw('14')}vw;
                                            padding-right: ${convertPxToVw('10')}vw;
                                        }
                                    }
                                    color: ${Colors.primary};
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const AccountReviewModalCmp = styled(Popup)`
    max-width: 100%;
    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        height: 100%;
        bottom: 0;
        top: 0;
        .ant-modal-content {
            padding-bottom: 3rem;
            min-height: 100%;
        }
    }
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        max-width: ${convertPxToVw('1400')}vw;
    }
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        max-width: ${convertPxToVw('1000')}vw;
    }
    .ant-modal-content {
        .ant-modal-body {
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                padding: ${convertPxToVw('20')}vw;
                padding-bottom: ${convertPxToVw('40')}vw;
            }
        }
        .account-review-modal-data-block {
            .account-magnifier-block {
                width: 100%;
                margin: 0 auto 2.5vw auto;
                position: relative;
                text-align: center;
                height: 400px;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    height: 300px;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    margin: 0 auto 1vw auto;
                    height: ${convertPxToVw('500px')}vw;
                }
                .magnifier {
                    text-align: center;
                    height: 100% !important;
                    width: 100%;
                    .lazy-load-image-loaded {
                        width: 100%;
                        height: 100% !important;
                        img {
                            height: 100% !important;
                            object-fit: contain;
                            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                                width: 100%;
                            }
                        }
                    }
                    img {
                        object-fit: contain;
                        max-width: 100%;
                    }
                }

                .img-length {
                    .lazy-load-image-loaded {
                        img {
                            max-width: 100%;
                        }
                    }
                }
                .buttons_bottom {
                    position: absolute;
                    bottom: 1.5vw;
                    left: 0;
                    right: 0;
                    .btn_view_photo {
                        background: rgba(255, 255, 255, 0.9);
                        margin: 0 auto;
                        color: ${Colors.black};
                        margin: 0 0.5rem;
                        height: 40px;
                        padding: 0 1rem;
                        font-size: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: 0.65vw;
                            border-radius: 0.7vw;
                            height: 1.75vw;
                        }
                        img {
                            margin-left: 0.25rem;
                        }
                    }
                }
            }
            .account-modal-review-text {
                font-family: ${Fonts.alternateFont2};
                color: ${Colors.gray100};
                font-size: 12px;
                margin-bottom: 10px;
                margin-top: 10px;
                line-height: 16px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    margin-top: 0;
                    font-size: ${convertPxToVw('14')}vw;
                    margin-bottom: ${convertPxToVw('22')}vw;
                    line-height: ${convertPxToVw('17')}vw;
                }
                p {
                    margin: 0;
                }
            }
            .ant-btn {
                font-family: ${Fonts.titleFont};
                font-weight: 600;
                text-transform: uppercase;
                text-shadow: none;
                height: 42px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    height: ${convertPxToVw('64')}vw;
                }
            }
            .account-2-btn-row {
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }
                .ant-btn {
                    box-shadow: 0px 8px 10px 0px rgba(16, 18, 35, 0.2);
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        width: ${convertPxToVw('360')}vw;
                        margin-bottom: 0;
                    }
                    ~ .ant-btn {
                        margin-left: ${convertPxToVw('40')}vw;
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            width: 100%;
                            height: unset;
                            margin-left: 0;
                            font-size: 16px;
                            line-height: unset;
                        }
                    }
                    &.btn-ask-modification {
                        color: ${Colors.gray100};
                        box-shadow: none;
                        background-color: #fff;
                        border: 2px dashed ${Colors.blueMenu};
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            order: 2;
                            height: unset;
                            margin-top: 1rem;
                            font-size: 16px;
                            width: 100%;
                            line-height: unset;
                        }
                    }
                }
            }
            .form-control-area {
                font-size: 12px;
                resize: none;
                border: 0;
                border-radius: 12px;
                background-color: ${rgba(Colors.gray10, 0.4)};
                height: 70px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    height: 42px;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    height: ${convertPxToVw('64')}vw;
                }
            }
            .account-edit-comment-row {
                display: flex;
                align-items: flex-end;
                width: 100%;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    margin-top: 1rem;
                    margin-right: 0 !important;
                }
                .label-text {
                    font-family: ${Fonts.titleFont};
                    color: ${Colors.gray100};
                    font-size: 12px;
                    text-transform: uppercase;
                    font-weight: 600;
                    margin: 0 0 0 8px;
                }
                .button-top {
                    margin-top: 1rem;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: 0;
                    }
                    .ant-btn {
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            height: 51px;
                            font-size: 16px;
                        }
                    }
                }
            }
            .approved-row {
                margin-top: 80px;
                text-align: center;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin-top: ${convertPxToVw('40')}vw;
                }
                .title {
                    font-family: ${Fonts.titleFont};
                    font-weight: 600;
                    color: ${Colors.primary};
                    text-transform: uppercase;
                    font-size: 16px;
                    margin-top: ${convertPxToVw('10')}vw;
                }
                .ant-btn {
                    height: 56px;
                }
            }
        }
    }
`;

export const ThankYouPopupCmp = styled(Popup)`
    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        position: absolute;
        bottom: 0;
        max-width: 100%;
    }
    .ant-modal-content {
        .ant-modal-body {
            .thank-you-popup-wrapper {
                max-width: 708px;
                margin: 0 auto;
                text-align: center;
                h3,
                h5 {
                    font-family: ${Fonts.titleFont};
                }
                p {
                    margin: 0;
                    font-weight: 600;
                }
                .thankyou-title-block {
                    margin-top: ${convertPxToVw('73')}vw;
                    margin-bottom: ${convertPxToVw('18')}vw;
                    h3 {
                        text-transform: uppercase;
                        color: ${Colors.success02};
                        font-size: 24px;
                        margin-bottom: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-bottom: ${convertPxToVw('12')}vw;
                            font-size: ${convertPxToVw('46')}vw;
                            line-height: ${convertPxToVw('35')}vw;
                        }
                    }
                    p {
                        color: ${Colors.success};
                    }
                }
                .thankyou-next-block {
                    margin-bottom: ${convertPxToVw('69')}vw;
                    h5 {
                        font-weight: 600;
                        font-size: 18px;
                        margin-bottom: 6px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('24')}vw;
                            line-height: ${convertPxToVw('35')}vw;
                            margin-bottom: ${convertPxToVw('5')}vw;
                        }
                    }
                    p {
                        font-weight: 500;
                        color: ${Colors.gray80};
                        font-family: ${Fonts.titleFont};
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            line-height: ${convertPxToVw('23')}vw;
                        }
                    }
                }
                .ant-btn {
                    width: 100%;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        max-width: ${convertPxToVw('316')}vw;
                    }
                }
            }
        }
    }
`;

export const ShippingAddressPopupCmp = styled(Popup)`
    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        max-width: 100%;
    }
`;

export const ShippingAddressDetail = styled.div`
    .shippingAddressDetail_select-dropdown {
        .ant-select {
            width: 100%;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                margin-bottom: 1rem;
                font-size: 14px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                width: 18.25vw;
            }
            .ant-select-selector {
                border: 1px solid #ee4266;
                color: ${Colors.primary};
                height: auto;
                text-transform: uppercase;
                border-radius: 6px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    border-radius: ${convertPxToVw('12')}vw;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    padding: 0.5rem 1rem;
                }
            }
            .ant-select-arrow {
                color: ${Colors.primary};
                right: 11px;
            }
        }
        .ant-select-selection-item {
            font-weight: 600;
        }
        .ant-select-single.ant-select-open .ant-select-selection-item {
            color: ${Colors.primary};
        }
    }

    .checkoutDetails_title {
        font-weight: 700;
        color: ${Colors.black};
        font-size: 16px;
        margin-bottom: 15px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            font-size: 1.249vw;
            line-height: 1.822vw;
            margin-bottom: 1.041vw;
        }
    }
    .fa_icon_close {
        width: 1.3vw;
        height: 1.3vw;
        color: ${Colors.primary};
        cursor: pointer;
    }
    .checkout-details-button {
        font-family: ${Fonts.titleFont};
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 12px;
        background-color: transparent;
        color: ${Colors.primary};
        border: 1px solid ${Colors.primary};
        justify-content: center;
        font-size: 14px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            font-size: 0.833vw;
            width: 15.781vw;
            height: 2.5vw;
            padding-left: 1.2vw;
            padding-right: 1.2vw;
            border-radius: 0.7vw;
        }
        svg {
            margin-left: 10px;
        }
    }
    .estimate_detail-content-box {
        background-color: #ffffff;
        border: 2px dashed #dedee0;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        padding: 12px;
        margin-top: 30px;
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            flex-wrap: wrap;
        }
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            margin: 2vw auto 0;
            padding: 0.8vw;
        }
        .estimate_detail-left {
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                text-align: center;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                width: 65%;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 18.854vw;
            }
            .checkout_estimate_title {
                display: flex;
                align-items: center;
                gap: 0.312vw;
                color: ${Colors.gray100};

                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    justify-content: center;
                }
                h3 {
                    font-weight: 700;
                    font-size: 16px;
                    margin-bottom: 0;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.833vw;
                    }
                }
            }
            .date {
                margin-bottom: 0;
                margin-top: 8px;
                font-weight: 600;
                font-size: 12px;
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 12px;
                }
            }
        }
        p {
            font-weight: 400;
            margin-bottom: 0;
            font-size: 12px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                line-height: 0.85vw;
                font-size: 0.72vw;
            }
        }
        .shipping_method-right {
            background: #fafafa;
            padding: 10px;
            border-radius: 10px;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                width: 100%;
            }
            .checkout_sooner_title {
                display: flex;
                align-items: center;
                h3 {
                    color: ${Colors.black};
                    margin-right: 0.5vw;
                    text-transform: uppercase;
                    font-size: 16px;
                    margin-bottom: 0;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.833vw;
                    }
                }
            }
            .ant-radio-group {
                margin-top: 5px;
                .ant-radio-wrapper {
                    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                        font-size: 14px;
                        align-items: center;
                    }
                }
            }
            .ant-radio-checked {
                &::after {
                    border: none;
                }
                .ant-radio-inner {
                    border-color: ${Colors.blueMenu};
                    ::after {
                        background-color: ${Colors.blueMenu};
                    }
                }
            }
            .ant-radio-input:focus + .ant-radio-inner {
                box-shadow: none;
            }
        }
    }
    .tip-box {
        margin-top: 1.65vw;
        text-align: center;
        .copy-code_box {
            border: 2px dashed ${Colors.blueMenu};
            border-radius: 9px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 100%;
            padding: 12px 15px;
            margin-top: 1.75rem;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding: ${convertPxToVw('25')}vw;
                flex-wrap: wrap;
                max-width: 19.7vw;
                margin-top: 0;
                border: 2px dashed #dedee0;
            }
            p {
                color: ${Colors.gray80};
                text-transform: uppercase;
                font-weight: 600;
                font-family: ${Fonts.titleFont};
                font-size: 14px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: 100%;
                    font-size: 0.8vw;
                }
            }
            .amount {
                color: ${Colors.primary};
                font-weight: 600;
            }
        }
        .right-box_content {
            color: #000;
            font-size: 14px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: 0.7vw;
            }
            .tip-box-title {
                font-weight: 700;
                margin-bottom: 0.15rem;
                margin-top: 1rem;
                font-family: ${Fonts.titleFont};
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin-top: 0;
                    margin-bottom: 0.35vw;
                    line-height: 0.85vw;
                }
            }
            p {
                font-size: 14px;
                line-height: 14px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: 0.7vw;
                    line-height: 0.75vw;
                }
            }
        }
        .tip-button_block {
            margin-top: 1rem;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin-top: 0.5vw;
            }
            .tipButton {
                text-transform: uppercase;
                color: #fff;
                opacity: 0.4;
                margin-right: 0.4vw;
                font-weight: 400;
                padding: 8px 12px;
                display: inline-flex;
                transition: all 0.4s ease;
                align-items: center;
                border-radius: 20px;
                background: linear-gradient(170.88deg, #ee4266 8.65%, #fa5e7e 130.52%);
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    border-radius: 1.45vw;
                    padding: 0 0.6vw;
                    font-size: 0.6vw;
                    height: 1.7vw;
                }
                &:hover {
                    opacity: 1;
                }
            }
            .active {
                opacity: 1;
            }
        }
    }
`;

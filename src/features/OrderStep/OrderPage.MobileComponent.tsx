import { rgba } from 'polished';
import styled from 'styled-components';

import { Colors, Fonts } from '../../theme';

export const MobileOrderPageMainCmp = styled.div`
    min-height: calc(100vh - 115px);
    /* min-height: 100%; */
    margin-top: 15px;
    /* padding-bottom: 66px; */
    /* min-height: 100%; */
    border-radius: 32px 32px 0 0;
    background-color: ${Colors.white};
    /* padding: 20px; */
    padding-bottom: 70px;
    .mobile-order-inner-block {
        padding: 16px;

        .selected_block_hide {
            visibility: hidden;
            opacity: 0;
            height: 0;
            transition: all 0.4s ease-in-out;
            .select-frame-block {
                justify-content: center;
            }
        }
        .selected_block_show {
            visibility: visible;
            opacity: 1;
            height: 140px;
            .select-frame-block {
                justify-content: center;
            }
        }

        .select_framing_block_hide {
            visibility: hidden;
            opacity: 0;
            height: 0;
            transition: all 0.4s ease-in-out;
        }
        .select_framing_block_show {
            visibility: visible;
            opacity: 1;
            height: 350px;
            margin-bottom: 3rem;
        }

        .mobile-title {
            font-family: ${Fonts.titleFont};
            font-size: 16px;
            line-height: 35px;
            font-weight: 700;
        }
        .order-select-setp-1-card {
            border: 0;
            padding-bottom: 8px;
            &.step-selected {
                opacity: 1;
                pointer-events: auto;
                .card-title-row {
                    justify-content: space-between;
                    .btn-selected {
                        display: inline-flex !important;
                    }
                }
                .order-step-row {
                    opacity: 0;
                    visibility: hidden;
                    height: 0;
                }
                .order-selected-row {
                    visibility: visible;
                    opacity: 1;
                    height: 140px;
                }
            }
            &.active {
                animation: fadeIn 0.2s;
            }
            @keyframes fadeIn {
                0% {
                    visibility: hidden;
                }
                100% {
                    visibility: visible;
                }
            }
            .card-title-row {
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                .card-title {
                    font-size: 16px;
                    line-height: 35px;
                    margin-bottom: 0;
                    .icon {
                        margin-left: 5px;
                        cursor: pointer;
                    }
                }
                .btn-selected {
                    position: static;
                    left: unset;
                    transform: unset;
                    opacity: 1;
                    visibility: visible;
                    display: none;
                    pointer-events: auto;
                    padding: 0;
                    background: transparent;
                    color: ${Colors.blueMenu};
                    box-shadow: none;
                    font-size: 14px;
                    height: unset;
                    &:hover {
                        span {
                            &.selected {
                                display: inline-block;
                            }
                        }
                    }
                    span {
                        font-size: 14px;
                        color: ${Colors.blueMenu};
                        text-transform: capitalize;
                    }
                    .svg-inline--fa {
                        margin-left: 10px;
                    }
                }
            }
            .order-selected-row {
                text-align: center;
                overflow: hidden;
                visibility: hidden;
                opacity: 0;
                height: 0px;
                transition: all 0.4s ease;
                .order-step-col {
                    display: inline-block;
                    padding: 12px 0;

                    .step-label {
                        text-align: center;
                        .step-img-block {
                            width: 88px;
                            height: 88px;
                            border-radius: 20px;
                            position: relative;
                            border: 1px solid ${Colors.blueMenu};
                            margin: 0 auto;
                            img {
                                padding: 10px;
                                left: 0;
                                width: 100%;
                                height: auto;
                                position: absolute;
                                object-fit: cover;
                            }
                            .output_text {
                                font-weight: 600;
                                font-size: 14px;
                                text-align: center;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                text-transform: uppercase;
                                color: #807e8c;
                                output {
                                    padding: 0 10px;
                                }
                            }
                        }
                        .step-inn-label {
                            font-size: 12px;
                            font-weight: 600;
                            margin: 8px 0 0 0;
                        }
                    }
                }
            }
            .order-step-row {
                margin: 0 -5px;
                height: 292px;
                overflow: hidden;
                transition: all 0.4s ease;
                .order-step-col {
                    margin: 12px 0;
                    padding: 0 5px;
                    text-align: center;
                    flex: 0 0 33.33%;
                    .step-label {
                        .step-img-block {
                            width: 88px;
                            height: 88px;
                            border-radius: 20px;
                            img {
                                padding: 8px;
                            }
                        }
                        .step-inn-label {
                            margin-top: 8px;
                            font-size: 13px;
                            padding: 0 5px;
                            line-height: 16px;
                        }
                    }
                }
            }
            .theme-dialog-outer {
                position: fixed;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                z-index: 11;
                background-color: ${rgba(Colors.gray120, 0.2)};
                border-radius: 0;
                cursor: pointer;
            }
            .theme-dialog,
            .medium-dialog {
                position: fixed;
                width: 100%;
                max-width: 91%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                background: ${Colors.white};
                border-radius: 8px;
                padding: 20px 16px;
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s ease;
                p {
                    margin: 0;
                    ~ p {
                        margin-top: 15px;
                    }
                }
                .icon-close {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    font-size: 10px;
                    color: ${Colors.gray100};
                    cursor: pointer;
                    svg {
                        width: 12px;
                        height: 12px;
                    }
                }
                p {
                    font-size: 12px;
                    line-height: 16px;
                    color: ${Colors.gray60};
                    margin: 0;
                    margin-top: 1vw;
                }
                &.active {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        &.step-2 {
            .upload-col-1-inner {
                width: 100%;
                text-align: center;
                margin: 0 0 18px 0;
                .upload-title,
                .question-upload-desc {
                    margin: 0 0 0 0;
                }
            }
            .img-upload-block {
                .mobile-img-upload-block {
                    padding: 0;
                    border: 0;
                    margin: 0 0 32px 0;
                    .step2-img-upload-progress-bar {
                        .ant-progress-outer {
                            .ant-progress-inner {
                                border-radius: 20px;
                                &::after {
                                    font-size: 14px;
                                }
                                .ant-progress-bg {
                                    height: 60px !important;
                                }
                            }
                        }
                    }
                    .img-upload-files-info-block {
                        margin-bottom: 0;
                        .img-upload-files-info {
                            height: 90px;
                            border-radius: 20px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            .icon {
                                margin-bottom: 17px;
                            }
                            + .img-upload-files {
                                .step-upload-label {
                                    width: 140px;
                                    flex: 0 0 140px;
                                    border-radius: 20px;
                                    padding: 15px;
                                    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23EE43679C' stroke-width='2' stroke-dasharray='7' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
                                }
                            }
                        }
                        .img-upload-files {
                            .step-upload-label {
                                height: 90px;
                                padding: 24px 20px;
                                border-radius: 48px;
                                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='48' ry='48' stroke='%23EE43679C' stroke-width='2' stroke-dasharray='7' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
                                span {
                                    i {
                                        display: block;
                                        text-align: center;
                                        margin-bottom: 6px;
                                    }
                                }
                            }
                        }
                    }
                    .image-upload-files-attachments-block {
                        width: 100%;
                        margin: 0 -8px;
                        &.image-height {
                            height: 100%;
                        }
                        .files-attachment-img-outer {
                            margin: 16px 0;
                            padding: 0 8px;
                            .files-attachment-img {
                                width: 100px;
                                height: 100px;
                                object-fit: cover;
                                border-radius: 20px;
                                .icon {
                                    width: 24px;
                                    height: 24px;
                                    padding: 6px;
                                }
                                img {
                                    border-radius: 20px;
                                }
                            }
                        }
                    }
                }
                .img-upload-notes {
                    margin: 0;
                    label {
                        font-size: 12px;
                        line-height: 24px;
                        margin: 0 0 8px 0;
                    }
                    .img-upload-textarea {
                        font-size: 14px;
                        height: 48px;
                        padding: 10px;
                        border-radius: 12px;
                    }
                }
            }
            .mob-note {
                padding: 10px 12px;
                margin: 16px 0;
                border-radius: 16px;
                color: ${Colors.gray60};
                background: ${Colors.gray08};
                p {
                    font-size: 12px;
                    line-height: 17px;
                    margin: 0;
                    a {
                        font-weight: 600;
                        text-decoration: underline;
                    }
                }
            }
            .checkobx-label-wrap {
                margin-top: 14px;
                .ant-checkbox-wrapper {
                    font-size: 14px;
                    .ant-checkbox {
                        width: 22px;
                        height: 22px;
                        margin-right: 0;
                        margin-top: 6px;
                        &.ant-checkbox-checked {
                            .ant-checkbox-inner {
                                border-color: ${Colors.primary};
                            }
                            &::after {
                                border-radius: 6px;
                            }
                        }
                        .ant-checkbox-inner {
                            width: 100%;
                            height: 100%;
                            border-radius: 6px;
                            border-color: ${Colors.gray100};
                        }
                    }
                    span {
                        span {
                            white-space: nowrap;
                        }
                    }
                }
                .content {
                    margin-left: 8px;
                    font-size: 16px;
                }
                .que-icon {
                    font-size: 16px;
                    width: 23px;
                    height: 23px;
                    flex: 0 0 23px;
                    margin-left: 5px;
                }
            }
        }
        &.step-3 {
            overflow: hidden;
            .select-size-frame-card {
                border: 0;
                padding: 0;
                .frame-size-block {
                    padding: 0;
                }
                .sub-info-block-inner {
                    text-align: center;
                    border: 1px dashed ${Colors.primary};
                    border-radius: 10px;
                    padding: 10px;
                    margin-bottom: 1rem;
                    .title span {
                        color: ${Colors.primary};
                        font-size: 16px;
                    }
                    .note {
                        margin-bottom: 0;
                    }
                }
                .painting-size {
                    /* text-align: center; */
                    font-weight: 600;
                    font-size: 16px;
                    color: #1a1b1d;
                    line-height: inherit;
                }
                .select-size-label {
                    flex: 1 0 154px;
                    width: 100%;
                    min-width: 154px;
                    border-radius: 20px;
                    height: 100%;
                    .select-size-block-outer {
                        border-radius: 20px;
                        &::after {
                            border-radius: 20px;
                        }
                        .twenty_per_text {
                            margin: 0;
                            margin-top: 3px;
                            font-size: 14px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                        .painting-size {
                            font-size: 14px;
                        }
                        .painting-rate {
                            font-size: 16px;
                            font-weight: 700;
                        }
                        .select-size-wrap {
                            border-radius: 20px;
                            display: block;
                            padding: 7px 12px;
                            font-size: 12px;
                        }
                    }
                    .opacity05 {
                        opacity: 0.45;
                    }
                }
                .select-frame-block {
                    padding: 0;
                    gap: 10px;
                    .select-frame-label {
                        width: 107px;
                        height: 100%;
                        flex-direction: column;
                        text-align: center;
                    }
                    .frame-name {
                        text-transform: capitalize;
                        font-weight: 600;
                        margin-top: 0.5rem;
                    }
                    .frame-rate {
                        top: 8px !important;
                        font-size: 12px !important;
                        right: 8px !important;
                        color: ${Colors.black} !important;
                    }
                }
                .select-frame-block-outer {
                    border-radius: 12px;
                    &::after {
                        border-radius: 12px !important;
                    }
                }
                .selected_width {
                    max-width: 210px;
                }
            }
            .slider_frame {
                .slick-slider {
                    width: 100%;
                    .slick-slide {
                        min-width: 220px;
                    }
                }
                .select-size-label {
                    flex: unset;
                    width: 100%;
                    min-width: unset;
                    padding: 0 8px;
                    /* margin: 0; */
                    .select-size-input-radio:checked + .select-size-block-outer {
                        background-color: transparent;
                    }
                    &.active {
                        .select-size-block-outer {
                            border: 1px solid ${Colors.blueMenu};
                            box-shadow: 0px 0px 0px 1px rgba(91, 135, 224, 1);
                            &::after {
                                content: none;
                            }
                        }
                        .select-size-wrap {
                            padding: 6px 14px;
                        }
                    }
                    .select-size-block-outer {
                        &::after {
                            content: none;
                        }
                    }
                }
            }
            .mobile_fram_selection {
                position: relative;
                transition: all 0.4s ease-in-out;
                .frame-select-preview {
                    position: absolute;
                    height: 400px;
                    width: 100%;
                    top: 0px;
                    .f-s-bg {
                        border-radius: 32px 32px 0 0;
                    }
                }
                .slider_top {
                    padding-bottom: 5rem;
                    max-height: 0;
                    opacity: 0;
                    visibility: hidden;
                    display: none;
                    transition: all 0.4s ease-in-out;
                    .slick-dots {
                        bottom: -6.75rem;
                        li {
                            margin: 0;
                            button:before {
                                font-size: 8px;
                            }
                            &.slick-active button:before {
                                color: ${Colors.primary};
                                font-size: 14px;
                            }
                        }
                    }
                    .slider-btn {
                        top: unset;
                        bottom: 16px;
                        background-color: transparent;
                        box-shadow: none;
                    }
                    .arrow_icon {
                        color: ${Colors.gray80};
                        font-size: 24px;
                    }
                    .slick-slide img {
                        height: 420px;
                        margin: 0 auto;
                    }
                }
                .slider_show {
                    opacity: 1;
                    visibility: visible;
                    display: block;
                    max-height: 800px;
                }
            }
            &.step-selected {
                opacity: 1;
                pointer-events: auto;
                .card-title-row {
                    justify-content: space-between;
                    .btn-selected {
                        display: inline-flex !important;
                    }
                }

                .order-selected-row {
                    opacity: 1;
                    visibility: visible;
                    height: 140px;
                }
                .order-step-row {
                    visibility: hidden;
                    opacity: 0;
                    height: 0px;
                }
            }
        }
        &.step-4 {
            overflow: hidden;
            .select-attrs {
                border: none;
                background-color: #fff;
                padding-bottom: 15px;
                .video-react,
                .video-react-poster {
                    border-radius: 14px;
                    overflow: hidden;
                }
                &--info {
                    margin: 15px 0;
                    gap: 16px;
                }
                .check-box-lable-text {
                    font-size: 12px;
                    margin-left: 10px;
                }
                .ant-checkbox-inner {
                    border-radius: 4px;
                    width: 18px;
                    height: 18px;
                }
                .text {
                    font-size: 12px;
                    line-height: normal;
                    color: ${Colors.black};
                }
            }
            .orderSummary_button {
                margin: 5px 10px;
            }
        }
        .orderSummary_button {
            margin: 10px 5px 10px;
            .summary_button {
                border-radius: 14px;
                border: none;
                box-shadow: none;
                width: 100%;
                letter-spacing: -0.02em;
                text-decoration-line: underline;
                text-transform: uppercase;
                color: #1a1b1d;
                font-size: 14px;
                font-weight: 600;
                background-color: #fff;
                border: 2px dashed ${Colors.blueMenu};
                display: flex;
                align-items: center;
                justify-content: center;
                height: 67px;
                max-width: 327px;
                margin: 0 auto;
            }
        }
        &.checkout-step {
            .check-summary-headings {
                font-style: normal;
                font-weight: 700;
                font-family: ${Fonts.primaryFont};
                font-size: 24px;
                line-height: 35px;
                color: ${Colors.black};
                text-align: center;
                text-transform: uppercase;
            }
            .title-block {
                padding-bottom: 8px;
                .title {
                    color: ${Colors.black};
                    font-size: 16px;
                }
            }
            .checkout-setting-left {
                padding-top: 0;
                .checkout-selection-block {
                    justify-content: start;
                    margin: 15px 0 25px 0;
                    .checkout-selection-item {
                        &--title {
                            font-size: 10px;
                            color: ${Colors.black};
                            margin: 10px 0 0 0;
                        }
                    }
                    .checkout-selection-item.theme {
                        .img-block {
                            border: 1px solid ${Colors.blueMenu};
                            border-radius: 20px;
                            padding: 0.75rem;
                            width: 70px;
                            height: 70px;
                        }
                    }
                    .checkout-selection-item.medium {
                        .img-block {
                            border: 1px solid ${Colors.blueMenu};
                            border-radius: 20px;
                            width: 70px;
                            height: 70px;
                        }
                    }
                }
                .selected_images_show {
                    gap: 1rem;
                }
                &--item {
                    margin-top: 1.5rem;
                }
            }
            .select-size-frame-card {
                .select-size-label {
                    flex: 0 0 200px;
                    width: 100%;
                    min-width: 200px;
                    height: fit-content;
                    margin: 0;
                }
                .frame-size-block {
                    margin-top: 6px;
                }
            }
            .select-size-frame-card .select-frame-block {
                .select-frame-label {
                    width: 130px;
                    height: auto;
                }
            }
            .checkout_settings_right {
                background-color: transparent;
                .checkbox-title {
                    font-size: 13px;
                    margin-left: 10px;
                    margin-right: 2px;
                    width: auto;
                }
                .price_label {
                    font-size: 13px;
                }
                .ant-checkbox-inner {
                    width: 16px;
                    height: 16px;
                    border-radius: 4px;
                }
                .ant-card-body {
                    padding: 0;
                }
            }
            .checkout_summery {
                padding: 0;
                background-color: transparent;
                .checkout_input {
                    .checkoutCoupon_input {
                        padding: 14px 12px;
                        border-radius: 12px;
                    }
                }
                .apply-coupan-button {
                    border-radius: 12px;
                    bottom: 0px;
                    right: 0;
                    width: auto;
                }
            }
            .checkout_details_section {
                border: none;
                background-color: transparent;
                margin-top: 1rem;
                .ant-card-body {
                    padding: 0;
                }
                .checkout-add_carditcard {
                    font-size: 14px;
                }
                .checkout_contac_form {
                    .phone_num_input {
                        padding-left: 100px;
                    }
                    .ant-input {
                        border-radius: 6px;
                    }
                    .ant-select .ant-select-selector {
                        height: 44px;
                        border-radius: 6px;
                    }
                }
                .card-input-control {
                    border-radius: 6px;
                }
                .ant-form-item button {
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .note2 {
                    font-size: 14px;
                }
                .estimate_detail-content-box {
                    flex-wrap: wrap;
                    justify-content: center;
                    .estimate_detail-left {
                        width: 100%;
                        text-align: center;
                    }
                    .checkout_estimate_title {
                        justify-content: center;
                    }
                }
            }
        }
    }
    .info-step-customer-review {
        .customer-single-review-block {
            .ant-card-body {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .single-reviwe-title {
                    font-size: 12px;
                    line-height: 35px;
                    display: flex;
                }
                .customer-review-and-rate {
                    margin-bottom: 8px;
                    .review-and-rate-wrap {
                        margin: 0;
                        .customer-rating {
                            font-size: 24px;
                            line-height: 35px;
                        }
                        .ant-rate {
                            font-size: 14px;
                        }
                    }
                    .total-review {
                        font-size: 12px;
                        line-height: 16px;
                        margin: 0;
                    }
                }
                .single-review-btm-logo {
                    margin: 0 auto;
                    .lazy-load-image-loaded {
                        width: 92px;
                    }
                }
            }
        }
    }
    .step-accordion {
        .ant-collapse-item {
            .ant-collapse-content {
                .medium-collapse-content {
                    height: auto;
                }
            }
        }
    }
`;
export const MobileOrderHeaderCmp = styled.nav`
    border-radius: 0 0 12px 12px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    .checkout-header-inner {
        padding: 30px 15px;
        background-color: #5b87e0;
        box-shadow: 0px 0px 37px rgba(16, 18, 35, 0.03);
        border-radius: 0px 0px 12px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        .checkout-header-title {
            font-size: 16px;
            line-height: 35px;
            font-family: ${Fonts.titleFont};
            text-align: center;
            margin: 0;
            color: #fff;
            font-weight: 600;
        }
    }
    .mobile-order-header-nav {
        background-color: ${Colors.white};
        margin: 0;
        list-style: none;
        padding: 15px 15px;
        display: flex;
        justify-content: space-between;
        .nav-item {
            display: flex;
            flex-direction: column;
            color: ${Colors.gray40};
            text-align: center;
            justify-content: center;
            .top-indicater {
                height: 28px;
                text-align: center;
                margin-bottom: 9px;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon {
                    width: 24px;
                    height: 24px;
                    /* display: none; */
                }
                .number {
                    width: 24px;
                    height: 24px;
                    flex: 0 0 24px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 28px;
                    font-size: 16px;
                    font-weight: 600;
                    color: ${Colors.gray40};
                    background: ${Colors.reviewCardbrd};
                }
            }
            .nav-link-name {
                font-family: ${Fonts.titleFont};
                font-size: 12px;
                font-style: normal;
                font-weight: 600;
                line-height: 13px;
                letter-spacing: -0.24px;
                text-transform: capitalize;
                max-width: 62px;
            }
            &.active {
                color: ${Colors.blueMenu};
                .top-indicater {
                    .number {
                        width: 28px;
                        height: 28px;
                        flex: 0 0 28px;
                        color: ${Colors.white};
                        background: ${Colors.blueMenu};
                    }
                }
            }
            &.selected {
                color: ${Colors.gray80};
                /* .icon {
          display: block;
        }
        .number {
          display: none;
        } */
            }
        }
    }
`;

export const MobileOrderFooterCmp = styled.footer<{ step1: boolean }>`
    padding: 8px 16px;
    background-color: ${Colors.gray08};
    position: fixed;
    width: 100%;
    left: 0;
    z-index: ${(props) => (props.step1 ? 1 : 10)};
    bottom: 0;
    .btn-row {
        display: flex;
        width: 100%;
        .ant-btn {
            font-size: 16px;
            height: 50px;
            justify-content: center;
            text-transform: uppercase;
            flex: auto;
            ~ .ant-btn {
                margin-left: 28px;
            }
        }
        .btn_large {
            width: 190px;
        }
    }
`;

export const CustomSelectPersonsPetsThemeModal = styled.div`
    .bottom_drawer {
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease-in-out;
        &.modal_show {
            opacity: 1;
            visibility: visible;
            .custom-back {
                height: 400px;
            }
        }
        .custom-back {
            left: 0;
            bottom: 0;
            z-index: 10;
            position: fixed;
            width: 100%;
            height: 0px;
            transition: all 0.7s ease-in-out;
            .custom_details {
                padding: 24px 24px 0 24px;
                background-color: ${Colors.white};
                border-radius: 32px 32px 0px 0px;
            }
            .title-block {
                position: relative;
                .icon-close {
                    position: absolute;
                    right: 0;
                    top: 0;
                    color: ${Colors.gray120};
                    padding: 0;
                    .anticon {
                        font-size: 14px;
                    }
                }
                h3 {
                    font-family: ${Fonts.titleFont};
                    font-size: 16px;
                    line-height: 35px;
                    text-align: center;
                    margin: 0 0 4px 0;
                }
                p {
                    color: ${Colors.gray40};
                    line-height: 15px;
                    margin: 0 0 28px 0;
                }
            }
        }
    }
    .custome-control-row {
        .custom_title {
            font-family: ${Fonts.titleFont};
            line-height: 24px;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
            margin: 0 0 10px 0;
            text-align: center;
        }
        .custom-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            .custom-icon-btn {
                width: 43px;
                height: 43px;
                cursor: pointer;
                &.minus {
                    margin-right: 30px;
                }
                &.plus {
                    margin-left: 30px;
                }
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .ant-form-item {
                width: 88px;
                margin: 0;
                .custom-number {
                    font-size: 25px;
                    font-weight: 600;
                    line-height: 35px;
                    text-align: center;
                    padding: 6px 10px;
                    border-radius: 10px;
                    border: 1px solid ${Colors.reviewCardbrd};
                }
            }
        }
    }
    .btn-row {
        padding: 12px 13px;
        .ant-btn {
            font-size: 16px;
            height: 50px;
            justify-content: center;
            text-transform: uppercase;
        }
    }
`;

export const OrderSummaryThemeModal = styled.div`
    .bottom_drawer {
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease-in-out;
        &.modal_show {
            opacity: 1;
            visibility: visible;
            .custom-back {
                height: 400px;
            }
        }
        .custom-back {
            left: 0;
            bottom: 65px;
            z-index: 10;
            position: fixed;
            width: 100%;
            height: 0;
            padding: 24px 24px 0 24px;
            background-color: ${Colors.white};
            border-radius: 32px 32px 0px 0px;
            transition: all 0.7s ease-in-out;
            .order-summary-block {
                min-height: 40vh;
            }
            .relative {
                position: relative;
            }
            .icon-close {
                position: absolute;
                right: 0;
                top: -10px;
                font-size: 14px;
                color: ${Colors.gray100};
                cursor: pointer;
            }
        }
    }
`;

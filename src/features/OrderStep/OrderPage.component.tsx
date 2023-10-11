import { rgba } from 'polished';
import styled from 'styled-components';
import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import Popup from '../../components/Popup';
import { convertPxToVw } from '../../utils/func';
export const OrderPageWrappCmp = styled.div`
    padding-top: 96px;
    @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
        background-color: #ededed;
    }
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: ${PagePdngTopEqualHeaderHeight};
    }
    /* .mobile_comp_data-block {
        overflow: auto;
    } */
    .order-data-block {
        /* height: 70vh; */
        display: flex;
        flex: auto;
        margin: 1rem;
        align-items: flex-start;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            margin: 0 2.5vw;
            align-items: center;
        }
        .order-inner-block {
            width: 100%;
            margin: 20px 0;
        }
        .checkout_text-area {
            margin: 1rem 0;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                margin: 0;
                margin-top: 0.75vw;
            }
            .ant-input {
                background: rgba(217, 224, 242, 0.24);
                border-radius: 0.625vw;
                height: 100%;
                padding: 1vw;
                font-weight: 600;
                border: none;
                resize: none;
                color: ${Colors.gray80};
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.729vw;
                    line-height: 0.937vw;
                }
            }
        }
        .card-title,
        .upload-title {
            font-weight: bold;
            color: ${Colors.gray120};
            display: flex;
            align-items: center;
            margin: 0;
            font-size: 16px;
            font-family: ${Fonts.titleFont};
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: ${convertPxToVw('24')}vw;
                line-height: ${convertPxToVw('35')}vw;
            }
            .icon {
                width: 17px;
                height: 17px;
                margin-top: -0.15vw;
                margin-left: 0.52vw;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: 1.19vw;
                    height: 1.45vw;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .theme-dialog-outer {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            background-color: ${rgba(Colors.gray120, 0.2)};
            border-radius: 1.71vw;
            cursor: pointer;
        }
        .theme-dialog,
        .medium-dialog {
            position: absolute;
            top: 1.71vw;
            left: 1.71vw;
            right: 1.71vw;
            z-index: 9999;
            background: ${Colors.white};
            border-radius: 0.64vw;
            padding: 1.6vw 0.83vw;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            .icon-close {
                position: absolute;
                right: 0.625vw;
                top: 0.625vw;
                font-size: 0.938vw;
                color: ${Colors.gray100};
                cursor: pointer;
            }
            p {
                font-size: 0.83vw;
                line-height: 0.91vw;
                color: ${Colors.gray60};
                margin: 0;
                margin-top: 1vw;
            }
            &.active {
                opacity: 1;
                visibility: visible;
            }
        }
        .medium-dialog {
            top: 0.469vw;
            bottom: 0.469vw;
            left: 0.469vw;
            right: 0.469vw;
            border-radius: 1.249vw;
        }
        .sub-total {
            border-top: 0.052vw solid #807e8c !important;
        }
    }
`;

export const OrderStep1Cmp = styled.div`
    .step-1-row {
        .message_error {
            .ant-popover-content {
                .ant-popover-inner {
                    div {
                        color: red;
                    }
                }
            }
        }
        /* width: 100%; */
        .order-select-setp-1-card {
            position: relative;
            background: #fff;
            border-radius: 1.66vw;
            opacity: 0.5;
            pointer-events: none;
            height: 100%;
            transition: all 0.3s ease;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                border: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
                padding: 1rem;
                padding-bottom: 8vw;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                padding: 1.5vw 2.5vw;
            }
            .mediums-desc {
                font-size: 12px;
                color: ${Colors.gray40};
                margin: 0;
                display: none;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    line-height: 1vw;
                    display: block;
                    font-size: ${convertPxToVw('16')}vw;
                }
            }

            &.active {
                opacity: 1;
                pointer-events: auto;
            }
            &.step-selected {
                + .btn-selected {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                    &[disabled] {
                        pointer-events: none;
                        opacity: 0.3;
                    }
                }
            }
        }
        .order-step-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                justify-content: flex-start;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                justify-content: space-between;
            }
            .order-step-col {
                flex: 0 0 25%;
                width: auto;
                margin: 1rem 0.5rem;
                max-width: 100%;
                @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                    flex: 0 0 21%;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    flex: 0 0 auto;
                    margin: 0;
                    margin-top: ${convertPxToVw('16')}vw;
                }
                .step-label {
                    position: relative;
                    display: inline-block;
                    margin: 0;
                    cursor: pointer;
                    @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                        &:hover {
                            .step-img-block {
                                img {
                                    &.img-view {
                                        opacity: 0;
                                    }
                                    &.img-view-active {
                                        opacity: 1;
                                    }
                                }
                            }
                            .medium-img-block {
                                img {
                                    &.img-view {
                                        opacity: 1;
                                    }
                                    &.img-view-active {
                                        opacity: 1;
                                    }
                                }
                            }
                            .selection-popular {
                                span {
                                    width: auto;
                                    margin-left: -0.156vw;
                                    padding-right: 0.521vw;
                                    opacity: 1;
                                }
                            }
                        }
                    }
                    &.custom-label {
                        transition: all 0.25s ease-out;

                        .custom-front,
                        .custom-back {
                            transition: transform 0.5s ease;
                            -webkit-backface-visibility: hidden;
                            backface-visibility: hidden;
                            .custom-fields {
                                width: 6.7vw;
                                height: 6.7vw;
                                padding: 0.677vw 0.781vw;
                                border-radius: 1vw;
                                border: 2px solid ${Colors.blueMenu};
                                transition: all 0.07s linear;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                background-color: ${Colors.white};
                                .custome-control-row {
                                    width: 100%;
                                    line-height: normal;

                                    ~ .custome-control-row {
                                        margin-top: 0.521vw;
                                    }
                                    .custom_title {
                                        font-weight: 600;
                                        font-size: 0.65vw;
                                        line-height: 1.2vw;
                                        line-height: normal;
                                        text-transform: uppercase;
                                        text-align: left;
                                        margin: 0;
                                    }
                                    .custom-controls {
                                        display: flex;
                                        align-items: center;
                                        justify-content: space-between;
                                        .ant-form-item {
                                            margin-bottom: 0;
                                            .ant-form-item-control-input {
                                                min-height: unset;
                                            }
                                        }
                                    }
                                    .custom-number {
                                        border-radius: 0.5vw;
                                        width: 2.2vw;
                                        height: 1.4vw;
                                        font-weight: 600;
                                        font-size: 0.9vw;
                                        line-height: normal;
                                        text-align: center;
                                        letter-spacing: -0.02em;
                                        padding: 0;
                                        text-transform: uppercase;
                                        border: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
                                        color: #3c3c40;
                                        margin-right: 0.2vw;
                                        &:focus {
                                            box-shadow: unset;
                                        }
                                    }
                                    .custom-icon-btn {
                                        cursor: pointer;
                                        width: 1.302vw;
                                        height: 1.302vw;
                                        display: flex;
                                        align-items: center;
                                        ~ .custom-icon-btn {
                                            margin-left: 0.3vw;
                                        }
                                        img {
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                }
                            }
                        }
                        .themes-custom-select-btn {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            outline: none;
                            border: none;
                            width: 6.5vw;
                            height: 1.76vw;
                            opacity: 0.8;
                            border-radius: 1vw;
                            margin-top: 0.42vw;
                            cursor: pointer;
                            color: ${Colors.white};
                            transition: all 0.1s linear;
                            background: ${Colors.secondaryGRD};
                            span {
                                font-weight: 600;
                                font-size: 0.73vw;
                                line-height: 1.82vw;
                                letter-spacing: -0.01em;
                                text-transform: uppercase;
                                color: #ffffff;
                                padding-left: 0.53vw;
                            }
                            .icon {
                                font-size: 1.33vw;
                            }
                        }
                        .custom_padding {
                            padding: 1.2vw;
                        }
                    }
                    .custom-front {
                        transform: rotateY(0deg);
                    }
                    .custom-back {
                        transform: rotateY(180deg);
                        display: flex;
                        flex-flow: column nowrap;
                        align-items: center;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background-color: #fff;
                        width: 100%;
                    }
                    &.flipped {
                        .custom-front {
                            transform: rotateY(180deg);
                        }
                        .custom-back {
                            transform: rotateY(0deg);
                        }
                    }
                    .selection-popular {
                        background: ${Colors.blueMenu};
                        border-radius: 0.364vw;
                        height: 1.458vw;
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        svg {
                            width: 1.562vw;
                            height: 1.562vw;
                        }
                        span {
                            font-weight: 600;
                            font-size: 0.521vw;
                            line-height: 0.677vw;
                            letter-spacing: 0.03em;
                            color: ${Colors.white};
                            text-transform: uppercase;
                            width: 0;
                            opacity: 0;
                            padding: 0;
                            margin: 0;
                            transition: all 0.2s linear;
                        }
                    }
                }
                .order-input-radio {
                    opacity: 0;
                    display: none;
                    &:checked {
                        + .step-img-block {
                            border: 2px solid ${Colors.blueMenu};
                            img {
                                &.img-view {
                                    opacity: 0;
                                }
                                &.img-view-active {
                                    opacity: 1;
                                }
                            }
                        }
                        + .medium-img-block {
                            img {
                                &.img-view {
                                    opacity: 1;
                                }
                                &.img-view-active {
                                    opacity: 1;
                                }
                            }
                        }
                        ~ .selection-popular {
                            span {
                                width: auto;
                                margin-left: -0.156vw;
                                padding-right: 0.521vw;
                                opacity: 1;
                            }
                        }
                    }
                }
                .step-img-block,
                .medium-img-block {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 88px;
                    height: 88px;
                    border-radius: 1vw;
                    background: ${Colors.white};
                    border: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
                    transition: all 0.07s linear;
                    margin: 0 auto;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        margin: 0;
                        width: 6.7vw;
                        height: 6.7vw;
                    }
                    img {
                        width: 100%;
                        height: auto;
                        position: absolute;
                        object-fit: cover;
                        transition: all 0.3s ease;
                        &.img-view {
                            opacity: 1;
                        }
                        &.img-view-active {
                            opacity: 0;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            padding: 1rem;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            padding: 1.75vw;
                        }
                    }
                }
                .medium-img-block {
                    img {
                        padding: 1vw;
                    }
                }
                .step-inn-label {
                    font-weight: 600;
                    text-align: center;
                    text-transform: uppercase;
                    transition: all 0.1s ease;
                    font-size: 12px;
                    /* font-family: ${Fonts.titleFont}; */
                    margin: 12px 0 0 0;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        line-height: 1.28vw;
                        margin: 0.469vw 0 0 0;
                        font-size: 0.73vw;
                    }
                }
            }
        }
    }
    .btn-selected {
        font-family: ${Fonts.primaryFont};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        transition: all 0.1s ease;
        background: rgba(219, 251, 185, 0.58);
        border-radius: 0.729vw;
        text-shadow: none;
        transition: all 0.2s ease;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        box-shadow: none;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            bottom: 1.3vw;
            padding: 0;
            width: 11vw;
            height: 2.7vw;
        }
        &[disabled] {
            pointer-events: none;
            opacity: 0.3;
        }
        span {
            font-size: 12px;
            font-weight: 600;
            color: ${Colors.gray120};
            text-align: center;
            letter-spacing: -0.02em;
            text-transform: uppercase;
            transition: all 0.3s ease;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 0.8vw;
            }
            &.selected {
                display: inline-block;
            }
            &.edit {
                display: none;
            }
        }
        .icon {
            width: 1.3vw;
            height: 1.3vw;
            position: relative;
            margin-left: 0.469vw;
            transition: all 0.1s ease;
            img {
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                position: absolute;

                &.icon-selected {
                    display: inline-block;
                }
                &.icon-edit {
                    display: none;
                }
            }
        }
        &:hover {
            background: linear-gradient(170.88deg, rgba(91, 135, 224, 0.08) 8.65%, rgba(33, 93, 213, 0.08) 130.52%);
            span {
                &.selected {
                    display: none;
                }
                &.edit {
                    display: inline-block;
                }
            }
            .icon {
                img {
                    &.icon-selected {
                        display: none;
                    }
                    &.icon-edit {
                        display: inline-block;
                    }
                }
            }
        }
    }
    .step-accordion {
        .ant-collapse-item {
            .ant-collapse-header {
                padding: 0.5rem;
                transition: all 0.15s ease;
                border-radius: 0.313vw;
                font-weight: 600;
                color: ${Colors.gray80};
                font-family: ${Fonts.titleFont};
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.833vw;
                    line-height: 0.833vw;
                    padding: 0.625vw 1.041vw;
                }
                .ant-collapse-expand-icon {
                    color: ${Colors.blueMenu};
                    position: relative;
                    margin-right: 0.521vw;

                    .ant-collapse-arrow {
                        font-size: 12px;
                        transform: rotate(0);
                        transition: all 0.3s ease;
                        margin: 0;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: 0.833vw;
                        }
                    }
                }
            }
            &.ant-collapse-item-active {
                .ant-collapse-header {
                    color: ${Colors.gray120};
                    background: linear-gradient(90.17deg, ${rgba(Colors.reviewCardbrd, 0.2)} 8.85%, rgba(217, 224, 242, 0) 101.31%);
                    .ant-collapse-expand-icon {
                        .ant-collapse-arrow {
                            transform: rotate(-90deg);
                        }
                    }
                }
            }
            .ant-collapse-content {
                .ant-collapse-content-box {
                    padding: 0;
                }
                .medium-collapse-content {
                    margin-top: 1vw;
                    overflow: auto;
                    padding: 0 12px;
                    height: 190px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        margin-bottom: ${convertPxToVw('10')}vw;
                        height: ${convertPxToVw('180')}vw;
                    }
                    .img-responsive {
                        width: 100%;
                        img {
                            max-width: 100%;
                            border-radius: 0.521vw;
                        }
                    }
                    strong {
                        font-weight: 600;
                        color: ${Colors.gray80};
                    }
                    p {
                        font-size: 12px;
                        line-height: 1;
                        margin: 0 0 0.469vw 0;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            line-height: 0.885vw;
                            font-size: ${convertPxToVw('14')}vw;
                        }
                    }
                }
            }
        }
    }
`;

export const ImgStepUplaodCmp = styled.div`
    position: relative;
    background: ${Colors.white};
    border-radius: 1.67vw;
    border: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
    transition: all 0.3s ease;
    padding: 1.5rem;
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        padding: 1.6vw 4.25vw 2.5vw;
    }
    .step2-img-upload-progress-bar {
        .ant-progress-outer {
            padding-right: 0;
            margin-right: 0;
            .ant-progress-inner {
                border-radius: 0.65vw;
                background-color: #fef4f6;
                border: 2px solid ${Colors.primary};
                position: relative;
                &::after {
                    font-family: ${Fonts.titleFont};
                    content: 'Uploading...';
                    position: absolute;
                    font-size: 0.8vw;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    text-transform: uppercase;
                    font-weight: 700;
                    color: ${Colors.white};
                }
                .ant-progress-bg {
                    height: 3.6vw !important;
                    border-radius: 0;
                    background-color: ${Colors.primary};
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
    .img-upload-files-info-block {
        display: flex;
        margin-bottom: 1.25vw;
        .img-upload-files-info {
            width: 60%;
            margin-right: 16px;
            color: ${Colors.white};
            position: relative;
            border-radius: 0.65vw;
            background-color: ${Colors.primary};
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 100%;
                flex: 0 0 calc(100% - 9.735vw);
            }
            .text-upload-img {
                font-family: ${Fonts.titleFont};
                font-weight: 700;
                text-transform: uppercase;
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.8vw;
                }
            }
            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
        }
        .img-upload-files {
            flex: 1 1 auto;
            position: relative;
            &.on-drag {
                .step-upload-label {
                    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2349393939' stroke-width='3' stroke-dasharray='7' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
                }
            }
            .step-upload-label {
                font-family: ${Fonts.titleFont};
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                border-radius: 0.65vw;
                color: ${Colors.gray100};
                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23EE43679C' stroke-width='3' stroke-dasharray='7' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
                background-color: #fef4f6;
                cursor: pointer;
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    padding: 1rem;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    height: 3.6vw;
                }
                span {
                    font-weight: 600;
                    color: ${Colors.gray100};
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.729vw;
                        line-height: 1.249vw;
                    }
                }
                .step-upload-input {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }

    .image-upload-files-attachments-block {
        display: flex;
        width: 100%;
        overflow-y: auto;
        padding: 0 0 0.77vw 0;
        margin: 0 -0.39vw;
        &.image-height {
            height: calc(5.7vw + 0.77vw);
        }
        .files-attachment-img-outer {
            display: flex;
            padding: 0 0.39vw;
            .files-attachment-img {
                width: 5.7vw;
                height: 5.7vw;
                border-radius: 1vw;
                overflow: hidden;
                margin: 0;
                position: relative;
                &:hover {
                    .icon {
                        background-color: ${rgba(Colors.white, 0.5)};
                    }
                }
                .icon {
                    top: 50%;
                    left: 50%;
                    position: absolute;
                    z-index: 1;
                    height: 1.562vw;
                    width: 1.562vw;
                    color: ${Colors.white};
                    background-color: ${rgba(Colors.white, 0.25)};
                    transform: translate(-50%, -50%);
                    padding: 0.4vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    cursor: pointer;
                    svg {
                        max-width: 100%;
                    }
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.45);
                }
            }
        }
    }
    .checkobx-label-wrap {
        display: flex;
        position: relative;
        margin-top: 0.677vw;
        color: ${Colors.gray40};
        .ant-checkbox-wrapper {
            display: flex;
            align-items: flex-start;
            font-size: 12px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 0.833vw;
            }
            .que-icon {
                width: 18px;
                height: 18px;
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 12px;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: 1.198vw;
                    height: 1.198vw;
                }
            }
        }
        .ant-checkbox {
            width: 2vw;
            top: 0;
            height: 2vw;
            margin-right: 0.729vw;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 1.198vw;
                height: 1.198vw;
            }
            &::after {
                border-radius: 4px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    border-radius: 0.313vw;
                }
            }
            &.ant-checkbox-checked {
                .ant-checkbox-inner {
                    border-color: ${Colors.primary};
                }
            }
            .ant-checkbox-inner {
                border-radius: 4px;
                width: 2vw;
                height: 2vw;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    border-radius: 0.313vw;
                    width: 1.198vw;
                    border-color: #3c3c40;
                    height: 1.198vw;
                }
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
            }
        }
    }
`;

export const OrderStep2Cmp = styled.div`
    display: block !important;
    .step-2-row {
        .img-upload-block {
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                max-width: 36.85vw;
            }
        }
    }
    .theme-dialog {
        max-width: 14.792vw;
        left: 0;
        p {
            line-height: 0.885vw;
        }
    }
    .question-upload-desc {
        font-size: 12px;
        color: ${Colors.gray40};
        margin: 0.416vw 0 0 0;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            line-height: 1vw;
            font-size: 0.83vw;
        }
    }
    .upload-col-1-inner {
        position: relative;
    }
    .order-faq {
        margin-top: 1.562vw;
        background-color: ${Colors.gray08};
        width: 100%;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            max-width: 20vw;
        }
        .ant-collapse-item {
            border-radius: 0.313vw;
            .ant-collapse-header {
                display: flex;
                align-items: center;
                font-size: 14px;
                padding: 14px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    padding: 1vw;
                    font-size: 0.833vw;
                    line-height: 1.146vw;
                }
                > .ant-collapse-expand-icon {
                    display: flex;
                    align-items: center;
                    color: ${Colors.blueMenu};
                    .ant-collapse-arrow {
                        transition: all 0.3s ease;
                        /* margin: 0; */
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: 1vw;
                        }
                    }
                }
                .ant-collapse-header-text {
                    font-family: ${Fonts.primaryFont};
                    font-weight: 600;
                }
            }
            &.ant-collapse-item-active {
                > .ant-collapse-header {
                    > .ant-collapse-expand-icon {
                        .ant-collapse-arrow {
                            transform: rotate(-90deg);
                        }
                    }
                }
            }
            .ant-collapse-content {
                .ant-collapse-content-box {
                    padding: 0.5vw 1vw 1vw 1vw;
                }
                p {
                    margin: 0 0 1vw 0;
                    color: ${Colors.gray60};
                    font-size: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        line-height: 1vw;
                        font-size: 0.8vw;
                    }
                }
            }
        }
    }
    .img-upload-notes {
        margin-top: 2vw;
        .que-icon {
            width: 18px;
            height: 20px;
            @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 12px;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 1.198vw;
                height: 1.198vw;
            }
        }
        label {
            display: flex;
            font-weight: 600;
            align-items: center;
            line-height: 0.729vw;
            text-transform: uppercase;
            color: ${Colors.gray100};
            margin-bottom: 0.521vw;
            font-size: 12px;
            font-family: ${Fonts.titleFont};
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 0.729vw;
            }
        }
        .img-upload-textarea {
            background: #efeff0;
            border-radius: 0.729vw;
            width: 100%;
            resize: none;
            border: none;
            outline: none;
            font-size: 14px;

            font-size: 0.833vw;
            line-height: 1vw;
            padding: 1vw;
            height: 4.321vw;
        }
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
`;
export const UserLoginPopupCmp = styled(Popup)`
    &.provide_email_popup {
        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
            max-width: 700px;
        }
        .ant-form {
            font-size: 16px;
            @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                font-size: 0.833vw;
            }
            .ant-form-item {
                @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
                    margin-bottom: 12px;
                }
            }
            .ant-form-item-explain-error {
                @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
                    bottom: -24px;
                }
            }
        }
        .ant-modal-content {
            border-radius: 20px;
            @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                border-radius: 32px;
            }
        }
        .ant-modal-body {
            min-height: auto;
            padding: 20px;
            padding-bottom: 3rem;
            border-radius: 32px;
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                padding: 80px;
                padding-bottom: 80px;
            }
            .main-title-popup {
                font-weight: 700;
                color: #000000;
                text-align: center;
                font-size: 28px;
                line-height: normal;
                margin-bottom: 12px;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    margin-top: 14px;
                }
                @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                    margin-bottom: 14px;
                    line-height: 39px;
                    font-size: 32px;
                }
            }
            .subtitle-popup {
                font-weight: 400;
                text-align: center;
                letter-spacing: 0.01em;
                text-transform: lowercase;
                color: #6c6c73;
                font-size: 16px;
                line-height: normal;
                @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                    font-size: 18px;
                    line-height: 24px;
                }
            }
            .ant-input {
                color: #3c3c40;
                font-weight: 600;
                font-size: 14px;
                padding: 14px 12px;
                border-radius: 8px;
                /* border-color: #D9E0F2; */
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    border-radius: 0.417vw;
                    font-size: 16px;
                }
            }
            .ant-select-selector {
                border-radius: 0.417vw;
                border-color: #d9e0f2;
                font-size: 16px;
                align-items: center;
                height: 52px;
                width: 100px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: 130px;
                    height: 56px;
                }
                input {
                    height: 100%;
                }
            }
            .ant-checkbox-wrapper {
                font-size: 16px;
                align-items: center;
                .ant-checkbox {
                    border-color: ${Colors.gray100};
                    width: 22px;
                    top: 0;
                    height: 22px;
                    margin-right: 0.5rem;
                    @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                        width: 18px;
                        margin-right: 0.729vw;
                        height: 18px;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                        width: 1.198vw;
                        height: 1.198vw;
                    }
                    &:hover {
                        border-color: ${Colors.gray100};
                    }
                    &::after {
                        border-radius: 4px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            border-radius: 0.313vw;
                        }
                    }
                    &.ant-checkbox-checked {
                        .ant-checkbox-inner {
                            background-color: ${Colors.white};

                            &::after {
                                border-color: ${Colors.blueMenu};
                                left: 26.5%;
                            }
                        }
                    }
                    .ant-checkbox-inner {
                        border-color: #3c3c40;
                        border-radius: 4px;
                        width: 22px;
                        height: 22px;
                        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                            border-radius: 0.313vw;
                            width: 18px;
                            height: 18px;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                            width: 1.198vw;
                            height: 1.198vw;
                        }
                    }
                }
            }
            .phone_num_input {
                padding-left: 110px !important;
                @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                    padding-left: 150px !important;
                }
            }
            .link_skip {
                position: absolute;
                cursor: pointer;
                font-weight: 600;
                font-size: 18px;
                line-height: 18px;
                color: ${Colors.black};
                right: 0;
                left: 0;
                width: 100%;
                text-align: center;
                padding-top: 0.75rem;
                @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                    padding-top: 1.5rem;
                    color: #aaaaad;
                    right: 40px;
                    text-align: right;
                    left: unset;
                }
            }
            .ant-btn-block {
                padding: 1rem;
                height: unset;
                margin-top: 16px;
                margin-bottom: 16px;
                font-size: 16px;
                @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                    font-size: 14px;
                    margin-top: 5px;
                }
            }
        }
    }
`;
export const OrderStep3Cmp = styled.div`
    display: block !important;
    .size-info-outer {
        margin-top: 1vw;
        display: flex;
        align-items: flex-start;
        column-gap: 24px;
        .size-info-left {
            max-width: 50%;
            margin-left: 1.667vw;
            @media (max-width: ${`${MediaBreakpoints.upLg}px`}) {
                width: 100%;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                margin-left: 0.667vw;
                margin-top: 1vw;
            }
            .sub-total-price-block {
                padding: 0.75rem;
                margin-bottom: 0.833vw;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-family: ${Fonts.titleFont};
                font-size: 0.625vw;
                border-radius: 0.416vw;
                background-color: #fffcfc;
                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F6A0B2FF' stroke-width='2' stroke-dasharray='5%2c 5' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
                font-weight: 500;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    padding: 0.677vw 0.625vw;
                }
                .sub-total-label,
                .sub-total-price {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        line-height: 0.65vw;
                        font-size: 0.65vw;
                    }
                }
                .sub-total-label {
                    text-transform: uppercase;
                }
                .sub-total-price {
                    font-size: 12px;
                    font-weight: 600;
                    text-align: right;
                    text-transform: uppercase;
                    color: ${Colors.primary};
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.75vw;
                        line-height: 0.75vw;
                    }
                }
            }
            .sub-info-block-inner {
                padding: 0 0.521vw 0 0.26vw;
                p {
                    margin-bottom: 0;
                }
            }
            .title {
                font-size: 12px;
                margin: 0 0 0.417vw 0;
                font-weight: 600;
                display: flex;
                justify-content: space-between;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.938vw;
                    line-height: 0.938vw;
                }
            }
        }
        .select-size-message {
            background: #feeded;
            border-radius: 0.364vw;
            font-weight: 600;
            text-transform: uppercase;
            color: ${Colors.clrDanger};
            font-size: 10px;
            padding: 0.5rem;
            margin-right: 1rem;
            margin-bottom: 0;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                margin-left: 0.729vw;
                margin-top: 1vw;
                font-size: 0.729vw;
                line-height: 0.729vw;
                padding: 0.416vw 1.562vw;
            }
        }
    }
    .select-size-frame-card {
        position: relative;
        border-radius: 1.66vw;
        padding: 0.833vw;
        padding-bottom: 1.5vw;
        border: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
        background-color: ${Colors.white};
        height: 100%;
        z-index: 0;
        font-family: ${Fonts.titleFont};
        .order-frame-nav-tab {
            display: flex;
            .order-frame-nav-item {
                border-radius: 0.75vw;
                color: ${Colors.gray40};
                height: 2.75vw;
                flex: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${Colors.pageContetBg};
                transition: all 0.3s ease;
                cursor: pointer;
                span {
                    font-weight: 600;
                    font-size: 10px;
                    text-transform: uppercase;
                    transition: all 0.3s ease;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        line-height: 0.729vw;
                        font-size: 0.729vw;
                    }
                }
                .icon {
                    margin-left: 0.521vw;
                    display: flex;
                    align-items: center;
                    width: 1.042vw;
                    height: 1.042vw;
                    position: relative;
                    .icon-edit {
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s ease;
                    }
                    .icon-selected {
                        width: 100%;
                        height: 100%;
                    }
                    svg {
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        position: absolute;
                        transition: all 0.3s ease;
                    }
                }
                ~ .order-frame-nav-item {
                    margin-left: 0.8vw;
                }
                &.pe-none {
                    pointer-events: none;
                }
                &.active {
                    width: 70%;
                    flex: 0 0 70%;
                    color: ${Colors.gray100};
                    background-color: ${rgba(Colors.reviewCardbrd, 0.7)};
                }
                &.selected {
                    color: ${Colors.gray100};
                    background-color: ${Colors.lightGreen};
                    .icon {
                        color: #83cf59;
                    }
                    &:hover {
                        background-color: ${rgba(Colors.reviewCardbrd, 0.7)};
                        .icon {
                            .icon-edit {
                                opacity: 1;
                                visibility: visible;
                            }
                            svg {
                                opacity: 0;
                                visibility: hidden;
                            }
                        }
                    }
                }
            }
        }
        .frame-size-block,
        .select-frame-block {
            display: flex;
            flex-wrap: wrap;
            padding: 0 10px;
            @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                gap: 0.75rem;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                margin: 0 -0.26vw;
                justify-content: space-between;
            }
        }
        .select-size-label {
            border-radius: 1vw;
            width: 100px;
            height: 80px;
            border-radius: 1vw;
            margin: 1vw 0.26vw 0 0.26vw;
            display: flex;
            cursor: pointer;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 9.5vw;
                height: 6.5vw;
            }
            &:hover {
                .select-size-block-outer {
                    .selection-popular {
                        span {
                            width: auto;
                            margin-left: -0.156vw;
                            padding-right: 0.521vw;
                            opacity: 1;
                        }
                    }
                }
            }
            .select-size-input-radio {
                position: absolute;
                display: none;
                &:checked {
                    + .select-size-block-outer {
                        background-image: none;
                        background-color: ${Colors.blueMenu};
                        .selection-popular {
                            span {
                                width: auto;
                                margin-left: -0.156vw;
                                padding-right: 0.521vw;
                                opacity: 1;
                            }
                        }
                        &::after {
                            display: block;
                        }
                        .select-size-wrap {
                            .painting-size {
                                color: ${Colors.gray120};
                            }
                            .painting-rate {
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    color: ${Colors.primary};
                                }
                            }
                        }
                        .icon {
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
            }
            .select-size-block-outer {
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;
                align-items: center;
                border-radius: 1.042vw;
                /* z-index: 2; */
                padding: 1px;
                transition: all 0.3s ease;
                border: 1px solid rgb(217 224 242 / 100%);
                /* background-image: linear-gradient(
          to bottom,
          #d9e0f2 0%,
          rgba(217, 224, 242, 0) 148.26%
        ); */
                &::after {
                    content: ' ';
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    border-radius: 1.042vw;
                    position: absolute;
                    border: 2px solid ${Colors.blueMenu};
                    display: none;
                }
                .selection-popular {
                    background: ${Colors.blueMenu};
                    border-radius: 0.364vw;
                    height: 1.458vw;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg {
                        width: 1.562vw;
                        height: 1.562vw;
                    }
                    span {
                        font-weight: 600;
                        font-size: 0.521vw;
                        line-height: 0.677vw;
                        letter-spacing: 0.03em;
                        color: ${Colors.white};
                        text-transform: uppercase;
                        width: 0;
                        opacity: 0;
                        padding: 0;
                        margin: 0;
                        transition: all 0.2s linear;
                    }
                }
                .icon {
                    --iconSize: 1.563vw;
                    width: var(--iconSize);
                    height: var(--iconSize);
                    position: absolute;
                    color: ${Colors.white};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    background-color: ${Colors.secondary};
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: calc((var(--iconSize) / 2) * -1);
                    opacity: 0;
                    visibility: hidden;
                    z-index: 2;
                }
                .select-size-wrap {
                    font-weight: 600;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    padding: 1.042vw;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 1vw;
                    background: ${Colors.white};

                    .painting-size {
                        color: ${Colors.gray60};
                        font-size: 13px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: ${convertPxToVw('12')}vw;
                        }
                    }
                    .painting-rate {
                        font-size: 10px;
                        color: ${Colors.gray80};
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: ${convertPxToVw('16')}vw;
                        }
                    }
                    .text-red {
                        color: ${Colors.primary};
                    }
                }
            }
            .opacity05 {
                opacity: 0.45;
            }
        }
        //Frame Css
        .select-frame-block {
            column-gap: 4vw;
            padding: 0 16px;
            .select-frame-label {
                border-radius: 1vw;
                width: 120px;
                height: 90px;
                border-radius: 1vw;
                margin: 0.875vw 0;
                display: flex;
                cursor: pointer;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: 9.5vw;
                    height: 6.5vw;
                }
                .select-frame-input-radio {
                    position: absolute;
                    display: none;
                    &:checked {
                        + .select-frame-block-outer {
                            &::after {
                                display: block;
                            }
                            .select-frame-wrap {
                                .frame-rate {
                                    color: ${Colors.primary};
                                }
                                .frame-name {
                                    color: ${Colors.blueMenu};
                                }
                            }
                        }
                    }
                }
                &[for='FrameTube'] {
                    .select-frame-block-outer {
                        .img-block {
                            text-align: left !important;
                        }
                    }
                }
                .select-frame-block-outer {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    z-index: 2;
                    padding: 0;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    border-radius: 1.042vw;
                    background: ${Colors.white};
                    overflow: hidden;
                    &::after {
                        content: ' ';
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        border-radius: 1.042vw;
                        position: absolute;
                        border: 2px solid ${Colors.blueMenu};
                        display: none;
                    }
                    .select-frame-wrap {
                        padding: 0;
                        flex-direction: column;
                        overflow: hidden;
                        font-family: ${Fonts.titleFont};
                        height: 100%;
                        .img-block {
                            margin: 0;
                            text-align: center;
                            .select-frame-img {
                                width: 85%;
                                height: auto;
                            }
                        }
                        .frame-rate {
                            position: absolute;
                            top: 0.7vw;
                            right: 0.7vw;
                            font-size: 10px;
                            text-transform: uppercase;
                            color: ${Colors.gray100};
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                line-height: 0.833vw;
                                font-size: 0.833vw;
                            }
                        }
                        .frame-name {
                            margin-top: -0.5vw;
                            font-size: 11px;
                            display: block;
                            text-align: center;
                            text-transform: uppercase;
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                font-size: 0.73vw;
                                line-height: 1.5vw;
                            }
                        }
                    }
                }
            }
        }
    }
    //Frame Selection Preview
    .frame-select-preview {
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
`;
export const OrderStep4Cmp = styled.div`
    display: block !important;
    .select-attrs {
        position: relative;
        border-radius: 1.66vw;
        padding: 2vw;
        border: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
        background-color: ${Colors.white};
        @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
            padding: 1.5vw 2vw;
            height: 100%;
        }
        > .ant-row {
            &:not(:first-child) {
                margin-top: 1.25vw;
                align-items: center;
            }
        }
        &--info {
            display: flex;
            flex-flow: column nowrap;
            gap: 1vw;
            .ant-checkbox-wrapper {
                display: flex;
                align-items: flex-start;
                .ant-checkbox {
                    margin-right: 0.729vw;
                    width: 16px;
                    top: 0;
                    height: 16px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        width: 1.198vw;
                        height: 1.198vw;
                    }
                    &::after {
                        border-radius: 4px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            border-radius: 0.313vw;
                        }
                    }
                    &.ant-checkbox-checked {
                        .ant-checkbox-inner {
                            border-color: ${Colors.primary};
                        }
                    }
                    .ant-checkbox-inner {
                        border-color: #3c3c40;
                        border-radius: 4px;
                        width: 22px;
                        height: 22px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            border-radius: 0.313vw;
                            width: 1.198vw;
                            height: 1.198vw;
                        }
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
                    }
                    + span {
                        display: flex;
                        .text-primary {
                            margin-left: 0.7vw;
                            white-space: nowrap;
                            @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            .check-box-lable-text {
                font-weight: 600;
                color: ${Colors.gray100};
                font-size: 12px;
                line-height: 1;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.937vw;
                    line-height: 1.197vw;
                }
            }
            &--desc {
                color: ${Colors.gray40};
                padding-left: 0.5vw;
                margin: 0;
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.833vw;
                    line-height: 1.2vw;
                }
            }
            &--post {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0.5vw;
                border-radius: 0.416vw;
                padding: 0.5rem;
                background-color: #fffcfc;
                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F6A0B2FF' stroke-width='2' stroke-dasharray='5%2c 5' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    height: 2.238vw;
                    padding: 0;
                }
                .text {
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 1;
                    text-align: center;
                    text-transform: lowercase;
                    color: ${Colors.primary};
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.781vw;
                        line-height: 0.781vw;
                    }
                }
            }
        }
        .attr-img {
            width: 100%;
            height: auto;
        }
        video {
            width: 100%;
            border: 0;
            border-radius: 0.625vw;
            overflow: hidden;
            cursor: pointer;
        }
        .video-react,
        .video-react .video-react-poster {
            border-radius: 0.625vw;
        }
    }
    /* .order-summary-block {
    min-height: 100%;
  } */
`;
export const OrderSummaryBlockCmp = styled.div`
    &.order-summary-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        min-height: 60vh;
        height: 100%;
        font-weight: 500;
        padding: 1.45vw 1.8vw;
        border-radius: 1.66vw;
        font-family: ${Fonts.titleFont};
        background-color: ${Colors.white};
        .summary-title {
            font-weight: bold;
            font-size: 16px;
            margin: 0 0 0.5vw;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                line-height: 1.822vw;
                font-size: 1.249vw;
            }
        }
        .select-summery-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${Colors.gray80};
            border-bottom: 0.052vw solid ${Colors.gray10};
            @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
                padding: 11px 0;
            }
            &.frame {
                border-bottom: 0;
            }
            &:last-of-type {
                border-bottom: 0;
            }
            &.sub-total {
                border-top: 0.052vw dashed ${Colors.gray50};
                border-bottom: none;
                padding: 11px 0;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding-top: 0.3vw;
                    margin-top: 0.1vw;
                }
                .select-summery-text {
                    font-weight: bold;
                    text-transform: uppercase;
                    color: ${Colors.gray100};
                    &.text-number {
                        color: ${rgba(Colors.primary, 1)};
                    }
                }
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
            }
            .select-summery-text {
                font-size: 14px;
                text-transform: capitalize;
                color: #6c6c73;
                margin: 0;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    padding: ${convertPxToVw('8')}vw 0;
                    font-size: 0.7vw;
                }
                &.text-number {
                    color: ${rgba(Colors.primary, 0.8)};
                }
            }
        }
        .select-offer-pricing {
            background-color: ${Colors.white};
            padding: 15px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                padding: 0.885vw 1vw;
                border-radius: 0.416vw;
                margin-bottom: 0.15vw;
            }
            background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23BDCFF2FF' stroke-width='2' stroke-dasharray='5%2c 5' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
            &--today {
                font-weight: 600;
                text-transform: uppercase;
                color: ${Colors.gray100};
                margin: 0;
                text-align: center;
                display: -webkit-box;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 1vw;
                    line-height: 1vw;
                }
                p {
                    margin: 0;
                    font-size: 14px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: ${convertPxToVw('15')}vw;
                    }
                    &.text-number {
                        /* margin-left: 1.3vw; */
                        color: ${Colors.primary};
                    }
                    &.discount-price {
                        color: ${Colors.gray80};
                        text-decoration: line-through;
                        font-size: 14px;
                        padding: 0 10px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: ${convertPxToVw('12')}vw;
                            padding: 0 ${convertPxToVw('10')}vw;
                        }
                    }
                }
            }
            .note {
                margin: 0;
                margin-top: 0.469vw;
                font-size: 12px;
                letter-spacing: 0.01em;
                font-family: ${Fonts.primaryFont};
                color: ${Colors.gray60};
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    text-align: center;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.625vw;
                    line-height: 0.625vw;
                }
            }
        }
        .size-info-outer {
            margin-top: 1vw;
            display: flex;
            align-items: flex-start;
            column-gap: 24px;
            .size-info-left {
                max-width: 100%;
                margin-left: 1.667vw;
                @media (max-width: ${`${MediaBreakpoints.upLg}px`}) {
                    width: 100%;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    margin-left: 0.667vw;
                    margin-top: 1vw;
                }
                .sub-total-price-block {
                    padding: 0.75rem;
                    margin-bottom: 0.833vw;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: ${Fonts.titleFont};
                    font-size: 0.625vw;
                    border-radius: 0.416vw;
                    background-color: #fffcfc;
                    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F6A0B2FF' stroke-width='2' stroke-dasharray='5%2c 5' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
                    font-weight: 500;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        padding: 0.677vw 0.625vw;
                    }
                    .sub-total-label,
                    .sub-total-price {
                        margin: 0;
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            line-height: 0.65vw;
                            font-size: 0.65vw;
                        }
                    }
                    .sub-total-label {
                        text-transform: uppercase;
                    }
                    .sub-total-price {
                        font-size: 12px;
                        font-weight: 600;
                        text-align: right;
                        text-transform: uppercase;
                        color: ${Colors.primary};
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: 0.75vw;
                            line-height: 0.75vw;
                        }
                    }
                }
                .sub-info-block-inner {
                    padding: 0 0.521vw 0 0.26vw;
                    p {
                        margin-bottom: 0;
                    }
                }
                .title {
                    font-size: 12px;
                    margin: 0 0 0.417vw 0;
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.938vw;
                        line-height: 0.938vw;
                    }
                }
            }
            .select-size-message {
                background: #feeded;
                border-radius: 0.364vw;
                font-weight: 600;
                text-transform: uppercase;
                color: ${Colors.clrDanger};
                font-size: 10px;
                padding: 0.5rem;
                margin-right: 1rem;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    margin-left: 0.729vw;
                    font-size: 0.729vw;
                    line-height: 0.729vw;
                    padding: 0.416vw 1.562vw;
                }
            }
        }
    }
`;

export const OrderStep1InfoBlockCmp = styled.div`
    .info-icons-title {
        color: ${Colors.primary};
        font-family: ${Fonts.primaryFont};
        font-size: 16px;
        text-transform: uppercase;
        opacity: 0.8;
        margin: 0;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            font-size: 1.249vw;
            line-height: 1.822vw;
        }
    }
    .info-step-top {
        text-align: center;
        @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
            margin-top: 1rem;
        }
        .infoIcons-desc {
            font-size: 12px;
            letter-spacing: 0.01em;
            color: ${Colors.gray60};
            margin: 0;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 0.833vw;
                line-height: 1.041vw;
            }
        }
    }

    .info-step-fetuare-block {
        .info-step-fetuare-block-inner {
            border-radius: 0.833vw;
            margin-top: 1vw;
            background-color: ${rgba(Colors.white, 0.7)};
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 20.354vw;
                margin: 0 auto;
                margin-top: 1vw;
            }
            .ant-row {
                .ant-col {
                    max-width: 50%;
                    flex: 0 0 50%;
                    .feature-inner-block {
                        text-align: center;
                        padding: 1vw 1.5vw;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        figure {
                            margin: 0;
                            img {
                                width: auto;
                                max-height: 24px;
                                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                    max-height: 1.8vw;
                                }
                            }
                        }
                        span {
                            text-align: center;
                            margin-top: 0.364vw;
                            font-size: 12px;
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                line-height: 0.885vw;
                                font-size: 0.625vw;
                            }
                        }
                    }
                }
            }
        }
    }
    .info-custom-card {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        background: ${rgba(Colors.white, 0.7)};
        border-radius: 0.833vw;
        border: none;
        padding: 1vw;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            width: 20.354vw;
        }
        .info-upload-description {
            font-size: 12px;
            color: ${Colors.gray60};
            margin: 0.5vw 0;
            @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                max-width: 30rem;
            }
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 0.833vw;
                line-height: 1.041vw;
                letter-spacing: 0.01em;
            }
        }
        .infoUpload-img {
            width: 8.173vw;
            height: 3.54vw;
            margin: 1vw 0;
        }
    }
    .info-step-customer-review {
        display: flex;
        align-items: center;
        justify-content: center;
        .customer-single-review-block {
            padding: 0;
            align-self: end;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 20.354vw;
                margin-top: 1.25vw;
                margin-left: 0;
            }
            .ant-card-body {
                min-height: unset;
                border-radius: 0.833vw !important;
                align-items: center;
                background-color: none;
                padding: 1.5rem !important;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    margin-bottom: 0;
                }
                .single-reviwe-title {
                    font-size: 18px;
                    line-height: 1.822vw;
                    margin: 0;
                    font-family: ${Fonts.titleFont};
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.937vw;
                    }
                }
                .customer-review-and-rate {
                    margin-top: 0.156vw;
                    font-size: 1.666vw;
                    .customer-rating {
                        font-size: 1.666vw;
                        font-family: ${Fonts.titleFont};
                    }
                    .ant-rate {
                        line-height: normal;
                        font-size: 1.30208vw;
                        color: #fff;
                        .ant-rate-star-second {
                            line-height: normal;
                        }
                    }
                }
                .single-review-btm-logo {
                    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                        margin-top: ${convertPxToVw('30')}vw;
                        margin-bottom: ${convertPxToVw('5')}vw;
                    }
                    .lazy-load-image-loaded {
                        img {
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                height: 1.5vw;
                            }
                        }
                    }
                }
            }
            .total-review {
                font-size: 14px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: ${convertPxToVw('12')}vw;
                }
            }
        }
    }
`;

export const OrderStepFooterCmp = styled.footer`
    &.order-footer {
        margin: 0 2.5vw;
        @media (max-width: ${`${MediaBreakpoints.downLg}px`}) {
            height: 15vh;
        }
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            height: 20vh;
        }
        .order-nav {
            display: flex;
            height: 100%;
            background: ${Colors.white};
            border-radius: 0.73vw 0.73vw 0vw 0vw;
            border-top: 1px solid rgb(217 224 242 / 100%);

            .order-nav-item {
                width: 16.66%;
                flex: 0 0 16.66%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                &.selected {
                    &:not(.active) {
                        &:hover {
                            background-color: ${rgba(Colors.reviewCardbrd, 0.7)};
                            border-radius: 0.73vw 0.73vw 0vw 0vw;
                            .nav-action-link {
                                .icon-selected {
                                    display: none;
                                }
                                .icon-edit {
                                    display: block;
                                }
                            }
                        }
                    }
                }
                .navigation_title {
                    text-transform: uppercase;
                    color: #aaaaad;
                    font-weight: 600;
                    font-family: ${Fonts.titleFont};
                    width: 100%;
                    text-align: center;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: 0 0.781vw;
                        font-size: 12px;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        letter-spacing: -0.02em;
                        padding: 0 0.781vw;
                        margin: 0 0 1.301vw 0;
                        font-size: 0.73vw;
                        line-height: 1.82vw;
                    }
                }
                .nav-num,
                .nav-action-link {
                    background: rgba(217, 224, 242, 0.5);
                    font-weight: 600;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    bottom: 8px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        bottom: 0.5vw;
                        font-size: 0.73vw;
                        letter-spacing: -0.02em;
                        width: 1.8vw;
                        height: 1.8vw;
                    }
                }
                .nav-action-link {
                    cursor: pointer;
                    .icon {
                        img {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                        }
                        .icon-selected {
                            display: block;
                        }
                        .icon-edit {
                            display: none;
                        }
                    }
                    &:hover {
                        .icon-selected {
                            display: none;
                        }
                        .icon-edit {
                            display: block;
                        }
                    }
                }
                &:not(.order-nav-last) {
                    border-right: 1px solid ${rgba(Colors.reviewCardbrd, 0.7)};
                    /* flex-direction: column; */
                    &.active {
                        background-color: #215dd5;
                        border-radius: 0.73vw 0.73vw 0vw 0vw;
                        border-right: none;
                        .navigation_title {
                            color: #ffffff;
                            font-family: ${Fonts.titleFont};
                            font-weight: 600;
                            font-size: 12px;
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                font-size: 0.9vw;
                            }
                        }
                        .nav-num {
                            background: #fff;
                            color: #000000;
                            font-size: 12px;
                            width: 24px;
                            height: 24px;
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                font-size: 1vw;
                                width: 2vw;
                                height: 2vw;
                            }
                        }
                    }
                }
                &.order-nav-last {
                    width: unset;
                    flex: 1;
                    justify-content: flex-end;
                    .btn-row {
                        padding: ${convertPxToVw('40')}vw;
                        display: flex;
                        justify-content: flex-end;
                        .ant-btn {
                            font-family: ${Fonts.titleFont};
                            margin: 8px 0.5vw;
                            font-size: 0.83vw;
                            line-height: 0.83vw;
                            text-transform: uppercase;
                            border-radius: 0.729vw;
                            padding: 0.781vw 1.563vw;
                            height: 3vw;
                            &:last-child {
                                margin-right: 0;
                            }
                        }
                        .btn_gray {
                            background-color: ${Colors.gray40};
                        }
                        .btn_continue {
                            width: 9.5vw;
                            box-shadow: 0vw 0.53vw 1vw -0.83vw rgb(242, 76, 110);
                        }
                    }
                }
                &.order-nav-attributes {
                    border-radius: 0px 14px 0px 0px;
                }
                .navigation-selections {
                    margin-top: 1.4vw;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 0 1vw;
                    justify-content: center;
                    align-self: flex-start;
                    .navigation-selection {
                        display: flex;
                        position: relative;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        border-radius: 1vw;
                        width: 5.3vw;
                        height: 5.3vw;
                        border: 1px solid #b5c6ed;
                        .attachment {
                            width: 1.874vw;
                            height: 1.874vw;
                        }
                        &.theme-select {
                            > img {
                                max-width: 4.3vw;
                                padding: 0.7vw;
                            }
                            output {
                                font-weight: 600;
                                font-size: 0.8vw;
                                line-height: 0.8vw;
                                text-align: center;
                                text-transform: uppercase;
                                color: #807e8c;
                            }
                        }
                        &.medium-select {
                            .medium-img-block {
                                width: 3vw;
                                height: 2.3vw;
                                position: relative;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                img {
                                    position: absolute;
                                    padding: 0;
                                }
                            }
                        }
                        &.images {
                            > img {
                                width: 2.3vw;
                                padding: 0;
                            }
                        }
                        &.size-frame {
                            .medium-title {
                                padding: 0 0.35vw;
                            }
                        }
                        .medium-title {
                            font-family: ${Fonts.titleFont};
                            font-weight: 600;
                            font-size: 0.625vw;
                            line-height: 0.67vw;
                            text-align: center;
                            letter-spacing: -0.02em;
                            text-transform: uppercase;
                            color: ${Colors.gray40};
                            margin: 0;
                            margin-top: 0.417vw;
                            &.medium-title-dark {
                                color: ${Colors.gray100};
                            }
                        }
                        img {
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                        }
                        ~ .navigation-selection {
                            margin-left: 1vw;
                        }
                    }
                }
            }
        }
    }
`;

export const OrderCheckOutCmp = styled.div`
    display: block !important;
    .checkout-setting-left {
        padding: 2vw;
        border-radius: 0.833vw 0vw 0vw 0.833vw;
        background-color: ${Colors.white};
        height: 100%;
        font-family: ${Fonts.titleFont};
        &--item {
            margin-top: 2vw;
            &:first-child {
                margin-top: 0vw;
                margin-bottom: 3vw;
            }
            .title-block {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1vw;
                .title {
                    font-weight: 700;
                    font-size: 12px;
                    text-transform: capitalize;
                    margin: 0;
                    color: ${Colors.gray80};
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: ${convertPxToVw('16')}vw;
                        line-height: ${convertPxToVw('18')}vw;
                    }
                }
                .edit-link {
                    color: ${Colors.blueMenu};
                    font-weight: 700;
                    font-size: 12px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: ${convertPxToVw('14')}vw;
                        line-height: ${convertPxToVw('18')}vw;
                    }
                    > svg {
                        margin-right: 5px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            margin-right: 0.26vw;
                        }
                    }
                    .link-text {
                        line-height: normal;
                    }
                }
            }
            .checkout-selection-block {
                display: flex;
                justify-content: center;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    align-items: center;
                }
                .checkout-selection-item {
                    margin-right: 16px;
                    text-align: center;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        margin: 0 1vw;
                        border-radius: 1vw;
                        width: 6vw;
                        height: 6vw;
                    }
                    .img-block {
                        width: 80px;
                        height: 80px;
                        border: 0.12vw solid ${Colors.gray05};
                        border-radius: 1vw;
                        padding: 1.5vw;
                        margin: 0 auto;
                        position: relative;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            width: 5vw;
                            height: 5vw;
                        }
                        img {
                            width: 100%;
                            height: auto;
                            object-fit: cover;
                        }
                        .hover_image-fix {
                            position: absolute;
                            padding: 0.5rem;
                            left: 0;
                            top: 0;
                        }
                    }
                    &--title {
                        font-weight: 600;
                        text-align: center;
                        letter-spacing: -0.02em;
                        text-transform: uppercase;
                        color: ${Colors.gray40};
                        margin: 0.469vw 0 0 0;
                        opacity: 0.8;
                        font-size: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: ${convertPxToVw('12')}vw;
                        }
                    }
                    &.theme {
                        .img-block {
                            padding: 0.75vw;
                            img {
                                padding: 0;
                            }
                        }
                    }
                    &.medium {
                        .img-block {
                            padding: 0.5vw;
                        }
                    }
                }
            }
            .selected_images_show {
                display: inline-flex;
                align-items: center;
                gap: 0.781vw;
                padding: 1vw 0;
                overflow-y: hidden;
                overflow-x: auto;
                width: 100%;

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(171, 171, 171, 0.3);
                    background-color: #f5f5f5;
                    border-radius: 20px;
                }

                &::-webkit-scrollbar {
                    height: 6px;
                    background-color: #f5f5f5;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #6c6c73;
                    border-radius: 20px;
                }

                img {
                    width: auto;
                    object-fit: cover;
                    border-radius: 1vw;
                    height: 70px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        height: 4.5vw;
                    }
                }
            }
            &.upload-img-item {
                .title-block {
                    margin: 0;
                }
                .attachments-block {
                    overflow-y: hidden;
                    overflow-x: auto;
                    margin-top: 0.75rem;
                    .attachment-placeholder {
                        padding: 0.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-evenly;
                        width: 100%;
                        border-radius: 1vw;
                        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23DEE7F9FF' stroke-width='5' stroke-dasharray='5%2c 5' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
                        cursor: pointer;
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            height: 5.7vw;
                            padding: 1vw 0;
                        }
                        .attachment-upload-icon-block {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            .text {
                                font-weight: 600;
                                text-align: center;
                                text-transform: uppercase;
                                color: #3c3c40;
                                margin-top: 0.5vw;
                                font-size: 12px;
                                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                    font-size: 0.625vw;
                                    line-height: 0.625vw;
                                }
                            }
                        }
                        .attachment-upload-text {
                            p {
                                font-weight: 600;
                                font-size: 12px;
                                color: #6c6c73;
                                margin: 1.5px 0;
                                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                    font-size: 0.677vw;
                                    line-height: 0.885vw;
                                }
                                &.link {
                                    color: ${Colors.primary};
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
            &.size-frame {
                .checkout-selection-item {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    .img-block {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &.size {
                            font-size: 12px;
                            font-family: ${Fonts.titleFont};
                            font-weight: 600;
                            padding: 0;
                            justify-content: center;
                            color: ${Colors.gray100};
                            width: 80px;
                            height: 80px;
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                width: 6.354vw;
                                height: 4.479vw;
                                font-size: 0.729vw;
                            }
                        }
                        &.frame {
                            padding: 2px;
                            width: 80px;
                            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                                width: 5.938vw;
                            }
                        }
                    }
                }
            }
        }
    }
    .checkout_details_section {
        border-radius: 0.833vw;
        height: 100%;
        background-color: ${Colors.white};
        border: 0.052vw solid ${Colors.blueLight};
        box-shadow: 0vw 0vw 1.926vw rgba(16, 18, 35, 0.03);
        .ant-card-body {
            padding: 1vw 2vw;
        }
        .ant-form-item-control {
            position: relative;
        }
    }
    .checkout_settings_right {
        border-radius: 0vw 0.833vw 0vw 0vw;
        .ant-card-body {
            padding: 1.5vw 3vw 0vw 3vw;
        }
        .ant-checkbox,
        .ant-checkbox-inner {
            @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 16px;
                height: 16px;
            }
        }
        .ant-checkbox + span {
            @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                font-size: 12px;
            }
        }
        .checkbox_wrapper {
            b {
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: auto;
                }
            }
        }
        .checkbox-title {
            line-height: normal;
            width: 70%;
            margin-bottom: 1rem;
            opacity: 0.5;
            margin-left: 0.729vw;
            font-size: ${convertPxToVw('16')}vw;
        }
        .price_label {
            font-weight: 600;
            opacity: 0.5;
        }
        .opacity-1 {
            opacity: 1;
        }
    }
    .checkout_summery {
        border-radius: 0px 0px 0.833vw 0px;
        margin-top: 0.417vw;
        padding: 0.5vw 2.5vw;
        justify-content: space-between;
        min-height: unset;
    }
    .order-summary-block .select-offer-pricing {
        margin-top: 0.85vw;
    }

    .checkout_input {
        position: relative;
        margin-top: 12px;
        .checkoutCoupon_input {
            width: 100%;
            border: 0.052vw solid ${Colors.primary};
            background-color: rgba(238, 66, 102, 0.05);
            border-radius: 0.625vw;
            font-weight: 600;
            color: #3c3c40;
            padding: 0.5rem;
            font-size: 12px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                line-height: 0.833vw;
                font-size: 0.75vw;
                padding: 0 7vw 0 1vw;
                height: 2.7vw;
            }
        }
        &.success {
            .checkoutCoupon_input {
                border: 0.052vw solid ${Colors.success};
                background-color: rgba(131, 207, 89, 0.1);
            }
        }
        .coupon-failure {
            color: ${Colors.primary};
        }
        .apply-coupan-button {
            position: absolute;
            right: 0.208vw;
            border-radius: 0.625vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 600;
            text-transform: capitalize;
            bottom: 2px;
            font-size: 12px;
            width: 90px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                justify-content: center;
                bottom: 0.18vw;
                font-size: 0.833vw;
                line-height: 0.833vw;
                height: 2.35vw;
                gap: 0.26vw;
                width: 6.5vw;
            }
        }
        .apply-coupan-closed {
            position: absolute;
            right: 120px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 700;
            text-transform: capitalize;
            font-size: 14px;
            color: #64af3b;
            bottom: 0;
            top: 0;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                justify-content: center;
                font-size: 0.833vw;
                right: ${convertPxToVw('140')}vw;
            }
        }
    }
`;

export const ContactDetailCmp = styled.div`
    font-family: ${Fonts.titleFont};
    .checkout_contactDetails_title {
        font-weight: 700;
        font-size: 14px;
        color: ${Colors.black};
        margin-bottom: 0.75vw;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            font-size: 0.875vw;
            line-height: 1.822vw;
        }
    }
    .checkout_contac_form {
        width: 100%;
        .ant-form-item {
            margin-bottom: 18px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin-bottom: 24px;
            }
        }
        .ant-form-item-explain-error {
            bottom: -10px;
        }

        .ant-input {
            border-radius: 0.417vw;
            color: ${Colors.gray80};
            font-weight: 500;
            font-size: 14px;
            padding: 10px 12px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                padding: 0.7vw;
                font-size: 0.729vw;
            }
        }
        /* .position_select {
        position: absolute;
        z-index: 1;
        } */
        .ant-select {
            .ant-select-selection-search-input {
                height: 100%;
            }
            .ant-select-selection-item {
                overflow: visible;
                display: flex;
                align-items: center;
                padding-right: 0;
            }

            .ant-select-arrow {
                @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
                    right: 0;
                }
                color: ${Colors.gray100};
            }
            .ant-select-selector {
                border-radius: 0.417vw;
                border-color: #d9e0f2;
                width: 90px;
                height: 38px;
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 12px;
                }
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: 6vw;
                    height: 2.65vw;
                }
            }
        }
        /* .phone_num_input {
      padding-left: 100px;
      @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        padding-left: 6.5vw;
      }
    } */
    }
    .estimate_detail-content-box {
        background-color: #ffffff;
        border: 2px dashed #4c7cdd;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            margin-top: 0.25vw;
        }
        .estimate_detail-left {
            width: 65%;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                width: 18.854vw;
            }
            .checkout_estimate_title {
                display: flex;
                align-items: center;
                gap: 0.312vw;
                color: ${Colors.gray100};
                h3 {
                    font-weight: 700;
                    font-size: 12px;
                    margin-bottom: 0;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        font-size: 0.833vw;
                    }
                }
            }
            .date {
                margin-bottom: 0;
                margin-top: 3px;
                font-weight: 600;
                @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 12px;
                }
            }
        }
        p {
            font-weight: 400;
            margin-bottom: 0;
            font-size: 10px;
            @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                line-height: 0.85vw;
                font-size: 0.72vw;
            }
        }
        .checkout_sooner_title {
            display: flex;
            align-items: center;
            h3 {
                color: ${Colors.white};
                margin-right: 0.5vw;
                font-size: 12px;
                margin-bottom: 0;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    font-size: 0.833vw;
                }
            }
        }
        .estimate_detail-right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
            background: #5b87e0;
            border-radius: 8px;
            .que-icon {
                margin-left: 0;
                color: #5b87e0;
                font-size: 14px;
                background-color: #fff;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    width: 0.985vw;
                    height: 0.985vw;
                    font-size: 0.833vw;
                }
            }
            .text_check {
                color: ${Colors.white};
                font-size: 14px;
                margin-left: 10px;
                font-weight: 600;
            }
            .checkbox_wrapper {
                align-items: center;
                .ant-checkbox,
                .ant-checkbox-inner {
                    @media (max-width: ${`${MediaBreakpoints.upXl}px`}) {
                        width: 18px;
                        height: 18px;
                        border-radius: 4px;
                    }
                }
                .ant-checkbox-checked .ant-checkbox-inner {
                    background-color: #fff;
                    &::after {
                        border-color: ${Colors.primary};
                    }
                }
            }
        }
    }
`;

export const OrderStepPayment = styled.div`
    &.checkout-add_carditcard {
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            margin-top: 2rem;
        }
        .ant-collapse {
            border: none;
            .ant-collapse-content {
                border: 1px solid ${Colors.gray10};
                border-top: none;
                .ant-collapse-item {
                    border-bottom: none;
                }
            }
        }
        .checkout_contactDetails_title {
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-weight: 700;
                color: ${Colors.black};
                text-transform: uppercase;
                font-size: 1vw;
                line-height: 1.822vw;
                margin-top: 1.041vw;
                display: block;
            }
        }
        .checkout_contactDetails_title_mobile {
            font-size: 14px;
            margin-top: 1rem;
            margin-bottom: 1.25rem;
            text-align: center;
            display: block;
            font-weight: 700;
            color: ${Colors.black};
            text-transform: uppercase;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                display: none;
            }
        }
        .ant-form-item {
            margin-bottom: 12px;
            button {
                box-shadow: 0 0.26vw 1.041vw -0.781vw rgb(238 66 102 / 40%), 0 0.26vw 1.041vw -0.26vw rgb(250 94 126 / 40%);
                width: 100%;
                text-align: center;
                text-transform: uppercase;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 600;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    border-radius: 0.625vw;
                    font-size: 0.833vw;
                }
            }
        }
        .ant-form-item-control-input-content {
            line-height: 0;
            .card-input-control {
                padding: 14px 12px;
                border-radius: 8px;
                line-height: unset;
                font-size: 14px;
                height: 48px;
                @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                    border-radius: 0.417vw;
                    padding: 0.7vw;
                    font-size: 0.729vw;
                    height: unset;
                }
            }
            .error-input-control {
                border-color: #ff4d4f;
            }
        }
        .ant-form-item .btn_gray {
            background-color: ${Colors.gray40};
            box-shadow: unset;
        }
        .ant-form-item-control-input {
            min-height: unset;
        }
        .payment_select-dropdown {
            .ant-select {
                margin-bottom: 1rem;
                width: 100%;
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
            button {
                text-transform: uppercase;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    font-size: 14px;
                }
            }
            .btn_gray {
                background-color: ${Colors.gray40};
                box-shadow: unset;
            }
            .ant-select-selection-item {
                font-weight: 600;
                @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                    font-size: 14px;
                }
            }
            .ant-select-single.ant-select-open .ant-select-selection-item {
                color: ${Colors.primary};
            }
        }
    }
    /* .paypal_button {
        height: ${convertPxToVw('52')}vw;
        background: red;
        > div {
            height: 100% !important;
            > iframe {
                > html {
                    > body {
                        .buttons-container {
                            .paypal-button-containe {
                                .paypal-button-row {
                                    height: 100% !important;
                                }
                            }
                        }
                    }
                }
            }
        }
    } */
    .payment_buttons {
        .paypal_button {
            height: 42px;
            width: 100%;
            margin-bottom: 1rem;
            @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                height: 40px;
            }
        }
        .affirm_button_box {
            display: flex;
            align-items: center;
            .affirm_btn {
                margin-bottom: 1rem;
                width: 100%;
                background-color: #4a4aeb;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 42px;
                border-radius: 4px;
                @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                    height: 40px;
                }
                img {
                    width: 200px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        width: 80%;
                    }
                }
            }
        }
        .zippay_button_box {
            display: flex;
            align-items: center;
            .zippay_btn {
                margin-bottom: 1rem;
                width: 100%;
                background-color: #e4dbff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 42px;
                border-radius: 4px;
                box-shadow: none;
                @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
                    height: 40px;
                }
            }
        }
        .que-icon {
            font-size: 14px;
            width: 22px;
            margin-bottom: 1rem;
            height: 22px;
            margin-left: 6px;
        }
        .icon_affirm {
            background-color: #4a4aeb;
            color: ${Colors.white};
        }
        .icon_zippay {
            background-color: #e4dbff;
            color: ${Colors.black};
        }
    }
`;

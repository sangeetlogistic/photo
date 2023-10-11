import { rgba } from 'polished';
import styled from 'styled-components';
import { PagePdngTopEqualHeaderHeight } from '../../constants/general';
import { Colors, Fonts, Images, MediaBreakpoints } from '../../theme';
import { convertPxToVw } from '../../utils/func';
import Popup from '../../components/Popup/Popup';

export const PricingTimingWrapCmp = styled.section`
    padding-top: 96px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        padding-top: ${PagePdngTopEqualHeaderHeight};
    }
    h2,
    h3,
    h4 {
        font-family: ${Fonts.titleFont};
    }
    h2 {
        text-align: center;
        font-size: 24px;
        margin-bottom: 24px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            text-align: left;
            font-size: ${convertPxToVw('56')}vw;
            margin-bottom: ${convertPxToVw('28')}vw;
        }
    }
    h4 {
        &.sub-title {
            font-size: 16px;
            line-height: 35px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                font-size: ${convertPxToVw('24')}vw;
                line-height: ${convertPxToVw('20')}vw;
                margin: 0 0 ${convertPxToVw('24')}vw 0;
            }
        }
        &.title-space {
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding-left: ${convertPxToVw('23')}vw;
            }
        }
    }
    .title-space {
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding-left: ${convertPxToVw('45')}vw;
        }
    }
    .grd-brd-card {
        position: relative;
        background-color: ${Colors.white};
        border-radius: ${convertPxToVw('32')}vw;
        transform-style: preserve-3d;
        box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
        &::before {
            content: '';
            position: absolute;
            z-index: -1;
            inset: calc(${convertPxToVw('1')}vw * -1);
            border-radius: ${convertPxToVw('32')}vw;
            transform: translateZ(-${convertPxToVw('1')}vw);
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                background: ${Colors.reviewCardbrd};
                background: linear-gradient(to bottom, ${Colors.reviewCardbrd} 0%, ${rgba(Colors.reviewCardbrd, 0)} 148.26%);
            }
        }
    }
    .price-timing-container {
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding: ${convertPxToVw('82')}vw ${convertPxToVw('130')}vw ${convertPxToVw('82')}vw ${convertPxToVw('60')}vw;
        }
    }
    .size-table-block {
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            border-radius: ${convertPxToVw('17')}vw;
            box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
            background-color: ${Colors.white};
        }
        .size-brd-table {
            border: 0;
            width: 100%;
            tr {
                td {
                    font-family: ${Fonts.titleFont};
                    font-size: 14px;
                    height: 40px;
                    color: ${Colors.gray80};
                    font-weight: 600;
                    text-align: center;
                    align-items: center;
                    border-top: 0;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        border: 1px solid ${Colors.gray10};
                        font-size: ${convertPxToVw('16')}vw;
                        height: ${convertPxToVw('40')}vw;
                        border-top: 0;
                    }
                    &:first-child {
                        border-left: 0;
                    }
                    &:last-child {
                        border-right: 0;
                    }
                }
                &:last-child {
                    td {
                        border-bottom: 0;
                    }
                }
            }
        }
    }
    .price-list-card {
        position: relative;
        z-index: 1;
        padding: 0 15px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            padding: ${convertPxToVw('40')}vw ${convertPxToVw('75')}vw ${convertPxToVw('50')}vw ${convertPxToVw('40')}vw;
        }
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            background: ${Colors.transparent};
            box-shadow: unset;
        }
        &::before {
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                display: none;
            }
        }

        .price-tbl-wrap {
            display: flex;
            flex-direction: column;
        }
        .object-theme-block {
            display: flex;
            margin-bottom: 0;

            .obj-box {
                width: 122px;
                flex: 0 0 122px;
                display: flex;
                align-items: center;
                padding: ${convertPxToVw('10')}vw;
                opacity: 0;
                max-width: 145px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('120')}vw;
                    flex: 0 0 ${convertPxToVw('120')}vw;
                    opacity: 1;
                    max-width: unset;
                }
                .title-txt {
                    font-family: ${Fonts.titleFont};
                    font-size: ${convertPxToVw('12')}vw;
                    text-transform: uppercase;
                    margin-bottom: 0;
                    margin-right: ${convertPxToVw('8')}vw;
                }
                svg {
                    color: ${Colors.gray100};
                }
            }
            .obj-box-icon-row {
                width: calc(100% - 122px);
                padding: 0;
                margin: 0;
                list-style: none;
                display: flex;
                align-items: flex-start;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: calc(100% - (${convertPxToVw('120')}vw));
                    padding: 0 ${convertPxToVw('17')}vw 0 ${convertPxToVw('23')}vw;
                }
                .obj-inner {
                    width: 33.33%;
                    text-align: center;
                    display: block;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        width: 20%;
                    }
                    &:nth-child(3),
                    &:nth-child(4) {
                        display: none;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            display: block;
                        }
                    }
                    .icon {
                        height: 34px;
                        margin-bottom: 10px;
                        display: block;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            height: 3vw;
                            margin-bottom: ${convertPxToVw('10')}vw;
                        }
                        img {
                            height: 34px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: 2.6vw;
                                max-height: 3vw;
                            }
                        }
                    }
                    p {
                        font-family: ${Fonts.titleFont};
                        font-size: 12px;
                        color: ${Colors.gray80};
                        font-weight: 600;
                        margin: 0;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('12')}vw;
                        }
                    }
                }
            }
        }
        .price-list-rate-box {
            display: flex;
            flex-wrap: wrap;
            .price-size-box {
                display: block;
                width: 122px;
                flex: 0 0 122px;
                margin-top: -60px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('120')}vw;
                    flex: 0 0 ${convertPxToVw('120')}vw;
                    margin-top: 0;
                }
                .p-size-arrow {
                    width: 75px;
                    height: 60px;
                    padding: 8px 5px 8px 2px;
                    text-align: center;
                    background-color: ${Colors.white};
                    display: flex;
                    justify-content: space-between;
                    border-radius: 12px 12px 0 0;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: 0;
                        border-radius: 0;
                        width: ${convertPxToVw('120')}vw;
                        height: ${convertPxToVw('44')}vw;
                        padding-right: ${convertPxToVw('40')}vw;
                    }
                    .p-size-arrow-inner {
                        width: 100%;
                        flex: auto;
                        .title-txt {
                            font-family: ${Fonts.titleFont};
                            font-size: 12px;
                            margin: 0;
                            text-transform: uppercase;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('12')}vw;
                            }
                            .mob-text {
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    display: none;
                                }
                            }
                        }
                    }
                    svg {
                        color: ${Colors.gray100};
                    }
                    .arrow-right {
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            display: none;
                        }
                    }
                }
                .p-size-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        display: flex;
                        align-items: center;
                        position: relative;
                        .p-size-block {
                            width: 75px;
                            flex: 0 0 75px;
                            padding: 0 8px 0 5px;
                            background: ${Colors.white};
                            background-color: ${Colors.white};
                            position: relative;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: ${convertPxToVw('80')}vw;
                                flex: 0 0 ${convertPxToVw('80')}vw;
                                padding: 0 ${convertPxToVw('8')}vw;
                            }
                            .star_icon {
                                display: none;
                                /* box-shadow: 0px 0px 12px rgba(0, 26, 255, 0.3); */
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    display: block;
                                    position: absolute;
                                    top: 50%;
                                    left: -5px;
                                    color: ${Colors.blueLight};
                                    font-size: 10px;
                                    transform: translateY(-53%);
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        font-size: ${convertPxToVw('12')}vw;
                                    }
                                }
                            }
                            .p-size-view {
                                display: flex;
                                align-items: center;
                                font-family: ${Fonts.titleFont};
                                font-weight: 600;
                                font-size: 14px;
                                height: 40px;
                                color: ${Colors.gray60};
                                border-bottom: 1px solid ${Colors.gray10};
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: ${convertPxToVw('14')}vw;
                                    height: ${convertPxToVw('40')}vw;
                                }
                            }
                        }
                        .icon {
                            width: 47px;
                            flex: 0 0 47px;
                            text-align: center;
                            font-size: 16px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('16')}vw;
                                width: ${convertPxToVw('40')}vw;
                                flex: 0 0 ${convertPxToVw('40')}vw;
                            }
                            svg {
                                color: ${Colors.gray100};
                                cursor: pointer;

                                &:hover {
                                    color: ${Colors.blueMenu};
                                }
                            }
                        }
                        &:last-child {
                            .p-size-block {
                                .p-size-view {
                                    border-bottom: 0;
                                }
                            }
                        }
                        &:last-child {
                            .p-size-block {
                                border-radius: 0 0 12px 12px;
                            }
                        }
                    }
                }
            }
            .size-table-block {
                width: calc(100% - 122px);
                position: relative;
                flex: 0 0 calc(100% - 122px);
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: calc(100% - ${convertPxToVw('128')}vw);
                    flex: 0 0 calc(100% - ${convertPxToVw('128')}vw);
                    margin-left: ${convertPxToVw('8')}vw;
                    margin-top: ${convertPxToVw('24')}vw;
                    padding: ${convertPxToVw('20')}vw ${convertPxToVw('17')}vw ${convertPxToVw('20')}vw ${convertPxToVw('15')}vw;
                }
                .size-brd-table {
                    tr {
                        td {
                            &:nth-child(3),
                            &:nth-child(4) {
                                display: none;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    display: table-cell;
                                }
                            }
                        }
                    }
                }
                .gift_card_frame {
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        height: 100%;
                    }
                }
            }
        }
        .adv-pay-wrap {
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin-top: ${convertPxToVw('53')}vw;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
            }
            .adv-pay-block {
                padding: 0;
                margin-left: ${convertPxToVw('16')}vw;
                border: 0;
                .title {
                    font-size: ${convertPxToVw('24')}vw;
                    line-height: ${convertPxToVw('25')}vw;
                    font-weight: 700;
                    color: ${Colors.primary};
                    text-transform: uppercase;
                    margin-bottom: ${convertPxToVw('12')}vw;
                }
                .sub-title {
                    font-size: ${convertPxToVw('14')}vw;
                    color: ${Colors.gray60};
                    margin: 0;
                }
            }
        }
    }
    .adv-pay-wrap {
        display: flex;
        flex-direction: column;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            display: none;
        }
        .adv-pay-block {
            padding: 16px;
            border: 2px dashed ${Colors.blueMenu};
            border-radius: 8px;
            .title {
                font-size: 16px;
                line-height: 18px;
                color: ${Colors.gray100};
                font-weight: 600;
                text-transform: uppercase;
                margin-bottom: 8px;
                display: flex;
                .adv-price {
                    margin-left: auto;
                    color: ${Colors.primary};
                }
            }
            .sub-title {
                font-size: 12px;
                color: ${Colors.gray60};
                margin: 0;
            }
        }
        .our-installment-block {
            margin-top: 32px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                margin-top: 0;
            }
            .title {
                font-family: ${Fonts.titleFont};
                font-size: 14px;
                color: ${Colors.gray120};
                text-align: center;
                margin: 0 0 12px 0;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    font-size: ${convertPxToVw('14')}vw;
                    margin: 0 0 ${convertPxToVw('12')}vw 0;
                }
            }
            .installment-option-wrap {
                display: flex;
                align-items: center;
                justify-content: center;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin-right: calc(${convertPxToVw('40')}vw * -1);
                }
                .ins-opt {
                    display: flex;
                    align-items: center;
                    margin: 0;
                    > img {
                        max-width: 100%;
                        height: auto;
                        margin: 0 8px 0 0;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin: 0 ${convertPxToVw('8')}vw 0 0;
                        }
                        &.img-1 {
                            width: 144px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: ${convertPxToVw('144')}vw;
                            }
                        }
                        &.img-2 {
                            width: 85px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: ${convertPxToVw('85')}vw;
                            }
                        }
                    }
                    .help-icon {
                        cursor: pointer;
                        img {
                            width: 22px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: ${convertPxToVw('22')}vw;
                            }
                        }
                    }
                    + .ins-opt {
                        margin-left: 32px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-left: ${convertPxToVw('32')}vw;
                        }
                    }
                }
            }
        }
    }
    .cant-find-block {
        margin-top: 32px;
        background: ${Colors.white};
        padding: 20px 16px;
        border-radius: 16px;
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
            margin-left: 1rem;
            margin-right: 1rem;
        }
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin-top: ${convertPxToVw('62')}vw;
            background: ${Colors.transparent};
            padding: 0;
            border-radius: 0;
        }
        .sub-title {
            text-align: center;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                text-align: left;
            }
        }
        .grd-brd-card {
            box-shadow: unset;
            &.combination-card {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding: ${convertPxToVw('32')}vw ${convertPxToVw('52')}vw ${convertPxToVw('46')}vw ${convertPxToVw('52')}vw;
                }
                .price-timing-menu-wrapper {
                    .p-label {
                        font-family: ${Fonts.titleFont};
                        color: ${Colors.black};
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 24px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: 0.833vw;
                            line-height: 1.146vw;
                            margin-bottom: 0.625vw;
                        }
                    }
                    .p2p-painting-size-dropdown {
                        width: 100%;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            height: 3.333vw;
                        }
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            font-size: 1rem;
                        }
                        .ant-select-arrow {
                            right: 16px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                right: 1.406vw;
                            }
                        }
                        .ant-select-selector {
                            height: 100%;
                            border: 1px solid #dbe2f2;
                            box-shadow: 0px 0px 1.927vw rgba(16, 18, 35, 0.03);
                            border-radius: 6px;
                            padding: 6px 16px;
                            margin-top: 5px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                margin-top: 0;
                                padding: 0 1.406vw;
                                border-radius: 0.417vw;
                            }
                            .ant-select-selection-search {
                                .ant-select-selection-search-input {
                                    height: 100%;
                                }
                            }
                            .ant-select-selection-placeholder {
                                color: #807e8c;
                                font-size: 14px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    line-height: 3.229vw;
                                    font-size: 0.625vw;
                                }
                            }
                            .ant-select-selection-item {
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    line-height: 3.229vw;
                                    font-size: 1.25vw;
                                }
                            }
                        }
                    }
                    .ant-input-number {
                        width: 100%;
                        border: 1px solid #dbe2f2;
                        overflow: hidden;
                        box-shadow: 0px 0px 30px rgba(16, 18, 35, 0.03);
                        border-radius: 6px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            box-shadow: 0px 0px 1.927vw rgba(16, 18, 35, 0.03);
                            height: 3.333vw;
                            border-radius: 0.417vw;
                        }
                        .ant-input-number-handler-wrap {
                            opacity: 1;
                            right: 5px;
                            display: block;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                width: 2.448vw;
                                right: 0;
                            }
                            .ant-input-number-handler {
                                border: 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin: 0;
                                height: 50%;
                                &:hover {
                                    height: 50% !important;
                                }
                                .ant-input-number-handler-up-inner,
                                .ant-input-number-handler-down-inner {
                                    top: unset;
                                    right: unset;
                                    width: unset;
                                    height: unset;
                                    transform: translateY(0);
                                    margin: 0;
                                }
                                .anticon {
                                    right: unset;
                                    font-size: 0.729vw !important;
                                    color: $blueArrow;
                                    margin: 0;
                                    top: unset;
                                    width: unset;
                                    height: unset;
                                    transform: translateY(0);
                                }
                            }
                        }
                        .ant-input-number-input-wrap {
                            height: 100%;
                            .ant-input-number-input {
                                height: 100%;
                                line-height: 20px;
                                font-size: 14px;
                                padding: 12px 16px;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    line-height: 3.229vw;
                                    font-size: 1.25vw;
                                    padding: 0 1.406vw;
                                }
                            }
                        }
                    }
                    .exact-total {
                        margin-top: 1rem;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-top: 2.8vw;
                        }
                        .exact-total-wrap {
                            font-family: ${Fonts.titleFont};
                            font-weight: 600;
                            background-color: ${Colors.gray08};
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 12px 16px;
                            line-height: 20px;
                            border-radius: 6px;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                padding: 1.094vw 1.302vw;
                                line-height: 1.146vw;
                                border-radius: 0.313vw;
                            }
                        }
                    }
                    .p-col-2,
                    .p-col-3 {
                        margin-top: 1rem;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-top: 0;
                        }
                    }
                }
            }
        }
        .adv-pay-wrap {
            margin-top: 16px;
        }
    }
    .framing-information-block {
        margin-top: 32px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            margin-top: ${convertPxToVw('62')}vw;
        }
        .sub-title {
            text-align: center;
            @media (max-width: ${`${MediaBreakpoints.downMd}px`}) {
                font-size: 24px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                text-align: left;
            }
        }
        .framing-info-card {
            padding: 20px 16px;
            @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                margin: 0 1rem;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding: ${convertPxToVw('24')}vw;
            }
            .framing-info-row {
                display: flex;
                width: 100%;
                .framing-info-img {
                    flex: 0 0 126px;
                    width: 126px;
                    height: 120px;
                    border: 1px solid ${Colors.blueMenu};
                    margin-bottom: 0;
                    margin-right: 13px;
                    border: 2px solid ${Colors.blueMenu};
                    border-radius: 20px;
                    overflow: hidden;
                    position: relative;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        flex: 0 0 ${convertPxToVw('148')}vw;
                        width: ${convertPxToVw('148')}vw;
                        height: ${convertPxToVw('125')}vw;
                        margin-right: ${convertPxToVw('24')}vw;
                        border-radius: ${convertPxToVw('20')}vw;
                    }
                    img {
                        width: 100%;
                    }
                    .price {
                        position: absolute;
                        top: 5px;
                        right: 10px;
                        color: #000;
                        font-size: 14px;
                        font-weight: 600;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                        }
                    }
                    .title_img {
                        position: absolute;
                        bottom: 0px;
                        left: 0;
                        right: 0;
                        color: #5b87e0;
                        text-transform: uppercase;
                        text-align: center;
                        font-size: 12px;
                        margin-bottom: 5px;
                        font-weight: 600;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                        }
                        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                            font-size: ${convertPxToVw('12')}vw;
                        }
                    }
                }
                .framing-data-block {
                    flex: 1;
                    h6 {
                        font-size: 14px;
                        font-weight: 900;
                        color: ${Colors.gray120};
                        margin-bottom: 7px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                            margin-bottom: ${convertPxToVw('7')}vw;
                        }
                    }
                    p {
                        font-size: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('14')}vw;
                        }
                        .fw-bold {
                            color: ${Colors.gray100};
                        }
                        &:last-child {
                            margin: 0;
                        }
                    }
                }
            }
        }
        &.order_mobile_hide {
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                display: block;
            }
        }
        &.order_mobile_show {
            order: 3;
            margin-bottom: 32px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                display: none;
            }
        }
    }
    .right_block {
        padding-left: 15px;
        padding-right: 15px;
        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
            max-width: 100%;
        }
    }
    .service-shippping-block-wrapp {
        display: flex;
        flex-direction: column;
        .service-and-shipping-outer {
            order: 2;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                order: 1;
            }

            .service-and-shipping-card {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    padding: ${convertPxToVw('56')}vw ${convertPxToVw('106')}vw ${convertPxToVw('174')}vw ${convertPxToVw('32')}vw;
                }
                .service-table-block {
                    display: flex;
                    overflow: auto;
                    align-items: flex-end;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        overflow: visible;
                    }
                    .service-left-list {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            min-width: unset;
                            padding-top: ${convertPxToVw('77')}vw;
                            margin-right: ${convertPxToVw('32')}vw;
                            width: ${convertPxToVw('140')}vw;
                            flex: 0 0 ${convertPxToVw('140')}vw;
                        }
                        > li {
                            display: flex;
                            width: 100%;
                            align-items: center;
                            padding: 0.75rem 1rem;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                padding: 0;
                                justify-content: flex-end;
                                min-height: ${convertPxToVw('64')}vw;
                            }
                            .text-label {
                                font-family: ${Fonts.titleFont};
                                color: ${Colors.gray100};
                                font-weight: 700;
                                text-transform: uppercase;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    font-size: ${convertPxToVw('12')}vw;
                                    line-height: ${convertPxToVw('20.4')}vw;
                                    margin-right: ${convertPxToVw('6')}vw;
                                }
                            }
                            .icon {
                                display: flex;
                                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                    margin-left: 0;
                                    flex: 0 0 ${convertPxToVw('17')}vw;
                                    width: ${convertPxToVw('17')}vw;
                                    height: ${convertPxToVw('17')}vw;
                                }
                                cursor: pointer;
                                img {
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                    .service-right-block {
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            flex: 0 0 calc(100% - (${convertPxToVw('140')}vw + ${convertPxToVw('32')}vw));
                        }
                    }
                }
                .service-right-head-list {
                    list-style: none;
                    margin: 0;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding-left: ${convertPxToVw('32')}vw;
                        padding-right: ${convertPxToVw('60')}vw;
                        margin-bottom: ${convertPxToVw('24')}vw;
                    }
                    > li {
                        flex: auto;
                        font-family: ${Fonts.titleFont};
                        color: ${Colors.gray100};
                        font-weight: 700;
                        text-transform: uppercase;
                        text-align: center;
                        font-size: 12px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('12')}vw;
                            line-height: ${convertPxToVw('20.4')};
                        }
                    }
                }
                .size-table-block {
                    &.service-size-table-block {
                        width: 600px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            width: 100%;
                            flex: 100%;
                            padding: ${convertPxToVw('32')}vw ${convertPxToVw('60')}vw ${convertPxToVw('17')}vw ${convertPxToVw('32')}vw;
                        }
                        .size-brd-table {
                            border: 0;
                            width: 100%;
                            tr {
                                td {
                                    font-family: ${Fonts.titleFont};
                                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                        border-top: 0;
                                        height: ${convertPxToVw('64')}vw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .place-order-block {
            order: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
            background: ${Colors.white};
            border-radius: 17px;
            margin: 20px 15px 48px 15px;
            padding: 20px 20px 30px 20px;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding: 20px;
                order: 2;
                padding: 0;
                border-radius: 0;
                background: ${Colors.transparent};
                margin: calc(${convertPxToVw('166')}vw * -1) 0 0 0;
            }
            .place-order-text {
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    margin-right: ${convertPxToVw('30')}vw;
                }
                p {
                    font-family: ${Fonts.titleFont};
                    font-size: 14px;
                    line-height: 22px;
                    text-align: left;
                    font-weight: 700;
                    color: ${Colors.gray120};
                    margin: 0;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        text-align: right;
                        font-size: ${convertPxToVw('14')}vw;
                        line-height: ${convertPxToVw('22')}vw;
                    }
                    &.text-top {
                        margin-bottom: 10px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-top: ${convertPxToVw('50')}vw;
                            margin-bottom: ${convertPxToVw('10')}vw;
                        }
                    }
                }
                .link_button {
                    font-size: 14px;
                    line-height: 22px;
                    text-align: left;
                    font-family: ${Fonts.titleFont};
                    font-weight: 700;
                    text-decoration: underline;
                    cursor: pointer;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        text-align: right;
                        font-size: ${convertPxToVw('14')}vw;
                        line-height: ${convertPxToVw('22')}vw;
                    }
                }
                .btn-row {
                    margin-top: 14px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: ${convertPxToVw('94')}vw;
                    }
                    .btn-place-order {
                        font-family: ${Fonts.titleFont};
                        text-transform: uppercase;
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            box-shadow: 0 1vw 4vw rgb(238 66 102 / 40%), 0 1vw 4vw rgb(238 66 102 / 40%);
                        }
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            height: ${convertPxToVw('70')}vw;
                        }
                    }
                }
            }
            .place-order-img-block {
                width: 180px;
                @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                    width: ${convertPxToVw('285')}vw;
                }
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .service_card_web {
            display: none;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                display: block;
            }
        }
        .service_card_mobile {
            position: relative;
            background-color: transparent;
            box-shadow: none;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                display: none;
            }
            .service-table-block {
                padding-bottom: 1rem;
                .service-right-head-list {
                    background-color: ${Colors.white};
                    height: auto;
                    border-radius: 16px;
                    display: block;
                    min-width: 120px;
                    li {
                        padding: 0.75rem 0.25rem;
                        text-align: left;
                    }
                }
                .service-left-list {
                    display: flex;
                    justify-content: center;
                }
                .size-brd-table {
                    border-collapse: separate;
                    border-spacing: 20px;
                    .heading_tab {
                        display: flex;
                        justify-content: center;
                        text-transform: uppercase;
                        font-size: 12px;
                        color: ${Colors.black};
                    }
                    .icon {
                        display: flex;
                        flex: 0 0 17px;
                        width: 17px;
                        margin-left: 10px;
                        cursor: pointer;
                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                    td {
                        height: 40px;
                        width: 90px;
                        border-right: 1px solid #dedee0;
                        padding-right: 20px;
                        &:last-child {
                            border: none;
                        }
                    }
                }
            }
        }
    }
`;
export const GiftCardPopUpCmp = styled(Popup)`
    max-width: 100%;
    @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
    height: 100%;
    }
    .ant-modal-content {
        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        min-height: 100%;
        }
        .ant-modal-body {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                padding: ${convertPxToVw('30')}vw ${convertPxToVw('55')}vw;
            }
            .gift_card_section {
                width: 100%;
                .title {
                    font-size: 14px;
                    color: #000;
                    text-align: center;
                }
                .gift_box_img {
                    position: relative;
                    width: 100%;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-image: url(${Images.GiftCardImg});
                    display: flex;
                    align-items: flex-end;
                    height: 270px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        background-position: center;
                        height: ${convertPxToVw('390')}vw;
                    }
                }
                .gift_card_block2 {
                    .checkout-add_carditcard {
                        @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
                            margin-top: 0;
                        }
                    }

                    .affirm_button_box .affirm_btn img {
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            width: 70%;
                        }
                    }
                    h3 {
                        display: none;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            display: block;
                            color: #1a1b1d;
                            font-family: ${Fonts.titleFont};
                            margin-top: ${convertPxToVw('30')}vw;
                            font-size: ${convertPxToVw('24')}vw;
                            font-style: normal;
                            font-weight: 700;
                            line-height: ${convertPxToVw('35')}vw;
                        }
                    }
                }
                .gift_card_payment {
                    text-align: center;
                    border: 1px solid #fcc2ce;
                    border-radius: 16px;
                    box-shadow: 0px 0px 37px 0px rgba(16, 18, 35, 0.03);
                    margin: 0 auto;
                    margin-top: 1.25rem;
                    position: relative;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: 0;
                        border-radius: ${convertPxToVw('48')}vw;
                        width: ${convertPxToVw('620')}vw;
                    }
                    @media (min-width: ${`${MediaBreakpoints.upXxl}px`}) {
                        border-radius: ${convertPxToVw('48')}vw;
                        width: ${convertPxToVw('428')}vw;
                    }
                    .icon_top {
                        position: absolute;
                        top: 30px;
                        left: 30px;
                    }
                    .selected_payment {
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 0 20px;
                        padding-bottom: 20px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            padding: 0 ${convertPxToVw('40')}vw;
                            padding-bottom: ${convertPxToVw('18')}vw;
                        }
                        h6 {
                            font-size: 16px;
                            font-weight: 700;
                            font-family: ${Fonts.titleFont};
                            line-height: 24px;
                            margin-bottom: 0;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('16')}vw;
                                line-height: ${convertPxToVw('24')}vw;
                            }
                        }
                        h5 {
                            font-size: 16px;
                            font-weight: 700;
                            font-family: ${Fonts.titleFont};
                            line-height: 24px;
                            margin-bottom: 0;
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('20')}vw;
                                line-height: ${convertPxToVw('26')}vw;
                            }
                        }
                        .ant-radio-wrapper {
                            font-weight: 700;
                            font-size: 16px;
                            color: ${Colors.black};
                            @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                                font-size: ${convertPxToVw('20')}vw;
                            }
                        }
                        .ant-radio-inner::after {
                            background-color: ${Colors.blueLight};
                        }
                        .ant-radio-checked {
                            &::after {
                                border: 1px solid ${Colors.blueLight};
                            }
                            .ant-radio-inner {
                                border-color: ${Colors.blueLight};
                            }
                            .ant-radio-input:focus + .ant-radio-inner {
                                box-shadow: none;
                            }
                        }
                    }
                }
                .thankyou_content {
                    margin-top: 40px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-top: ${convertPxToVw('81')}vw;
                    }
                    .thank {
                        color: ${Colors.success};
                        text-align: center;
                        font-family: ${Fonts.titleFont};
                        font-weight: 700;
                        text-transform: uppercase;
                        font-size: 24px;
                        line-height: ${convertPxToVw('30')}vw;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('46')}vw;
                            line-height: ${convertPxToVw('35')}vw;
                            margin-bottom: ${convertPxToVw('12')}vw;
                        }
                    }
                    .hedline {
                        color: ${Colors.success};
                        text-align: center;
                        font-weight: 600;
                        text-transform: capitalize;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('16')}vw;
                            line-height: ${convertPxToVw('19')}vw;
                        }
                    }
                    .desc {
                        color: color: ${Colors.gray80};
                        text-align: center;
                        font-family: ${Fonts.titleFont};
                        font-size: 16px;
                        line-height: 23px; 
                        letter-spacing: 0.16px;
                        text-transform: capitalize;
                        margin-top: 40px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            font-size: ${convertPxToVw('16')}vw;
                            line-height: ${convertPxToVw('23')}vw;
                            margin-top: ${convertPxToVw('58')}vw;
                        }
                    }
                    .btn-place-order{
                        margin-top: 30px;
                        margin-bottom: 30px;
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            margin-top: ${convertPxToVw('58')}vw;
                            margin-bottom: ${convertPxToVw('58')}vw;
                        }
                    }
                }
            }
            .giftcard_radio_price {
                .ant-radio-group {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    overflow-y: auto;
                    padding: 1rem 0px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        padding: 0;
                        margin-top: ${convertPxToVw('24')}vw;
                        overflow-y: unset;
                    }
                    span.ant-radio + *{
                        padding-right: 0;
                        line-height: normal;
                    }
                    .ant-radio-wrapper {
                        border: 1px solid #fafafa;
                        background-color: #fff;
                        border-radius: 16px;
                        padding: 14px 16px;
                        font-family: ${Fonts.titleFont};
                        font-weight: 700;
                        font-size: 16px;
                        min-width: 120px;
                        color: ${Colors.black};
                        align-items: center;
                        box-shadow: 0px 0px 20px 10px rgba(16, 18, 35, 0.03);
                        @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                            box-shadow: 0px 0px 37px 20px rgba(16, 18, 35, 0.03);
                            min-width: unset;
                            font-size: ${convertPxToVw('20')}vw;
                            padding: ${convertPxToVw('20')}vw ${convertPxToVw('20')}vw;
                        }
                        .ant-radio{
                            top: 0;
                        }
                        .ant-radio-inner::after {
                            background-color: ${Colors.blueLight};
                        }
                        .ant-radio-checked {
                            &::after {
                                border: 1px solid ${Colors.blueLight};
                            }
                            .ant-radio-inner {
                                border-color: ${Colors.blueLight};
                            }
                            .ant-radio-input:focus + .ant-radio-inner {
                                box-shadow: none;
                            }
                        }
                    }
                }
            }
            .giftcard_form {
                width: 100%;
                margin-top: ${convertPxToVw('50')}vw;
                .ant-form-item {
                    margin-bottom: 18px;
                    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
                        margin-bottom: 20px;
                    }
                }
                .ant-form-item-explain-error {
                    bottom: -10px;
                }

                .ant-input {
                    color: ${Colors.gray80};
                    font-weight: 500;
                    font-size: 14px;
                    padding: 10px 12px;
                    border-color: rgba(217, 224, 242, 0.5);
                    background-color: #fafafa;
                    border-radius: 6px;
                    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
                        border-radius: 0.417vw;
                        padding: 0.7vw;
                        font-size: 0.729vw;
                    }
                }
            }
        }
    }
`;

import { rgba } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { Colors, Fonts, MediaBreakpoints } from './theme';

const GlobalStyle = createGlobalStyle`

    body{
        font-weight: 400;
        margin: 0;
        font-size: 12px;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
          font-size: 0.833vw;
        }
        .our-faq-page{
          overflow: visible !important;
          min-height: unset !important;
        }
    }
  .h1, h2, h3 ,h4 ,h5, h6{
      ${'' /* font-family:${Fonts.titleFont}; */}
      color: ${Colors.gray120};
      font-weight: 700;
  }
  h2{
    font-size: 48px;
    line-height: 1.5;
    margin-bottom: 4px;
      @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        margin: 0;
        font-size: 24px;
        line-height: 35px;
      }
      @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
        font-size: 2.917vw;
        line-height: 1.823vw;
      }
  }
  h3{
    font-size: 18px;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
      font-size: 2.5vw;
    }
  }
  .sec-sub-title {
    font-size: 24px;
    line-height: 26px;
    font-family: ${Fonts.titleFont};
      margin: 0;
      @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        font-size: 1.197vw;
        line-height: 1.823vw;
      }
  }
  .fw-normal{
    font-weight: 400;
  }
  .fw-bold{
    font-weight: 700;
  }
  .title-font{
    font-family:${Fonts.titleFont}; 
  }
  .text-font{
    font-family:${Fonts.primaryFont}; 
  }
  .text-primary{
    color: ${Colors.primary} !important;
  }
  .title-color{
    color: ${Colors.gray120};
  }
  .text-dark-gray{
    color: ${Colors.gray100};
  }
  .text-color{
    color: ${Colors.gray80};
  }
  .ant-input:focus{
    box-shadow:none;
    border-color: #d9d9d9;
  }
  .ant-input:hover{
    border-color: #d9d9d9;
  }
  .footer-dropdown-popup{
    min-width: auto !important;
    width: auto !important;
    background-color: ${Colors.gray120};
    .ant-select-item{
      font-size: 14px;
      font-weight: 700;
      color:${Colors.white};
      font-family:${Fonts.titleFont};
      transition: all 0.3s ease-out;
      padding: 5px 10px;
      @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        font-size: 0.729vw;
      }
      &.ant-select-item-option-selected:not(.ant-select-item-option-disabled){
        background-color: ${Colors.transparent}
      }

      &.ant-select-item-option-active{
        color: ${Colors.primary};
        background-color: ${Colors.transparent}
      }
    }
  }
  .select-painting-size{
    .ant-select-item{

      @media (max-width: ${`${MediaBreakpoints.downSm}px`}) {
        color: ${Colors.black};
        font-weight:600;
      font-size: 16px !important;
      line-height: 20px !important;
      }
    }
}
.video-react{
  .video-react-big-play-button{
    border:0;
    font-size: 8vw;
    width:10.667vw;
    height:10.667vw;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.white};
    background-color: ${rgba(Colors.black, 0.7)};
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
      font-size: 4.167vw;
      width:4.583vw;
      height:4.583vw;
    }
    
    &::before{
      line-height:10.667vw;
      @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
      line-height:4.583vw ;
      }
    }
    &.video-react-big-play-button-center{
      top:50%;
      left: 50%;
      margin:0;
      transform: translate(-50%, -50%);
    }
  }
  .video-react-poster{
    background-size: cover;
  }
  &:hover{
    .video-react-big-play-button{
      color: ${Colors.white};
      background-color: ${rgba(Colors.black, 0.9)};
    }    
  }
}
.disabled{
  pointer-events: none !important;
  opacity: 0.3 !important;
}
.invisible {
  display: none !important;
  pointer-events: none;
}

//step page tooltip
.order-step-tooltip{
  @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
    max-width:14.542vw !important;
  }
  .ant-popover-inner{
    @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
      border-radius:0.64vw;
    }
    .ant-popover-inner-content{
      font-size: 12px;
      color: ${Colors.gray100};
      @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
        padding:0.625vw 0.833vw;
        font-size:0.677vw;
        line-height:0.8vw;
      }
      p{
        margin: 0;
      }
    }
  }
}
.estimate_tooltip{
  @media (min-width: ${`${MediaBreakpoints.upMd}px`}) {
    max-width:17.542vw !important;
  }
}
.que-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${Colors.gray50};
    margin-left: 12px;
    width: 20px;
    height: 20px;
    background-color: ${rgba(Colors.reviewCardbrd, 0.7)};
    font-size: 12px;
    border-radius: 100%;
    @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
    font-size: 1vw;
          width: 1.198vw;
          height: 1.198vw;
        }
    cursor: help;
    &.que-icon-cursor {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;

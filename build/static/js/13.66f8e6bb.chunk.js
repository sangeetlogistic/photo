(this.webpackJsonpp2p=this.webpackJsonpp2p||[]).push([[13],{594:function(e,t,n){var o=n(603).default,i=n(38).default;!function(){"use strict";var t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{default:function(){return p}});var a=n(0),c=t.n(a);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t=e.aspectRatio,n=void 0===t?"taller":t,r=e.handle,l=void 0===r?null:r,d=e.handleSize,p=void 0===d?40:d,u=e.hover,m=void 0!==u&&u,f=e.leftImage,b=e.leftImageAlt,h=void 0===b?"":b,g=e.leftImageCss,x=void 0===g?{}:g,w=e.leftImageLabel,v=void 0===w?null:w,j=e.onSliderPositionChange,y=void 0===j?function(){}:j,O=e.rightImage,E=e.rightImageAlt,L=void 0===E?"":E,k=e.rightImageCss,S=void 0===k?{}:k,I=e.rightImageLabel,C=void 0===I?null:I,N=e.skeleton,A=void 0===N?null:N,P=e.sliderLineColor,z=void 0===P?"#ffffff":P,M=e.sliderLineWidth,R=void 0===M?2:M,D=e.sliderPositionPercentage,B=void 0===D?.5:D,T=e.vertical,F=void 0!==T&&T,_=!F,X=(0,a.useState)(B),W=i(X,2),Y=W[0],H=W[1],J=(0,a.useState)(0),G=i(J,2),q=G[0],K=G[1],Q=(0,a.useState)(0),U=i(Q,2),V=U[0],Z=U[1],$=(0,a.useState)(!1),ee=i($,2),te=ee[0],ne=ee[1],oe=(0,a.useState)(!1),ie=i(oe,2),re=ie[0],ae=ie[1],ce=(0,a.useState)(!1),le=i(ce,2),se=le[0],de=le[1],pe=(0,a.useRef)(null),ue=(0,a.useRef)(null),me=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=pe.current,t=new ResizeObserver((function(e){var t=o(e),n=t[0],i=(t.slice(1),n.target.getBoundingClientRect().width);K(i)}));return t.observe(e),function(){return t.disconnect()}}),[]),(0,a.useEffect)((function(){return me.current.complete&&ne(!0),function(){ne(!1)}}),[f]),(0,a.useEffect)((function(){return ue.current.complete&&ae(!0),function(){ae(!1)}}),[O]);var fe=re&&te;(0,a.useEffect)((function(){var e=function(e){var t=e||window.event,n=t.touches?t.touches[0].pageX:t.pageX,o=t.touches?t.touches[0].pageY:t.pageY,i=n-window.pageXOffset,r=o-window.pageYOffset,a=ue.current.getBoundingClientRect(),c=_?i-a.left:r-a.top,l=0+R/2,s=_?q-R/2:V-R/2;c<l&&(c=l),c>s&&(c=s),H(_?c/q:c/V),y&&y(_?c/q:c/V)},t=function(t){de(!0),"touches"in t||t.preventDefault(),e(t),window.addEventListener("mousemove",e),window.addEventListener("touchmove",e)},o=function(){de(!1),window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",e)},i=pe.current;if(fe){i.addEventListener("touchstart",t),window.addEventListener("touchend",o),m?(i.addEventListener("mousemove",e),i.addEventListener("mouseleave",o)):(i.addEventListener("mousedown",t),window.addEventListener("mouseup",o));var r=me.current.naturalHeight/me.current.naturalWidth,a=ue.current.naturalHeight/ue.current.naturalWidth,c="taller"===n?Math.max(r,a):Math.min(r,a);Z(q*c)}return function(){i.removeEventListener("touchstart",t),window.removeEventListener("touchend",o),i.removeEventListener("mousemove",e),i.removeEventListener("mouseleave",o),i.removeEventListener("mousedown",t),window.removeEventListener("mouseup",o),window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",e)}}),[fe,n,V,q,_,m,R,F]);var be={container:{boxSizing:"border-box",position:"relative",width:"100%",height:"".concat(V,"px"),overflow:"hidden"},rightImage:s({clip:_?"rect(auto, auto, auto, ".concat(q*Y,"px)"):"rect(".concat(V*Y,"px, auto, auto, auto)"),display:"block",height:"100%",objectFit:"cover",position:"absolute",width:"100%"},S),leftImage:s({clip:_?"rect(auto, ".concat(q*Y,"px, auto, auto)"):"rect(auto, auto, ".concat(V*Y,"px, auto)"),display:"block",height:"100%",objectFit:"cover",position:"absolute",width:"100%"},x),slider:{alignItems:"center",cursor:!m&&_?"ew-resize":!m&&!_&&"ns-resize",display:"flex",flexDirection:_?"column":"row",height:_?"100%":"".concat(p,"px"),justifyContent:"center",left:_?q*Y-p/2+"px":0,position:"absolute",top:_?0:V*Y-p/2+"px",width:_?"".concat(p,"px"):"100%"},line:{background:z,boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",flex:"0 1 auto",height:_?"100%":"".concat(R,"px"),width:_?"".concat(R,"px"):"100%"},handleCustom:{alignItems:"center",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:"auto",justifyContent:"center",width:"auto"},handleDefault:{alignItems:"center",border:"".concat(R,"px solid ").concat(z),borderRadius:"100%",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:"".concat(p,"px"),justifyContent:"center",width:"".concat(p,"px"),transform:_?"none":"rotate(90deg)"},leftArrow:{border:"inset ".concat(.15*p,"px rgba(0,0,0,0)"),borderRight:"".concat(.15*p,"px solid ").concat(z),height:"0px",marginLeft:"-".concat(.25*p,"px"),marginRight:.25*p+"px",width:"0px"},rightArrow:{border:"inset ".concat(.15*p,"px rgba(0,0,0,0)"),borderLeft:"".concat(.15*p,"px solid ").concat(z),height:"0px",marginRight:"-".concat(.25*p,"px"),width:"0px"},leftLabel:{background:"rgba(0, 0, 0, 0.5)",color:"white",left:_?"5%":"50%",opacity:se?0:1,padding:"10px 20px",position:"absolute",top:_?"50%":"3%",transform:_?"translate(0,-50%)":"translate(-50%, 0)",transition:"opacity 0.1s ease-out"},rightLabel:{background:"rgba(0, 0, 0, 0.5)",color:"white",opacity:se?0:1,padding:"10px 20px",position:"absolute",left:_?null:"50%",right:_?"5%":null,top:_?"50%":null,bottom:_?null:"3%",transform:_?"translate(0,-50%)":"translate(-50%, 0)",transition:"opacity 0.1s ease-out"},leftLabelContainer:{clip:_?"rect(auto, ".concat(q*Y,"px, auto, auto)"):"rect(auto, auto, ".concat(V*Y,"px, auto)"),height:"100%",position:"absolute",width:"100%"},rightLabelContainer:{clip:_?"rect(auto, auto, auto, ".concat(q*Y,"px)"):"rect(".concat(V*Y,"px, auto, auto, auto)"),height:"100%",position:"absolute",width:"100%"}};return c().createElement(c().Fragment,null,A&&!fe&&c().createElement("div",{style:s({},be.container)},A),c().createElement("div",{style:s(s({},be.container),{},{display:fe?"block":"none"}),ref:pe,"data-testid":"container"},c().createElement("img",{onLoad:function(){return ae(!0)},alt:L,"data-testid":"right-image",ref:ue,src:O,style:be.rightImage}),c().createElement("img",{onLoad:function(){return ne(!0)},alt:h,"data-testid":"left-image",ref:me,src:f,style:be.leftImage}),c().createElement("div",{style:be.slider},c().createElement("div",{style:be.line}),l?c().createElement("div",{style:be.handleCustom},l):c().createElement("div",{style:be.handleDefault},c().createElement("div",{style:be.leftArrow}),c().createElement("div",{style:be.rightArrow})),c().createElement("div",{style:be.line})),v&&c().createElement("div",{style:be.leftLabelContainer},c().createElement("div",{style:be.leftLabel},v)),C&&c().createElement("div",{style:be.rightLabelContainer},c().createElement("div",{style:be.rightLabel},C))))};e.exports=r}()},600:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));n(139);var o,i=n(91),r=n.n(i),a=n(3),c=(n(140),n(63)),l=n.n(c),s=n(13),d=(n(0),n(594)),p=n.n(d),u=n(584),m=n.n(u),f=n(215),b=n(144),h=n(2),g=n(54),x=n(29),w=n(68),v=n(30).b.section(o||(o=Object(x.a)(["\n    &.after-before-section {\n        margin: 10vh auto 4vh auto;\n        margin-bottom: 30vw;\n        @media (min-width: ",") {\n            margin-bottom: 0;\n            margin: 0;\n            padding: 2.688vw 0 4.688vw 0;\n        }\n        .after-before-container {\n            padding: 60px 14px;\n            border-radius: 22px;\n            background: ",";\n            box-shadow: 0px -0.26vw 1.25vw rgba(102, 107, 116, 0.07);\n            @media (min-width: ",") {\n                padding: 2.604vw 4.167vw;\n                margin: 0 10.411vw;\n                border-radius: 1.146vw;\n            }\n            .after-before-wrapper {\n                height: 100%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                @media (min-width: ",") {\n                    margin-right: 2.603vw;\n                }\n                .after-before-content-block {\n                    width: 100%;\n                    margin-bottom: 10vw;\n                    text-align: center;\n                    @media (min-width: ",") {\n                        margin-bottom: 20px;\n                    }\n                    @media (min-width: ",") {\n                        max-width: 18.75vw;\n                        margin-bottom: 0;\n                        text-align: left;\n                    }\n                    .sec-sub-title {\n                        font-size: 24px;\n                        line-height: 35px;\n                        margin: 0 0 16px 0;\n                        text-align: center;\n                        @media (min-width: ",") {\n                            font-size: 1.8vw;\n                            line-height: 2.2vw;\n                            margin: 0 0 1vw 0;\n                            text-align: left;\n                        }\n                    }\n                    .after-before-text-block {\n                        margin-bottom: calc(1vw + 20px);\n                        text-align: center;\n                        @media (min-width: ",") {\n                            margin-bottom: 20px;\n                        }\n                        @media (min-width: ",") {\n                            margin-bottom: 3.75vw;\n                        }\n                        p {\n                            font-size: 14px;\n                            line-height: 18px;\n                            color: ",";\n                            text-align: left;\n                            @media (min-width: ",") {\n                                font-size: 1vw;\n                                line-height: 1.3vw;\n                            }\n                            &:last-child {\n                                margin-bottom: 0;\n                            }\n                        }\n                    }\n                    .btn-turn-photo {\n                        width: 268px;\n                        font-family: ",";\n                        font-weight: normal;\n                        box-shadow: 0 10px 10px -8px rgb(238 66 102 / 40%), 0 5px 10px -8px rgb(250 94 126 / 40%);\n                        @media (min-width: ",") {\n                            width: unset;\n                            border-radius: 0.729vw;\n                        }\n                    }\n                }\n            }\n\n            .after-before-img-block {\n                border-radius: 22px;\n                overflow: hidden;\n                position: relative;\n                /* height: 92.8vw; */\n                @media (min-width: ",") {\n                    height: 26.042vw;\n                    border-radius: 1.146vw;\n                }\n\n                > div:not(.swiper-text-block, .mobile-dobule-arrow-row) {\n                    /* height: 92.8vw !important; */\n                    position: relative;\n                    @media (min-width: ",") {\n                        height: 26.042vw !important;\n                    }\n                    &:after {\n                        content: '';\n                        position: absolute;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        height: 8.854vw;\n                        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);\n                    }\n                    > :nth-child(3) {\n                        &::before,\n                        &::after {\n                            position: absolute;\n                            content: '';\n                            width: 13px;\n                            height: 8px;\n                            left: 50%;\n                            transform: translateX(-50%);\n                        }\n                        &::before {\n                            top: -1px;\n                            background: url(",") no-repeat center top;\n                        }\n                        &::after {\n                            bottom: -1px;\n                            background: url(",") no-repeat center top;\n                        }\n                    }\n                    > :nth-child(4),\n                    > :nth-child(5) {\n                        z-index: 3;\n                        > div {\n                            font-family: ",";\n                            font-size: 14px;\n                            font-weight: 700;\n                            top: unset !important;\n                            transform: translate(0, 0) !important;\n                            line-height: 19px;\n                            bottom: 10px;\n                            left: 7px !important;\n                            border-radius: 15px;\n                            padding: 5px 16px !important;\n                            text-transform: capitalize;\n                            color: ",";\n                            opacity: 1 !important;\n                            background-color: "," !important;\n                            @media (min-width: ",") {\n                                font-size: 0.729vw;\n                                line-height: 0.729vw;\n                                bottom: 0.833vw;\n                                left: 0.833vw !important;\n                                padding: 0.521vw 0.885vw !important;\n                            }\n                        }\n                    }\n                    > :nth-child(5) {\n                        > div {\n                            left: unset !important;\n                            right: 0.833vw !important;\n                        }\n                    }\n                }\n\n                .swiper-text-block {\n                    position: absolute;\n                    left: 50%;\n                    bottom: 1.406vw;\n                    transform: translateX(-50%);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    z-index: 3;\n                    display: none;\n                    @media (min-width: ",") {\n                        display: flex;\n                    }\n                    .text-block-wrap {\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        .text-block {\n                            font-family: ",";\n                            color: ",";\n                            font-size: 14px;\n                            line-height: 35px;\n                            font-weight: 700;\n                            margin: 0 9px;\n                            transition: all 0.5s ease-in;\n                            transform: scale(1);\n                            animation: SwipeText 1s infinite alternate;\n                            @media (min-width: ",") {\n                                font-size: 0.729vw;\n                                line-height: 1.823vw;\n                            }\n                        }\n                        .icon-arrow {\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            margin: 0 1px;\n                            animation: ArrowAnim 1s infinite alternate;\n                        }\n                        @keyframes SwipeText {\n                            0% {\n                                transform: scale(1);\n                                margin: 0 3px;\n                            }\n                            100% {\n                                transform: scale(1.1);\n                                margin: 0 9px;\n                            }\n                        }\n                        @keyframes ArrowAnim {\n                            0% {\n                                /* transform: scale(1); */\n                                margin: 0 0;\n                            }\n                            100% {\n                                /* transform: scale(1.1); */\n                                margin: 0 2px;\n                            }\n                        }\n                    }\n                }\n                .mobile-dobule-arrow-row {\n                    position: absolute !important;\n                    height: auto !important;\n                    top: 50%;\n                    transform: translateY(-50%);\n                    left: 0;\n                    right: 0;\n                    display: flex;\n                    padding: 0 8px;\n                    justify-content: space-between;\n                    @media (min-width: ",") {\n                        display: none;\n                    }\n                    .mobil-icon {\n                        cursor: pointer;\n                    }\n                }\n            }\n        }\n    }\n"])),"".concat(h.d.upMd1,"px"),h.a.white,"".concat(h.d.upMd1,"px"),"".concat(h.d.upLg,"px"),"".concat(h.d.upMd1,"px"),"".concat(h.d.upLg,"px"),"".concat(h.d.upMd1,"px"),"".concat(h.d.upMd1,"px"),"".concat(h.d.upLg,"px"),h.a.gray50,"".concat(h.d.upMd1,"px"),h.b.titleFont,"".concat(h.d.upMd,"px"),"".concat(h.d.upMd1,"px"),"".concat(h.d.upMd1,"px"),h.c.AfterBeforeTopCurve,h.c.AfterBeforeBtmCurve,h.b.titleFont,h.a.white,Object(w.a)(h.a.gray120,.2),"".concat(h.d.upMd1,"px"),"".concat(h.d.upMd1,"px"),h.b.titleFont,h.a.white,"".concat(h.d.upMd1,"px"),"".concat(h.d.upMd1,"px")),j=n(19),y=n(55),O=n(106),E=n(64),L=n(1),k=["title","firstContent","seondContent","btnText","leftImage","rightImage","percentShown","description","onClick"],S=function(e){var t=e.title,n=e.firstContent,o=e.seondContent,i=e.btnText,c=e.leftImage,d=e.rightImage,u=e.percentShown,x=e.description,w=e.onClick,S=Object(s.a)(e,k),I=Object(y.a)(),C=m.a.debounce((function(){I(Object(O.d)(!1))}),E.h);return Object(L.jsx)(v,{className:"after-before-section",percentShown:u,children:Object(L.jsx)("div",{className:"after-before-container",children:Object(L.jsxs)(r.a,{gutter:7,children:[Object(L.jsx)(l.a,{className:"gutter-row",xs:24,md:8,children:Object(L.jsx)("div",{className:"after-before-wrapper ",children:Object(L.jsxs)("div",{className:"after-before-content-block",children:[Object(L.jsx)("h3",{className:"sec-sub-title text-font",children:t}),Object(L.jsxs)("div",{className:"after-before-text-block",children:[Object(L.jsx)("p",{children:n||""}),Object(L.jsx)("p",{children:o||""}),x?Object(f.a)("".concat(x)):""]}),Object(L.jsx)(g.a,{size:"large",color:"primaryGRD",className:"text-uppercase btn-turn-photo",onClick:w,children:i})]})})}),Object(L.jsx)(l.a,{className:"gutter-row",xs:24,md:16,children:Object(L.jsxs)("div",{className:"after-before-img-block",children:[Object(L.jsx)(b.LazyLoadComponent,{children:Object(L.jsx)(p.a,Object(a.a)({handleSize:4,leftImage:c,rightImage:d,sliderPositionPercentage:.7,handle:Object(L.jsx)(j.a,{src:h.c.IconAfterBeforeArrow,alt:"",effect:"opacity"}),leftImageLabel:"photo",rightImageLabel:"painting",rightImageCss:{},onSliderPositionChange:function(){I(Object(O.d)(!0)),C()}},S))}),Object(L.jsxs)("div",{className:"mobile-dobule-arrow-row",children:[Object(L.jsx)("span",{className:"mobil-icon mobile-icon-left",children:Object(L.jsx)("img",{src:h.c.IconMobileDubleArrowLeft,alt:"",className:""})}),Object(L.jsx)("span",{className:"mobil-icon mobile-icon-right",children:Object(L.jsx)("img",{src:h.c.IconMobileDubleArrowRight,alt:"",className:""})})]}),Object(L.jsx)("div",{className:"swiper-text-block",children:Object(L.jsxs)("span",{className:"text-block-wrap",children:[Object(L.jsx)("i",{className:"icon-arrow icon-arrow-1",children:Object(L.jsx)(j.a,{effect:"opacity",src:h.c.AfterBeforeArrow1,alt:"",className:""})}),Object(L.jsx)("i",{className:"icon-arrow icon-arrow-2",children:Object(L.jsx)(j.a,{effect:"opacity",src:h.c.AfterBeforeArrow2,alt:"",className:""})}),Object(L.jsx)("span",{className:"text-block",children:"SWIPE"}),Object(L.jsx)("i",{className:"icon-arrow icon-arrow-3",children:Object(L.jsx)(j.a,{effect:"opacity",src:h.c.AfterBeforeArrow3,alt:"",className:""})}),Object(L.jsx)("i",{className:"icon-arrow icon-arrow-2",children:Object(L.jsx)(j.a,{effect:"opacity",src:h.c.AfterBeforeArrow4,alt:"",className:""})})]})})]})})]})})})}},603:function(e,t,n){var o=n(321),i=n(323),r=n(220),a=n(322);e.exports=function(e){return o(e)||i(e)||r(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=13.66f8e6bb.chunk.js.map
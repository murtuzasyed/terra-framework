(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{2485:function(t,e,o){"use strict";var a=o(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o(22)),h=a(o(23)),l=a(o(24)),s=a(o(25)),d=a(o(29)),r=a(o(26)),c=a(o(0)),u=a(o(980)),i=function(t){function e(t){var o;return(0,n.default)(this,e),(o=(0,l.default)(this,(0,s.default)(e).call(this,t))).handleTargetAttachment=o.handleTargetAttachment.bind((0,d.default)(o)),o.state={attachment:"middle start"},o}return(0,r.default)(e,t),(0,h.default)(e,[{key:"handleTargetAttachment",value:function(t){this.setState({attachment:t.target.value})}},{key:"render",value:function(){var t;return"middle start"===this.state.attachment?t="middle end":"middle end"===this.state.attachment?t="middle start":"middle center"===this.state.attachment?t="middle center":"top start"===this.state.attachment?t="bottom end":"top end"===this.state.attachment?t="bottom start":"top center"===this.state.attachment?t="bottom center":"bottom start"===this.state.attachment?t="top end":"bottom end"===this.state.attachment?t="top start":"bottom center"===this.state.attachment&&(t="top center"),c.default.createElement("div",null,c.default.createElement(u.default,{id:"attachment-margin",attachmentMargin:10,targetAttachment:t,contentAttachment:this.state.attachment,type:"primary",isOpen:!0}),c.default.createElement("p",null," Shoulp apply attachment margin appropriately for all attachment points "),c.default.createElement("p",null," Choose the content attachement: "),c.default.createElement("button",{type:"button",id:"attach-TS",value:"top start",onClick:this.handleTargetAttachment},"TOP START"),c.default.createElement("button",{type:"button",id:"attach-TC",value:"top center",onClick:this.handleTargetAttachment},"TOP CENTER"),c.default.createElement("button",{type:"button",id:"attach-TE",value:"top end",onClick:this.handleTargetAttachment},"TOP END"),c.default.createElement("button",{type:"button",id:"attach-MS",value:"middle start",onClick:this.handleTargetAttachment},"MIDDLE START"),c.default.createElement("button",{type:"button",id:"attach-MC",value:"middle center",onClick:this.handleTargetAttachment},"MIDDLE CENTER"),c.default.createElement("button",{type:"button",id:"attach-ME",value:"middle end",onClick:this.handleTargetAttachment},"MIDDLE END"),c.default.createElement("button",{type:"button",id:"attach-BS",value:"bottom start",onClick:this.handleTargetAttachment},"BOTTOM START"),c.default.createElement("button",{type:"button",id:"attach-BC",value:"bottom center",onClick:this.handleTargetAttachment},"BOTTOM CENTER"),c.default.createElement("button",{type:"button",id:"attach-BE",value:"bottom end",onClick:this.handleTargetAttachment},"BOTTOM END"))}}]),e}(c.default.Component);e.default=i},965:function(t,e,o){t.exports={wrapper:"HookshotTestDocCommon-module__wrapper___3BMgv",content:"HookshotTestDocCommon-module__content___fflPT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___1aFCO","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___3RlRF","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___327XX","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___3H5Td","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___3gyZo","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___3RWca","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___2Esx9","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___229Cs","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___25o4P","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___2pzs9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___35g7S","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___2Esnl","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___3qD94","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___21Zu3","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1pxMJ","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___2f8RX","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___1-MFD","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___owTPo","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___2LMwV","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___1hmwI"}},978:function(t,e,o){"use strict";var a=o(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o(0)),h=a(o(4)),l=a(o(155)),s=a(o(965)),d=h.default.bind(s.default),r=function(t){return n.default.createElement(l.default.Content,t,n.default.createElement("div",{className:d("hookshot-content-wrapper")},"Hookshot"))};e.default=r},980:function(t,e,o){"use strict";var a=o(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o(18)),h=a(o(32)),l=a(o(22)),s=a(o(23)),d=a(o(24)),r=a(o(25)),c=a(o(29)),u=a(o(26)),i=a(o(0)),m=a(o(4)),p=a(o(2)),_=a(o(155)),f=a(o(978)),k=a(o(965)),g=m.default.bind(k.default),v={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},T=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},C=function(t){function e(t){var o;return(0,l.default)(this,e),(o=(0,d.default)(this,(0,r.default)(e).call(this,t))).triggerHookshot=o.triggerHookshot.bind((0,c.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,c.default)(o)),o.state={open:t.isOpen},o}return(0,u.default)(e,t),(0,s.default)(e,[{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,a=(t.isOpen,t.contentAttachment),l=t.targetAttachment,s=t.attachmentMargin,d=t.includeSvgs,r=t.type,c=(0,h.default)(t,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),u=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:g(["wrapper","hookshot-wrapper-".concat(r)])},i.default.createElement(_.default,(0,n.default)({id:o,contentAttachment:T(a),targetAttachment:T(l),attachmentMargin:s,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},c),i.default.createElement(f.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:g(["content","hookshot-".concat(r)]),onClick:this.triggerHookshot},"Trigger Hookshot"),d&&u)}}]),e}(i.default.Component);C.propTypes=v,C.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var b=C;e.default=b}}]);
//# sourceMappingURL=230-5a59e7ef28268091ad88.js.map
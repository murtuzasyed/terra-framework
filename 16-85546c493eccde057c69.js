(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1287:function(e,t,i){"use strict";var a=i(5);Object.defineProperty(t,"__esModule",{value:!0}),t.promptRegistrationContextValueShape=t.default=void 0;var o=a(i(0)),n=a(i(2)),r=o.default.createContext({isDefaultContextValue:!0,registerPrompt:function(){},unregisterPrompt:function(){}});t.default=r;var l=n.default.shape({isDefaultContextValue:n.default.bool,registerPrompt:n.default.func.isRequired,unregisterPrompt:n.default.func.isRequired});t.promptRegistrationContextValueShape=l},1367:function(e,t,i){"use strict";var a=i(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NavigationPromptCheckpoint",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"PromptRegistrationContext",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var o=a(i(2057)),n=a(i(2058)),r=a(i(1287)),l=o.default;t.default=l},1479:function(e,t,i){"use strict";var a=i(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i(18)),n=a(i(0)),r=a(i(1287)),l=function(e){var t,i=n.default.forwardRef((function(t,i){return n.default.createElement(r.default.Consumer,null,(function(a){return n.default.createElement(e,(0,o.default)({},t,{ref:i,promptRegistration:a}))}))}));return i.displayName="withPromptRegistration(".concat((t=e).displayName||t.name||"Component",")"),i.WrappedComponent=e,i};t.default=l},2057:function(e,t,i){"use strict";var a=i(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i(22)),n=a(i(23)),r=a(i(24)),l=a(i(25)),u=a(i(26)),s=a(i(0)),d=a(i(2)),c=a(i(343)),f=a(i(1479)),p=i(1287),m={description:d.default.string,metaData:d.default.object,promptRegistration:p.promptRegistrationContextValueShape.isRequired},g=function(e){function t(e){var i;return(0,o.default)(this,t),(i=(0,r.default)(this,(0,l.default)(t).call(this,e))).uuid=(0,c.default)(),i}return(0,u.default)(t,e),(0,n.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.description,i=e.metaData,a=e.promptRegistration;a.isDefaultContextValue,a.registerPrompt(this.uuid,t,i)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,i=t.description,a=t.metaData;return i!==e.description||a!==e.metaData}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.description,i=e.metaData;e.promptRegistration.registerPrompt(this.uuid,t,i)}},{key:"componentWillUnmount",value:function(){this.props.promptRegistration.unregisterPrompt(this.uuid)}},{key:"render",value:function(){return null}}]),t}(s.default.Component);g.propTypes=m;var v=(0,f.default)(g);t.default=v},2058:function(e,t,i){"use strict";var a=i(19),o=i(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(22)),r=o(i(24)),l=o(i(25)),u=o(i(29)),s=o(i(23)),d=o(i(26)),c=o(i(0)),f=o(i(2)),p=o(i(979)),m=a(i(1287)),g=o(i(1479)),v={children:f.default.node,onPromptChange:f.default.func,promptRegistration:m.promptRegistrationContextValueShape.isRequired},_=function(e){function t(e){var i;return(0,n.default)(this,t),(i=(0,r.default)(this,(0,l.default)(t).call(this,e))).registerPrompt=i.registerPrompt.bind((0,u.default)(i)),i.unregisterPrompt=i.unregisterPrompt.bind((0,u.default)(i)),i.resolvePrompts=i.resolvePrompts.bind((0,u.default)(i)),i.renderNotificationDialog=i.renderNotificationDialog.bind((0,u.default)(i)),i.registeredPrompts={},i.promptProviderValue={registerPrompt:i.registerPrompt,unregisterPrompt:i.unregisterPrompt},i.state={notificationDialogProps:void 0},i}return(0,d.default)(t,e),(0,s.default)(t,null,[{key:"getPromptArray",value:function(e){return Object.keys(e).map((function(t){return e[t]}))}}]),(0,s.default)(t,[{key:"componentWillUnmount",value:function(){var e=this.props.onPromptChange;e&&e([])}},{key:"registerPrompt",value:function(e,i,a){var o=this.props,n=o.onPromptChange,r=o.promptRegistration;this.registeredPrompts[e]={description:i,metaData:a},n&&n(t.getPromptArray(this.registeredPrompts)),r.registerPrompt(e,i,a)}},{key:"unregisterPrompt",value:function(e){var i=this.props,a=i.onPromptChange,o=i.promptRegistration;this.registeredPrompts[e]&&(delete this.registeredPrompts[e],a&&a(t.getPromptArray(this.registeredPrompts)),o.unregisterPrompt(e))}},{key:"resolvePrompts",value:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object.keys(this.registeredPrompts).length)return Promise.resolve();var a=i;return"function"==typeof a&&(a=a(t.getPromptArray(this.registeredPrompts))),new Promise((function(t,i){e.setState({notificationDialogProps:{title:a.title,message:a.message,acceptButtonText:a.acceptButtonText,rejectButtonText:a.rejectButtonText,emphasizedAction:a.emphasizedAction,onAccept:t,onReject:i}})}))}},{key:"renderNotificationDialog",value:function(){var e=this,t=this.state.notificationDialogProps,i=t.title,a=t.message,o=t.acceptButtonText,n=t.rejectButtonText,r=t.emphasizedAction,l=t.onAccept,u=t.onReject,s={text:o,onClick:function(){e.setState({notificationDialogProps:void 0},l)}},d={text:n,onClick:function(){e.setState({notificationDialogProps:void 0},u)}},f=!r||"accept"===r;return c.default.createElement(p.default,{isOpen:!0,title:i,message:a,primaryAction:f?s:d,secondaryAction:f?d:s,variant:"warning"})}},{key:"render",value:function(){var e=this.props.children,t=this.state.notificationDialogProps;return c.default.createElement(m.default.Provider,{value:this.promptProviderValue},e,t?this.renderNotificationDialog():void 0)}}]),t}(c.default.Component);_.propTypes=v;var h=(0,g.default)(_);t.default=h},962:function(e,t){},979:function(e,t,i){"use strict";var a=i(19),o=i(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.NotificationDialogVariants=void 0;var n=o(i(32)),r=o(i(22)),l=o(i(23)),u=o(i(24)),s=o(i(25)),d=o(i(29)),c=o(i(26)),f=o(i(0)),p=o(i(2)),m=o(i(337)),g=o(i(157)),v=a(i(15)),_=o(i(54)),h=o(i(4)),y=i(7),P=o(i(988)),N=h.default.bind(P.default),D={ALERT:"alert",ERROR:"error",WARNING:"warning",INFO:"info",SUCCESS:"success",CUSTOM:"custom"};t.NotificationDialogVariants=D;var C={header:p.default.string,title:p.default.string,message:p.default.string,primaryAction:p.default.shape({text:p.default.string,onClick:p.default.func}).isRequired,secondaryAction:p.default.shape({text:p.default.string,onClick:p.default.func}),variant:p.default.oneOf([D.ALERT,D.ERROR,D.WARNING,D.INFO,D.SUCCESS,D.CUSTOM]),customIcon:p.default.element,isOpen:p.default.bool.isRequired},E={title:null,message:null,variant:D.CUSTOM},R=function(e){function t(e){var i;return(0,r.default)(this,t),(i=(0,u.default)(this,(0,s.default)(t).call(this,e))).handleKeydown=i.handleKeydown.bind((0,d.default)(i)),i.escapeKey=v.KEY_ESCAPE,i}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"handleKeydown",value:function(e){var t=document.querySelector("[data-terra-notification-dialog]");e.keyCode===this.escapeKey&&t&&(e.target===t||t.contains(e.target))&&e.stopImmediatePropagation()}},{key:"render",value:function(){if(!this.props.isOpen)return null;var e=this.props,t=e.header,i=e.title,a=e.message,o=e.primaryAction,r=e.secondaryAction,l=e.variant,u=e.customIcon,s=(e.isOpen,(0,n.default)(e,["header","title","message","primaryAction","secondaryAction","variant","customIcon","isOpen"])),d=l===D.CUSTOM?"":f.default.createElement(y.FormattedMessage,{id:"Terra.notification.dialog.".concat(l)}),c=N("notification-dialog",s.className);return f.default.createElement(m.default,{ariaLabel:"Notification Dialog","aria-labelledby":"notification-dialog-header","aria-describedby":i?"notification-dialog-title":"notification-dialog-header",role:"alertdialog",classNameModal:c,isOpen:this.props.isOpen,onRequestClose:function(){},closeOnEsc:!1,closeOnOutsideClick:!1,zIndex:"9000","data-terra-notification-dialog":!0},f.default.createElement(g.default,{focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!1,escapeDeactivates:!1}},f.default.createElement("div",{className:N("notification-dialog-inner-wrapper")},f.default.createElement("div",{className:N("notification-dialog-container")},f.default.createElement("div",{id:"notification-dialog-header",className:N("header-body")},t||d),f.default.createElement("div",{className:N("notification-dialog-body")},l&&f.default.createElement("div",{className:N("icon-container")},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(e){case D.ALERT:return f.default.createElement("span",{className:N(["icon","alert"])});case D.ERROR:return f.default.createElement("span",{className:N(["icon","error"])});case D.WARNING:return f.default.createElement("span",{className:N(["icon","warning"])});case D.INFO:return f.default.createElement("span",{className:N(["icon","info"])});case D.SUCCESS:return f.default.createElement("span",{className:N(["icon","success"])});case D.CUSTOM:return t;default:return null}}(l,u)),f.default.createElement("div",{className:N("text-wrapper")},i&&f.default.createElement("div",{id:"notification-dialog-title",className:N("title")},i),a&&f.default.createElement("div",{className:N("message")},a))),f.default.createElement("div",{className:N("footer-body")},function(e,t){var i=null,a=null;return e||t?(e&&(i=f.default.createElement(_.default,{text:e.text,variant:_.default.Opts.Variants.EMPHASIS,onClick:e.onClick})),t&&(a=f.default.createElement(_.default,{text:t.text,onClick:t.onClick})),f.default.createElement("div",{className:N("actions")},i,a)):null}(o,r))))))}}]),t}(f.default.Component);R.propTypes=C,R.defaultProps=E;var b=R;t.default=b},988:function(e,t,i){e.exports={"notification-dialog":"NotificationDialog-module__notification-dialog___-LUw5","notification-dialog-body":"NotificationDialog-module__notification-dialog-body___1ytq3","notification-dialog-inner-wrapper":"NotificationDialog-module__notification-dialog-inner-wrapper___1DC1x","notification-dialog-container":"NotificationDialog-module__notification-dialog-container___kEsLM","header-body":"NotificationDialog-module__header-body___xi4tJ","footer-body":"NotificationDialog-module__footer-body___1eakH","icon-container":"NotificationDialog-module__icon-container___1TnoY",icon:"NotificationDialog-module__icon___3HLGd",alert:"NotificationDialog-module__alert___37Jqk",warning:"NotificationDialog-module__warning___wYNKe",info:"NotificationDialog-module__info___16yP-",success:"NotificationDialog-module__success___3ofZd",error:"NotificationDialog-module__error___DKfJ1",title:"NotificationDialog-module__title___st3Ag",message:"NotificationDialog-module__message___2B6cf",actions:"NotificationDialog-module__actions___26Be3","text-wrapper":"NotificationDialog-module__text-wrapper___176pm"}}}]);
//# sourceMappingURL=16-85546c493eccde057c69.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{2414:function(e,t,n){"use strict";var r=n(19),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(128)),l=r(n(0)),u=a(n(983)),d=function(){var e=(0,l.useState)(""),t=(0,i.default)(e,2),n=t[0],r=t[1],a=(0,l.useState)(""),d=(0,i.default)(a,2),o=d[0],s=d[1],c=(0,l.useState)(!0),f=(0,i.default)(c,2),p=f[0],m=f[1],b=(0,l.useState)(!1),h=(0,i.default)(b,2),g=h[0],_=h[1];return l.default.createElement("div",null,l.default.createElement(u.default,{legend:"Legend text",name:"date-input",value:n,onChange:function(e,t){return r(t)},isInline:p,isInvalid:g,error:"Error message",help:"Help message"}),l.default.createElement(u.default,{legend:"Legend text",name:"date-input-value",value:o,onChange:function(e,t){return s(t)},isInline:p,isInvalid:g,error:"Error message",help:"Help message"}),l.default.createElement("p",null,"First DateInputField Value: ".concat(n)),l.default.createElement("p",null,"Second DateInputField Value: ".concat(o)),l.default.createElement("button",{type:"button",onClick:function(){return m((function(e){return!e}))}},"Toggle isInline"),l.default.createElement("button",{type:"button",onClick:function(){return _((function(e){return!e}))}},"Toggle isInvalid"))};t.default=d},336:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var d,o=[],s=!1,c=-1;function f(){s&&d&&(s=!1,d.length?o=d.concat(o):c=-1,o.length&&p())}function p(){if(!s){var e=u(f);s=!0;for(var t=o.length;t;){for(d=o,o=[];++c<t;)d&&d[c].run();c=-1,t=o.length}d=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new m(e,t)),1!==o.length||s||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},983:function(e,t,n){"use strict";var r=n(19),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(211)),l=a(n(18)),u=a(n(32)),d=r(n(0)),o=a(n(2)),s=n(7),c=a(n(4)),f=a(n(343)),p=a(n(341)),m=a(n(156)),b=a(n(994)),h=a(n(991));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=c.default.bind(h.default),y={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},E={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},I=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,a=e.error,i=e.help,o=e.hideRequired,c=e.isInline,h=e.isInvalid,g=e.isLegendHidden,y=e.legend,E=e.legendAttributes,I=e.monthAttributes,F=(e.maxWidth,e.name),w=e.onBlur,O=e.onChange,T=e.onFocus,A=e.required,q=e.showOptional,D=e.value,x=e.yearAttributes,j=(0,u.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),N=(0,d.useRef)((0,f.default)()),P=v(["date-input-field",{"is-inline":c},j.className]),C=v(["legend",E.className]),L=i?"terra-date-input-field-description-help-".concat(N.current):"",k=h&&a?"terra-date-input-field-description-error-".concat(N.current):"",R="".concat(k," ").concat(L),S=I["aria-describedby"]?I["aria-describedby"]:"",B="".concat(R," ").concat(S),H=t["aria-describedby"]?t["aria-describedby"]:"",M="".concat(R," ").concat(H),W=x["aria-describedby"]?x["aria-describedby"]:"",J="".concat(R," ").concat(W),V=d.default.createElement("legend",{className:v(["legend-group",{"legend-group-hidden":g}])},d.default.createElement("div",(0,l.default)({},E,{className:C}),h&&d.default.createElement("span",{className:v("error-icon")},d.default.createElement(p.default,null)),A&&(h||!o)&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{"aria-hidden":"true",className:v("required")},"*"),d.default.createElement(s.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return d.default.createElement(m.default,{text:e})}))),y,A&&!h&&o&&d.default.createElement("span",{className:v("required-hidden")},"*"),q&&!A&&d.default.createElement(s.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return d.default.createElement("span",{className:v("optional")},e)})),!h&&d.default.createElement("span",{className:v("error-icon-hidden")})));return d.default.createElement("fieldset",(0,l.default)({},j,{className:P}),V,d.default.createElement(b.default,{name:F,onChange:O,onBlur:w,onFocus:T,value:D,displayFormat:r,disabled:n,isInvalid:h,monthAttributes:_({},I,{},{"aria-describedby":B}),dayAttributes:_({},t,{},{"aria-describedby":M}),yearAttributes:_({},x,{},{"aria-describedby":J})}),h&&a&&d.default.createElement("div",{id:k,className:v("error-text")},a),i&&d.default.createElement("div",{id:L,className:v("help-text")},i))};I.propTypes=y,I.defaultProps=E;var F=I;t.default=F},991:function(e,t,n){e.exports={"date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}}}]);
//# sourceMappingURL=218-062335ba68d26900333c.js.map
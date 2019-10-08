(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{2410:function(e,t,r){"use strict";var n=r(19),a=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(128)),d=n(r(0)),l=a(r(983)),u=function(){var e=(0,d.useState)("2000-07-04"),t=(0,i.default)(e,2),r=t[0],n=t[1];return d.default.createElement("div",null,d.default.createElement(l.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return n(t)},error:"Error message",help:"Help message",disabled:!0}),d.default.createElement("p",null,"DateInputField Value: ".concat(r)),d.default.createElement(l.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return n(t)},error:"Error message",help:"Help message",isInvalid:!0,disabled:!0}),d.default.createElement("p",null,"DateInputField Value: ".concat(r)))};t.default=u},336:function(e,t){var r,n,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:d}catch(e){n=d}}();var u,o=[],s=!1,c=-1;function f(){s&&u&&(s=!1,u.length?o=u.concat(o):c=-1,o.length&&p())}function p(){if(!s){var e=l(f);s=!0;for(var t=o.length;t;){for(u=o,o=[];++c<t;)u&&u[c].run();c=-1,t=o.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===d||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new m(e,t)),1!==o.length||s||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},983:function(e,t,r){"use strict";var n=r(19),a=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(211)),d=a(r(18)),l=a(r(32)),u=n(r(0)),o=a(r(2)),s=r(7),c=a(r(4)),f=a(r(343)),p=a(r(341)),m=a(r(156)),b=a(r(994)),h=a(r(991));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=c.default.bind(h.default),v={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},E={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},w=function(e){var t=e.dayAttributes,r=e.disabled,n=e.displayFormat,a=e.error,i=e.help,o=e.hideRequired,c=e.isInline,h=e.isInvalid,g=e.isLegendHidden,v=e.legend,E=e.legendAttributes,w=e.monthAttributes,F=(e.maxWidth,e.name),I=e.onBlur,O=e.onChange,A=e.onFocus,T=e.required,q=e.showOptional,D=e.value,x=e.yearAttributes,j=(0,l.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),N=(0,u.useRef)((0,f.default)()),P=y(["date-input-field",{"is-inline":c},j.className]),L=y(["legend",E.className]),C=i?"terra-date-input-field-description-help-".concat(N.current):"",R=h&&a?"terra-date-input-field-description-error-".concat(N.current):"",B="".concat(R," ").concat(C),H=w["aria-describedby"]?w["aria-describedby"]:"",k="".concat(B," ").concat(H),M=t["aria-describedby"]?t["aria-describedby"]:"",W="".concat(B," ").concat(M),S=x["aria-describedby"]?x["aria-describedby"]:"",J="".concat(B," ").concat(S),V=u.default.createElement("legend",{className:y(["legend-group",{"legend-group-hidden":g}])},u.default.createElement("div",(0,d.default)({},E,{className:L}),h&&u.default.createElement("span",{className:y("error-icon")},u.default.createElement(p.default,null)),T&&(h||!o)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:y("required")},"*"),u.default.createElement(s.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return u.default.createElement(m.default,{text:e})}))),v,T&&!h&&o&&u.default.createElement("span",{className:y("required-hidden")},"*"),q&&!T&&u.default.createElement(s.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return u.default.createElement("span",{className:y("optional")},e)})),!h&&u.default.createElement("span",{className:y("error-icon-hidden")})));return u.default.createElement("fieldset",(0,d.default)({},j,{className:P}),V,u.default.createElement(b.default,{name:F,onChange:O,onBlur:I,onFocus:A,value:D,displayFormat:n,disabled:r,isInvalid:h,monthAttributes:_({},w,{},{"aria-describedby":k}),dayAttributes:_({},t,{},{"aria-describedby":W}),yearAttributes:_({},x,{},{"aria-describedby":J})}),h&&a&&u.default.createElement("div",{id:R,className:y("error-text")},a),i&&u.default.createElement("div",{id:C,className:y("help-text")},i))};w.propTypes=v,w.defaultProps=E;var F=w;t.default=F},991:function(e,t,r){e.exports={"date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}}}]);
//# sourceMappingURL=215-e8770036d8d7e0a830d7.js.map
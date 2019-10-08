(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1132:function(e,t,n){e.exports={"time-input":"TimeInput-module__time-input___T4wlC","time-input-hour":"TimeInput-module__time-input-hour___2VQ6_","time-input-minute":"TimeInput-module__time-input-minute___1elGu","time-input-second":"TimeInput-module__time-input-second___3X_4K","meridiem-display":"TimeInput-module__meridiem-display___16bTl","is-focused":"TimeInput-module__is-focused___niMlR",disabled:"TimeInput-module__disabled___CSggS","time-input-group":"TimeInput-module__time-input-group___9V3oL",desktop:"TimeInput-module__desktop___1gtms","initial-focus":"TimeInput-module__initial-focus___3pBpb","without-second":"TimeInput-module__without-second___2G5o1","with-second":"TimeInput-module__with-second___1EprD","time-spacer":"TimeInput-module__time-spacer___kAFrV","mobile-time-picker":"TimeInput-module__mobile-time-picker___3RdnY","meridiem-button-group":"TimeInput-module__meridiem-button-group___3sIUS","mobile-input-label":"TimeInput-module__mobile-input-label___2W6me",focused:"TimeInput-module__focused___1f8Uk","meridiem-button":"TimeInput-module__meridiem-button___2_S7a","time-input-meridiem":"TimeInput-module__time-input-meridiem___3FlHM","meridiem-select-wrapper":"TimeInput-module__meridiem-select-wrapper___16R61"}},972:function(e,t,n){"use strict";(function(e){var i=n(19),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(18)),s=a(n(211)),o=a(n(32)),r=a(n(22)),l=a(n(23)),d=a(n(24)),h=a(n(25)),c=a(n(29)),m=a(n(26)),p=a(n(0)),f=a(n(2)),g=a(n(4)),_=a(n(347)),v=a(n(352)),M=n(7),b=i(n(15)),y=a(n(975)),I=a(n(1132));function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=g.default.bind(I.default),C={disabled:f.default.bool,inputAttributes:f.default.object,hourAttributes:f.default.object,intl:M.intlShape.isRequired,minuteAttributes:f.default.object,name:f.default.string.isRequired,onBlur:f.default.func,onChange:f.default.func,onFocus:f.default.func,refCallback:f.default.func,secondAttributes:f.default.object,showSeconds:f.default.bool,value:f.default.string,variant:f.default.oneOf([y.default.FORMAT_12_HOUR,y.default.FORMAT_24_HOUR])},k={disabled:!1,inputAttributes:{},minuteAttributes:{},hourAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,secondAttributes:{},showSeconds:!1,value:void 0,variant:y.default.FORMAT_24_HOUR},O=function(t){function n(t){var i;(0,r.default)(this,n);var a=(i=(0,d.default)(this,(0,h.default)(n).call(this,t))).props.value,u=i.props.showSeconds;a&&!y.default.validateTime(a,u)&&("production"!==e.env&&console.warn("An invalid time value, ".concat(a,", has been passed to the terra-time-picker. ")+"This value has been ignored and will not be rendered. "+"Time values must be in ".concat(u?"hh:mm:ss":"hh:mm"," format because showSeconds is ").concat(u,".")),a=void 0),i.timeInputContainer=p.default.createRef(),i.handleHourChange=i.handleHourChange.bind((0,c.default)(i)),i.handleMinuteChange=i.handleMinuteChange.bind((0,c.default)(i)),i.handleSecondChange=i.handleSecondChange.bind((0,c.default)(i)),i.handleHourInputKeyDown=i.handleHourInputKeyDown.bind((0,c.default)(i)),i.handleMinuteInputKeyDown=i.handleMinuteInputKeyDown.bind((0,c.default)(i)),i.handleSecondInputKeyDown=i.handleSecondInputKeyDown.bind((0,c.default)(i)),i.handleFocus=i.handleFocus.bind((0,c.default)(i)),i.handleHourFocus=i.handleHourFocus.bind((0,c.default)(i)),i.handleMinuteFocus=i.handleMinuteFocus.bind((0,c.default)(i)),i.handleSecondFocus=i.handleSecondFocus.bind((0,c.default)(i)),i.handleHourBlur=i.handleHourBlur.bind((0,c.default)(i)),i.handleMinuteBlur=i.handleMinuteBlur.bind((0,c.default)(i)),i.handleSecondBlur=i.handleSecondBlur.bind((0,c.default)(i)),i.handleMeridiemBlur=i.handleMeridiemBlur.bind((0,c.default)(i)),i.handleMeridiemChange=i.handleMeridiemChange.bind((0,c.default)(i)),i.handleMeridiemInputKeyDown=i.handleMeridiemInputKeyDown.bind((0,c.default)(i)),i.handleMeridiemInputFocus=i.handleMeridiemInputFocus.bind((0,c.default)(i)),i.handleMeridiemSelectFocus=i.handleMeridiemSelectFocus.bind((0,c.default)(i)),i.handleMeridiemButtonChange=i.handleMeridiemButtonChange.bind((0,c.default)(i));var s,o=y.default.splitHour(a);if(y.default.getVariantFromLocale(t)===y.default.FORMAT_12_HOUR)if(i.props.intl.messages["Terra.timeInput.am"]&&i.props.intl.messages["Terra.timeInput.pm"]?(i.anteMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.am"}),i.postMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.pm"})):("production"!==e.env&&console.warn("This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed"),i.anteMeridiem="",i.postMeridiem=""),o){var l=y.default.parseTwelveHourTime(o,i.anteMeridiem,i.postMeridiem);o=l.hourString,s=l.meridiem}else s=i.anteMeridiem;return i.state={hour:o,minute:y.default.splitMinute(a),second:y.default.splitSecond(a),isFocused:!1,meridiem:s,hourInitialFocused:!1,minuteInitialFocused:!1,secondInitialFocused:!1,meridiemFocused:!1},i}return(0,m.default)(n,t),(0,l.default)(n,[{key:"componentDidUpdate",value:function(e){var t=y.default.getVariantFromLocale(this.props);if(this.props.value!==e.value||t!==y.default.getVariantFromLocale(e)){var n=y.default.splitHour(this.props.value),i=this.state.meridiem;if(t===y.default.FORMAT_12_HOUR&&(this.anteMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.am"}),this.postMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.pm"}),n)){var a=y.default.parseTwelveHourTime(n,this.anteMeridiem,this.postMeridiem);n=a.hourString,i=a.meridiem}this.setState({hour:n,minute:y.default.splitMinute(this.props.value),second:y.default.splitSecond(this.props.value),meridiem:i})}}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleSecondFocus",value:function(e){this.handleFocus(e),this.setState({secondInitialFocused:!0}),this.secondInput.setSelectionRange(0,this.secondInput.value.length)}},{key:"handleMinuteFocus",value:function(e){this.handleFocus(e),this.setState({minuteInitialFocused:!0}),this.minuteInput.setSelectionRange(0,this.minuteInput.value.length)}},{key:"handleHourFocus",value:function(e){this.handleFocus(e),this.setState({hourInitialFocused:!0}),this.hourInput.setSelectionRange(0,this.hourInput.value.length)}},{key:"handleHourBlur",value:function(e){this.handleBlur(e,y.default.inputType.HOUR),this.setState({hourInitialFocused:!1})}},{key:"handleMinuteBlur",value:function(e){this.handleBlur(e,y.default.inputType.MINUTE),this.setState({minuteInitialFocused:!1})}},{key:"handleSecondBlur",value:function(e){this.handleBlur(e,y.default.inputType.SECOND),this.setState({secondInitialFocused:!1})}},{key:"handleMeridiemBlur",value:function(e){this.handleBlur(e,y.default.inputType.MERIDIEM),this.setState({meridiemFocused:!1})}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===y.default.inputType.HOUR||t===y.default.inputType.MINUTE||t===y.default.inputType.SECOND){var n=e.target.value;1===n.length&&(n=y.default.getVariantFromLocale(this.props)===y.default.FORMAT_12_HOUR&&t===y.default.inputType.HOUR&&"0"===n?"12":"0".concat(n),this.handleValueChange(e,t,n,this.state.meridiem))}if(this.props.onBlur){var i=e.relatedTarget?e.relatedTarget:document.activeElement;this.timeInputContainer.current.contains(i)||this.props.onBlur(e)}}},{key:"handleHourChange",value:function(e){var t=this;if(y.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.hour,a=y.default.getVariantFromLocale(this.props),u=a===y.default.FORMAT_12_HOUR?12:23;if(!(n===i||n.length>2||Number(n)>u)){if(n.length>=i.length){var s=["3","4","5","6","7","8","9"];a===y.default.FORMAT_12_HOUR&&s.push("2"),s.indexOf(n)>-1&&(n="0".concat(n))}"00"===n&&a===y.default.FORMAT_12_HOUR&&(n="12");this.handleValueChange(e,y.default.inputType.HOUR,n,this.state.meridiem,(function(){2===n.length&&t.minuteInput.focus()}))}}}},{key:"handleMinuteChange",value:function(e){var t=this;if(y.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.minute;if(!(n===i||n.length>2||Number(n)>59)){if(n.length>=i.length){["6","7","8","9"].indexOf(n)>-1&&(n="0".concat(n))}this.handleValueChange(e,y.default.inputType.MINUTE,n,this.state.meridiem,(function(){2===n.length&&(t.props.showSeconds?t.secondInput.focus():y.default.getVariantFromLocale(t.props)===y.default.FORMAT_12_HOUR&&t.meridiemSelect&&t.meridiemSelect.focus())}))}}}},{key:"handleSecondChange",value:function(e){var t=this;if(y.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.second;if(!(n===i||n.length>2||Number(n)>59)){if(n.length>=i.length){["6","7","8","9"].indexOf(n)>-1&&(n="0".concat(n))}this.handleValueChange(e,y.default.inputType.SECOND,n,this.state.meridiem,(function(){y.default.getVariantFromLocale(t.props)===y.default.FORMAT_12_HOUR&&2===n.length&&t.meridiemSelect&&t.meridiemSelect.focus()}))}}}},{key:"handleMeridiemChange",value:function(e){this.setState({meridiem:e.target.value}),this.handleValueChange(e,y.default.inputType.HOUR,this.state.hour.toString(),e.target.value)}},{key:"handleMeridiemInputFocus",value:function(e){this.meridiemSelect.focus(),this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e)}},{key:"handleMeridiemSelectFocus",value:function(){this.setState({isFocused:!0,meridiemFocused:!0})}},{key:"handleHourInputKeyDown",value:function(e){var t=this.state.hour,n=this.state.meridiem,i=t,a=y.default.getVariantFromLocale(this.props);e.keyCode===b.KEY_UP&&(t=y.default.incrementHour(t,a),a===y.default.FORMAT_12_HOUR&&"12"===t&&(n=n!==this.postMeridiem&&i?this.postMeridiem:this.anteMeridiem)),e.keyCode===b.KEY_DOWN&&(t=y.default.decrementHour(t,a),a===y.default.FORMAT_12_HOUR&&"11"===t&&(n=n===this.postMeridiem?this.anteMeridiem:this.postMeridiem)),t!==i&&this.handleValueChange(e,y.default.inputType.HOUR,t,n),e.keyCode===b.KEY_RIGHT&&this.focusMinuteFromHour(e)}},{key:"focusMinuteFromHour",value:function(e){0!==this.state.hour.length&&this.state.hour.length!==this.hourInput.selectionEnd||(this.minuteInput.focus(),this.minuteInput.setSelectionRange(0,0),e.preventDefault())}},{key:"handleMinuteInputKeyDown",value:function(e){var t=this.state.minute,n=t;e.keyCode===b.KEY_UP&&(t=y.default.incrementMinute(t)),e.keyCode===b.KEY_DOWN&&(t=y.default.decrementMinute(t)),n!==t&&this.handleValueChange(e,y.default.inputType.MINUTE,t,this.state.meridiem),e.keyCode!==b.KEY_LEFT&&e.keyCode!==b.KEY_DELETE&&e.keyCode!==b.KEY_BACK_SPACE||this.focusHour(e),e.keyCode===b.KEY_RIGHT&&(this.props.showSeconds?this.focusSecondFromMinute(e):this.focusMeridiemFromMinute(e))}},{key:"focusHour",value:function(e){0===this.minuteInput.selectionEnd&&(this.hourInput.focus(),this.state.hour&&(this.hourInput.setSelectionRange(this.state.hour.length,this.state.hour.length),e.preventDefault()))}},{key:"focusMeridiemFromMinute",value:function(e){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.meridiemSelect||(this.meridiemSelect.focus(),e.preventDefault())}},{key:"focusSecondFromMinute",value:function(e){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.secondInput||(this.secondInput.focus(),this.state.second&&(this.secondInput.setSelectionRange(0,0),e.preventDefault()))}},{key:"handleSecondInputKeyDown",value:function(e){var t=this.state.second,n=t;e.keyCode===b.KEY_UP&&(t=y.default.incrementSecond(t)),e.keyCode===b.KEY_DOWN&&(t=y.default.decrementSecond(t)),n!==t&&this.handleValueChange(e,y.default.inputType.SECOND,t,this.state.meridiem),e.keyCode!==b.KEY_LEFT&&e.keyCode!==b.KEY_DELETE&&e.keyCode!==b.KEY_BACK_SPACE||this.focusMinuteFromSecond(e),e.keyCode===b.KEY_RIGHT&&this.focusMeridiemFromSecond(e)}},{key:"focusMinuteFromSecond",value:function(e){0===this.secondInput.selectionEnd&&(this.minuteInput.focus(),this.state.minute&&(this.minuteInput.setSelectionRange(this.state.minute.length,this.state.minute.length),e.preventDefault()))}},{key:"focusMeridiemFromSecond",value:function(e){0!==this.state.second.length&&this.state.second.length!==this.secondInput.selectionEnd||!this.meridiemSelect||(this.meridiemSelect.focus(),e.preventDefault())}},{key:"handleValueChange",value:function(e,t,n,i,a){if(t===y.default.inputType.HOUR?this.setState({hour:n,meridiem:i,hourInitialFocused:!1},a):t===y.default.inputType.MINUTE?this.setState({minute:n,minuteInitialFocused:!1},a):this.setState({second:n,secondInitialFocused:!1},a),this.props.onChange&&1!==n.length){var u=t===y.default.inputType.HOUR?n:this.state.hour,s=t===y.default.inputType.MINUTE?n:this.state.minute,o=t===y.default.inputType.SECOND?n:this.state.second;""===u&&""===s&&""===o?this.props.onChange(e,""):this.props.onChange(e,this.formatHour(u,i).concat(":",s).concat(this.props.showSeconds?":".concat(o):""))}}},{key:"formatHour",value:function(e,t){if(!e)return e;var n=parseInt(e,10);y.default.getVariantFromLocale(this.props)===y.default.FORMAT_12_HOUR&&(t===this.postMeridiem&&n<12?n+=12:t===this.anteMeridiem&&12===n&&(n=0));var i=n.toString();return i.length<2&&(i="0".concat(i)),i}},{key:"handleMeridiemInputKeyDown",value:function(e){e.keyCode!==b.KEY_LEFT&&e.keyCode!==b.KEY_DELETE&&e.keyCode!==b.KEY_BACK_SPACE||(this.props.showSeconds?(this.secondInput.focus(),this.state.second&&this.secondInput.setSelectionRange(this.state.second.length,this.state.second.length)):(this.minuteInput.focus(),this.state.minute&&this.minuteInput.setSelectionRange(this.state.minute.length,this.state.minute.length)),e.preventDefault())}},{key:"mobileInput",value:function(){var e=this,t=this.props,n=t.disabled,i=t.inputAttributes,a=t.minuteAttributes,s=t.hourAttributes,r=t.intl,l=(t.onBlur,t.onChange,t.onFocus,t.name),d=t.refCallback,h=t.secondAttributes,c=t.showSeconds,m=(t.value,t.variant,(0,o.default)(t,["disabled","inputAttributes","minuteAttributes","hourAttributes","intl","onBlur","onChange","onFocus","name","refCallback","secondAttributes","showSeconds","value","variant"])),f=T({},s),g=T({},a),M=T({},h),b=y.default.getVariantFromLocale(this.props),I="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0){var F=parseInt(this.state.hour,10);b===y.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&F>12&&(F+=12),I="T".concat(F,":",this.state.minute).concat(c?":".concat(this.state.second):"")}return f.id||(f.id="terra-time-hour-".concat(l)),g.id||(g.id="terra-time-minute-".concat(l)),M.id||(M.id="terra-time-second-".concat(l)),p.default.createElement("div",(0,u.default)({},m,{className:S(["mobile-time-picker",m.className]),ref:this.timeInputContainer}),p.default.createElement("input",{type:"hidden",name:l,value:I}),p.default.createElement("div",{className:S("time-input-group")},p.default.createElement(_.default,(0,u.default)({},i,f,{refCallback:function(t){e.hourInput=t,d&&d(t)},className:S("time-input-hour"),value:this.state.hour,name:"terra-time-hour-".concat(l),placeholder:r.formatMessage({id:"Terra.timeInput.hh"}),maxLength:"2",onChange:this.handleHourChange,onKeyDown:this.handleHourInputKeyDown,onFocus:this.handleFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",disabled:n})),p.default.createElement("label",{htmlFor:f.id,className:S("mobile-input-label")},r.formatMessage({id:"Terra.timeInput.hours"}))),p.default.createElement("span",{className:S("time-spacer")},":"),p.default.createElement("div",{className:S("time-input-group")},p.default.createElement(_.default,(0,u.default)({},i,g,{refCallback:function(t){e.minuteInput=t},className:S("time-input-minute",c?"with-second":"without-second"),value:this.state.minute,name:"terra-time-minute-".concat(l),placeholder:r.formatMessage({id:"Terra.timeInput.mm"}),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:this.handleMinuteInputKeyDown,onFocus:this.handleFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",disabled:n})),p.default.createElement("label",{htmlFor:g.id,className:S("mobile-input-label")},r.formatMessage({id:"Terra.timeInput.minutes"}))),c&&p.default.createElement(p.default.Fragment,null,p.default.createElement("span",{className:S("time-spacer")},":"),p.default.createElement("div",{className:S("time-input-group")},p.default.createElement(_.default,(0,u.default)({},i,M,{refCallback:function(t){e.secondInput=t},className:S("time-input-second"),value:this.state.second,name:"terra-time-second-".concat(l),placeholder:r.formatMessage({id:"Terra.timeInput.ss"}),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:this.handleSecondInputKeyDown,onFocus:this.handleFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",disabled:n})),p.default.createElement("label",{htmlFor:M.id,className:S("mobile-input-label")},r.formatMessage({id:"Terra.timeInput.seconds"})))),b===y.default.FORMAT_12_HOUR&&p.default.createElement(v.default,{selectedKeys:[this.state.meridiem],onChange:this.handleMeridiemButtonChange,className:S("meridiem-button-group")},p.default.createElement(v.default.Button,{key:this.anteMeridiem,className:S("meridiem-button"),text:this.anteMeridiem,onBlur:this.handleMeridiemBlur,onFocus:this.handleFocus,isDisabled:n}),p.default.createElement(v.default.Button,{key:this.postMeridiem,className:S("meridiem-button"),text:this.postMeridiem,onBlur:this.handleMeridiemBlur,onFocus:this.handleFocus,isDisabled:n})))}},{key:"handleMeridiemButtonChange",value:function(e,t){this.handleValueChange(e,y.default.inputType.HOUR,this.state.hour.toString(),t)}},{key:"desktopInput",value:function(){var e=this,t=this.props,n=t.disabled,i=t.inputAttributes,a=t.minuteAttributes,s=(t.hourAttributes,t.intl),r=(t.onBlur,t.onChange,t.onFocus,t.name),l=t.refCallback,d=t.secondAttributes,h=t.showSeconds,c=(t.value,t.variant,(0,o.default)(t,["disabled","inputAttributes","minuteAttributes","hourAttributes","intl","onBlur","onChange","onFocus","name","refCallback","secondAttributes","showSeconds","value","variant"])),m=y.default.getVariantFromLocale(this.props),f=S([{disabled:n},"time-input",{"is-focused":this.state.isFocused},c.className]),g="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0&&h){var v=parseInt(this.state.hour,10);m===y.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&(v+=12),g="T".concat(v,":",this.state.minute),h&&(g=g.concat(":",this.state.second))}return p.default.createElement("div",(0,u.default)({},c,{className:f,ref:this.timeInputContainer}),p.default.createElement("input",{type:"hidden",name:r,value:g}),p.default.createElement(_.default,(0,u.default)({},i,a,{"aria-label":s.formatMessage({id:"Terra.timeInput.hours"}),refCallback:function(t){e.hourInput=t,l&&l(t)},className:S("time-input-hour","desktop",{"initial-focus":this.state.hourInitialFocused}),type:"text",value:this.state.hour,name:"terra-time-hour-".concat(r),placeholder:s.formatMessage({id:"Terra.timeInput.hh"}),maxLength:"2",onChange:this.handleHourChange,onKeyDown:this.handleHourInputKeyDown,onFocus:this.handleHourFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",disabled:n})),p.default.createElement("span",{className:S("time-spacer")},":"),p.default.createElement(_.default,(0,u.default)({},i,a,{refCallback:function(t){e.minuteInput=t},"aria-label":s.formatMessage({id:"Terra.timeInput.minutes"}),className:S("time-input-minute",h?"with-second":"without-second","desktop",{"initial-focus":this.state.minuteInitialFocused}),type:"text",value:this.state.minute,name:"terra-time-minute-".concat(r),placeholder:s.formatMessage({id:"Terra.timeInput.mm"}),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:this.handleMinuteInputKeyDown,onFocus:this.handleMinuteFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",disabled:n})),h&&p.default.createElement(p.default.Fragment,null,p.default.createElement("span",{className:S("time-spacer")},":"),p.default.createElement(_.default,(0,u.default)({},i,d,{refCallback:function(t){e.secondInput=t},"aria-label":s.formatMessage({id:"Terra.timeInput.seconds"}),className:S("time-input-second","desktop",{"initial-focus":this.state.secondInitialFocused}),type:"text",value:this.state.second,name:"terra-time-second-".concat(r),placeholder:s.formatMessage({id:"Terra.timeInput.ss"}),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:this.handleSecondInputKeyDown,onFocus:this.handleSecondFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",disabled:n}))),m===y.default.FORMAT_12_HOUR&&[p.default.createElement(_.default,(0,u.default)({},i,{"aria-label":s.formatMessage({id:"Terra.timeInput.display.meridiem"}),"aria-readonly":!0,className:S(["meridiem-display",{focused:this.state.meridiemFocused}]),onFocus:this.handleMeridiemInputFocus,key:"meridiem_display",tabIndex:"-1",value:this.state.meridiem,size:this.state.meridiem.length||1,readOnly:!0,disabled:n})),p.default.createElement("div",{className:S("meridiem-select-wrapper"),key:"meridiem_select_box"},p.default.createElement("select",{"aria-label":s.formatMessage({id:"Terra.timeInput.select.meridiem"}),ref:function(t){e.meridiemSelect=t},onBlur:this.handleMeridiemBlur,onFocus:this.handleMeridiemSelectFocus,name:"terra-time-meridiem-".concat(r),value:this.state.meridiem,className:S("time-input-meridiem"),onChange:this.handleMeridiemChange,onKeyDown:this.handleMeridiemInputKeyDown,size:"2"},p.default.createElement("option",{key:"anteMeridiem",value:this.anteMeridiem},this.anteMeridiem),p.default.createElement("option",{key:"postMeridiem",value:this.postMeridiem},this.postMeridiem)))])}},{key:"render",value:function(){return y.default.isConsideredMobileDevice()?this.mobileInput():this.desktopInput()}}]),n}(p.default.Component);O.propTypes=C,O.defaultProps=k;var E=(0,M.injectIntl)(O);t.default=E}).call(this,n(336))},975:function(e,t,n){"use strict";var i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(22)),u=i(n(23)),s=function(){function e(){(0,a.default)(this,e)}return(0,u.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"parseTwelveHourTime",value:function(e,t,n){var i={hourString:e},a=parseInt(e,10);return a>=12?(i.meridiem=n,a>12&&(a-=12)):(i.meridiem=t,0===a&&(a=12)),i.hourString=a<10?"0".concat(a.toString()):a.toString(),i}},{key:"incrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?12:23;if(e){var i=Number(e);return i<n?(i+=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"01":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"decrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?1:0;if(e){var i=Number(e);return i>n?(i-=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"12":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"incrementMinute",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementMinute",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"incrementSecond",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementSecond",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"splitHour",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length){var n=Number(t[0]);if(n>=0&&n<24)return 1===t[0].length?"0".concat(t[0]):t[0]}return""}return""}},{key:"splitMinute",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>1){var n=Number(t[1]);if(n>=0&&n<60)return 1===t[1].length?"0".concat(t[1]):t[1]}return""}return""}},{key:"splitSecond",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>2){var n=Number(t[2]);if(n>=0&&n<60)return 1===t[2].length?"0".concat(t[2]):t[2]}return""}return""}},{key:"validateTime",value:function(e,t){return t?/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(e):/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e)}},{key:"getVariantFromLocale",value:function(e){var t=e.intl,n=e.variant;return t.messages["Terra.timeInput.am"]&&t.messages["Terra.timeInput.pm"]?n:this.FORMAT_24_HOUR}}]),e}();s.inputType={HOUR:0,MINUTE:1,MERIDIEM:2,SECOND:3},s.isConsideredMobileDevice=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},Object.defineProperty(s,"FORMAT_12_HOUR",{value:"12-hour",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(s,"FORMAT_24_HOUR",{value:"24-hour",configurable:!1,enumerable:!0,writable:!1});var o=s;t.default=o}}]);
//# sourceMappingURL=3-9dceb59e74ad8e52ae9d.js.map
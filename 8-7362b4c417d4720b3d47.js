(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1050:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(18)),a=l(n(32)),u=l(n(22)),d=l(n(23)),o=l(n(24)),s=l(n(25)),r=l(n(29)),c=l(n(26)),f=l(n(0)),h=l(n(158)),p=l(n(2)),b=l(n(4)),m=n(7),C=l(n(1815)),v=l(n(1816)),O=l(n(1817)),_=l(n(1818)),g=l(n(1112)),y=b.default.bind(g.default),k={children:p.default.node.isRequired,menuWidth:p.default.oneOf(Object.keys(C.default.Opts.widths)),boundingRef:p.default.func},w=function(e){function t(e){var n;return(0,u.default)(this,t),(n=(0,o.default)(this,(0,s.default)(t).call(this,e))).setContainer=n.setContainer.bind((0,r.default)(n)),n.setMenuButton=n.setMenuButton.bind((0,r.default)(n)),n.resetCache=n.resetCache.bind((0,r.default)(n)),n.handleResize=n.handleResize.bind((0,r.default)(n)),n.resetCache(),n}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"handleResize",value:function(e){for(var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,i=!0,a=0;a<f.default.Children.count(this.props.children);a+=1){if((l+=this.container.children[a].getBoundingClientRect().width)>t){if(a===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[a].type===_.default?a-1:a,i=!1;break}}this.menuHidden===i&&this.hiddenStartIndex===n||(this.menuHidden=i,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,u=(0,a.default)(e,["children","boundingRef","menuWidth"]),d=f.default.Children.toArray(t),o=null;this.hiddenStartIndex>=0&&(o=d.splice(this.hiddenStartIndex));var s=y(["collapsible-menu-view",{"is-calculating":this.isCalculating},u.className]),r=y(["menu-button",{hidden:this.menuHidden}]);return f.default.createElement("div",(0,i.default)({},u,{className:s,ref:this.setContainer}),d,f.default.createElement("div",{className:r,ref:this.setMenuButton},f.default.createElement(m.FormattedMessage,{id:"Terra.collapsibleMenuView.more"},(function(e){return f.default.createElement(C.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement("span",{className:y("menu-button-icon")}),subMenuItems:o,boundingRef:n,menuWidth:l,isIconOnly:!0,text:e})}))))}}]),t}(f.default.Component);w.Item=C.default,w.ItemGroup=v.default,w.Toggle=O.default,w.Divider=_.default,w.propTypes=k;var x=w;t.default=x},1112:function(e,t,n){e.exports={"collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___UehgZ","menu-button":"CollapsibleMenuView-module__menu-button___23yfZ",hidden:"CollapsibleMenuView-module__hidden___3lTG_","menu-button-icon":"CollapsibleMenuView-module__menu-button-icon___1s1aJ","face-up-item":"CollapsibleMenuView-module__face-up-item___1mdkC",control:"CollapsibleMenuView-module__control___JE6_O","is-disabled":"CollapsibleMenuView-module__is-disabled___2NTUN",divider:"CollapsibleMenuView-module__divider___3t71g","is-calculating":"CollapsibleMenuView-module__is-calculating___1UDtu"}},1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(0)),i=o(n(2)),a=o(n(4)),u=o(n(1333)),d=o(n(1334));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h=a.default.bind(u.default),p={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.node.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},b={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},m=function(e){var t=e.checked,n=e.defaultChecked,i=e.inputAttrs,a=e.id,u=e.disabled,o=e.isInline,p=e.isLabelHidden,b=e.labelText,m=e.labelTextAttrs,C=e.name,v=e.onBlur,O=e.onChange,_=e.onFocus,g=e.value,y=f(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i);void 0!==t?k.checked=t:k.defaultChecked=n;var w=h(["checkbox",{"is-inline":o},y.className]),x=h(["label",{"is-disabled":u},{"is-mobile":d.default.isConsideredMobileDevice()},m.className]),I=h(["native-input",i.className]),M=h(["label-text",{"is-hidden":p},{"is-mobile":d.default.isConsideredMobileDevice()}]),E=null;return p?(k["aria-label"]=b,E=l.default.createElement("span",s({},m,{className:M}))):E=l.default.createElement("span",s({},m,{className:M}),b),l.default.createElement("div",s({},y,{className:w}),l.default.createElement("label",{htmlFor:a,className:x},l.default.createElement("input",s({},k,{type:"checkbox",id:a,disabled:u,name:C,value:g,onChange:O,onFocus:_,onBlur:v,className:I})),E))};m.propTypes=p,m.defaultProps=b,m.isCheckbox=!0;var C=m;t.default=C},1332:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(18)),a=l(n(32)),u=l(n(22)),d=l(n(23)),o=l(n(24)),s=l(n(25)),r=l(n(29)),c=l(n(26)),f=l(n(0)),h=l(n(2)),p=l(n(4)),b=l(n(340)),m=l(n(1112)),C=p.default.bind(m.default),v={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(Object.keys(b.default.Opts.widths)),button:h.default.element.isRequired},O={isCollapsibleMenuItem:h.default.bool},_=function(e){function t(e){var n;return(0,u.default)(this,t),(n=(0,o.default)(this,(0,s.default)(t).call(this,e))).handleRequestClose=n.handleRequestClose.bind((0,r.default)(n)),n.wrappedOnClick=n.wrappedOnClick.bind((0,r.default)(n)),n.wrapButtonClick=n.wrapButtonClick.bind((0,r.default)(n)),n.wrapChildrenOnClick=n.wrapChildrenOnClick.bind((0,r.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,r.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,r.default)(n)),n.state={isOpen:!1},n}return(0,c.default)(t,e),(0,d.default)(t,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var i=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:i})}else if(e.props.subMenuItems){var a=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:a})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,u=(0,a.default)(e,["children","button","contentWidth"]),d=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)});return f.default.createElement("div",{className:C("face-up-item"),ref:this.setButtonNode},f.default.createElement(b.default,(0,i.default)({},u,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),d)}}]),t}(f.default.Component);_.propTypes=v,_.childContextTypes=O,_.Item=b.default.Item,_.ItemGroup=b.default.ItemGroup,_.Opts={widths:b.default.Opts.widths};var g=_;t.default=g},1333:function(e,t,n){e.exports={checkbox:"Checkbox-module__checkbox___HI9Vi",label:"Checkbox-module__label___3E8fg","is-mobile":"Checkbox-module__is-mobile___frQvN","native-input":"Checkbox-module__native-input___GvkXw","label-text":"Checkbox-module__label-text___fY5lt","is-hidden":"Checkbox-module__is-hidden___26Rqh","is-disabled":"Checkbox-module__is-disabled___WSQKG","is-inline":"Checkbox-module__is-inline___1jo0Z"}},1334:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l},1815:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(18)),a=l(n(211)),u=l(n(32)),d=l(n(22)),o=l(n(23)),s=l(n(24)),r=l(n(25)),c=l(n(29)),f=l(n(26)),h=l(n(0)),p=l(n(2)),b=l(n(4)),m=l(n(54)),C=l(n(352)),v=l(n(1332)),O=l(n(1112));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}var g=b.default.bind(O.default),y={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(Object.keys(v.default.Opts.widths))},k={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},w=function(e){function t(e){var n;return(0,d.default)(this,t),(n=(0,s.default)(this,(0,r.default)(t).call(this,e))).setButtonNode=n.setButtonNode.bind((0,c.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,c.default)(n)),n}return(0,f.default)(t,e),(0,o.default)(t,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,d=e.text,o=e.isSelected,s=e.isDisabled,r=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=(0,u.default)(e,["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"]),b=this.context,O=b.isCollapsibleGroupItem,y=b.isCollapsibleMenuItem,k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);return y?h.default.createElement(v.default.Item,(0,i.default)({},k,{text:d,isSelected:o&&O,isDisabled:s,subMenuItems:r})):O?h.default.createElement(C.default.Button,(0,i.default)({},k,{icon:t,text:d,isDisabled:s})):r&&r.length>0?h.default.createElement(v.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(m.default,(0,i.default)({},k,{icon:t,text:d,isReversed:l,isDisabled:s,onClick:this.handleButtonClick,isIconOnly:n}))},r):h.default.createElement("div",{className:g("face-up-item")},h.default.createElement(m.default,(0,i.default)({},k,{icon:t,text:d,isReversed:l,isDisabled:s,isIconOnly:n})))}}]),t}(h.default.Component);w.propTypes=y,w.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},w.contextTypes=k,w.Opts={widths:v.default.Opts.widths};var x=w;t.default=x},1816:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(18)),a=l(n(32)),u=l(n(22)),d=l(n(23)),o=l(n(24)),s=l(n(25)),r=l(n(29)),c=l(n(26)),f=l(n(0)),h=l(n(2)),p=l(n(4)),b=l(n(352)),m=l(n(93)),C=l(n(1332)),v=l(n(1112)),O=p.default.bind(v.default),_={onChange:h.default.func,children:h.default.node.isRequired,selectedKeys:h.default.arrayOf(h.default.string)},g={isCollapsibleGroupItem:h.default.bool},y={isCollapsibleMenuItem:h.default.bool},k=function(e){function t(e){var n;return(0,u.default)(this,t),(n=(0,o.default)(this,(0,s.default)(t).call(this,e))).handleOnChange=n.handleOnChange.bind((0,r.default)(n)),n}return(0,c.default)(t,e),(0,d.default)(t,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,l=e.selectedKeys,u=(0,a.default)(e,["children","onChange","selectedKeys"]),d=this.context.isCollapsibleMenuItem;if(d&&l.length)return f.default.createElement("li",{role:"none"},f.default.createElement(C.default.ItemGroup,(0,i.default)({},u,{onChange:this.handleOnChange}),t));if(d)return f.default.createElement("li",{role:"none"},f.default.createElement(m.default,(0,i.default)({},u,{role:"listbox"}),t));var o=O(["face-up-item",u.className]);return f.default.createElement(b.default,(0,i.default)({},u,{onChange:n,className:o,selectedKeys:l}),t)}}]),t}(f.default.Component);k.propTypes=_,k.defaultProps={selectedKeys:[]},k.childContextTypes=g,k.contextTypes=y;var w=k;t.default=w},1817:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(18)),a=l(n(32)),u=l(n(22)),d=l(n(23)),o=l(n(24)),s=l(n(25)),r=l(n(29)),c=l(n(26)),f=l(n(0)),h=l(n(2)),p=l(n(4)),b=l(n(1159)),m=l(n(1332)),C=l(n(1112)),v=p.default.bind(C.default),O={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},_={isCollapsibleMenuItem:h.default.bool},g=function(e){function t(e){var n;return(0,u.default)(this,t),(n=(0,o.default)(this,(0,s.default)(t).call(this,e))).wrappedOnChange=n.wrappedOnChange.bind((0,r.default)(n)),n}return(0,c.default)(t,e),(0,d.default)(t,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,u=e.isDisabled,d=e.onChange,o=(e.shouldCloseOnClick,(0,a.default)(e,["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"])),s=this.context.isCollapsibleMenuItem,r=v(["control",{"is-disabled":u||!l},o.className]);return s?f.default.createElement(m.default.Item,(0,i.default)({},o,{text:t,isSelected:n,isSelectable:l,isDisabled:u,onChange:d})):f.default.createElement("div",{className:v(["face-up-item"])},f.default.createElement(b.default,(0,i.default)({},o,{className:r,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:u||!l})))}}]),t}(f.default.Component);g.propTypes=O,g.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},g.contextTypes=_;var y=g;t.default=y},1818:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),a=l(n(2)),u=l(n(4)),d=l(n(340)),o=l(n(1112)),s=u.default.bind(o.default),r={isCollapsibleMenuItem:a.default.bool},c=function(e,t){return t.isCollapsibleMenuItem?i.default.createElement(d.default.Divider,null):i.default.createElement("div",{className:s(["divider","face-up-item"])})};c.contextTypes=r;var f=c;t.default=f}}]);
//# sourceMappingURL=8-7362b4c417d4720b3d47.js.map
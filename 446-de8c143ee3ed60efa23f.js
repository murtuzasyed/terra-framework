(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{2512:function(e,t,n){"use strict";var u=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(22)),l=u(n(23)),a=u(n(24)),d=u(n(25)),i=u(n(29)),s=u(n(26)),f=u(n(0)),c=u(n(340)),r=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,a.default)(this,(0,d.default)(t).call(this,e))).handleButtonClick=n.handleButtonClick.bind((0,i.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,i.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,i.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,i.default)(n)),n.state={open:!1},n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(c.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},f.default.createElement(c.default.Item,{text:"Default Menu",id:"TestContent"})),f.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),t}(f.default.Component);t.default=r}}]);
//# sourceMappingURL=446-de8c143ee3ed60efa23f.js.map
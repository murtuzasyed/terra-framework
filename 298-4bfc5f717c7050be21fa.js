(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1042:function(e,t,a){e.exports={"content-wrapper-400":"TabsTemplate-module__content-wrapper-400___2Qmwn","content-wrapper":"TabsTemplate-module__content-wrapper___2uNRk","tab-content":"TabsTemplate-module__tab-content___1qjIg"}},1071:function(e,t,a){"use strict";var l=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),d=l(a(4)),u=l(a(2)),i=l(a(1042)),r=d.default.bind(i.default),c={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},o=function(e){var t=e.isLabelHidden,a=e.label,l=e.id;return n.default.createElement("div",{className:r("tab-content"),id:l},t?n.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",n.default.createElement("i",null,a))};o.propTypes=c;var f=o;t.default=f},2587:function(e,t,a){"use strict";var l=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(22)),d=l(a(23)),u=l(a(24)),i=l(a(25)),r=l(a(29)),c=l(a(26)),o=l(a(0)),f=l(a(1081)),b=l(a(1071)),s=function(e){function t(e){var a;return(0,n.default)(this,t),(a=(0,u.default)(this,(0,i.default)(t).call(this,e))).state={activeKey:"Tab2"},a.handleSelection=a.handleSelection.bind((0,r.default)(a)),a}return(0,c.default)(t,e),(0,d.default)(t,[{key:"handleSelection",value:function(e,t){t!==this.state.activeKey&&this.setState({activeKey:t})}},{key:"render",value:function(){var e=o.default.createElement(f.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},o.default.createElement(b.default,{label:"Tab 1",id:"tab1Content"})),t=o.default.createElement(f.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},o.default.createElement(b.default,{label:"Tab 2",id:"tab2Content"})),a=o.default.createElement(f.default.Pane,{label:"Tab 3",key:"Tab 3",id:"tab3"},o.default.createElement(b.default,{label:"Tab 3",id:"tab3Content"}));return o.default.createElement("div",null,o.default.createElement("div",{id:"current-selection"},o.default.createElement("p",null,"Last Triggered Tab:",this.state.activeKey)),o.default.createElement(f.default,{id:"controlledTabs",onChange:this.handleSelection,activeKey:this.state.activeKey},e,t,a))}}]),t}(o.default.Component);t.default=s}}]);
//# sourceMappingURL=298-4bfc5f717c7050be21fa.js.map
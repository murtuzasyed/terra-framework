(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1099:function(e,t,s){e.exports={header:"DisclosureComponentCommon-test-module__header___2HTHy","content-form":"DisclosureComponentCommon-test-module__content-form___3Q74w","select-field":"DisclosureComponentCommon-test-module__select-field___1LdeS"}},1100:function(e,t,s){e.exports={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___3KEQB","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___b49Lr"}},1142:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(s(211)),i=n(s(22)),a=n(s(23)),o=n(s(24)),d=n(s(25)),r=n(s(29)),c=n(s(26)),u=n(s(0)),m=n(s(2)),f=n(s(1050)),h=n(s(48)),p=s(212),b=n(s(4)),g=n(s(1099)),y=b.default.bind(g.default),k=Object.keys(p.availableDisclosureHeights),v=Object.keys(p.availableDisclosureWidths),E=function(e){function t(e){var s;return(0,i.default)(this,t),(s=(0,o.default)(this,(0,d.default)(t).call(this,e))).disclose=s.disclose.bind((0,r.default)(s)),s.dismiss=s.dismiss.bind((0,r.default)(s)),s.closeDisclosure=s.closeDisclosure.bind((0,r.default)(s)),s.goBack=s.goBack.bind((0,r.default)(s)),s.maximize=s.maximize.bind((0,r.default)(s)),s.minimize=s.minimize.bind((0,r.default)(s)),s.generateOptions=s.generateOptions.bind((0,r.default)(s)),s.handleSelectChange=s.handleSelectChange.bind((0,r.default)(s)),s.renderFormButton=s.renderFormButton.bind((0,r.default)(s)),s.renderForm=s.renderForm.bind((0,r.default)(s)),s.getId=s.getId.bind((0,r.default)(s)),s.state={id:"disclosureDimensions",disclosureHeight:k[0],disclosureWidth:v[0]},s}return(0,c.default)(t,e),(0,a.default)(t,[{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var s=this;return e.map((function(e,n){var l=n;return u.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(s.props.nestedIndex),key:l,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,l.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var s=this,n=this.props,l=n.disclosureType,i=n.nestedIndex,a=n.renderHeaderAdapter,o=i+1;return function(){s.props.disclosureManager.disclose({preferredType:l,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:u.default.createElement(C,{identifier:"DemoContainer-".concat(o),nestedIndex:o,renderHeaderAdapter:a})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return u.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return u.default.createElement("form",null,u.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),u.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(k,"height")),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),u.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(v,"width")),u.default.createElement("br",null),u.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,s=e.identifier,n=e.renderHeaderAdapter;return u.default.createElement(h.default,{id:s,className:"nested-component",fill:!0,header:u.default.createElement("h2",{className:y("header")},"Content Component")},n?u.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(s),collapsibleMenuView:u.default.createElement(f.default,null,u.default.createElement(f.default.Item,{text:"Header Button 1",key:"button_1"}),u.default.createElement(f.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,u.default.createElement("p",null,"id:"," ",s),u.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),u.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),u.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),u.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),u.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),u.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),u.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),u.default.createElement("div",{className:y("content-form")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?u.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?u.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?u.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?u.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?u.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),t}(u.default.Component);E.propTypes={disclosureManager:p.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number,renderHeaderAdapter:m.default.bool},E.defaultProps={nestedIndex:0};var C=(0,p.withDisclosureManager)(E),_=C;t.default=_},2531:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(s(0)),i=n(s(4)),a=n(s(1142)),o=n(s(338)),d=n(s(1100)),r=i.default.bind(d.default),c=function(){return l.default.createElement("div",{role:"main",className:r("content-wrapper")},l.default.createElement(o.default,{disclosureAccessory:l.default.createElement("div",{className:r("disclosure-accessory")},"Disclosure Accessory")},l.default.createElement(a.default,{identifier:"root-component",disclosureType:"modal",renderHeaderAdapter:!0})))};t.default=c}}]);
//# sourceMappingURL=179-3f014398ed41a9752d3b.js.map
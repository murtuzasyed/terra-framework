(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1485:function(e,l,t){"use strict";var n=t(19),a=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=a(t(0)),u=n(t(974)),d=a(t(992)),o=a(t(993)),r=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(d.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};l.default=r},974:function(e,l,t){"use strict";var n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var a=n(t(18)),i=n(t(32)),u=n(t(22)),d=n(t(23)),o=n(t(24)),r=n(t(25)),m=n(t(29)),s=n(t(26)),f=n(t(0)),c=n(t(2)),p=n(t(4)),E=n(t(985)),v=p.default.bind(E.default),I={START:"start",END:"end"};l.SlidePanelPositions=I;var _={mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool},h={panelBehavior:"overlay",panelPosition:I.END,panelSize:"small"},P=function(e){function l(e){var t;return(0,u.default)(this,l),(t=(0,o.default)(this,(0,r.default)(l).call(this,e))).setPanelNode=t.setPanelNode.bind((0,m.default)(t)),t.mainNode=f.default.createRef(),t}return(0,s.default)(l,e),(0,d.default)(l,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.mainContent,t=e.panelContent,n=e.panelBehavior,u=e.panelPosition,d=e.panelSize,o=e.isFullscreen,r=e.isOpen,m=e.fill,s=(0,i.default)(e,["mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),c=v(["slide-panel",{"is-open":r},{"is-fullscreen":o},{fill:m},s.className]),p=f.default.createElement("div",{className:v(["panel"]),tabIndex:"-1","aria-hidden":r?"false":"true",ref:this.setPanelNode},t),E=f.default.createElement("div",{className:v("main"),tabIndex:"-1",ref:this.mainNode},l),_=u===I.START?f.default.createElement(f.default.Fragment,null,p,E):f.default.createElement(f.default.Fragment,null,E,p);return f.default.createElement("div",(0,a.default)({},s,{className:c,"data-slide-panel-panel-behavior":n,"data-slide-panel-panel-position":u,"data-slide-panel-panel-size":d}),_)}}]),l}(f.default.Component);P.propTypes=_,P.defaultProps=h;var b=P;l.default=b},985:function(e,l,t){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},992:function(e,l,t){"use strict";var n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},993:function(e,l,t){"use strict";var n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i}}]);
//# sourceMappingURL=187-91b411f3201264d90d50.js.map
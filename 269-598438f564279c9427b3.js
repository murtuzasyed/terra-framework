(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1009:function(e,t,r){"use strict";var a=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(18)),o=a(r(32)),i=a(r(0)),s=a(r(2)),c=a(r(4)),l=a(r(1017)),h=c.default.bind(l.default),d={links:s.default.arrayOf(s.default.shape({text:s.default.string,href:s.default.string,target:s.default.string})),sections:s.default.arrayOf(s.default.shape({headerText:s.default.string,links:s.default.arrayOf(s.default.shape({text:s.default.string.isRequired,href:s.default.string.isRequired,target:s.default.string}))})),isVertical:s.default.bool,contentLeft:s.default.node,contentRight:s.default.node,contentBottom:s.default.node},m=function(e){var t,r=e.links,a=e.sections,s=e.isVertical,c=e.contentLeft,l=e.contentRight,d=e.contentBottom,m=(0,o.default)(e,["links","sections","isVertical","contentLeft","contentRight","contentBottom"]),f=h(["brand-footer",m.className]);if(r.length>0&&0===a.length)t=[{headerText:"",links:r,id:0}];else{t=a;for(var u=0;u<t.length;u+=1)t[u].id=u}var _,p=t.some((function(e){return e.headerText}));return t.length>0&&(_=i.default.createElement("nav",{className:h(["nav",s?"nav-vertical":"nav-horizontal"])},t.map((function(e){return i.default.createElement("section",{className:h("navigation-section"),key:e.id},(p&&s||e.headerText)&&i.default.createElement("h3",{className:h("list-header"),key:e.headerText},e.headerText||"​"),i.default.createElement("ul",{className:h("menu")},e.links&&e.links.map((function(e,t){var r=void 0!==e.target?{target:e.target}:{},a=!s&&t>=1?i.default.createElement("span",{className:h("separator"),"aria-hidden":!0},"/"):"";return i.default.createElement("li",{className:h("list-item"),key:e.text+e.href},a,i.default.createElement("a",(0,n.default)({className:h("link"),href:e.href},r),e.text))}))))})))),i.default.createElement("footer",(0,n.default)({role:"contentinfo"},m,{className:f}),_,i.default.createElement("div",{className:h("footer-content")},i.default.createElement("div",{className:h("content-top")},c,l),i.default.createElement("div",{className:h("content-bottom")},d)))};m.propTypes=d,m.defaultProps={links:[],sections:[],isVertical:!1,contentLeft:null,contentRight:null,contentBottom:null};var f=m;t.default=f},1017:function(e,t,r){e.exports={"brand-footer":"BrandFooter-module__brand-footer___1PjxV",nav:"BrandFooter-module__nav___vLBy9","nav-vertical":"BrandFooter-module__nav-vertical___GYqib","navigation-section":"BrandFooter-module__navigation-section___jM4z7",menu:"BrandFooter-module__menu___1jpr-","list-item":"BrandFooter-module__list-item___3X2PS","list-header":"BrandFooter-module__list-header___2QLok","nav-horizontal":"BrandFooter-module__nav-horizontal___bTWrH",separator:"BrandFooter-module__separator___2yh-N",link:"BrandFooter-module__link___31WK_","footer-content":"BrandFooter-module__footer-content___jtnSk","content-top":"BrandFooter-module__content-top___2LhUW","content-bottom":"BrandFooter-module__content-bottom___2p2Sm"}},2395:function(e,t,r){"use strict";var a=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=a(r(1009));t.default=function(){return n.default.createElement(o.default,{isVertical:!0,sections:[{headerText:"Links",links:[{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homea"},{text:"Cerner",href:"https://www.cerner.com/a",target:"_blank"},{text:"Cerner",href:"https://www.cerner.com/b",target:"_blank"},{text:"Cerner",href:"https://www.cerner.com/c",target:"_blank"},{text:"Cerner",href:"https://www.cerner.com/d",target:"_blank"}]},{headerText:"More Links",links:[{text:"Cerner Engineering",href:"https://engineering.cerner.com/a"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/b"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/c"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/d"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/e"}]},{headerText:"Extra Links",links:[{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeb"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homec"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homed"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homee"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homef"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeg"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeh"}]},{links:[{text:"No Header",href:"http://terra-ui.com/static/#/site/homea"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homeb"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homec"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homed"}]},{links:[{text:"No Header",href:"http://terra-ui.com/static/#/site/homea"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homeb"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homec"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homed"}]},{headerText:"Extra Links",links:[{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeb"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homec"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homed"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homee"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homef"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeg"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeh"}]}]})}}}]);
//# sourceMappingURL=269-598438f564279c9427b3.js.map
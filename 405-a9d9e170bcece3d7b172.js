(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1008:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=n.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,t){t=t||{};var n,a,i,c=[],f=[],s=e.querySelectorAll(r);for(t.includeContainer&&o.call(e,r)&&(s=Array.prototype.slice.apply(s)).unshift(e),n=0;n<s.length;n++)u(a=s[n])&&(0===(i=d(a))?c.push(a):f.push({documentOrder:n,tabIndex:i,node:a}));return f.sort(l).map((function(e){return e.node})).concat(c)}function u(e){return!(!i(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||d(e)<0)}function i(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}a.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,r)&&u(e)},a.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,c)&&i(e)};var c=n.concat("iframe").join(",");function d(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function l(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=a},2533:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=n(80),u=r(n(1037)),i={header:{"/":{path:"/",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"test-header"},"Header")}}}}},menu:{"/":{path:"/",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Menu")}}}}},content:{"/":{path:"/",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"test-content"},"Content")}}}}}},c=function(){return o.default.createElement(a.MemoryRouter,{initialEntries:["/"],initialIndex:0},o.default.createElement(u.default,{config:i,menuText:"Menu",id:"test-root"}))};t.default=c}}]);
//# sourceMappingURL=405-a9d9e170bcece3d7b172.js.map
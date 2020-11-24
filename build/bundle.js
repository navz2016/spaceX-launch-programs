(()=>{"use strict";var e={165:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=l(r(297)),u=r(374),a=l(r(676)),i=l(r(847));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return f(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return o.default.createElement(u.Switch,null,o.default.createElement(u.Route,{path:"/",exact:!0,render:function(e){return o.default.createElement(a.default,e)}}),o.default.createElement(u.Route,{component:i.default}))}}]),t}(o.default.Component);t.default=p},676:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=(n=r(297))&&n.__esModule?n:{default:n};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return u.default.createElement("div",null,"Home")}}]),t}(u.default.Component);t.default=l},847:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=(n=r(297))&&n.__esModule?n:{default:n};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return u.default.createElement("div",null,"Not Found")}}]),t}(u.default.Component);t.default=l},294:e=>{e.exports=require("babel-polyfill")},473:e=>{e.exports=require("body-parser")},127:e=>{e.exports=require("express")},297:e=>{e.exports=require("react")},747:e=>{e.exports=require("react-dom/server")},374:e=>{e.exports=require("react-router")}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{var e=i(r(127));r(294);var t=i(r(297)),n=i(r(747)),o=r(374),u=i(r(473)),a=i(r(165));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,e.default)(),f=process.env.PORT||8080;l.use(u.default.json()),l.use(e.default.static("build")),l.get("*",(function(e,r){var u='\n        <html>\n            <head></head>\n            <body>\n                <div id="root">\n                    '+n.default.renderToString(t.default.createElement(o.StaticRouter,{location:e.url,context:{}},t.default.createElement(a.default,null)))+"\n                </div>\n            </body>\n        </html>\n    ";r.send(u)})),l.listen(f,(function(){console.log("App listening on "+f)}))})()})();
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-virtual-input"),require("react-virtual-keyboard-ctrl")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-virtual-input","react-virtual-keyboard-ctrl"],t):"object"==typeof exports?exports.ReactNumericFormInput=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-virtual-input"),require("react-virtual-keyboard-ctrl")):e.ReactNumericFormInput=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-virtual-input"],e["react-virtual-keyboard-ctrl"])}(this,function(e,t,r,n,o,a,u){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(6),d=n(p),y=r(5),b=n(y),v=r(2),m=n(v),h=r(3),x=n(h),_=r(4),g=(n(_),r(8)),j=r(7),O=n(j),q=(s=i=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onFocus=function(e){r.setState({focused:!0},function(){r._instance.component.show(r.state)})},r.state=l({},e),r}return c(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"componentWillMount",value:function(){var e=this.props,t=(e.focused,o(e,["focused"]));this._instance=g.ReactVirtualKeyboardCtrl.createInstance(t)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.value,n=e.maxLength,a=e.filter,u=(e.focused,e.placeholder),c=o(e,["className","value","maxLength","filter","focused","placeholder"]);return d.default.createElement("section",l({},c,{className:(0,m.default)("react-numeric-form-input",t)}),d.default.createElement(O.default,{filter:a,placeholder:u,maxLength:n,clearable:!1,blinkable:!0,focused:this.state.focused,onFocus:this._onFocus,value:r}))}}]),t}(p.PureComponent),i.propTypes={className:b.default.string,value:b.default.string,onChange:b.default.func,placeholder:b.default.string,type:b.default.oneOf(g.TYPES),maxLength:b.default.number,filter:b.default.func},i.defaultProps={type:"blank",value:"",focused:!1,onChange:x.default},s);t.default=q},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-numeric-form-input.js.map
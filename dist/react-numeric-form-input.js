!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-virtual-input"),require("react-virtual-keyboard-ctrl")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-virtual-input","react-virtual-keyboard-ctrl"],t):"object"==typeof exports?exports.ReactNumericFormInput=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-virtual-input"),require("react-virtual-keyboard-ctrl")):e.ReactNumericFormInput=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-virtual-input"],e["react-virtual-keyboard-ctrl"])}(this,function(e,t,r,n,a,o,l){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a);t.default=o.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,c,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(6),d=n(f),b=r(5),v=n(b),h=r(2),y=n(h),m=r(3),g=n(m),_=r(4),x=(n(_),r(8)),j=r(7),k=n(j),O=(c=i=function(e){function t(e){o(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.doChange=function(e){var t=r.state.value;if(e!==t){var n={value:e};r.setState(n,function(){r._instance.component.update(n).then(function(){r.props.onChange({target:n})})})}},r._onFocus=function(e){r._instance.component.show({type:r.props.type,filter:r.props.filter,placeholder:r.props.placeholder,maxLength:r.props.maxLength,value:r.state.value,onChange:r._onChange})},r._onClear=function(e){r.doChange("")},r._onChange=function(e){var t=e.target.value;r.doChange(t)},r.state={value:e.value},r}return u(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props,t=(e.clearable,e.blinkable,a(e,["clearable","blinkable"]));this._instance=x.ReactVirtualKeyboardCtrl.newInstance(t)}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.doChange(t)}},{key:"componentWillUnmount",value:function(){this._instance.destroy(),this._instance=null}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.value,e.maxLength),n=e.filter,o=e.placeholder,l=e.clearable,u=e.blinkable,i=a(e,["className","value","maxLength","filter","placeholder","clearable","blinkable"]);return d.default.createElement("section",s({},i,{className:(0,y.default)("react-numeric-form-input",t)}),d.default.createElement(k.default,{filter:n,placeholder:o,maxLength:r,clearable:l,blinkable:u,onFocus:this._onFocus,onClear:this._onClear,value:this.state.value}))}}]),t}(f.PureComponent),i.propTypes={className:v.default.string,value:v.default.string,onChange:v.default.func,placeholder:v.default.string,type:v.default.oneOf(x.TYPES),maxLength:v.default.number,filter:v.default.func,clearable:v.default.bool,blinkable:v.default.bool},i.defaultProps={type:"blank",value:"",onChange:g.default,clearable:!1,blinkable:!1},c);t.default=O},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t){e.exports=l}])});
//# sourceMappingURL=react-numeric-form-input.js.map
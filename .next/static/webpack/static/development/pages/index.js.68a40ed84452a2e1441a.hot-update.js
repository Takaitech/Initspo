webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Inspirations/Inspiration.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Inspirations/Inspiration.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Inspiration.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

;
;

var Inspiration = function Inspiration(_ref) {
  var content = _ref.content,
      _onClick = _ref.onClick,
      selected = _ref.selected;
  return __jsx(BoxContainer, {
    content: content,
    onClick: function onClick(event) {
      return _onClick(event);
    },
    selected: selected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  });
};

var BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Inspiration__BoxContainer",
  componentId: "oyhmy1-0"
})(["width:", "px;height:", "px;max-height:150px;margin:10px;background-image:url(", ");background-size:cover;list-style:none;background-repeat:no-repeat;float:left;background-position:center;display:", ""], function (props) {
  return props.content.dimensions.width / 4;
}, function (props) {
  return props.content.dimensions.height / 4;
}, function (props) {
  return props.content.url;
}, function (props) {
  return props.selected ? "inline-block" : 'none';
});
/* harmony default export */ __webpack_exports__["default"] = (Inspiration);

/***/ })

})
//# sourceMappingURL=index.js.68a40ed84452a2e1441a.hot-update.js.map
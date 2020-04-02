webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Nav/CollectionsButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/Nav/CollectionsButton.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/CollectionsButton.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CollectionsButton = function CollectionsButton() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      targeted = _useState[0],
      setTargeted = _useState[1];

  return __jsx(CollectionsContainer, {
    onMouseEnter: function onMouseEnter() {
      return setTargeted(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setTargeted(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(TopSquare, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(MiddleSquare, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx(BottomSquare, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx(TopCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx(LeftCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(RightCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(BottomCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(LeftTriangle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(RightTriangle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }));
};

var CollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CollectionsButton__CollectionsContainer",
  componentId: "sc-13sskwz-0"
})(["position:relative;top:50%;transform:translatey(-50%);height:60px;width:60px;margin:auto;display:flex;"]);
var Shape = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CollectionsButton__Shape",
  componentId: "sc-13sskwz-1"
})(["background-color:#DBDBDB;border-color:#DBDBDB;height:8px;width:8px;border-color:transparent transparent #DBDBDB transparent;_border-color:#ffffff #ffffff #DBDBDB #ffffff;"]);
var TopSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__TopSquare",
  componentId: "sc-13sskwz-2"
})(["position:absolute;"]);
var MiddleSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__MiddleSquare",
  componentId: "sc-13sskwz-3"
})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
var BottomSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__BottomSquare",
  componentId: "sc-13sskwz-4"
})(["position:absolute;right:0;bottom:0%;"]);
var TopCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__TopCircle",
  componentId: "sc-13sskwz-5"
})(["position:absolute;left:50%;top:0;border-radius:50%;transform:translateX(-50%);"]);
var LeftCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__LeftCircle",
  componentId: "sc-13sskwz-6"
})(["position:absolute;top:50%;border-radius:50%;transform:translateY(-50%);"]);
var RightCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__RightCircle",
  componentId: "sc-13sskwz-7"
})(["position:absolute;top:50%;right:0;border-radius:50%;transform:translateY(-50%);"]);
var BottomCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__BottomCircle",
  componentId: "sc-13sskwz-8"
})(["position:absolute;bottom:0;left:50%;border-radius:50%;transform:translateX(-50%);"]);
var LeftTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__LeftTriangle",
  componentId: "sc-13sskwz-9"
})(["background-color:unset;position:absolute;bottom:0;left:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
var RightTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "CollectionsButton__RightTriangle",
  componentId: "sc-13sskwz-10"
})(["background-color:unset;position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
/* harmony default export */ __webpack_exports__["default"] = (CollectionsButton);

/***/ })

})
//# sourceMappingURL=index.js.79c9484724b1346285f7.hot-update.js.map
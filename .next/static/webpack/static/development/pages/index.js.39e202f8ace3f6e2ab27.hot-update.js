webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/gsap/CSSPlugin.js":
false,

/***/ "./node_modules/gsap/gsap-core.js":
false,

/***/ "./node_modules/gsap/index.js":
false,

/***/ "./src/components/Nav/ShowCollections.tsx":
/*!************************************************!*\
  !*** ./src/components/Nav/ShowCollections.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/ShowCollections.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ShowCollections = function ShowCollections() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      targeted = _useState[0],
      setTargeted = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_2__["CollectionsContext"]),
      collections = _useContext.collections,
      dispatch = _useContext.dispatch;

  var button = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // gsap.to(button, {x: 100});

  var CollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "ShowCollections__CollectionsContainer",
    componentId: "sc-19w2inw-0"
  })(["position:relative;top:50%;transform:translatey(-50%);height:60px;width:60px;margin:auto;display:flex;"]);
  var Shape = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "ShowCollections__Shape",
    componentId: "sc-19w2inw-1"
  })(["background-color:", ";border-color:", ";height:8px;width:8px;border-color:transparent transparent ", " transparent;_border-color:#ffffff #ffffff #DBDBDB #ffffff;"], targeted || collections.open ? "#000000" : "#DBDBDB", targeted || collections.open ? "#000000" : "#DBDBDB", targeted || collections.open ? "#000000" : "#DBDBDB");
  var TopSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__TopSquare",
    componentId: "sc-19w2inw-2"
  })(["position:absolute;"]);
  var MiddleSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__MiddleSquare",
    componentId: "sc-19w2inw-3"
  })(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
  var BottomSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__BottomSquare",
    componentId: "sc-19w2inw-4"
  })(["position:absolute;right:0;bottom:0%;"]);
  var TopCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__TopCircle",
    componentId: "sc-19w2inw-5"
  })(["position:absolute;left:50%;top:0;border-radius:50%;transform:translateX(-50%);"]);
  var LeftCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__LeftCircle",
    componentId: "sc-19w2inw-6"
  })(["position:absolute;top:50%;border-radius:50%;transform:translateY(-50%);"]);
  var RightCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__RightCircle",
    componentId: "sc-19w2inw-7"
  })(["position:absolute;top:50%;right:0;border-radius:50%;transform:translateY(-50%);"]);
  var BottomCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__BottomCircle",
    componentId: "sc-19w2inw-8"
  })(["position:absolute;bottom:0;left:50%;border-radius:50%;transform:translateX(-50%);"]);
  var LeftTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__LeftTriangle",
    componentId: "sc-19w2inw-9"
  })(["background-color:unset;position:absolute;bottom:0;left:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
  var RightTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
    displayName: "ShowCollections__RightTriangle",
    componentId: "sc-19w2inw-10"
  })(["background-color:unset;position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
  return __jsx(CollectionsContainer, {
    ref: button,
    onClick: function onClick(e) {
      return dispatch({
        type: "openCollections",
        "boolean": !collections.open
      });
    },
    onMouseEnter: function onMouseEnter() {
      return setTargeted(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setTargeted(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(TopSquare, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(MiddleSquare, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx(BottomSquare, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }), __jsx(TopCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx(LeftCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), __jsx(RightCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx(BottomCircle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), __jsx(LeftTriangle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), __jsx(RightTriangle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowCollections);

/***/ })

})
//# sourceMappingURL=index.js.39e202f8ace3f6e2ab27.hot-update.js.map
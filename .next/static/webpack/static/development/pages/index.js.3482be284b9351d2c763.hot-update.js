webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./src/components/Nav/ShowCollections.tsx":
/*!************************************************!*\
  !*** ./src/components/Nav/ShowCollections.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/ShowCollections.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AnimeContext),
    selected = _useContext.selected,
    dispatch = _useContext.dispatch;

var ShowCollections = function ShowCollections(_ref) {
  var show = _ref.show,
      open = _ref.open;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      targeted = _useState2[0],
      setTargeted = _useState2[1];

  var CollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "ShowCollections__CollectionsContainer",
    componentId: "sc-19w2inw-0"
  })(["position:relative;top:50%;transform:translatey(-50%);height:60px;width:60px;margin:auto;display:flex;"]);
  var Shape = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "ShowCollections__Shape",
    componentId: "sc-19w2inw-1"
  })(["background-color:", ";border-color:", ";height:8px;width:8px;border-color:transparent transparent ", " transparent;_border-color:#ffffff #ffffff #DBDBDB #ffffff;"], targeted || open ? "#000000" : "#DBDBDB", targeted || open ? "#000000" : "#DBDBDB", targeted || open ? "#000000" : "#DBDBDB");
  var TopSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__TopSquare",
    componentId: "sc-19w2inw-2"
  })(["position:absolute;"]);
  var MiddleSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__MiddleSquare",
    componentId: "sc-19w2inw-3"
  })(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
  var BottomSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__BottomSquare",
    componentId: "sc-19w2inw-4"
  })(["position:absolute;right:0;bottom:0%;"]);
  var TopCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__TopCircle",
    componentId: "sc-19w2inw-5"
  })(["position:absolute;left:50%;top:0;border-radius:50%;transform:translateX(-50%);"]);
  var LeftCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__LeftCircle",
    componentId: "sc-19w2inw-6"
  })(["position:absolute;top:50%;border-radius:50%;transform:translateY(-50%);"]);
  var RightCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__RightCircle",
    componentId: "sc-19w2inw-7"
  })(["position:absolute;top:50%;right:0;border-radius:50%;transform:translateY(-50%);"]);
  var BottomCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__BottomCircle",
    componentId: "sc-19w2inw-8"
  })(["position:absolute;bottom:0;left:50%;border-radius:50%;transform:translateX(-50%);"]);
  var LeftTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__LeftTriangle",
    componentId: "sc-19w2inw-9"
  })(["background-color:unset;position:absolute;bottom:0;left:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
  var RightTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Shape).withConfig({
    displayName: "ShowCollections__RightTriangle",
    componentId: "sc-19w2inw-10"
  })(["background-color:unset;position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
  return __jsx(CollectionsContainer, {
    onClick: function onClick(e) {
      return show(e);
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
//# sourceMappingURL=index.js.3482be284b9351d2c763.hot-update.js.map
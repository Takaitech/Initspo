webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Header/Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      targeted = _useState[0],
      setTargeted = _useState[1];

  var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Header__HeaderContainer",
    componentId: "sc-9h06xe-0"
  })(["height:90px;position:relative;z-index:2;"]);
  var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
    displayName: "Header__Logo",
    componentId: "sc-9h06xe-1"
  })(["width:250px;position:absolute;bottom:-9px;left:5px;"]);
  var LogoExtended = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
    displayName: "Header__LogoExtended",
    componentId: "sc-9h06xe-2"
  })(["display:", ";position:absolute;bottom:-195px;left:47px;width:61px;"], targeted ? "block" : "none");
  return __jsx(HeaderContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(Logo, {
    src: "images/Initspo-Min-Logo.png",
    onMouseEnter: function onMouseEnter(e) {
      return setTargeted(true);
    },
    onMouseLeave: function onMouseLeave(e) {
      return setTargeted(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(LogoExtended, {
    src: "images/Logo-extended.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.19ca535d3d029c4b5295.hot-update.js.map
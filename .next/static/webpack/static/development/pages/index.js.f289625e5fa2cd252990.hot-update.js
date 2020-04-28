webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Inspirations/Grid.tsx":
/*!**********************************************!*\
  !*** ./src/components/Inspirations/Grid.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Inspiration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inspiration */ "./src/components/Inspirations/Inspiration.tsx");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Grid.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Grid = function Grid(_ref) {
  var gridContent = _ref.gridContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showGrid = _useState[0],
      setShowGrid = _useState[1];

  var selectInspo = function selectInspo(event) {
    setShowGrid(!selected);
    console.log(selected);
  };

  return __jsx(GridContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, gridContent.map(function (content, index) {
    return __jsx(_Inspiration__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      content: content,
      onClick: selectInspo,
      showGrid: showGrid,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    });
  }));
};

var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "sc-12ty1na-0"
})(["text-align:left;"]);
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=index.js.f289625e5fa2cd252990.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Collections/Collection.tsx":
/*!***************************************************!*\
  !*** ./src/components/Collections/Collection.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Collections/Collection.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Collection = function Collection(_ref) {
  var Collection = _ref.Collection;
  var CollectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
    displayName: "Collection__CollectionContainer",
    componentId: "sc-1hi8tgs-0"
  })([""]);
  return __jsx(CollectionContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Collection);

/***/ }),

/***/ "./src/components/Collections/Grid.tsx":
/*!*********************************************!*\
  !*** ./src/components/Collections/Grid.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection */ "./src/components/Collections/Collection.tsx");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Collections/Grid.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Grid = function Grid(_ref) {
  var CollectionsList = _ref.CollectionsList;
  return __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, CollectionsList.map(function (collection, index) {
    return __jsx(_Collection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=index.js.e21e2999a0f6201bf5e1.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

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

  var selectInspo = function selectInspo(event) {};

  return __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, CollectionsList.map(function (collection, index) {
    return __jsx(_Collection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      collection: collection,
      onClick: function onClick() {
        selectInspo(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=index.js.35e6edde5da94c220d0f.hot-update.js.map
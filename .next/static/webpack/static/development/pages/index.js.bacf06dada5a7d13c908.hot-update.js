webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/contexts/CollectionsContext.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/CollectionsContext.tsx ***!
  \*********************************************/
/*! exports provided: CollectionsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsContext", function() { return CollectionsContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_collectionsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/collectionsReducer */ "./src/reducers/collectionsReducer.tsx");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/contexts/CollectionsContext.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// type initContext = {
//     collections: {};
//     dispatch: <React.Do
// }
var CollectionsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

var CollectionsContextProvider = function CollectionsContextProvider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_collectionsReducer__WEBPACK_IMPORTED_MODULE_1__["collectionsReducer"], {}),
      collections = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(CollectionsContext.Provider, {
    value: {
      collections: collections,
      dispatch: dispatch
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CollectionsContextProvider);

/***/ })

})
//# sourceMappingURL=index.js.bacf06dada5a7d13c908.hot-update.js.map
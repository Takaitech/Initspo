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


var initState = {
  collections: [],
  current: "init",
  open: false
};
var CollectionsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initState);

var CollectionsContextProvider = function CollectionsContextProvider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_collectionsReducer__WEBPACK_IMPORTED_MODULE_1__["collectionsReducer"], initState),
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
      lineNumber: 31,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CollectionsContextProvider);

/***/ }),

/***/ "./src/reducers/collectionsReducer.tsx":
/*!*********************************************!*\
  !*** ./src/reducers/collectionsReducer.tsx ***!
  \*********************************************/
/*! exports provided: collectionsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionsReducer", function() { return collectionsReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var collectionsReducer = function collectionsReducer(state, action) {
  switch (action.type) {
    case "openCollections":
      return _objectSpread({}, state, {
        open: action["boolean"]
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.25543e94aab92fa2105a.hot-update.js.map
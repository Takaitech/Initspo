webpackHotUpdate("static/development/pages/index.js",{

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

var initstate = {
  collections: [],
  current: 'ALL'
};
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
//# sourceMappingURL=index.js.17498072e5b8887e1097.hot-update.js.map
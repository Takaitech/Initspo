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

;

var Collection = function Collection(_ref) {
  var collection = _ref.collection,
      onClick = _ref.onClick,
      selected = _ref.selected;
  console.log(selected);
  return __jsx(CollectionContainer, {
    onClick: function onClick(event) {
      console.log('clicked');
    },
    selected: selected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  });
};

var CollectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Collection__CollectionContainer",
  componentId: "sc-1hi8tgs-0"
})(["list-style:none;width:100px;height:100px;background-color:black;margin:40px;display:", ";"], function (props) {
  return props.selected ? 'inline-block' : 'none';
});
/* harmony default export */ __webpack_exports__["default"] = (Collection);

/***/ })

})
//# sourceMappingURL=index.js.60215de9a8ea22df35aa.hot-update.js.map
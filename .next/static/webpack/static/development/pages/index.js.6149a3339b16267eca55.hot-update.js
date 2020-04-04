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
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Collections/Grid.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Grid = function Grid(_ref) {
  var CollectionsList = _ref.CollectionsList;
  return __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, CollectionsList.map(function (collection, index) {
    return __jsx(Collection, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

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
  var GridContent = _ref.GridContent;
  return __jsx(GridContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, GridContent.map(function (content, index) {
    return __jsx(_Inspiration__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      BoxContent: content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
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

/***/ }),

/***/ "./src/components/Inspirations/GridBox.tsx":
false,

/***/ "./src/components/Inspirations/Inspiration.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Inspirations/Inspiration.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Inspiration.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GridBox = function GridBox(_ref) {
  var BoxContent = _ref.BoxContent;
  var BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
    displayName: "Inspiration__BoxContainer",
    componentId: "oyhmy1-0"
  })(["width:33.3%;min-width:300px;height:200px;margin:10px;background-image:url(", ");background-size:cover;list-style:none;display:inline-block;background-repeat:no-repeat;float:left;background-position:center;"], function (props) {
    return props.url;
  });
  return __jsx(BoxContainer, {
    url: BoxContent.photo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GridBox);

/***/ })

})
//# sourceMappingURL=index.js.6149a3339b16267eca55.hot-update.js.map
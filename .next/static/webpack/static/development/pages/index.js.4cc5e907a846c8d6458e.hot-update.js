webpackHotUpdate("static/development/pages/index.js",{

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


var Inspiration = function Inspiration(_ref) {
  var content = _ref.content;
  var BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
    displayName: "Inspiration__BoxContainer",
    componentId: "oyhmy1-0"
  })(["width:30%;max-width:calc(100vw - 301px);height:200px;margin:10px;background-image:url(", ");background-size:cover;list-style:none;display:inline-block;background-repeat:no-repeat;float:left;background-position:center;"], function (props) {
    return props.url;
  });
  return __jsx(BoxContainer, {
    url: content.url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Inspiration);

/***/ }),

/***/ "./src/components/Inspirations/Inspirations.tsx":
/*!******************************************************!*\
  !*** ./src/components/Inspirations/Inspirations.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./src/components/Inspirations/Grid.tsx");
/* harmony import */ var _contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Inspirations.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var gridContent = [{
  url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg",
  width: 881,
  height: 495
}, {
  url: "https://cdn.inprnt.com/thumbs/3b/d7/3bd78abfe28bffa17d97538647cde5e1@2x.jpg?response-cache-control=max-age=2628000",
  width: 720,
  height: 720
}, {
  url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg",
  width: 881,
  height: 495
}, {
  url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg",
  width: 881,
  height: 495
}];

var Inspirations = function Inspirations() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_3__["CollectionsContext"]),
      collections = _useContext.collections,
      dispatch = _useContext.dispatch;

  var InspirationsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Inspirations__InspirationsContainer",
    componentId: "sc-5potf-0"
  })(["display:", ";width:calc(100vw - 301px);height:calc(100vh - 90px);margin:0 auto;border:#E8E8E8 1px solid;text-align:center;"], collections.open ? "none" : 'block');
  return __jsx(InspirationsContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: gridContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspirations);

/***/ })

})
//# sourceMappingURL=index.js.4cc5e907a846c8d6458e.hot-update.js.map
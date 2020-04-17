webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Nav/ShowCollections.tsx":
/*!************************************************!*\
  !*** ./src/components/Nav/ShowCollections.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/ShowCollections.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




;

var ShowCollections = function ShowCollections() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      targeted = _useState[0],
      setTargeted = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_2__["CollectionsContext"]),
      collections = _useContext.collections,
      dispatch = _useContext.dispatch;

  var button = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // console.log(button)

  var Anim = gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to(button.current, 2, {
    position: 'fixed',
    xPercent: '-50',
    left: '50%',
    ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeIn,
    paused: true
  });
  console.log(button);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (collections.open === true) {
      Anim.play();
    }
  }, [collections]); // console.log(clickAnimation)

  var handleClick = function handleClick() {
    dispatch({
      type: "openCollections",
      "boolean": !collections.open
    }); // clickAnimation.play()
  };

  return __jsx(ShowCollectionsContainer, {
    ref: button,
    onClick: handleClick,
    onMouseEnter: function onMouseEnter() {
      return setTargeted(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setTargeted(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(TopSquare, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(MiddleSquare, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx(BottomSquare, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx(TopCircle, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(LeftCircle, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(RightCircle, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx(BottomCircle, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(LeftTriangle, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(RightTriangle, {
    targeted: targeted,
    collections: collections,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }));
};

var ShowCollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ShowCollections__ShowCollectionsContainer",
  componentId: "sc-19w2inw-0"
})(["position:relative;top:50%;transform:translatey(-50%);height:60px;width:60px;margin:auto;display:flex;"]);
var Shape = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ShowCollections__Shape",
  componentId: "sc-19w2inw-1"
})(["height:8px;width:8px;background-color:", ";border-color:", ";border-color:transparent transparent ", " transparent;_border-color:#ffffff #ffffff #DBDBDB #ffffff;"], function (props) {
  return props.targeted || props.collections.open ? "#000000" : "#DBDBDB";
}, function (props) {
  return props.targeted || props.collections.open ? "#000000" : "#DBDBDB";
}, function (props) {
  return props.targeted || props.collections.open ? "#000000" : "#DBDBDB";
});
var TopSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__TopSquare",
  componentId: "sc-19w2inw-2"
})(["position:absolute;"]);
var MiddleSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__MiddleSquare",
  componentId: "sc-19w2inw-3"
})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
var BottomSquare = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__BottomSquare",
  componentId: "sc-19w2inw-4"
})(["position:absolute;right:0;bottom:0%;"]);
var TopCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__TopCircle",
  componentId: "sc-19w2inw-5"
})(["position:absolute;left:50%;top:0;border-radius:50%;transform:translateX(-50%);"]);
var LeftCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__LeftCircle",
  componentId: "sc-19w2inw-6"
})(["position:absolute;top:50%;border-radius:50%;transform:translateY(-50%);"]);
var RightCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__RightCircle",
  componentId: "sc-19w2inw-7"
})(["position:absolute;top:50%;right:0;border-radius:50%;transform:translateY(-50%);"]);
var BottomCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__BottomCircle",
  componentId: "sc-19w2inw-8"
})(["position:absolute;bottom:0;left:50%;border-radius:50%;transform:translateX(-50%);"]);
var LeftTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__LeftTriangle",
  componentId: "sc-19w2inw-9"
})(["background-color:unset;position:absolute;bottom:0;left:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
var RightTriangle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Shape).withConfig({
  displayName: "ShowCollections__RightTriangle",
  componentId: "sc-19w2inw-10"
})(["background-color:unset;position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
/* harmony default export */ __webpack_exports__["default"] = (ShowCollections);

/***/ })

})
//# sourceMappingURL=index.js.441b1d4b26e6e584dfa1.hot-update.js.map
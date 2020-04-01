module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Header/Header */ "./src/components/Header/Header.tsx");
/* harmony import */ var _src_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Nav/Nav */ "./src/components/Nav/Nav.tsx");
/* harmony import */ var _src_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Gallery/Gallery */ "./src/components/Gallery/Gallery.tsx");
/* harmony import */ var _src_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 4
  }
}, __jsx(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx(_src_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx(_src_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx(_src_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Gallery/Gallery.tsx":
/*!********************************************!*\
  !*** ./src/components/Gallery/Gallery.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./src/components/Gallery/Grid.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Gallery/Gallery.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const gridContent = [{
  photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"
}];

const Gallery = () => {
  return __jsx(GalleryContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    GridContent: gridContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

const GalleryContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Gallery__GalleryContainer",
  componentId: "sc-68gvp1-0"
})(["width:calc(100vw - 301px);height:calc(100vh - 125px);margin:0 auto;border:#E8E8E8 1px solid;"]);
/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./src/components/Gallery/Grid.tsx":
/*!*****************************************!*\
  !*** ./src/components/Gallery/Grid.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Gallery/Grid.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Grid = GridContent => {
  return __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Header/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => {
  return __jsx(HeaderContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-9h06xe-0"
})(["height:125px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Nav/CollectionsButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/Nav/CollectionsButton.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/CollectionsButton.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CollectionsButton = () => {
  const {
    0: targeted,
    1: setTargeted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(CollectionsContainer, {
    onMouseEnter: () => setTargeted(true),
    onMouseLeave: () => setTargeted(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(TopSquare, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(MiddleSquare, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx(BottomSquare, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx(TopCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx(LeftCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(RightCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(BottomCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(LeftTriangle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(RightTriangle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }));
};

const CollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CollectionsButton__CollectionsContainer",
  componentId: "sc-13sskwz-0"
})(["position:relative;top:50%;transform:translatey(-50%);height:60px;width:60px;margin:auto;display:flex;"]);
const Shape = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CollectionsButton__Shape",
  componentId: "sc-13sskwz-1"
})(["background-color:#DBDBDB;border-color:#DBDBDB;height:8px;width:8px;border-color:transparent transparent #DBDBDB transparent;_border-color:#ffffff #ffffff #DBDBDB #ffffff;"]);
const TopSquare = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__TopSquare",
  componentId: "sc-13sskwz-2"
})(["position:absolute;"]);
const MiddleSquare = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__MiddleSquare",
  componentId: "sc-13sskwz-3"
})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
const BottomSquare = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__BottomSquare",
  componentId: "sc-13sskwz-4"
})(["position:absolute;right:0;bottom:0%;"]);
const TopCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__TopCircle",
  componentId: "sc-13sskwz-5"
})(["position:absolute;left:50%;top:0;border-radius:50%;transform:translateX(-50%);"]);
const LeftCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__LeftCircle",
  componentId: "sc-13sskwz-6"
})(["position:absolute;top:50%;border-radius:50%;transform:translateY(-50%);"]);
const RightCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__RightCircle",
  componentId: "sc-13sskwz-7"
})(["position:absolute;top:50%;right:0;border-radius:50%;transform:translateY(-50%);"]);
const BottomCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__BottomCircle",
  componentId: "sc-13sskwz-8"
})(["position:absolute;bottom:0;left:50%;border-radius:50%;transform:translateX(-50%);"]);
const LeftTriangle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__LeftTriangle",
  componentId: "sc-13sskwz-9"
})(["background-color:unset;position:absolute;bottom:0;left:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
const RightTriangle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
  displayName: "CollectionsButton__RightTriangle",
  componentId: "sc-13sskwz-10"
})(["background-color:unset;position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
/* harmony default export */ __webpack_exports__["default"] = (CollectionsButton);

/***/ }),

/***/ "./src/components/Nav/Nav.tsx":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CollectionsButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionsButton */ "./src/components/Nav/CollectionsButton.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/Nav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Nav = () => {
  return __jsx(NavContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Logo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(_CollectionsButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }));
};

const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__NavContainer",
  componentId: "r5l1g2-0"
})(["position:fixed;left:0;top:0;bottom:0;height:100vh;width:150px;background-color:#f8f8f8;text-align:center;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "Nav__Logo",
  componentId: "r5l1g2-1"
})(["position:absolute;"]);
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Sidebar/PlusIcon.tsx":
/*!*********************************************!*\
  !*** ./src/components/Sidebar/PlusIcon.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Sidebar/PlusIcon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PlusIcon = () => {
  return __jsx(IconWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "75px",
    height: "75px",
    version: "1.1",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "m50 26c-0.55078 0-1 0.44922-1 1v22h-22c-0.55078 0-1 0.44922-1 1s0.44922 1 1 1h22v22c0 0.55078 0.44922 1 1 1s1-0.44922 1-1v-22h22c0.55078 0 1-0.44922 1-1s-0.44922-1-1-1h-22v-22c0-0.55078-0.44922-1-1-1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })));
};

const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PlusIcon__IconWrapper",
  componentId: "wk5478-0"
})(["height:75px;width:75px;position:absolute;bottom:25px;right:50%;transform:translateX(50%);"]);
/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.tsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlusIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlusIcon */ "./src/components/Sidebar/PlusIcon.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Sidebar/Sidebar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sidebar = () => {
  return __jsx(SidebarContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(CollectionTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, 'Digital Art'.toUpperCase()), __jsx(ScrollBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_PlusIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-1rtpwb0-0"
})(["height:calc( 100vh - 125px);width:150px;position:absolute;right:0;bottom:0;"]);
const ScrollBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__ScrollBar",
  componentId: "sc-1rtpwb0-1"
})(["position:absolute;right:50%;transform:translateX(50%);bottom:125px;height:30vh;width:37px;background-color:#DBDBDB;"]);
const CollectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Sidebar__CollectionTitle",
  componentId: "sc-1rtpwb0-2"
})(["transform-origin:57.5px 38px;transform:rotate(90deg);width:35vh;"]);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/takaitech/Takai-Tech/initspo/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
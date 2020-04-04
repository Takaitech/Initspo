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
/* harmony import */ var _src_components_Inspirations_Inspirations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Inspirations/Inspirations */ "./src/components/Inspirations/Inspirations.tsx");
/* harmony import */ var _src_components_Collections_Collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Collections/Collections */ "./src/components/Collections/Collections.tsx");
/* harmony import */ var _src_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.tsx");
/* harmony import */ var _src_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = () => __jsx(_src_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}), __jsx(_src_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}), __jsx(_src_components_Inspirations_Inspirations__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}), __jsx(_src_components_Collections_Collections__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}), __jsx(_src_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Collections/Collection.tsx":
/*!***************************************************!*\
  !*** ./src/components/Collections/Collection.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Collections/Collection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Collection = ({
  collection
}) => {
  const CollectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
    displayName: "Collection__CollectionContainer",
    componentId: "sc-1hi8tgs-0"
  })(["list-style:none;width:100px;height:100px;background-color:black;margin:40px;display:inline-block;"]);
  return __jsx(CollectionContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Collection);

/***/ }),

/***/ "./src/components/Collections/Collections.tsx":
/*!****************************************************!*\
  !*** ./src/components/Collections/Collections.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./src/components/Collections/Grid.tsx");
/* harmony import */ var _contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Collections/Collections.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CollectionsList = [{
  photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"
}, {
  photo: "https://cdn.inprnt.com/thumbs/3b/d7/3bd78abfe28bffa17d97538647cde5e1@2x.jpg?response-cache-control=max-age=2628000"
}, {
  photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"
}, {
  photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"
}];

const Collections = () => {
  const {
    collections,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_3__["CollectionsContext"]);
  const CollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Collections__CollectionsContainer",
    componentId: "tqlujw-0"
  })(["display:", ";width:calc(100vw - 301px);height:calc(100vh - 90px);margin:0 auto;text-align:center;margin-left:150px;"], collections.open ? 'block' : "none");
  return __jsx(CollectionsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    CollectionsList: CollectionsList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Collections);

/***/ }),

/***/ "./src/components/Collections/Grid.tsx":
/*!*********************************************!*\
  !*** ./src/components/Collections/Grid.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection */ "./src/components/Collections/Collection.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Collections/Grid.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Grid = ({
  CollectionsList
}) => {
  return __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, CollectionsList.map((collection, index) => __jsx(_Collection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    collection: collection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  })));
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
  const {
    0: targeted,
    1: setTargeted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Header__HeaderContainer",
    componentId: "sc-9h06xe-0"
  })(["height:90px;position:relative;z-index:2;"]);
  const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
    displayName: "Header__Logo",
    componentId: "sc-9h06xe-1"
  })(["width:250px;position:absolute;bottom:-9px;left:5px;"]);
  const LogoExtended = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
    displayName: "Header__LogoExtended",
    componentId: "sc-9h06xe-2"
  })(["display:", ";position:absolute;bottom:-195px;left:47px;width:61px;"], targeted ? "block" : "none");
  return __jsx(HeaderContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(Logo, {
    src: "images/Initspo-Min-Logo.png",
    onMouseEnter: e => setTargeted(true),
    onMouseLeave: e => setTargeted(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(LogoExtended, {
    src: "images/Logo-extended.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Inspirations/Grid.tsx":
/*!**********************************************!*\
  !*** ./src/components/Inspirations/Grid.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Inspiration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inspiration */ "./src/components/Inspirations/Inspiration.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Grid.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Grid = ({
  gridContent
}) => {
  return __jsx(GridContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, gridContent.map((content, index) => __jsx(_Inspiration__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    content: content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })));
};

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "sc-12ty1na-0"
})(["text-align:left;"]);
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/components/Inspirations/Inspiration.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Inspirations/Inspiration.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Inspiration.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Inspiration = ({
  content
}) => {
  const BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
    displayName: "Inspiration__BoxContainer",
    componentId: "oyhmy1-0"
  })(["width:", "px;height:", "px;max-height:150px;margin:10px;background-image:url(", ");background-size:cover;list-style:none;display:inline-block;background-repeat:no-repeat;float:left;background-position:center;"], content.dimensions.width / 4, content.dimensions.height / 4, props => props.url);
  return __jsx(BoxContainer, {
    url: content.url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./src/components/Inspirations/Grid.tsx");
/* harmony import */ var _contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Inspirations/Inspirations.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const gridContent = [{
  url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg",
  dimensions: {
    width: 881,
    height: 495
  }
}, {
  url: "https://cdn.inprnt.com/thumbs/3b/d7/3bd78abfe28bffa17d97538647cde5e1@2x.jpg?response-cache-control=max-age=2628000",
  dimensions: {
    width: 720,
    height: 720
  }
}, {
  url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg",
  dimensions: {
    width: 881,
    height: 495
  }
}, {
  url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg",
  dimensions: {
    width: 881,
    height: 495
  }
}];

const Inspirations = () => {
  const {
    collections,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_3__["CollectionsContext"]);
  const InspirationsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Inspirations__InspirationsContainer",
    componentId: "sc-5potf-0"
  })(["display:", ";width:calc(100vw - 301px);height:calc(100vh - 90px);margin:0 auto;border:#E8E8E8 1px solid;text-align:center;"], collections.open ? "none" : 'block');
  return __jsx(InspirationsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gridContent: gridContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspirations);

/***/ }),

/***/ "./src/components/Nav/Info.tsx":
/*!*************************************!*\
  !*** ./src/components/Nav/Info.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/Info.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Info = () => {
  return __jsx(Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Info Icon");
};

const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Info__Button",
  componentId: "sc-10549xh-0"
})(["width:60px;height:60px;position:absolute;bottom:100px;left:50%;transform:translateX(-50%);"]);
/* harmony default export */ __webpack_exports__["default"] = (Info);

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
/* harmony import */ var _ShowCollections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowCollections */ "./src/components/Nav/ShowCollections.tsx");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Info */ "./src/components/Nav/Info.tsx");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ "./src/components/Nav/Settings.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/Nav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // interface Props {
// }

const Nav = () => {
  return __jsx(NavContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_ShowCollections__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx(_Info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }));
};

const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__NavContainer",
  componentId: "r5l1g2-0"
})(["position:fixed;left:0;top:0;bottom:0;height:100vh;width:150px;background-color:#f8f8f8;text-align:center;z-index:1;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "Nav__Logo",
  componentId: "r5l1g2-1"
})(["position:absolute;"]);
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Nav/Settings.tsx":
/*!*****************************************!*\
  !*** ./src/components/Nav/Settings.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/Settings.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Settings = () => {
  return __jsx(Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Settings Icon");
};

const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Settings__Button",
  componentId: "v85orh-0"
})(["width:60px;height:60px;position:absolute;bottom:30px;left:50%;transform:translateX(-50%);"]);
/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/Nav/ShowCollections.tsx":
/*!************************************************!*\
  !*** ./src/components/Nav/ShowCollections.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/CollectionsContext */ "./src/contexts/CollectionsContext.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/components/Nav/ShowCollections.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ShowCollections = () => {
  const {
    0: targeted,
    1: setTargeted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    collections,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CollectionsContext__WEBPACK_IMPORTED_MODULE_2__["CollectionsContext"]);
  const CollectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "ShowCollections__CollectionsContainer",
    componentId: "sc-19w2inw-0"
  })(["position:relative;top:50%;transform:translatey(-50%);height:60px;width:60px;margin:auto;display:flex;"]);
  const Shape = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "ShowCollections__Shape",
    componentId: "sc-19w2inw-1"
  })(["background-color:", ";border-color:", ";height:8px;width:8px;border-color:transparent transparent ", " transparent;_border-color:#ffffff #ffffff #DBDBDB #ffffff;"], targeted || collections.open ? "#000000" : "#DBDBDB", targeted || collections.open ? "#000000" : "#DBDBDB", targeted || collections.open ? "#000000" : "#DBDBDB");
  const TopSquare = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__TopSquare",
    componentId: "sc-19w2inw-2"
  })(["position:absolute;"]);
  const MiddleSquare = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__MiddleSquare",
    componentId: "sc-19w2inw-3"
  })(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]);
  const BottomSquare = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__BottomSquare",
    componentId: "sc-19w2inw-4"
  })(["position:absolute;right:0;bottom:0%;"]);
  const TopCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__TopCircle",
    componentId: "sc-19w2inw-5"
  })(["position:absolute;left:50%;top:0;border-radius:50%;transform:translateX(-50%);"]);
  const LeftCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__LeftCircle",
    componentId: "sc-19w2inw-6"
  })(["position:absolute;top:50%;border-radius:50%;transform:translateY(-50%);"]);
  const RightCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__RightCircle",
    componentId: "sc-19w2inw-7"
  })(["position:absolute;top:50%;right:0;border-radius:50%;transform:translateY(-50%);"]);
  const BottomCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__BottomCircle",
    componentId: "sc-19w2inw-8"
  })(["position:absolute;bottom:0;left:50%;border-radius:50%;transform:translateX(-50%);"]);
  const LeftTriangle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__LeftTriangle",
    componentId: "sc-19w2inw-9"
  })(["background-color:unset;position:absolute;bottom:0;left:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
  const RightTriangle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Shape).withConfig({
    displayName: "ShowCollections__RightTriangle",
    componentId: "sc-19w2inw-10"
  })(["background-color:unset;position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 5px 8.7px 5px;line-height:0px;_filter:progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');"]);
  return __jsx(CollectionsContainer, {
    onClick: e => dispatch({
      type: "openCollections",
      boolean: !collections.open
    }),
    onMouseEnter: () => setTargeted(true),
    onMouseLeave: () => setTargeted(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(TopSquare, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx(MiddleSquare, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx(BottomSquare, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(TopCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), __jsx(LeftCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx(RightCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(BottomCircle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx(LeftTriangle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }), __jsx(RightTriangle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowCollections);

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
})(["height:60px;width:60px;position:absolute;bottom:30px;right:50%;transform:translateX(50%);"]);
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
})(["background-color:#F8F8F8;height:calc( 100vh - 90px);width:150px;position:absolute;right:0;bottom:0;flex-direction:column;align-items:center;justify-content:space-between;"]);
const ScrollBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__ScrollBar",
  componentId: "sc-1rtpwb0-1"
})(["height:15vh;width:37px;background-color:#DBDBDB;margin:0 auto;"]);
const CollectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Sidebar__CollectionTitle",
  componentId: "sc-1rtpwb0-2"
})(["writing-mode:vertical-lr;text-orientation:mixed;line-height:2em;margin:0 auto;margin-bottom:30px;min-height:40vh;"]);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/contexts/CollectionsContext.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/CollectionsContext.tsx ***!
  \*********************************************/
/*! exports provided: CollectionsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsContext", function() { return CollectionsContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_collectionsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/collectionsReducer */ "./src/reducers/collectionsReducer.tsx");
var _jsxFileName = "/Users/takaitech/Takai-Tech/initspo/src/contexts/CollectionsContext.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CollectionsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const initState = {
  collections: [],
  current: 'ALL',
  open: false
};

const CollectionsContextProvider = props => {
  const {
    0: collections,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_collectionsReducer__WEBPACK_IMPORTED_MODULE_1__["collectionsReducer"], initState);
  return __jsx(CollectionsContext.Provider, {
    value: {
      collections,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const collectionsReducer = (initState, action) => {
  switch (action.type) {
    case "openCollections":
      return _objectSpread({}, initState, {
        open: action.boolean
      });

    default:
      return initState;
  }
};

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
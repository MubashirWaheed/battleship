/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"main{\\n    display: flex;\\n}\\n.board{\\n    margin: 10px;   \\n    border: 1px solid red;\\n}\\n.bot-board,.p1-board{\\n    margin: 10px;   \\n    border: 1px solid red;\\n}\\n.row,.p1-row{\\n    display: flex;\\n}\\n.bot-cell,.p1-cell{\\n    background-color: lightblue;\\n    width: 32px;\\n    height: 32px;\\n    border: 1px solid black;\\n    user-select: none;\\n    position: relative;\\n}\\n.hit{\\n    background-color: red;\\n}\\n.miss{\\n    background-color: pink;\\n}\\n.cell:hover{\\n    background-color: rgb(103, 143, 157);\\n    cursor: pointer;\\n}\\n.ship{\\n    background-color: black;\\n}\\n\\n.drag-over {\\n    border: dashed 3px red;\\n}\\n.res{\\n    background-color: rebeccapurple;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Factories/gameboard.js":
/*!************************************!*\
  !*** ./src/Factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/Factories/ship.js\");\n\n\nconst Gameboard = ()=>{\n    let board = []\n    \n    //  IIFE to create baord array\n    const init = (()=>{\n        for(let i =0; i < 10; i++){\n            board[i] = [];\n            for(let j =0; j < 10; j++){\n                board[i].push(false);\n            }\n        }\n    })();\n   \n    // I only have to have my placeShip func working.\n    const placeShip = (rowPos, cell,length,direction)=>{        \n        \n        // Checks if ship already present at certain cell\n        // I ship present placeship not called again \n        if(board[rowPos][cell]) return false\n\n        //  Creating multiple instaces of ship with same name when required and storing in board arary \n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n        let shipPos = 0;\n        //  How did check for overflow and in case of overflow how random ship called again \n        //  Horizontal ships being added to the board array \n        if(direction == 0){\n           \n            if(cell + ship.shipLength > 10) return false // horizontal overflow check\n            \n            for(let i = cell; i < cell + ship.shipLength; i++){\n                // Add the ship in the board array based on the coordinates \n                board[rowPos].splice(i,1,{ship,shipPos});\n                shipPos++\n                // reserve cells around the ship\n                if(rowPos !== 0){\n                    board[rowPos-1].splice(i,1,\"res\");\n                }\n                if(rowPos !== 9){\n                    board[rowPos+1].splice(i,1,\"res\");\n                }\n            }\n            if(cell !== 0){\n                let minusCell = cell -1\n                board[rowPos].splice(minusCell,1,\"res\")\n            }\n            if(cell !==9){\n                board[rowPos].splice(cell+ship.shipLength,1, \"res\")\n            }\n        }\n        \n        // vertical ships being added to board array \n        if(direction == 1){\n            // vertical overflow check\n            if(rowPos + ship.shipLength > 10) return false;\n            \n            for(let i = rowPos; i < rowPos + ship.shipLength; i++){\n                board[i].splice(cell,1,{ship, shipPos});\n                shipPos++\n                if(cell-1 !== -1){\n                    board[i].splice(cell-1,1,\"res\");\n                }\n                if(cell+1 !== 10){\n                    board[i].splice(cell+1,1,\"res\");\n                }\n            }\n            if(rowPos-1 !== -1){\n                board[rowPos-1].splice(cell,1,\"res\")\n            }\n            if(rowPos+ship.shipLength !== 10){\n                board[rowPos+ship.shipLength].splice(cell,1,\"res\")\n            }\n        }\n    }\n\n    // How will I identify the ship instance which were created inside the palceship?  \n    // Two cordinates will be passed\n    // Based on those coordinates check the board array  \n    const receiveAttack = (row, col)=>{\n        // check based on coordinates whether ship inside array hit or not\n        // console.log(typeof board[0][2])\n        if(typeof board[row][col] == \"object\"){\n            board[row][col].ship.shipArray[board[row][col].shipPos] = \"hit\"\n            return \"hit\"\n        } \n        if(!board[row][col]){\n            board[row].splice(col,1,\"miss\")\n            return \"miss\"\n        }\n\n    }\n    // how do I check if all ships sunk?\n    // Maybe check each ship's array if their cell have been hit\n\n    const allSunk = (board)=>{\n        let notSunk = false;\n        for(let i = 0; i < 10; i++){\n            board[i].forEach((item)=>{\n                if(!item) return \n                if(item.ship.isSunk() == false){\n                    notSunk = true\n                }\n            })\n        }\n        return notSunk == true ?  false : true\n    }\n\n    return {\n        board,\n        placeShip,\n        receiveAttack,\n        allSunk\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/Factories/gameboard.js?");

/***/ }),

/***/ "./src/Factories/player.js":
/*!*********************************!*\
  !*** ./src/Factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/Factories/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/Factories/gameboard.js\");\n\n\n\nconst Player = ()=>{\n    const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n    const randomShip = (length)=>{\n        const rowPos = Math.floor(Math.random() * 10);\n        const cell = Math.floor(Math.random() * 10);\n        // const direction = Math.round(Math.random());\n        const direction = 0\n        return board.placeShip(rowPos,cell,length,direction);\n    }\n    \n    const randomFleet = ()=>{\n        // two ships of length 1 \n        for(let i =0; i < 2; ){\n            if(randomShip(1) == false) continue\n            i++\n        } \n        // two ships of length 2 \n        for(let i =0; i < 2; ){\n            if(randomShip(2) == false) continue\n            i++\n        }\n        // two ship of length 3\n        for(let i =0; i < 2; ){\n            if(randomShip(3) == false) continue\n            i++\n        }\n        // two ships of length 4\n        for(let i =0; i < 2; ){\n            if(randomShip(4) == false) continue\n            i++\n        }\n    }\n\n    return{\n        randomFleet,\n        board\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/Factories/player.js?");

/***/ }),

/***/ "./src/Factories/ship.js":
/*!*******************************!*\
  !*** ./src/Factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst  Ship = (length)=>{\n\n    let shipLength = length;\n    let shipArray = new Array(length);\n    shipArray.fill(\"\")\n    \n    const hit = (hitIndex)=>{\n        if(shipArray[hitIndex] == \"hit\") return false\n        shipArray[hitIndex] = \"hit\"\n    }\n\n    // checks if ship sunk\n    // returns true if ship sunk \n    const isSunk = ()=>{\n        \n        const checkforHits = (currentValue)=> {\n            return currentValue == \"hit\"\n        }\n\n        let result =  shipArray.every(checkforHits)\n        return result\n    }\n    \n    return{\n        hit,\n        isSunk,\n        shipLength,\n        shipArray\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/Factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factories/player */ \"./src/Factories/player.js\");\n/* harmony import */ var _views_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/dom */ \"./src/views/dom.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\n\n\n\nconst game = ()=>{\n    const p1 = (0,_Factories_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const bot = (0,_Factories_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    // ships should be automactically placed for bot\n    // I have ot add these ship to the bot baord \n    bot.randomFleet()\n    console.log('bot board',bot.board.board)\n    ;(0,_views_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(p1, bot)\n    ;(0,_views_dom__WEBPACK_IMPORTED_MODULE_1__.renderButton)(p1)\n}\n\ngame()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/views/dom.js":
/*!**************************!*\
  !*** ./src/views/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoards\": () => (/* binding */ renderBoards),\n/* harmony export */   \"renderButton\": () => (/* binding */ renderButton)\n/* harmony export */ });\n/* harmony import */ var _Factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factories/gameboard */ \"./src/Factories/gameboard.js\");\n\n\nconst renderBoards = (p1,bot)=>{\n    // How do I render two board?\n    // should I use loop?\n    // How do I use this array to add ships in the html \n    // and check for hit or miss on every click \n    const main = document.getElementById(\"main\");\n\n    // creating player board\n    const p1Board = document.createElement(\"div\")\n    p1Board.classList.add(\"p1-board\");\n    for(let i =0; i < 10; i++){\n        const row = document.createElement(\"div\");\n        row.classList.add(\"p1-row\")\n        for(let x = 0; x < 10; x++){\n            const cell = document.createElement(\"div\");\n            cell.classList.add(\"p1-cell\");\n            row.appendChild(cell);\n        } \n        p1Board.appendChild(row);\n    }\n    main.appendChild(p1Board)\n    \n    // creating bot board  \n    const botBoard = document.createElement(\"div\")\n    botBoard.classList.add(\"bot-board\");\n\n    for(let i =0; i < 10; i++){\n        const row = document.createElement(\"div\");\n        row.classList.add(\"row\")\n        for(let x = 0; x < 10; x++){\n            const cell = document.createElement(\"div\");\n            cell.classList.add(\"bot-cell\");\n            row.appendChild(cell);\n        } \n        botBoard.appendChild(row);\n    }\n    main.appendChild(botBoard)\n\n    // adding event listner on the bot cells \n    const botCells = document.querySelectorAll(\".bot-cell\");\n    botCells.forEach((cell,index)=>{\n        cell.addEventListener(\"click\",()=>{\n            let pos1, pos2; \n            if(index < 10){\n                pos1 = 0;\n                pos2 = index.toString().split('')[0]\n                // Now that I have clicked cell coordinates  \n                // Now pass thses coordinates to other function which changes the\n            }else{\n                pos1 = index.toString().split('')[0]\n                pos2 = index.toString().split('')[1]\n            }\n            // passing clicked cells coordinates to the receive attack function\n            const result = bot.board.receiveAttack(pos1,pos2);\n            // updating ui based on the cell clicked by player\n            renderAttack(pos1,pos2,result)\n\n        })\n    })\n}\n\n// update the UI according to the array \nconst renderAttack = (pos1, pos2,result)=>{\n    //  How do I select the cell depending\n    if(result == \"hit\"){\n    document.querySelector(\".bot-board\").children[pos1].children[pos2].classList.add(\"hit\")\n    }else{\n    document.querySelector(\".bot-board\").children[pos1].children[pos2].classList.add(\"miss\")\n    }\n}\n\nconst renderButton = (p1)=>{\n    const placeShipBtn = document.createElement(\"Button\")\n    placeShipBtn.innerText = \"Auto place ships\"\n\n    placeShipBtn.addEventListener(\"click\",()=>{\n        // Call auto place funtion here\n        // ships added in the array \n        p1.randomFleet();\n        // Update the player board with the ships \n        renderShips(p1);\n        //  Remove eventListner after button is clicked\n        \n    })\n\n    document.querySelector(\"body\").appendChild(placeShipBtn)\n}\n\nconst renderShips = (p1)=>{\n    // check each place in the array and add class based on the ship presence \n    console.log('humand board',p1.board.board)\n    p1.board.board.forEach((row, rowIndex)=>{\n        row.forEach((cell, cellIndex)=>{\n            // How do I add classes to the specific clasess \n            // returns if false present at array indexs\n            // console.log('rendering board',p1.board.board[rowIndex][cellIndex])\n            if(!cell || p1.board.board[rowIndex][cellIndex] == \"res\" ) return\n            let ship;\n        \n            \n            if(rowIndex == 0){\n                ship = document.querySelectorAll(\".p1-cell\")[`${cellIndex}`]\n            }else{\n                ship = document.querySelectorAll(\".p1-cell\")[`${rowIndex}${cellIndex}`]\n            }\n            ship.classList.add(\"ship\")\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/views/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
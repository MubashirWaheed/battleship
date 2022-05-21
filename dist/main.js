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

/***/ "./src/Factories/gameboard.js":
/*!************************************!*\
  !*** ./src/Factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = ()=>{\n\n    // initialize board \n    const createBoard = ()=>{\n        for(let x=0; x < 10; x++){\n\n        }\n    }\n\n    //  let say I get xPos= 0 and yPos= 3\n    const placeShip = (xPos, yPos, ship)=>{\n        console.log(ship);\n        \n    }\n\n    const receiveAttack = ()=>{\n\n    }\n\n\n    return {\n        receiveAttack,\n        placeShip\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/Factories/gameboard.js?");

/***/ }),

/***/ "./src/Factories/ship.js":
/*!*******************************!*\
  !*** ./src/Factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst  Ship = (length)=>{\n    \n    let shipLength = length;\n    let shipCordinates = new Array(length);\n    shipCordinates.fill(\"\")\n    \n\n    const checkforHits = (currentValue)=> {\n        return currentValue == \"hit\"\n    }\n\n    const hit = (index)=>{\n        shipCordinates[index] = \"hit\"\n    }\n\n    const isSunk = ()=>{\n        let result =  shipCordinates.every(checkforHits)\n        return result\n    }\n    \n    return{\n        hit,\n        isSunk,\n        shipLength,\n        shipCordinates\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/Factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factories/ship */ \"./src/Factories/ship.js\");\n/* harmony import */ var _Factories_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factories/gameboard */ \"./src/Factories/gameboard.js\");\n\n\n\nconst cruiser = (0,_Factories_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\nconst destroyer = (0,_Factories_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3)\nconst carrier = (0,_Factories_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n\nconst playerBoard = (0,_Factories_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst AI = (0,_Factories_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nplayerBoard.placeShip(0,0, cruiser)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 			// no module.id needed
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
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfisheye"] = self["webpackChunkfisheye"] || []).push([["routing"],{

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\nconst querystring = window.location.search;\nconst urlParams = new URLSearchParams(querystring);\nconst mimi = urlParams.has(\"243\");\nconst testData = document.getElementById(\"testdata\");\nwindow.onload = function renderContent (){\n\n    if (mimi === true){\n        testData.innerHTML = `page mimi`\n      }\n    else{\n        testData.innerHTML = `error`\n    }\n\n}\n*/ \nconst getData = () => __webpack_require__.e(/*! import() */ \"src_data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./data/data.json */ \"./src/data/data.json\", 19));\ngetData().then(data => {data.default.photographers.find(profil => profil.id === \"243\")\n    \n    });\n\n//# sourceURL=webpack://fisheye/./src/routing.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/routing.js"));
/******/ }
]);
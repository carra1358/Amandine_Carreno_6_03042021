/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfisheye"] = self["webpackChunkfisheye"] || []).push([["photographes"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/photographer.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/photographer.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_DM_Sans_DMSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/DM_Sans/DMSans-Regular.ttf */ \"./styles/fonts/DM_Sans/DMSans-Regular.ttf\");\n/* harmony import */ var _fonts_DM_Sans_DMSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/DM_Sans/DMSans-Bold.ttf */ \"./styles/fonts/DM_Sans/DMSans-Bold.ttf\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_DM_Sans_DMSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_DM_Sans_DMSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"dmsans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: \\\"dmsans-bold\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\nbody {\\n  margin: 0;\\n  overflow-x: hidden;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\n.ville {\\n  color: #911c1c;\\n}\\n\\n.prix {\\n  color: #525252;\\n}\\n\\n/*pages photographes*/\\n#logo {\\n  width: 40%;\\n}\\n#logo img {\\n  width: 100%;\\n  height: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover;\\n}\\n\\nheader {\\n  margin: 7%;\\n}\\n\\n#photographer-profil {\\n  display: flex;\\n  font-family: \\\"dmsans\\\";\\n}\\n#photographer-profil .profil-img {\\n  width: 50%;\\n  height: 100%;\\n  text-align: left;\\n}\\n\\n#profil-img-photographes {\\n  width: 100px;\\n  height: 100px;\\n  object-fit: cover;\\n  border-radius: 50%;\\n}\\n\\n#profil-text {\\n  width: 80%;\\n  font-size: 13px;\\n}\\n\\n#photographer-tag {\\n  white-space: nowrap;\\n  font-size: 13px;\\n  margin-top: 1em;\\n}\\n#photographer-tag :first-child {\\n  margin-left: 0;\\n}\\n\\n.tag {\\n  margin: 1em 0.2em;\\n  padding: 0.2em 0.5em;\\n  font-family: \\\"dmsans-bold\\\";\\n  font-size: 12px;\\n  line-height: 16px;\\n  font-weight: 500;\\n  color: #911c1c;\\n  border: 0.5px solid #c4c4c4;\\n  border-radius: 11px;\\n  -webkit-border-radius: 11px;\\n  -moz-border-radius: 11px;\\n  -ms-border-radius: 11px;\\n  -o-border-radius: 11px;\\n}\\n\\n.screen-reader {\\n  position: absolute;\\n  font-size: 1px;\\n  color: white;\\n  top: 0px;\\n}\\n\\n#profil-header {\\n  font-family: \\\"dmsans\\\";\\n  font-size: 36px;\\n  color: #d3573c;\\n  margin: 0;\\n}\\n\\n#contact-wrap {\\n  text-align: center;\\n  width: 86%;\\n  position: fixed;\\n  scroll-behavior: smooth;\\n  top: 90%;\\n}\\n\\n#acces-modal {\\n  color: #ffff;\\n  width: 170px;\\n  height: 35px;\\n  font-family: \\\"dmsans\\\";\\n  background-color: #911c1c;\\n  font-size: 18px;\\n  font-weight: 700;\\n  border-style: none;\\n  border-radius: 5px;\\n  -webkit-border-radius: 5px;\\n  -moz-border-radius: 5px;\\n  -ms-border-radius: 5px;\\n  -o-border-radius: 5px;\\n}\\n\\nmain {\\n  margin: 10% 7%;\\n  padding-bottom: 15%;\\n}\\n\\n.media {\\n  width: 100%;\\n  margin: 0;\\n  margin-bottom: 5%;\\n}\\n.media img,\\n.media video {\\n  border-radius: 5px;\\n  width: 100%;\\n  height: 350px;\\n  -o-object-fit: cover;\\n  object-fit: cover;\\n  -webkit-border-radius: 5px;\\n  -moz-border-radius: 5px;\\n  -ms-border-radius: 5px;\\n  -o-border-radius: 5px;\\n}\\n\\n.media-info {\\n  color: #911c1c;\\n  font-family: \\\"dmsans\\\";\\n  font-weight: 500;\\n  display: flex;\\n  flex-wrap: nowrap;\\n  justify-content: space-between;\\n  margin-top: 2%;\\n}\\n.media-info :first-child {\\n  width: 70%;\\n}\\n\\n.fa-heart {\\n  width: 0.9em;\\n  margin-left: 3px;\\n}\\n\\n#filter-media {\\n  display: none;\\n}\\n\\n.visible {\\n  display: block;\\n}\\n\\n.invisible {\\n  display: none;\\n}\\n\\n/* modal */\\n#modal-container {\\n  display: none;\\n  justify-content: center;\\n  align-content: center;\\n  background-color: #db8876;\\n  padding: 7%;\\n  padding-top: 2%;\\n  z-index: 4;\\n  position: absolute;\\n  width: 86%;\\n  top: 0;\\n}\\n\\n.form-data {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#modal {\\n  font-family: \\\"dmsans\\\";\\n  width: 100%;\\n}\\n#modal h1 {\\n  margin: 0;\\n  font-size: 2.25em;\\n}\\n#modal label {\\n  font-size: 1.5em;\\n  margin-top: 0.85em;\\n}\\n#modal #name,\\n#modal #lastname,\\n#modal #email {\\n  border: none;\\n  border-radius: 5px;\\n  height: 47px;\\n}\\n#modal #message {\\n  border: none;\\n  border-radius: 5px;\\n  height: 184px;\\n}\\n#modal #submit {\\n  color: #ffff;\\n  width: 170px;\\n  height: 35px;\\n  background-color: #911c1c;\\n  font-size: 18px;\\n  font-weight: 700;\\n  border-radius: 5px;\\n  -webkit-border-radius: 5px;\\n  border-style: none;\\n}\\n\\n#modal-envoyer {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 3em;\\n}\\n\\n/* A TRANSFERER DANS RESPONSIVE*/\\n.close {\\n  position: absolute;\\n  right: 15px;\\n  top: 15px;\\n  width: 32px;\\n  height: 32px;\\n  opacity: 1;\\n  cursor: pointer;\\n  transform: scale(0.7);\\n}\\n\\n.close:before,\\n.close:after {\\n  position: absolute;\\n  left: 15px;\\n  content: \\\" \\\";\\n  height: 33px;\\n  width: 3px;\\n  background-color: #fff;\\n}\\n\\n.close:before {\\n  transform: rotate(45deg);\\n}\\n\\n.close:after {\\n  transform: rotate(-45deg);\\n}\\n\\n#lightbox {\\n  background-color: #ffff;\\n  top: 0;\\n  padding-top: 1%;\\n  position: absolute;\\n  width: 100%;\\n  height: 984px;\\n  text-align: center;\\n  overflow-y: hidden;\\n}\\n#lightbox .close {\\n  position: fixed;\\n  background-color: transparent;\\n  border-style: none;\\n  color: #911c1c;\\n  width: 42px;\\n  height: 42px;\\n  padding: 0;\\n  top: 1%;\\n  order: 1;\\n  right: 3%;\\n}\\n#lightbox .close:before,\\n#lightbox .close:after {\\n  position: absolute;\\n  top: 0;\\n  content: \\\" \\\";\\n  width: 42px;\\n  height: 42px;\\n  width: 5px;\\n  background-color: #911c1c;\\n}\\n\\n#lightbox_media {\\n  display: flex;\\n  justify-content: center;\\n  width: 83%;\\n  height: 984px;\\n  order: 3;\\n}\\n#lightbox_media .media-info {\\n  margin-top: 0;\\n  text-transform: capitalize;\\n  font-size: 24px;\\n}\\n#lightbox_media figure {\\n  width: fit-content;\\n  margin: 0;\\n}\\n\\n#lightbox_content_wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  width: 100%;\\n}\\n\\n#next {\\n  font-size: 42px;\\n  color: #911c1c;\\n  order: 4;\\n}\\n\\n#prev {\\n  font-size: 42px;\\n  color: #911c1c;\\n  order: 2;\\n}\\n\\n.lightbox-img {\\n  object-fit: cover;\\n  max-width: 100%;\\n  max-height: 900px;\\n}\\n\\n/*\\n\\n#prev {\\n  @include lightbox-navigation-buttons;\\n  left: 11%;\\n}\\n\\n#next {\\n  @include lightbox-navigation-buttons;\\n  right: 9%;\\n}\\n\\n\\n.testimg {\\n  object-fit: cover;\\n  width: 1050px;\\n  height: 900px;\\n}\\n*/\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fisheye/./styles/photographer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/sass/responsive_photographer.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/sass/responsive_photographer.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  overflow-x: hidden;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\n.ville {\\n  color: #911c1c;\\n}\\n\\n.prix {\\n  color: #525252;\\n}\\n\\n@media (min-width: 1024px) {\\n  #header-photographer {\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 3%;\\n  }\\n\\n  #logo {\\n    width: 16%;\\n    margin-bottom: 1.5em;\\n  }\\n\\n  #photographer-profil {\\n    background-color: #fafafa;\\n    padding: 1.5em;\\n    padding-bottom: 0;\\n    border-radius: 5px;\\n  }\\n  #photographer-profil .profil-img {\\n    text-align: right;\\n  }\\n\\n  #profil-img-photographes {\\n    width: 200px;\\n    height: 200px;\\n  }\\n\\n  #profil-header {\\n    font-size: 64px;\\n  }\\n\\n  #profil-text {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n  }\\n  #profil-text .ville {\\n    font-size: 24px;\\n  }\\n  #profil-text .quote,\\n#profil-text .prix {\\n    font-size: 18px;\\n  }\\n\\n  #photographer-tag {\\n    margin: 0;\\n    padding: 1.5em;\\n    background-color: #fafafa;\\n  }\\n\\n  .tag {\\n    font-size: 18px;\\n    border-radius: 25px;\\n  }\\n\\n  main {\\n    margin: 5%;\\n  }\\n\\n  #galerie-media {\\n    display: flex;\\n    justify-content: space-evenly;\\n    flex-wrap: wrap;\\n  }\\n\\n  .media {\\n    width: 30%;\\n  }\\n\\n  #contact-wrap {\\n    width: 50%;\\n    position: absolute;\\n    top: 180px;\\n    left: 50%;\\n    text-align: left;\\n  }\\n\\n  #acces-modal {\\n    width: 170px;\\n    height: 69px;\\n    font-size: 20px;\\n    font-weight: 700;\\n  }\\n\\n  #filter-media {\\n    display: flex;\\n    align-items: center;\\n    font-family: \\\"dmsans\\\";\\n    font-size: 1em;\\n    margin: 2%;\\n  }\\n\\n  #filters {\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    margin-left: 6em;\\n    position: absolute;\\n  }\\n  #filters button {\\n    background-color: #911c1c;\\n    padding: 0.8em;\\n    font-size: 0.9em;\\n    color: #ffff;\\n    white-space: nowrap;\\n    width: 130px;\\n    text-align: left;\\n    border-style: none;\\n  }\\n  #filters :first-child {\\n    border-radius: 5px;\\n  }\\n\\n  #hidden_filters {\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    background-color: #911c1c;\\n    position: relative;\\n    top: 41px;\\n    border-radius: 5px;\\n    z-index: 10;\\n  }\\n  #hidden_filters :first-child {\\n    border-radius: 5px 5px 0 0;\\n  }\\n  #hidden_filters :nth-child(5) {\\n    border-radius: 0 0 5px 5px;\\n  }\\n\\n  .buttons-separator {\\n    display: block;\\n    width: 90%;\\n    height: 1px;\\n    background-color: #ffff;\\n  }\\n\\n  .fa-chevron-up,\\n.fa-chevron-down {\\n    position: absolute;\\n    right: 0.8em;\\n  }\\n\\n  /* modal */\\n  #modal-container {\\n    display: none;\\n    background-color: rgba(255, 255, 255, 0.459);\\n    padding-bottom: 60%;\\n    top: 3%;\\n  }\\n\\n  #modal {\\n    background-color: #db8876;\\n    width: 49%;\\n    padding: 5%;\\n    padding-top: 2%;\\n    border-radius: 5px;\\n  }\\n  #modal #submit {\\n    height: 69px;\\n  }\\n  #modal input,\\n#modal textarea {\\n    font-size: 1.2em;\\n  }\\n\\n  #name,\\n#lastname,\\n#email {\\n    height: 68px;\\n  }\\n\\n  #message {\\n    height: 170px;\\n  }\\n\\n  #modal-envoyer {\\n    justify-content: start;\\n  }\\n\\n  .close {\\n    right: 29%;\\n    top: 3%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fisheye/./styles/sass/responsive_photographer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./styles/photographer.scss":
/*!**********************************!*\
  !*** ./styles/photographer.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_photographer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./photographer.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/photographer.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_photographer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_photographer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://fisheye/./styles/photographer.scss?");

/***/ }),

/***/ "./styles/sass/responsive_photographer.scss":
/*!**************************************************!*\
  !*** ./styles/sass/responsive_photographer.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_photographer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./responsive_photographer.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/sass/responsive_photographer.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_photographer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_photographer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://fisheye/./styles/sass/responsive_photographer.scss?");

/***/ }),

/***/ "./src/photographes.js":
/*!*****************************!*\
  !*** ./src/photographes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_photographer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/photographer.scss */ \"./styles/photographer.scss\");\n/* harmony import */ var _styles_sass_responsive_photographer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sass/responsive_photographer.scss */ \"./styles/sass/responsive_photographer.scss\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n\n\n\nconsole.log(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.config.autoA11y); // true\n\n//DOM\n// conteneur template\nconst photographerProfil = document.getElementById(\"photographer-profil\");\nconst galerieMedia = document.getElementById(\"galerie-media\");\nconst photographerTag = document.getElementById(\"photographer-tag\");\nconst modalPhotographerName = document.getElementById(\n  \"modal-photographer-name\"\n);\n\n// DOM bouton trie\nconst filtersMedia = document.getElementById(\"filters\");\nconst buttonPopularity = document.getElementById(\"popularite\");\nconst buttonDate = document.getElementById(\"date\");\nconst buttonTittle = document.getElementById(\"titre\");\nconst chevron = document.getElementById(\"chevron\");\nconst buttonSelected = document.getElementById(\"selected_filter\");\nlet textSelected = document.getElementById(\"selected_text\");\n\n//DOM lightbox\nconst header = document.querySelector(\"header\");\nconst main = document.querySelector(\"main\");\nconst lightbox = document.getElementById(\"lightbox\");\nconst lightboxMedia = document.getElementById(\"lightbox_media\");\nconst closelightbox = document.querySelector(\".close\");\n// test event listenner\nconst accesModal = document.getElementById(\"acces-modal\");\n\n//Url params\nlet querystring = window.location.search;\nconst urlParams = new URLSearchParams(querystring);\nconst getIdParams = urlParams.get(\"id\");\nconst getNameParams = urlParams.get(\"name\");\n\n//importation du json\nconst getData = () => __webpack_require__.e(/*! import() */ \"src_data_data_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./data/data.json */ \"./src/data/data.json\", 19));\n\ngetData().then((data) => {\n  const photographer = data.default.photographers.find(\n    (p) => p.id == getIdParams\n  );\n  let media = data.default.media\n    .filter((m) => m.photographerId == photographer.id)\n    .map((m) => factory(m));\n  if (photographer === undefined) {\n    window.location.href = \"index.html\";\n  }\n\n  buttonSelected.addEventListener(\"click\", () => {\n    buttonDate.classList.replace(\"invisible\", \"visible\");\n    buttonTittle.classList.replace(\"invisible\", \"visible\");\n    buttonPopularity.classList.replace(\"invisible\", \"visible\");\n    buttonSelected.classList.replace(\"visible\", \"invisible\");\n  });\n\n  buttonPopularity.addEventListener(\"click\", () => {\n    media.sort((a, b) => a.likes - b.likes).reverse();\n    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(\" \");\n    makeButtonSelectedVisible();\n    textSelected.textContent = \"Popularité\";\n  });\n\n  buttonDate.addEventListener(\"click\", () => {\n    media.sort((a, b) => new Date(b.date) - new Date(a.date));\n    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(\" \");\n    makeButtonSelectedVisible();\n    textSelected.textContent = \"Date\";\n  });\n  buttonTittle.addEventListener(\"click\", (e) => {\n    media.sort((a, b) =>\n      a.src\n        .split(\"_\")\n        .splice(1)\n        .join(\"\")\n        .localeCompare(b.src.split(\"_\").splice(1).join(\"\"), {\n          sensitivity: \"base\",\n        })\n    );\n    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(\" \");\n    makeButtonSelectedVisible();\n    textSelected.textContent = \"Titre\";\n  });\n\n  renderProfilInfo(photographer);\n  renderTag(photographer);\n  buttonPopularity.click();\n  const allLikes = galerieMedia.querySelectorAll(\".likes\");\n  allLikes.forEach((el) =>\n    el.addEventListener(\"click\", (e) => {\n      let likes = parseInt(el.dataset.id);\n      let findM = media.find((m) => m.id == likes);\n      el.firstChild.innerHTML = findM.addLikes();\n    })\n  );\n\n  modalPhotographerName.innerHTML = `${photographer.name}`;\n\n  const allMedia = galerieMedia.querySelectorAll(\".preview\");\n\n  let currentIndex = 0;\n  let nextMedia = 0;\n  let previousMedia = 0;\n  allMedia.forEach((el) => {\n    el.addEventListener(\"click\", (e) => {\n      header.classList.replace(\"visible\", \"invisible\");\n      main.classList.replace(\"visible\", \"invisible\");\n      lightbox.classList.replace(\"invisible\", \".visible\");\n      let singleMedia = media.find((m) => m.id == e.target.id);\n      lightboxMedia.innerHTML = singleMedia.renderLightboxMedia();\n      currentIndex = media.findIndex((el) => el.id == e.target.id);\n    });\n  });\n  const next = document.getElementById(\"next\");\n  const prev = document.getElementById(\"prev\");\n  next.addEventListener(\"click\", () => {\n    if (currentIndex == media.length - 1) {\n      currentIndex = 0;\n    } else {\n      currentIndex++;\n    }\n    nextMedia = media[currentIndex];\n    lightboxMedia.innerHTML = nextMedia.renderLightboxMedia();\n  });\n  prev.addEventListener(\"click\", () => {\n    if (currentIndex == 0) {\n      currentIndex = media.length - 1;\n    } else {\n      currentIndex--;\n    }\n    previousMedia = media[currentIndex];\n    lightboxMedia.innerHTML = previousMedia.renderLightboxMedia();\n  });\n});\n\nfunction makeButtonSelectedVisible() {\n  buttonDate.classList.replace(\"visible\", \"invisible\");\n  buttonTittle.classList.replace(\"visible\", \"invisible\");\n  buttonPopularity.classList.replace(\"visible\", \"invisible\");\n  buttonSelected.classList.replace(\"invisible\", \"visible\");\n}\n\nfunction renderProfilInfo(photographer) {\n  photographerProfil.innerHTML = `\n        <div id=\"profil-text\">\n        <h1 id=\"profil-header\">${photographer.name}</h1>\n        <p>\n            <span class=\"ville\">${photographer.city}, ${\n    photographer.country\n  }</span><br>\n            <span class=\"quote\">${photographer.tagline}</span><br>\n            <span class=\"prix\">${photographer.price}€/jour</span><br>\n        </p>\n       </div>\n        <div class=\"profil-img\"><img id=\"profil-img-photographes\" src=\"${\n          \"../images/PhotographersIDPhotos/\" + photographer.portrait\n        }\" alt=\"\"> </div> \n         \n        `;\n}\n\nfunction renderTag(photographer) {\n  photographerTag.innerHTML = `\n    \n    ${photographer.tags\n      .map(\n        (tag) =>\n          `<a href=\"index.html?tagValue=${tag}#tag\" class=\"tag\"><span class=\"screen-reader\">tag</span><i class=\"fas fa-hashtag\" aria-hidden=\"true\"></i>${tag}</a>`\n      )\n      .join(\"\")}\n         \n    `;\n}\n\nclass Media {\n  constructor(id, photographerId, tags, likes, date, price, src, name) {\n    this.id = id;\n    this.photographerId = photographerId;\n    this.tags = tags;\n    this.likes = likes;\n    this.date = date;\n    this.price = price;\n    this.src = src;\n    this.name = name;\n  }\n  createMediaContent() {}\n  addLikes() {\n    this.likes++;\n    return this.likes;\n  }\n  renderLightboxMedia() {}\n}\n\nclass Video extends Media {\n  createMediaContent() {\n    return `<figure class=\"media\">\n   <video id=\"${this.id}\" class=\"preview\" src=\"../images/${this.name}/${\n      this.src\n    }\"></video>\n    <figcaption class=\"media-info\">\n        <span>${this.src.split(/[._]/).slice(1, -1).join(\" \")}</span>\n        <span>${this.price}€</span>\n          <span class=\"likes\" data-id=\"${this.id}\"><span>${\n      this.likes\n    }</span><i class=\"fas fa-heart\"></i></span>\n    </figcaption>\n    </figure>`;\n  }\n\n  renderLightboxMedia() {\n    return `<figure>\n          <video\n            class=\"lightbox-img\"\n            id=\"${this.id}\" src=\"../images/${this.name}/${this.src}\"\n            alt=\"\">\n         </video>\n          <figcaption class=\"media-info\">${this.src\n            .split(/[._]/)\n            .slice(1, -1)\n            .join(\" \")}\n            </figcaption>\n      </figure>\n      `;\n  }\n}\n\nclass Image extends Media {\n  createMediaContent() {\n    return `<figure class=\"media\">\n   <img class=\"preview\" id=\"${this.id}\" src=\"../images/${this.name}/${\n      this.src\n    }\" alt=\"\">\n    <figcaption class=\"media-info\">\n        <span>${this.src.split(/[._]/).slice(1, -1).join(\" \")}</span>\n        <span>${this.price}€</span>\n        <span class=\"likes\" data-id=\"${this.id}\"><span>${\n      this.likes\n    }</span><i class=\"fas fa-heart\"></i></span>\n    </figcaption>\n    </figure>`;\n  }\n\n  renderLightboxMedia() {\n    return `<figure>\n          <img\n            class=\"lightbox-img\"\n            id=\"${this.id}\" src=\"../images/${this.name}/${this.src}\"\n            alt=\"\"\n          />\n          <figcaption class=\"media-info\">${this.src\n            .split(/[._]/)\n            .slice(1, -1)\n            .join(\" \")}\n            </figcaption>\n      </figure>\n     `;\n  }\n}\n\nfunction factory(media) {\n  if (media.hasOwnProperty(\"image\")) {\n    return new Image(\n      media.id,\n      media.photographerId,\n      media.tags,\n      media.likes,\n      media.date,\n      media.price,\n      media.image,\n      getNameParams\n    );\n  } else if (media.hasOwnProperty(\"video\")) {\n    return new Video(\n      media.id,\n      media.photographerId,\n      media.tags,\n      media.likes,\n      media.date,\n      media.price,\n      media.video,\n      getNameParams\n    );\n  }\n}\n\ncloselightbox.addEventListener(\"click\", () => {\n  lightbox.classList.replace(\".visible\", \"invisible\");\n  header.classList.replace(\"invisible\", \"visible\");\n  main.classList.replace(\"invisible\", \"visible\");\n});\n\n/* function pour navigation entre media \n\n img/vid.addEventListener(\"click\", (e) => {\n  // trouve Media cliquer\n\n    let findM = media.find((m) => m.id == e.target.id);\n\n   // trouve son index\n    let i = media.indexOf(findM);\n    console.log(i);\n    console.log(findM);\n    // va au prochain media \n\n    console.log(media[i + 1]);\n  });\n\n  // ajouter le contenu a charger\n\n*/\n\n\n//# sourceURL=webpack://fisheye/./src/photographes.js?");

/***/ }),

/***/ "./styles/fonts/DM_Sans/DMSans-Bold.ttf":
/*!**********************************************!*\
  !*** ./styles/fonts/DM_Sans/DMSans-Bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"da49214b2d88abca155c.ttf\";\n\n//# sourceURL=webpack://fisheye/./styles/fonts/DM_Sans/DMSans-Bold.ttf?");

/***/ }),

/***/ "./styles/fonts/DM_Sans/DMSans-Regular.ttf":
/*!*************************************************!*\
  !*** ./styles/fonts/DM_Sans/DMSans-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"067ebd7ed3c947d82dc4.ttf\";\n\n//# sourceURL=webpack://fisheye/./styles/fonts/DM_Sans/DMSans-Regular.ttf?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-svg-core_index_es_js-node_modules_css-loader_dis-c824af"], () => (__webpack_exec__("./src/photographes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  color: purple;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  display: grid;\\r\\n  place-content: center;\\r\\n  background-color: rgb(23 96 103);\\r\\n}\\r\\n\\r\\n.line-through {\\r\\n  color: rgb(90, 90, 90);\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.main-container {\\r\\n  background-color: rgb(192, 192, 192);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1px;\\r\\n  min-width: 350px;\\r\\n  border: 5px solid goldenrod;\\r\\n  border-radius: 5px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.main-title {\\r\\n  background-color: white;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.reload-icon {\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.add-form {\\r\\n  width: 100%;\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.add-input {\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.add-input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.enter-icon {\\r\\n  width: 8%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.list-container {\\r\\n  background-color: rgb(192, 192, 192);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.to-do-tasks {\\r\\n  width: 100%;\\r\\n  text-align: left;\\r\\n  background-color: white;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.task-description {\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.check-box {\\r\\n  width: 14px;\\r\\n  height: 14px;\\r\\n  border-radius: 3px;\\r\\n  border: 2px solid grey;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  border: none;\\r\\n  font-size: 14px;\\r\\n  color: green;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  height: 50px;\\r\\n  width: 100%;\\r\\n  padding: 0 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px #ddd solid;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.todo-intro {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.todo-intro-title {\\r\\n  font-weight: 600;\\r\\n  opacity: 0.9;\\r\\n  color: #545862;\\r\\n}\\r\\n\\r\\n.todo-intro i {\\r\\n  font-size: 17px;\\r\\n  opacity: 0.5;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.todo-add * {\\r\\n  color: #ddd;\\r\\n}\\r\\n\\r\\n.todo-add input {\\r\\n  width: 100%;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  font-size: 18px;\\r\\n  font-style: italic;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.todo-add input::placeholder {\\r\\n  color: #ddd;\\r\\n}\\r\\n\\r\\n.todo-add i {\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n.todo-item {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.edit-focus-element {\\r\\n  content: \\\"\\\";\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  position: absolute;\\r\\n  z-index: 0;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.checked-icon {\\r\\n  color: green;\\r\\n  cursor: pointer;\\r\\n  font-size: 20px;\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.unchecked-icon {\\r\\n  font-size: 15px;\\r\\n  border: 2px rgb(90, 90, 90) solid;\\r\\n  cursor: pointer;\\r\\n  color: transparent;\\r\\n  border-radius: 3px;\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.todo-item input {\\r\\n  width: 100%;\\r\\n  padding: 0 15px;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  font-size: 15px;\\r\\n  font-weight: 100;\\r\\n  text-align: start;\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.undecoration {\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.decoration {\\r\\n  opacity: 0.5;\\r\\n  color: #333;\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.delete-icon,\\r\\n.more-icon {\\r\\n  width: 10%;\\r\\n  opacity: 0.5;\\r\\n  color: #333;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.delete-icon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.more-icon {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.clear-btn {\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: #f1f2f5;\\r\\n  font-size: 16px;\\r\\n  cursor: pointer;\\r\\n  padding-top: 2vh;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.clear-btn span {\\r\\n  color: #333;\\r\\n  font-weight: bold;\\r\\n  transition: background-color 1s, transform 1s;\\r\\n}\\r\\n\\r\\n.clear-btn span:hover {\\r\\n  transition: color 1s, transform 1s;\\r\\n  background: -webkit-linear-gradient(#800303, #d7d70c);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n}\\r\\n\\r\\n.edit-todo:focus ~ .edit-focus-element {\\r\\n  background-color: #fffecb;\\r\\n}\\r\\n\\r\\n.delete-icon:active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.edit-todo:focus ~ .delete-icon {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.edit-todo:focus ~ .more-icon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.delete-icon:active ~ .more-icon {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/TaskStatus.js":
/*!***************************!*\
  !*** ./src/TaskStatus.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTodoStatus\": () => (/* binding */ changeTodoStatus),\n/* harmony export */   \"removeCompletedTodos\": () => (/* binding */ removeCompletedTodos)\n/* harmony export */ });\n/* harmony import */ var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionality.js */ \"./src/functionality.js\");\n\r\n\r\nconst changeTodoStatus = ({ index, status }) => {\r\n  _functionality_js__WEBPACK_IMPORTED_MODULE_0__.mylist[index - 1].completed = status;\r\n  localStorage.setItem('mylist', JSON.stringify(_functionality_js__WEBPACK_IMPORTED_MODULE_0__.mylist));\r\n  (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.getmylist)();\r\n};\r\nconst removeCompletedTodos = () => {\r\n  const uncompletedTodos = _functionality_js__WEBPACK_IMPORTED_MODULE_0__.mylist.filter((element) => element.completed !== true);\r\n  const newTodos = uncompletedTodos.map((element, index) => {\r\n    element.index = index + 1;\r\n    return element;\r\n  });\r\n  localStorage.setItem('mylist', JSON.stringify(newTodos));\r\n  (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(newTodos);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todolist-webpack/./src/TaskStatus.js?");

/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addmylist\": () => (/* binding */ addmylist),\n/* harmony export */   \"deletemylist\": () => (/* binding */ deletemylist),\n/* harmony export */   \"editmylist\": () => (/* binding */ editmylist),\n/* harmony export */   \"getmylist\": () => (/* binding */ getmylist),\n/* harmony export */   \"mylist\": () => (/* binding */ mylist),\n/* harmony export */   \"updateUI\": () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n\r\n\r\nlet mylist = JSON.parse(localStorage.getItem('mylist')) || [];// eslint-disable-line\r\n\r\nconst listGroup = document.querySelector('.list-container');\r\nconst newTask = document.querySelector('.add-form').querySelector('input');\r\nconst getmylist = () => {\r\n  const mylistElement = mylist.map((item) => `\r\n        <li class=\"todo-list todo-item\" id=${item.index}>\r\n          ${item.completed === true ? `\r\n            <i class=\"fa-solid fa-check checked-icon\"></i>`\r\n    : '<i class=\"fa-solid fa-square unchecked-icon\"></i>'}\r\n          <input type=\"text\" class=${item.completed === true ? 'decoration edit-todo' : ' edit-todo'}  value=\"${item.description}\">\r\n          <span class=\"edit-focus-element\"></span>\r\n          <i class=\"fa-solid fa-trash-can delete-icon\"></i>\r\n          <img class=\"more-icon\" src=\"${_more_svg__WEBPACK_IMPORTED_MODULE_0__}\"/>\r\n        </li>`).join('');\r\n  listGroup.innerHTML = mylistElement;\r\n  return listGroup;\r\n};\r\nconst updateUI = (data) => {\r\n  mylist = data;\r\n  getmylist();\r\n};\r\n\r\nconst addmylist = (event) => {\r\n  if (newTask.value === '') return;\r\n  if (event.key === 'Enter' || event === 'clicked') {\r\n    const todoElement = {\r\n      description: newTask.value,\r\n      completed: false,\r\n      index: mylist.length + 1,\r\n    };\r\n    newTask.value = '';\r\n    mylist = [...mylist, todoElement];\r\n    localStorage.setItem('mylist', JSON.stringify(mylist));\r\n    getmylist();\r\n  }\r\n};\r\n\r\nconst editmylist = ({index, event}) => {\r\n  if (event.target.value === '') return;\r\n  if (event.key === 'Enter') {\r\n    mylist[index-1].description = event.target.value;\r\n    localStorage.setItem('mylist', JSON.stringify(mylist));\r\n    getmylist();\r\n  }  \r\n};\r\n\r\nconst deletemylist = (targetIndex) => {\r\n  const filterList = mylist.filter((item) => +item.index !== +targetIndex);\r\n  const newmylist = filterList.map((item, index) => ({\r\n    description: item.description,\r\n    completed: item.completed,\r\n    index: index + 1,\r\n  }));\r\n  localStorage.setItem('mylist', JSON.stringify(newmylist));\r\n  mylist = newmylist;\r\n  getmylist();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todolist-webpack/./src/functionality.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reload_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload.svg */ \"./src/reload.svg\");\n/* harmony import */ var _enter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.svg */ \"./src/enter.svg\");\n/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality */ \"./src/functionality.js\");\n/* harmony import */ var _TaskStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskStatus.js */ \"./src/TaskStatus.js\");\n\n\n\n\n\n\n\nconst reloadIcon = document.getElementById('reload-img');\nconst enterIcon = document.getElementById('enter-icon');\nenterIcon.src = _enter_svg__WEBPACK_IMPORTED_MODULE_2__;\nreloadIcon.src = _reload_svg__WEBPACK_IMPORTED_MODULE_1__;\nconst todoList = [\n  {\n    id: 1,\n    description: 'Finish project structure',\n    completed: false,\n  },\n  {\n    id: 2,\n    description: 'Add styles to the project',\n    completed: false,\n  },\n  {\n    id: 3,\n    description: 'Make changes on Awesome Books Project',\n    completed: false,\n  },\n  {\n    id: 4,\n    description: 'Prepare Dinner 😋',\n    completed: false,\n  },\n];\n\nconst listGroup = document.querySelector('.list-container');\nconst newTask = document.querySelector('.add-form').querySelector('input');\nconst submitIcon = document.querySelector('.add-form').querySelector('.enter-icon');\nnewTask.addEventListener('keypress', (event) => (0,_functionality__WEBPACK_IMPORTED_MODULE_3__.addmylist)(event));\nsubmitIcon.addEventListener('click', () => (0,_functionality__WEBPACK_IMPORTED_MODULE_3__.addmylist)('clicked'));\n\nlistGroup.addEventListener('click', (event) => {\n  const clickedItem = event.target.classList[event.target.classList.length - 1];\n  const li = event.target.parentElement;\n  if (clickedItem === 'delete-icon') (0,_functionality__WEBPACK_IMPORTED_MODULE_3__.deletemylist)(li.id);\n  if (clickedItem === 'checked-icon') (0,_TaskStatus_js__WEBPACK_IMPORTED_MODULE_4__.changeTodoStatus)({ index: li.id, status: false });\n  if (clickedItem === 'unchecked-icon') (0,_TaskStatus_js__WEBPACK_IMPORTED_MODULE_4__.changeTodoStatus)({ index: li.id, status: true });\n});\n\nlistGroup.addEventListener('keypress', (event) => {\n  const pressedItem = event.target.classList[event.target.classList.length - 1];\n  const li = event.target.parentElement;\n  if (pressedItem === 'edit-todo') (0,_functionality__WEBPACK_IMPORTED_MODULE_3__.editmylist)({ index: li.id, event });\n});\n\nconst clearCompleted = document.querySelector('.clear-btn');\nclearCompleted.addEventListener('click', _TaskStatus_js__WEBPACK_IMPORTED_MODULE_4__.removeCompletedTodos);\n\nwindow.addEventListener('load', () => { (0,_functionality__WEBPACK_IMPORTED_MODULE_3__.getmylist)(); });\n\n//# sourceURL=webpack://todolist-webpack/./src/index.js?");

/***/ }),

/***/ "./src/enter.svg":
/*!***********************!*\
  !*** ./src/enter.svg ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjEyNSAyLjVDMTMuMjc4MSAyLjUwMDAyIDEzLjQyNTggMi41NTYyMiAxMy41NDAyIDIuNjU3OTVDMTMuNjU0NiAyLjc1OTY3IDEzLjcyNzcgMi44OTk4NCAxMy43NDU2IDMuMDUxODdMMTMuNzUgMy4xMjVWNy4xODc1QzEzLjc1IDcuNzQ2OTIgMTMuNTM1OCA4LjI4NTA5IDEzLjE1MTIgOC42OTEzOEMxMi43NjY3IDkuMDk3NjcgMTIuMjQxMSA5LjM0MTE5IDExLjY4MjUgOS4zNzE4N0wxMS41NjI1IDkuMzc1SDMuMzg0MzdMNS40NDE4NyAxMS40MzMxQzUuNTQ5NDkgMTEuNTQwNyA1LjYxNDEzIDExLjY4MzkgNS42MjM2OCAxMS44MzU4QzUuNjMzMjMgMTEuOTg3NyA1LjU4NzAzIDEyLjEzNzkgNS40OTM3NSAxMi4yNTgxTDUuNDQxODcgMTIuMzE2OUM1LjMzNDI1IDEyLjQyNDUgNS4xOTEwNyAxMi40ODkxIDUuMDM5MTggMTIuNDk4N0M0Ljg4NzI4IDEyLjUwODIgNC43MzcxMyAxMi40NjIgNC42MTY4OCAxMi4zNjg4TDQuNTU4MTMgMTIuMzE2OUwxLjQzMzEyIDkuMTkxODdDMS40MTEyMyA5LjE3MDA2IDEuMzkwOTcgOS4xNDY2NiAxLjM3MjUgOS4xMjE4OEwxLjMyODEyIDkuMDUzMTJMMS4yOTQzOCA4Ljk4MTg4TDEuMjcyNSA4LjkxNjI1TDEuMjU2ODcgOC44NDMxM0wxLjI1MjUgOC44MDU2MkwxLjI1IDguNzVMMS4yNTE4OCA4LjcwMzEzTDEuMjYyNSA4LjYyNDM3TDEuMjgxMjUgOC41NTVMMS4zMDg3NSA4LjQ4NTYyTDEuMzQxMjUgOC40MjQzOEwxLjM4MTI1IDguMzY2ODhMMS40MzMxMiA4LjMwODEzTDQuNTU4MTMgNS4xODMxM0M0LjY3MDYgNS4wNzEwMyA0LjgyMTUyIDUuMDA1OTUgNC45ODAyNCA1LjAwMTExQzUuMTM4OTYgNC45OTYyNiA1LjI5MzU3IDUuMDUyMDEgNS40MTI2NyA1LjE1NzAzQzUuNTMxNzggNS4yNjIwNSA1LjYwNjQ0IDUuNDA4NDcgNS42MjE1IDUuNTY2NTVDNS42MzY1NiA1LjcyNDYyIDUuNTkwODggNS44ODI1MSA1LjQ5Mzc1IDYuMDA4MTJMNS40NDE4NyA2LjA2Njg3TDMuMzg0MzcgOC4xMjVIMTEuNTYyNUMxMS43OTU1IDguMTI1IDEyLjAyMDEgOC4wMzgyOCAxMi4xOTI2IDcuODgxNzJDMTIuMzY1MSA3LjcyNTE2IDEyLjQ3MzEgNy41MDk5OSAxMi40OTU2IDcuMjc4MTNMMTIuNSA3LjE4NzVWMy4xMjVDMTIuNSAyLjk1OTI0IDEyLjU2NTggMi44MDAyNyAxMi42ODMxIDIuNjgzMDZDMTIuODAwMyAyLjU2NTg1IDEyLjk1OTIgMi41IDEzLjEyNSAyLjVaIiBmaWxsPSIjNzQ3NDc0Ii8+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://todolist-webpack/./src/enter.svg?");

/***/ }),

/***/ "./src/more.svg":
/*!**********************!*\
  !*** ./src/more.svg ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAxMi41QzcuMTU2MjUgMTIuNSA2Ljg2MTg4IDEyLjM3NzUgNi42MTY4OCAxMi4xMzI1QzYuMzcxODggMTEuODg3NSA2LjI0OTU4IDExLjU5MzMgNi4yNSAxMS4yNUM2LjI1IDEwLjkwNjMgNi4zNzI1IDEwLjYxMTkgNi42MTc1IDEwLjM2NjlDNi44NjI1IDEwLjEyMTkgNy4xNTY2NyA5Ljk5OTU4IDcuNSAxMEM3Ljg0Mzc1IDEwIDguMTM4MTMgMTAuMTIyNSA4LjM4MzEzIDEwLjM2NzVDOC42MjgxMyAxMC42MTI1IDguNzUwNDIgMTAuOTA2NyA4Ljc1IDExLjI1QzguNzUgMTEuNTkzOCA4LjYyNzUgMTEuODg4MSA4LjM4MjUgMTIuMTMzMUM4LjEzNzUgMTIuMzc4MSA3Ljg0MzMzIDEyLjUwMDQgNy41IDEyLjVaTTcuNSA4Ljc1QzcuMTU2MjUgOC43NSA2Ljg2MTg4IDguNjI3NSA2LjYxNjg4IDguMzgyNUM2LjM3MTg4IDguMTM3NSA2LjI0OTU4IDcuODQzMzMgNi4yNSA3LjVDNi4yNSA3LjE1NjI1IDYuMzcyNSA2Ljg2MTg4IDYuNjE3NSA2LjYxNjg4QzYuODYyNSA2LjM3MTg4IDcuMTU2NjcgNi4yNDk1OCA3LjUgNi4yNUM3Ljg0Mzc1IDYuMjUgOC4xMzgxMyA2LjM3MjUgOC4zODMxMyA2LjYxNzVDOC42MjgxMyA2Ljg2MjUgOC43NTA0MiA3LjE1NjY3IDguNzUgNy41QzguNzUgNy44NDM3NSA4LjYyNzUgOC4xMzgxMyA4LjM4MjUgOC4zODMxM0M4LjEzNzUgOC42MjgxMyA3Ljg0MzMzIDguNzUwNDIgNy41IDguNzVaTTcuNSA1QzcuMTU2MjUgNSA2Ljg2MTg4IDQuODc3NSA2LjYxNjg4IDQuNjMyNUM2LjM3MTg4IDQuMzg3NSA2LjI0OTU4IDQuMDkzMzMgNi4yNSAzLjc1QzYuMjUgMy40MDYyNSA2LjM3MjUgMy4xMTE4OCA2LjYxNzUgMi44NjY4OEM2Ljg2MjUgMi42MjE4OCA3LjE1NjY3IDIuNDk5NTggNy41IDIuNUM3Ljg0Mzc1IDIuNSA4LjEzODEzIDIuNjIyNSA4LjM4MzEzIDIuODY3NUM4LjYyODEzIDMuMTEyNSA4Ljc1MDQyIDMuNDA2NjcgOC43NSAzLjc1QzguNzUgNC4wOTM3NSA4LjYyNzUgNC4zODgxMyA4LjM4MjUgNC42MzMxM0M4LjEzNzUgNC44NzgxMyA3Ljg0MzMzIDUuMDAwNDIgNy41IDVaIiBmaWxsPSIjNzQ3NDc0Ii8+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://todolist-webpack/./src/more.svg?");

/***/ }),

/***/ "./src/reload.svg":
/*!************************!*\
  !*** ./src/reload.svg ***!
  \************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNzUgMTBIMTEuODc1VjEzLjEyNU02LjI1IDVIMy4xMjVWMS44NzVNMTIuMTM2MyA1LjYyNjg4QzExLjc4NTggNC43NTk0OSAxMS4xOTkxIDQuMDA3ODIgMTAuNDQyNyAzLjQ1NzI5QzkuNjg2NCAyLjkwNjc2IDguNzkwNzcgMi41Nzk0NiA3Ljg1NzY3IDIuNTEyNkM2LjkyNDU3IDIuNDQ1NzQgNS45OTE0MiAyLjY0MTk5IDUuMTY0MzEgMy4wNzkwNUM0LjMzNzE5IDMuNTE2MTEgMy42NDkyNyA0LjE3NjQ1IDMuMTc4NzUgNC45ODVNMi44NjM3NSA5LjM3MzEyQzMuMjE0MjUgMTAuMjQwMyAzLjgwMDk4IDEwLjk5MTkgNC41NTcyNyAxMS41NDIzQzUuMzEzNTYgMTIuMDkyNyA2LjIwOTA4IDEyLjQxOTkgNy4xNDIwNiAxMi40ODY4QzguMDc1MDQgMTIuNTUzNiA5LjAwODA3IDEyLjM1NzQgOS44MzUxMSAxMS45MjA1QzEwLjY2MjIgMTEuNDgzNiAxMS4zNTAxIDEwLjgyMzQgMTEuODIwNiAxMC4wMTUiIHN0cm9rZT0iIzc0NzQ3NCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://todolist-webpack/./src/reload.svg?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
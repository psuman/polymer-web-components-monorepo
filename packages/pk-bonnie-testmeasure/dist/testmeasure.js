/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"testmeasure": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.template.html":
/*!*******************************!*\
  !*** ./src/app.template.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n\\n    :host {\\n    --pk-bonnie-main-theme: #53777A;\\n    --pk-bonnie-fill-indicator-colour:#e4e4e4;\\n  }\\n\\n  .minfo {\\n    color: #000;\\n    min-height: 60px;\\n    position: relative;\\n    padding-bottom: 20px;\\n    padding-top: 20px;\\n  }\\n\\n  .header {\\n    margin-bottom: 2%;\\n    flex-direction: row;\\n    display: flex;\\n    place-content: center space-between;\\n  }\\n\\n  .name {\\n    color: rgba(0, 0, 0, 0.87);\\n    font-size: 20px;\\n    line-height: normal;\\n    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;\\n  }\\n\\n  .search {\\n    float: right;\\n    margin-right: 4%\\n  }\\n\\n  .title {\\n    font-size: 14px;\\n    letter-spacing: 2px;\\n    font-weight: 900;\\n    height: 100%;\\n    line-height: normal;\\n    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;\\n    color: #111;\\n  }\\n\\n  .extra {\\n    font-size: 13px;\\n    margin-top: 2px;\\n    margin-right: 32px;\\n  }\\n\\n  .new {\\n    color: #8B8B8B !important;\\n    font-weight: 500;\\n  }\\n\\n  .tp {\\n    margin-right: 32px;\\n    font-size: 13px;\\n    position: relative;\\n    padding: 0;\\n    width: 8em;\\n    height: 4em;\\n    line-height: 4em;\\n    text-align: center;\\n  }\\n\\n  .numerator {\\n    font-size: 25px;\\n  }\\n\\n  .denominator {\\n    font-size: 15px;\\n  }\\n\\n  .tp p {\\n    position: absolute;\\n    top: -15px;\\n    width: 10em;\\n    text-align: center;\\n    display: block;\\n    z-index: 2;\\n    font-size: 11px;\\n    margin: 0px !important;\\n    padding: 0px !important;\\n    color: #8B8B8B !important;\\n  }\\n\\n  .divider {\\n    width: 100%;\\n    height: 1px;\\n    background: #E0E0E0;\\n  }\\n\\n  .progress-circle {\\n    margin-right: 32px;\\n    font-size: 13px;\\n    position: relative;\\n    /* so that children can be absolutely positioned */\\n    padding: 0;\\n    width: 4em;\\n    height: 4em;\\n    background-color: #F2E9E1;\\n    border-radius: 50%;\\n    line-height: 4em;\\n  }\\n\\n  .progress-circle:after {\\n    border: none;\\n    position: absolute;\\n    top: 0.35em;\\n    left: 0.35em;\\n    text-align: center;\\n    display: block;\\n    border-radius: 50%;\\n    width: 3.3em;\\n    height: 3.3em;\\n    background-color: white;\\n    content: \\\" \\\";\\n  }\\n\\n  .progress-circle span {\\n    position: absolute;\\n    line-height: 4em;\\n    width: 4em;\\n    text-align: center;\\n    display: block;\\n    /*color: #53777A;*/\\n    z-index: 2;\\n  }\\n\\n  .new {\\n    color: #8B8B8B !important;\\n\\n  }\\n\\n  .progress-circle p {\\n    margin-right: 32px;\\n    position: absolute;\\n    top: -15px;\\n    /* line-height: 11em;*/\\n    /*width: 6em;*/\\n    text-align: center;\\n    display: block;\\n    /* color: #53777A; */\\n    z-index: 2;\\n    font-size: 11px;\\n    margin: 0px !important;\\n    padding: 0px !important;\\n    color: #8B8B8B !important;\\n  }\\n\\n  .left-half-clipper {\\n\\n    border-radius: 50%;\\n    width: 4em;\\n    height: 4em;\\n    position: absolute;\\n\\n    clip: rect(0, 4em, 4em, 2em);\\n  }\\n\\n \\n  .value-bar {\\n    position: absolute;\\n    clip: rect(0, 2em, 4em, 0);\\n    width: 4em;\\n    height: 4em;\\n    border-radius: 50%;\\n    border: 0.45em solid #53777A;\\n    box-sizing: border-box;\\n  }\\n\\n  .progress-circle.over50 .first50-bar {\\n    position: absolute;\\n    clip: rect(0, 4em, 4em, 2em);\\n    background-color: #53777A;\\n    border-radius: 50%;\\n    width: 4em;\\n    height: 4em;\\n  }\\n\\n  .progress-circle:not(.over50) .first50-bar {\\n    display: none;\\n  }\\n\\n  paper-card {\\n    display: block !important;\\n    padding: 24px;\\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\\n  }\\n\\n  .layout.horizontal {\\n    -ms-flex-direction: row;\\n    -webkit-flex-direction: row;\\n    flex-direction: row;\\n  }\\n\\n  a {\\n    color: var(--pk-bonnie-main-theme);\\n    cursor: pointer;\\n    text-decoration: underline;\\n    font-size: 15px;\\n  }\\n\\n  .flex-container {\\n    display: flex;\\n    flex-direction: row;\\n    box-sizing: border-box;\\n    max-height: 100%;\\n    margin-top: 1%;\\n    margin-bottom: 0.5%;\\n    place-content: center flex-start;\\n    align-items: center;\\n  }\\n  .progress-ring__circle\\n  {\\n\\nfill: var(--pk-bonnie-fill-indicator-colour);\\n  }\\n\\n  circle {\\n          transition: stroke-dashoffset 0.35s;\\n          transform: rotate(-90deg);\\n          transform-origin: 50% 50%;\\n        }\\n</style>\\n\\n<paper-card >\\n\\n    \\n  <div class=\\\"testMeasure\\\">\\n    <div class=\\\"header\\\">\\n      <div class=\\\"name\\\">\\n        <iron-icon icon=\\\"schedule\\\"></iron-icon>\\n        Measurement Period 2012\\n      </div>\\n      <div class=\\\"search\\\">\\n        <paper-input no-label-float label=\\\"Search...\\\" on-keyup=\\\"search\\\" value=\\\"{{searchValue}}\\\" style=\\\"\\n          color: #455a36;font-size: 14px;\\n      \\\">\\n          <iron-icon icon=\\\"search\\\" slot=\\\"prefix\\\" style=\\\"\\n              color: #455a36;\\n          \\\"></iron-icon>\\n        </paper-input>\\n      </div>\\n    </div>\\n    <div class=\\\"content\\\">\\n      <template is=\\\"dom-repeat\\\" items=\\\"{{measures}}\\\">\\n        <div class=\\\"flex-container\\\">\\n          <div class=\\\"infor\\\">\\n            <div class=\\\"title\\\">{{item.title}}</div>\\n            <a href=\\\"javascript:;\\\" (click)=\\\" gotoTestDetails() \\\">\\n              {{item.testmeasure}}\\n            </a>\\n            <div class=\\\"extra new\\\">Status: {{item.status}}</div>\\n          </div>\\n          <span _ngcontent-c32=\\\"\\\" class=\\\"ng-tns-c32-16\\\" fxflex=\\\"\\\" ng-reflect-flex=\\\"\\\" style=\\\"flex: 1 1 1e-09px;box-sizing: border-box;\\\"></span>\\n          <div class=\\\"flex-container\\\">\\n              \\n            <svg class=\\\"progress-ring\\\" width=\\\"60\\\" height=\\\"60\\\" style=\\\"\\n            margin-top: -4px;\\n            margin-right:  32px;\\\">\\n              <circle class=\\\"progress-ring__circle\\\"  stroke-width=\\\"4\\\" stroke$={{color}} fill=\\\"pink\\\" r=\\\"22\\\" cx=\\\"30\\\" cy=\\\"30\\\"  style$=\\\"stroke-dasharray:138.285 138.285;stroke-dashoffset:{{setProgress(item.value,item.status)}};\\\"></circle>\\n              <text x=\\\"22\\\" y=\\\"33\\\" class=\\\"percentage\\\" style=\\\"font-size: 13px\\\">{{item.value}}</text> \\n            </circle>\\n            </svg>\\n              <!-- <p style=\\\"top: -70%;\\\">EXPECTED</p> -->\\n            </div>\\n            <div class=\\\"tp\\\">\\n              <span class=\\\"numerator\\\">{{item.numerator}}</span> /\\n              <span class=\\\"denominator\\\">{{item.denominator}}</span>\\n              <p style=\\\"top: -70%;\\\">TEST PATIENTS</p>\\n            </div>\\n            <div style=\\\"\\n        margin-right: 32px;\\n    \\\">\\n              <a>\\n                <paper-icon-button icon=\\\"cached\\\" style=\\\"padding: 0%;\\\"></paper-icon-button>\\n              </a>\\n            </div>\\n            <div style=\\\"\\n        margin-right: 32px;\\n    \\\">\\n              <a>\\n                <paper-icon-button icon=\\\"social:person-add\\\" style=\\\"padding-left: 5%;padding-top: 0%;padding-bottom: 0%;padding-right: 0%\\\"></paper-icon-button>\\n              </a>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"divider \\\"></div>\\n    </div>\\n    </template>\\n  </div>\\n  <mat-paginator class=\\\"paginator\\\" [length]=\\\"3\\\" [pageSize]=\\\"10\\\"></mat-paginator>\\n  </div>\\n</paper-card>\";\n\n//# sourceURL=webpack:///./src/app.template.html?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst polymer_element_1 = __webpack_require__(/*! @polymer/polymer/polymer-element */ \"../../node_modules/@polymer/polymer/polymer-element.js\");\n__webpack_require__(/*! @polymer/iron-icons/iron-icons.js */ \"../../node_modules/@polymer/iron-icons/iron-icons.js\");\n__webpack_require__(/*! @polymer/paper-icon-button */ \"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js\");\n__webpack_require__(/*! @polymer/neon-animation/neon-animations.js */ \"../../node_modules/@polymer/neon-animation/neon-animations.js\");\n__webpack_require__(/*! @polymer/paper-card */ \"../../node_modules/@polymer/paper-card/paper-card.js\");\n__webpack_require__(/*! @polymer/paper-button */ \"../../node_modules/@polymer/paper-button/paper-button.js\");\n__webpack_require__(/*! @polymer/paper-input/paper-input.js */ \"../../node_modules/@polymer/paper-input/paper-input.js\");\n__webpack_require__(/*! @polymer/iron-icons/social-icons.js */ \"../../node_modules/@polymer/iron-icons/social-icons.js\");\nconst view = __webpack_require__(/*! ./app.template.html */ \"./src/app.template.html\");\nclass TestMeasure extends polymer_element_1.PolymerElement {\n    constructor() {\n        super();\n        this.measures = [];\n        this.circumference = 138.285;\n    }\n    static get template() {\n        return view;\n    }\n    static get properties() {\n        return {\n            measures: {\n                type: Array,\n            }\n        };\n    }\n    setProgress(percent, status) {\n        const offset = this.circumference - percent / 100 * this.circumference;\n        if (status.toLowerCase() == \"new\") {\n            this.color = \"black\";\n        }\n        else if (status.toLowerCase() == \"pass\") {\n            this.color = \"#f23737\";\n        }\n        else {\n            this.color = \"#23c438\";\n        }\n        return offset;\n    }\n}\nexports.TestMeasure = TestMeasure;\ncustomElements.define('pk-bonnie-testmeasure', TestMeasure);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */\"./src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/index?");

/***/ })

/******/ });
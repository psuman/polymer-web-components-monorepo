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
/******/ 		"addmeasure": 0
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

eval("module.exports = \"<style>\\n  body {\\n    line-height: normal;\\n    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;\\n    text-align: center;\\n  }\\n\\n  paper-icon-button {\\n    height: 44px;\\n    width: 44px;\\n    background: #455a64;\\n    color: white;\\n    box-shadow: 0 5px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\\n    border-radius: 50%;\\n\\n  }\\n\\n  .formelement {\\n    width: 100%;\\n  }\\n\\n  .formgroup {\\n    width: 100%;\\n  }\\n\\n\\n\\n  @media (min-width: 768px) {\\n    paper-item {\\n      font-size: 16px;\\n      font-weight: 400;\\n      font: 400 16px Arial;\\n    }\\n    #createmeasureDialog {\\n      padding: 25px;\\n      width: 45%;\\n      margin-top: 0em;\\n    }\\n    .formgroup {\\n      width: 100%;\\n      margin-top: 20px;\\n    }\\n    .custom2 {\\n      width: 100%;\\n    }\\n    .dropdown {\\n      width: 360px;\\n    }\\n  }\\n\\n  #continue {\\n    padding: 25px;\\n    width: 55%;\\n    margin-top: 0em;\\n  }\\n\\n  h2 {\\n    margin: 0 0 20px;\\n  }\\n\\n  .content {\\n    color: #3c763d;\\n    font-size: 18px;\\n  }\\n\\n  paper-button {\\n    font-size: 14px;\\n    font-weight: 500;\\n    font-style: normal;\\n    font: 400 13.3333px Arial;\\n\\n    line-height: 36px;\\n    border-radius: 2px;\\n    padding: 0 16px;\\n  }\\n\\n  .submit[enabled] {\\n    color: white;\\n    background-color: #2196f3;\\n  }\\n\\n  .continue {\\n    color: white;\\n    background-color: #2196f3;\\n  }\\n\\n  .cancel {\\n    background-color: #f44336;\\n    color: white;\\n    margin-left: 20px;\\n\\n  }\\n\\n\\n  @media (max-width: 425px) {\\n\\n    paper-item {\\n      font-size: 14px;\\n      font-weight: 400;\\n      font: 400 16px Arial;\\n    }\\n    #createmeasureDialog {\\n      padding: 15px;\\n      width: 100%;\\n      margin-top: 0em;\\n    }\\n    .dropdown {\\n      width: 300px;\\n    }\\n    #continue {\\n      padding: 5px;\\n      border-radius: 2px;\\n      overflow: auto;\\n      outline: 0;\\n      width: 100%;\\n    }\\n    h2 {\\n      margin: 0 0 10px;\\n    }\\n\\n    paper-dropdown-menu {\\n      position: absolute !important;\\n      top: 8px !important;\\n      right: 8px !important;\\n    }\\n    ;\\n    .content {\\n      color: #3c763d;\\n      font-size: 12px;\\n    }\\n    paper-button {\\n      font-size: 12px;\\n      font-weight: 600;\\n      font-style: normal;\\n      font: 400 10.3333px Arial;\\n      line-height: 26px;\\n      padding: 0 10px;\\n      border-radius: 2px;\\n    }\\n\\n    .submit[enabled] {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n    .continue {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n\\n    .cancel {\\n      background-color: #f44336;\\n      color: white;\\n      margin-left: 8px;\\n    }\\n  }\\n\\n  @media (max-width: 360px) {\\n\\n    paper-item {\\n      font-size: 13px;\\n      font-weight: 400;\\n      font: 400 12px Arial;\\n    }\\n    #createmeasureDialog {\\n      padding: 10px;\\n      width: 100%;\\n      margin-top: 0em;\\n    }\\n\\n    .dropdown {\\n      width: 200px;\\n    }\\n    #continue {\\n      padding: 3px;\\n      border-radius: 2px;\\n      overflow: auto;\\n      outline: 0;\\n      width: 100%;\\n    }\\n    h2 {\\n      margin: 0 0 5px;\\n    }\\n    .content {\\n      color: #3c763d;\\n      font-size: 10px;\\n    }\\n    paper-button {\\n      font-size: 10px;\\n      font-weight: 600;\\n      font-style: normal;\\n      font: 400 9.3333px Arial;\\n      line-height: 25px;\\n      padding: 0 5px;\\n      border-radius: 2px;\\n    }\\n    .submit[enabled] {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n    .continue {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n    .cancel {\\n      background-color: #f44336;\\n      color: white;\\n      margin-left: 6px;\\n    }\\n \\n  }\\n\\n  paper-menu-button {\\n    float : right;\\n  }\\n</style>\\n   <style is=\\\"custom-style\\\">\\n\\n    paper-input{\\n   --paper-input-container-focus-color: #455a64;\\n}\\n</style>\\n\\n<div class=\\\"gg\\\">\\n  <paper-menu-button on-tap=\\\"triggerred\\\" horizontal-align=\\\"right\\\" id=\\\"papermenubutton\\\">\\n    <paper-icon-button icon=\\\"add\\\" slot=\\\"dropdown-trigger\\\">\\n\\n    </paper-icon-button>\\n    <paper-listbox slot=\\\"dropdown-content\\\">\\n      <paper-item on-tap=\\\"createMeasure\\\">New Measure</paper-item>\\n      <paper-item>Upload Measure</paper-item>\\n    </paper-listbox>\\n  </paper-menu-button>\\n</div>\\n<paper-dialog id=\\\"createmeasureDialog\\\">\\n  <form id=\\\"form_id\\\" is=\\\"iron-form\\\">\\n    <div class=\\\"formgroup\\\">\\n      <paper-input  label=\\\"Measure Name*\\\" value=\\\"{{measureName}}\\\" required auto-validate on-keyup=\\\"isFormValid\\\" invalid=\\\"{{invalidMeasureName}}\\\"></paper-input>\\n\\n    </div>\\n    <div class=\\\"formgroup\\\">\\n\\n      <paper-input label=\\\"eCQM Abbreviated Title*\\\" value=\\\"{{ecqmAbbrevation}}\\\" required auto-validate on-keyup=\\\"isFormValid\\\" invalid=\\\"{{invalidTitle}}\\\"></paper-input>\\n    </div>\\n    <div class=\\\"formgroup\\\">\\n      <paper-dropdown-menu class=\\\"custom2\\\" label=\\\"Measure Scoring*\\\" required auto-validate on-selected-item-changed=\\\"isFormValid\\\"\\n        invalid=\\\"{{invalidScoring}}\\\" class=\\\"formelement\\\">\\n        <paper-listbox class=\\\"custom2\\\" selected=\\\"{{measureScoring}}\\\" attr-for-selected=\\\"name\\\" slot=\\\"dropdown-content\\\">\\n          <paper-item name=\\\"Cohort\\\">Cohort</paper-item>\\n          <paper-item name=\\\"brontosaurus\\\">brontosaurus</paper-item>\\n          <paper-item name=\\\"carcharodontosaurus\\\">carcharodontosaurus</paper-item>\\n          <paper-item name=\\\"diplodocus\\\">diplodocus</paper-item>\\n        </paper-listbox>\\n      </paper-dropdown-menu>\\n\\n    </div>\\n    <div class=\\\"formgroup\\\">\\n      <paper-dropdown-menu label=\\\"Patient-based Measure*\\\" on-selected-item-changed=\\\"isFormValid\\\" required auto-validate invalid=\\\"{{invalidPatient}}\\\"\\n        class=\\\"formelement\\\">\\n        <paper-listbox class=\\\"dropdown\\\" selected=\\\"{{isPatientbased}}\\\" attr-for-selected=\\\"name\\\" slot=\\\"dropdown-content\\\">\\n          <paper-item name=\\\"Yes\\\">Yes</paper-item>\\n          <paper-item name=\\\"No\\\">No</paper-item>\\n        </paper-listbox>\\n      </paper-dropdown-menu>\\n    </div>\\n\\n\\n    <div style=\\\"padding-top:20px;float:right;\\\">\\n      <paper-button class=\\\"submit\\\" enabled$=\\\"{{!isInvalid}}\\\" disabled$=\\\"{{isInvalid}}\\\" on-click=\\\"submit\\\" raised>submit</paper-button>\\n      <paper-button class=\\\"cancel\\\" on-click=\\\"cancel\\\" raised>cancel</paper-button>\\n    </div>\\n  </form>\\n</paper-dialog>\\n\\n<paper-dialog id=\\\"continue\\\" modal>\\n  <div>\\n    <h2>Confirmation</h2>\\n\\n\\n\\n    <div class=\\\"content\\\">\\n      You have created a new measure\\n      <strong>{{measureName}}</strong>\\n      <br> Please click continue to navigate to the Measure Details page.\\n    </div>\\n\\n\\n    <div style=\\\"padding-top:20px;float:right;\\\">\\n      <paper-button class=\\\"continue\\\" on-click=\\\"continueForward\\\" raised>continue</paper-button>\\n      <paper-button class=\\\"cancel\\\" on-click=\\\"cancel1\\\" raised>cancel</paper-button>\\n    </div>\\n\\n\\n  </div>\\n\\n</paper-dialog>\";\n\n//# sourceURL=webpack:///./src/app.template.html?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst polymer_element_1 = __webpack_require__(/*! @polymer/polymer/polymer-element */ \"../../node_modules/@polymer/polymer/polymer-element.js\");\r\n__webpack_require__(/*! @polymer/iron-icons/iron-icons.js */ \"../../node_modules/@polymer/iron-icons/iron-icons.js\");\r\n__webpack_require__(/*! @polymer/paper-listbox */ \"../../node_modules/@polymer/paper-listbox/paper-listbox.js\");\r\n__webpack_require__(/*! @polymer/paper-icon-button */ \"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js\");\r\n__webpack_require__(/*! @polymer/paper-menu-button */ \"../../node_modules/@polymer/paper-menu-button/paper-menu-button.js\");\r\n__webpack_require__(/*! @polymer/paper-dialog/paper-dialog.js */ \"../../node_modules/@polymer/paper-dialog/paper-dialog.js\");\r\n__webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu.js */ \"../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js\");\r\n__webpack_require__(/*! @polymer/paper-input/paper-input.js */ \"../../node_modules/@polymer/paper-input/paper-input.js\");\r\n__webpack_require__(/*! @polymer/neon-animation/neon-animations.js */ \"../../node_modules/@polymer/neon-animation/neon-animations.js\");\r\n__webpack_require__(/*! @polymer/paper-item/paper-item.js */ \"../../node_modules/@polymer/paper-item/paper-item.js\");\r\n__webpack_require__(/*! @polymer/paper-button */ \"../../node_modules/@polymer/paper-button/paper-button.js\");\r\nconst view = __webpack_require__(/*! ./app.template.html */ \"./src/app.template.html\");\r\nclass AddMeasure extends polymer_element_1.PolymerElement {\r\n    constructor() {\r\n        super();\r\n        this.invalidMeasureName = false;\r\n        this.invalidTitle = false;\r\n        this.invalidScoring = false;\r\n        this.invalidPatient = false;\r\n        this.isDirty = false;\r\n        this.isInvalid = true;\r\n        this.isPatientbased = \"\",\r\n            this.measureName = \"\",\r\n            this.ecqmAbbrevation = \"\",\r\n            this.measureScoring = \"\";\r\n        this.isDirty = false;\r\n        this.invalidMeasureName = false;\r\n        this.invalidTitle = false;\r\n        this.invalidScoring = false;\r\n        this.invalidPatient = false;\r\n        this.isInvalid = true;\r\n    }\r\n    static get template() {\r\n        return view;\r\n    }\r\n    createMeasure() {\r\n        this.shadowRoot.getElementById('createmeasureDialog').open();\r\n        this.shadowRoot.getElementById('papermenubutton').opened = false;\r\n        this.dispatchEvent(new CustomEvent('dialogopened'));\r\n    }\r\n    submit() {\r\n        this.shadowRoot.getElementById('continue').open();\r\n    }\r\n    continueForward() {\r\n        this.totalMeasue = {\r\n            \"measureName\": this.measureName,\r\n            \"ecqmAbbrevation\": this.ecqmAbbrevation,\r\n            \"measureScoring\": this.measureScoring,\r\n            \"isPatientbased\": this.isPatientbased,\r\n        };\r\n        this.dispatchEvent(new CustomEvent('submit', { detail: { value: JSON.stringify(this.totalMeasue) } }));\r\n        this.cancel1();\r\n    }\r\n    isFormValid(e) {\r\n        if (!this.isDirty) {\r\n            this.invalidMeasureName = true;\r\n            this.invalidTitle = true;\r\n            this.invalidPatient = true;\r\n            this.invalidScoring = true;\r\n            this.isDirty = true;\r\n        }\r\n        console.log(e.target.value);\r\n        if (e.target.value !== '') {\r\n            e.target.invalid = false;\r\n        }\r\n        else {\r\n            e.target.invalid = true;\r\n            this.isInvalid = true;\r\n        }\r\n        if (!this.invalidMeasureName && !this.invalidTitle && !this.invalidPatient && !this.invalidScoring) {\r\n            this.isInvalid = false;\r\n        }\r\n    }\r\n    reset() {\r\n        this.isPatientbased = \"\",\r\n            this.measureName = \"\",\r\n            this.ecqmAbbrevation = \"\",\r\n            this.measureScoring = \"\";\r\n        this.isDirty = false;\r\n        this.invalidMeasureName = false;\r\n        this.invalidTitle = false;\r\n        this.invalidScoring = false;\r\n        this.invalidPatient = false;\r\n        this.isInvalid = true;\r\n    }\r\n    cancel() {\r\n        this.shadowRoot.getElementById('createmeasureDialog').close();\r\n        this.reset();\r\n        this.dispatchEvent(new CustomEvent('dialogclosed'));\r\n    }\r\n    cancel1() {\r\n        this.shadowRoot.getElementById('continue').close();\r\n        this.shadowRoot.getElementById('createmeasureDialog').close();\r\n        this.reset();\r\n        this.dispatchEvent(new CustomEvent('dialogclosed'));\r\n    }\r\n}\r\nexports.AddMeasure = AddMeasure;\r\ncustomElements.define('add-measure', AddMeasure);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
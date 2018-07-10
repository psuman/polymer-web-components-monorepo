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
/******/ 		"pkecqmgrid": 0
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
/******/ 	deferredModules.push([1,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../add-measure/src/app.template.html":
/*!********************************************!*\
  !*** ../add-measure/src/app.template.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\r\\n  body {\\r\\n    line-height: normal;\\r\\n    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;\\r\\n  }\\r\\n\\r\\n  paper-icon-button {\\r\\n    height: 44px;\\r\\n    width: 44px;\\r\\n    background: #455a64;\\r\\n    color: white;\\r\\n    box-shadow: 0 5px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\\r\\n    border-radius: 50%;\\r\\n\\r\\n  }\\r\\n\\r\\n  .formelement {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .formgroup {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  @media (min-width: 768px) {\\r\\n    paper-item {\\r\\n      font-size: 16px;\\r\\n      font-weight: 400;\\r\\n      font: 400 16px Arial;\\r\\n    }\\r\\n    #createmeasureDialog {\\r\\n      padding: 25px;\\r\\n      width: 45%;\\r\\n      margin-top: 0em;\\r\\n    }\\r\\n    .formgroup {\\r\\n      width: 100%;\\r\\n      margin-top: 20px;\\r\\n    }\\r\\n\\r\\n    .dropdown {\\r\\n      width: 650px;\\r\\n    }\\r\\n    #continue {\\r\\n      padding: 25px;\\r\\n      width: 55%;\\r\\n      margin-top: 0em;\\r\\n    }\\r\\n    h2 {\\r\\n      margin: 0 0 20px;\\r\\n    }\\r\\n    .content {\\r\\n      color: #3c763d;\\r\\n      font-size: 18px;\\r\\n    }\\r\\n    paper-button {\\r\\n      font-size: 14px;\\r\\n      font-weight: 500;\\r\\n      font-style: normal;\\r\\n      font: 400 13.3333px Arial;\\r\\n\\r\\n      line-height: 36px;\\r\\n      border-radius: 2px;\\r\\n      padding: 0 16px;\\r\\n    }\\r\\n    .submit[enabled] {\\r\\n      color: white;\\r\\n      background-color: #2196f3;\\r\\n    }\\r\\n    .continue\\r\\n    {\\r\\n      color: white;\\r\\n      background-color: #2196f3;\\r\\n    }\\r\\n\\r\\n    .cancel {\\r\\n      background-color: #f44336;\\r\\n      color: white;\\r\\n      margin-left: 20px;\\r\\n\\r\\n    }\\r\\n\\r\\n  }\\r\\n\\r\\n  @media (max-width: 425px) {\\r\\n\\r\\n    paper-item {\\r\\n      font-size: 14px;\\r\\n      font-weight: 400;\\r\\n      font: 400 16px Arial;\\r\\n    }\\r\\n    #createmeasureDialog {\\r\\n      padding: 15px;\\r\\n      width: 100%;\\r\\n      margin-top: 0em;\\r\\n    }\\r\\n    .dropdown {\\r\\n      width: 300px;\\r\\n    }\\r\\n    #continue {\\r\\n      padding: 5px;\\r\\n      border-radius: 2px;\\r\\n      overflow: auto;\\r\\n      outline: 0;\\r\\n      width: 100%;\\r\\n    }\\r\\n    h2 {\\r\\n      margin: 0 0 10px;\\r\\n    }\\r\\n    .content {\\r\\n      color: #3c763d;\\r\\n      font-size: 12px;\\r\\n    }\\r\\n    paper-button {\\r\\n      font-size: 12px;\\r\\n      font-weight: 600;\\r\\n      font-style: normal;\\r\\n      font: 400 10.3333px Arial;\\r\\n      line-height: 26px;\\r\\n      padding: 0 10px;\\r\\n      border-radius: 2px;\\r\\n    }\\r\\n\\r\\n    .submit[enabled] {\\r\\n      color: white;\\r\\n      background-color: #2196f3;\\r\\n    }\\r\\n    .continue\\r\\n    {\\r\\n      color: white;\\r\\n      background-color: #2196f3;\\r\\n    }\\r\\n\\r\\n    .cancel {\\r\\n      background-color: #f44336;\\r\\n      color: white;\\r\\n      margin-left: 8px;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (max-width: 360px) {\\r\\n\\r\\n    paper-item {\\r\\n      font-size: 13px;\\r\\n      font-weight: 400;\\r\\n      font: 400 12px Arial;\\r\\n    }\\r\\n    #createmeasureDialog {\\r\\n      padding: 10px;\\r\\n      width: 100%;\\r\\n      margin-top: 0em;\\r\\n    }\\r\\n\\r\\n    .dropdown {\\r\\n      width: 200px;\\r\\n    }\\r\\n    #continue {\\r\\n      padding: 3px;\\r\\n      border-radius: 2px;\\r\\n      overflow: auto;\\r\\n      outline: 0;\\r\\n      width: 100%;\\r\\n    }\\r\\n    h2 {\\r\\n      margin: 0 0 5px;\\r\\n    }\\r\\n    .content {\\r\\n      color: #3c763d;\\r\\n      font-size: 10px;\\r\\n    }\\r\\n    paper-button {\\r\\n      font-size: 10px;\\r\\n      font-weight: 600;\\r\\n      font-style: normal;\\r\\n      font: 400 9.3333px Arial;\\r\\n      line-height: 25px;\\r\\n      padding: 0 5px;\\r\\n      border-radius: 2px;\\r\\n    }\\r\\n    .submit[enabled] {\\r\\n      color: white;\\r\\n      background-color: #2196f3;\\r\\n    }\\r\\n    .continue\\r\\n    {\\r\\n      color: white;\\r\\n      background-color: #2196f3;\\r\\n    }\\r\\n    .cancel {\\r\\n      background-color: #f44336;\\r\\n      color: white;\\r\\n      margin-left: 6px;\\r\\n    }\\r\\n    paper-input {\\r\\n      padding: 0px\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"gg\\\">\\r\\n<paper-menu-button id=\\\"papermenubutton\\\">\\r\\n  <paper-icon-button icon=\\\"add\\\" slot=\\\"dropdown-trigger\\\">\\r\\n\\r\\n  </paper-icon-button>\\r\\n  <paper-listbox slot=\\\"dropdown-content\\\">\\r\\n    <paper-item on-tap=\\\"createMeasure\\\">New Measure</paper-item>\\r\\n    <paper-item>Upload Measure</paper-item>\\r\\n  </paper-listbox>\\r\\n</paper-menu-button>\\r\\n</div>\\r\\n<paper-dialog id=\\\"createmeasureDialog\\\">\\r\\n  <form id=\\\"form_id\\\" is=\\\"iron-form\\\">\\r\\n    <div class=\\\"formgroup\\\">\\r\\n      <paper-input label=\\\"Measure Name*\\\" value=\\\"{{measureName}}\\\" required auto-validate on-keyup=\\\"isFormValid\\\" invalid=\\\"{{invalidMeasureName}}\\\"></paper-input>\\r\\n\\r\\n    </div>\\r\\n    <div class=\\\"formgroup\\\">\\r\\n\\r\\n      <paper-input label=\\\"eCQM Abbreviated Title*\\\" value=\\\"{{ecqmAbbrevation}}\\\" required auto-validate on-keyup=\\\"isFormValid\\\" invalid=\\\"{{invalidTitle}}\\\"></paper-input>\\r\\n    </div>\\r\\n    <div class=\\\"formgroup\\\">\\r\\n      <paper-dropdown-menu label=\\\"Measure Scoring*\\\" required auto-validate on-selected-item-changed=\\\"isFormValid\\\" invalid=\\\"{{invalidScoring}}\\\"\\r\\n        class=\\\"formelement\\\">\\r\\n        <paper-listbox class=\\\"dropdown\\\" selected=\\\"{{measureScoring}}\\\" attr-for-selected=\\\"name\\\" slot=\\\"dropdown-content\\\">\\r\\n          <paper-item name=\\\"Cohort\\\">Cohort</paper-item>\\r\\n          <paper-item name=\\\"brontosaurus\\\">brontosaurus</paper-item>\\r\\n          <paper-item name=\\\"carcharodontosaurus\\\">carcharodontosaurus</paper-item>\\r\\n          <paper-item name=\\\"diplodocus\\\">diplodocus</paper-item>\\r\\n        </paper-listbox>\\r\\n      </paper-dropdown-menu>\\r\\n    </div>\\r\\n    <div class=\\\"formgroup\\\">\\r\\n      <paper-dropdown-menu label=\\\"Patient-based Measure*\\\"   on-selected-item-changed=\\\"isFormValid\\\" required auto-validate invalid=\\\"{{invalidPatient}}\\\" \\r\\n        class=\\\"formelement\\\">\\r\\n        <paper-listbox class=\\\"dropdown\\\"selected=\\\"{{isPatientbased}}\\\" attr-for-selected=\\\"name\\\" slot=\\\"dropdown-content\\\">\\r\\n          <paper-item name=\\\"Yes\\\">Yes</paper-item>\\r\\n          <paper-item name=\\\"No\\\">No</paper-item>\\r\\n        </paper-listbox>\\r\\n      </paper-dropdown-menu>\\r\\n    </div>\\r\\n\\r\\n\\r\\n    <div style=\\\"padding-top:20px;float:right;\\\">\\r\\n      <paper-button class=\\\"submit\\\" enabled$=\\\"{{!isInvalid}}\\\" disabled$=\\\"{{isInvalid}}\\\" on-click=\\\"submit\\\" raised>submit</paper-button>\\r\\n      <paper-button class=\\\"cancel\\\" on-click=\\\"cancel\\\" raised>cancel</paper-button>\\r\\n    </div>\\r\\n  </form>\\r\\n</paper-dialog>\\r\\n\\r\\n<paper-dialog id=\\\"continue\\\" modal>\\r\\n  <div>\\r\\n    <h2>Confirmation</h2>\\r\\n\\r\\n\\r\\n\\r\\n    <div class=\\\"content\\\">\\r\\n      You have created a new measure\\r\\n      <strong>{{measureName}}</strong>\\r\\n      <br> Please click continue to navigate to the Measure Details page.\\r\\n    </div>\\r\\n\\r\\n\\r\\n    <div style=\\\"padding-top:20px;float:right;\\\">\\r\\n      <paper-button class=\\\"continue\\\" on-click=\\\"continueForward\\\" raised>continue</paper-button>\\r\\n      <paper-button class=\\\"cancel\\\" on-click=\\\"cancel1\\\" raised>cancel</paper-button>\\r\\n    </div>\\r\\n\\r\\n\\r\\n  </div>\\r\\n\\r\\n</paper-dialog>\\r\\n\";\n\n//# sourceURL=webpack:///../add-measure/src/app.template.html?");

/***/ }),

/***/ "../add-measure/src/index.ts":
/*!***********************************!*\
  !*** ../add-measure/src/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst polymer_element_1 = __webpack_require__(/*! @polymer/polymer/polymer-element */ \"../../node_modules/@polymer/polymer/polymer-element.js\");\r\n__webpack_require__(/*! @polymer/iron-icons/iron-icons.js */ \"../../node_modules/@polymer/iron-icons/iron-icons.js\");\r\n__webpack_require__(/*! @polymer/paper-listbox */ \"../../node_modules/@polymer/paper-listbox/paper-listbox.js\");\r\n__webpack_require__(/*! @polymer/paper-icon-button */ \"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js\");\r\n__webpack_require__(/*! @polymer/paper-menu-button */ \"../../node_modules/@polymer/paper-menu-button/paper-menu-button.js\");\r\n__webpack_require__(/*! @polymer/paper-dialog/paper-dialog.js */ \"../../node_modules/@polymer/paper-dialog/paper-dialog.js\");\r\n__webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu.js */ \"../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js\");\r\n__webpack_require__(/*! @polymer/paper-input/paper-input.js */ \"../../node_modules/@polymer/paper-input/paper-input.js\");\r\n__webpack_require__(/*! @polymer/neon-animation/neon-animations.js */ \"../../node_modules/@polymer/neon-animation/neon-animations.js\");\r\n__webpack_require__(/*! @polymer/paper-item/paper-item.js */ \"../../node_modules/@polymer/paper-item/paper-item.js\");\r\n__webpack_require__(/*! @polymer/paper-button */ \"../../node_modules/@polymer/paper-button/paper-button.js\");\r\nconst view = __webpack_require__(/*! ./app.template.html */ \"../add-measure/src/app.template.html\");\r\nclass AddMeasure extends polymer_element_1.PolymerElement {\r\n    constructor() {\r\n        super();\r\n        this.invalidMeasureName = false;\r\n        this.invalidTitle = false;\r\n        this.invalidScoring = false;\r\n        this.invalidPatient = false;\r\n        this.isDirty = false;\r\n        this.isInvalid = true;\r\n        this.isPatientbased = \"\",\r\n            this.measureName = \"\",\r\n            this.ecqmAbbrevation = \"\",\r\n            this.measureScoring = \"\";\r\n        this.isDirty = false;\r\n        this.invalidMeasureName = false;\r\n        this.invalidTitle = false;\r\n        this.invalidScoring = false;\r\n        this.invalidPatient = false;\r\n        this.isInvalid = true;\r\n    }\r\n    static get template() {\r\n        return view;\r\n    }\r\n    createMeasure() {\r\n        this.shadowRoot.getElementById('createmeasureDialog').open();\r\n        this.shadowRoot.getElementById('papermenubutton').opened = false;\r\n        this.dispatchEvent(new CustomEvent('dialogopened'));\r\n    }\r\n    submit() {\r\n        this.shadowRoot.getElementById('continue').open();\r\n    }\r\n    continueForward() {\r\n        this.totalMeasue = {\r\n            \"measureName\": this.measureName,\r\n            \"ecqmAbbrevation\": this.ecqmAbbrevation,\r\n            \"measureScoring\": this.measureScoring,\r\n            \"isPatientbased\": this.isPatientbased,\r\n        };\r\n        console.log(\"enterd in child\" + this.isInvalid);\r\n        this.dispatchEvent(new CustomEvent('submit', { detail: { value: JSON.stringify(this.totalMeasue) } }));\r\n    }\r\n    isFormValid(e) {\r\n        console.log('Form uyf valid');\r\n        if (!this.isDirty) {\r\n            this.invalidMeasureName = true;\r\n            this.invalidTitle = true;\r\n            this.invalidPatient = true;\r\n            this.invalidScoring = true;\r\n            this.isDirty = true;\r\n        }\r\n        console.log(e.target.value);\r\n        if (e.target.value !== '') {\r\n            e.target.invalid = false;\r\n        }\r\n        else {\r\n            e.target.invalid = true;\r\n            this.isInvalid = true;\r\n        }\r\n        if (!this.invalidMeasureName && !this.invalidTitle && !this.invalidPatient && !this.invalidScoring) {\r\n            console.log('Form is valid');\r\n            this.isInvalid = false;\r\n        }\r\n    }\r\n    reset() {\r\n        this.isPatientbased = \"\",\r\n            this.measureName = \"\",\r\n            this.ecqmAbbrevation = \"\",\r\n            this.measureScoring = \"\";\r\n        this.isDirty = false;\r\n        this.invalidMeasureName = false;\r\n        this.invalidTitle = false;\r\n        this.invalidScoring = false;\r\n        this.invalidPatient = false;\r\n        this.isInvalid = true;\r\n    }\r\n    cancel() {\r\n        this.shadowRoot.getElementById('createmeasureDialog').close();\r\n        this.reset();\r\n        this.dispatchEvent(new CustomEvent('dialogclosed'));\r\n    }\r\n    cancel1() {\r\n        this.shadowRoot.getElementById('continue').close();\r\n        this.shadowRoot.getElementById('createmeasureDialog').close();\r\n        this.reset();\r\n        this.dispatchEvent(new CustomEvent('dialogclosed'));\r\n    }\r\n}\r\nexports.AddMeasure = AddMeasure;\r\ncustomElements.define('add-measure', AddMeasure);\r\n\n\n//# sourceURL=webpack:///../add-measure/src/index.ts?");

/***/ }),

/***/ "./src/app.template.html":
/*!*******************************!*\
  !*** ./src/app.template.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\r\\n    * {\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n\\r\\n    div {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    iron-icon {\\r\\n        --iron-icon-fill-color: rgba(0, 0, 0, 0.54);\\r\\n    }\\r\\n\\r\\n    paper-icon-button {\\r\\n        color: #455a64;\\r\\n    }\\r\\n\\r\\n    #headerTable {\\r\\n        border-collapse: collapse;\\r\\n        width: 100%;\\r\\n        border: 1px solid #ddd;\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n    #titleheader {\\r\\n        background-color: white !important;\\r\\n        border: 1px solid #ddd;\\r\\n        background-color: white;\\r\\n        height: 48px;\\r\\n    }\\r\\n\\r\\n    #titleheader>th {\\r\\n        color: rgba(0, 0, 0, 0.87);\\r\\n        font-weight: 500;\\r\\n        font-size: 20px;\\r\\n        font-family: \\\"Helvetica Neue\\\", sans-serif;\\r\\n        padding: 0px 0px 0px 12px;\\r\\n        text-align: left;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n\\r\\n    #titleheader>th>#label {\\r\\n        border-right: 1px solid rgba(0, 0, 0, 0.12);\\r\\n        max-width: 160px;\\r\\n    }\\r\\n\\r\\n    #titleheader>th>#addmeasure {\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    #titleheader>th>#filter {\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    #searchheader {\\r\\n        width : 78%\\r\\n    }\\r\\n\\r\\n    #filterheader {\\r\\n        width : 5%\\r\\n    }\\r\\n\\r\\n    #addmeasureheader {\\r\\n        width : 5%\\r\\n    }\\r\\n\\r\\n    #title {\\r\\n        width : 12%\\r\\n    }\\r\\n\\r\\n    #myTable {\\r\\n        border-collapse: collapse;\\r\\n        width: 100%;\\r\\n        border: 1px solid #ddd;\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n    #myTable th {\\r\\n        text-align: left;\\r\\n        padding: 4px 0px 4px 25px;\\r\\n        color: rgba(0, 0, 0, 0.54);\\r\\n        font-size: 12px;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n\\r\\n    #myTable td {\\r\\n        text-align: left;\\r\\n        padding: 4px 0px 4px 25px;\\r\\n        color: rgba(0, 0, 0, 0.87);\\r\\n        font-size: 14px;\\r\\n        cursor: pointer;\\r\\n        font-family: Roboto, \\\"Helvetica Neue\\\", sans-serif;\\r\\n    }\\r\\n\\r\\n    #myTable tr {\\r\\n        border-bottom: 1px solid #ddd;\\r\\n    }\\r\\n\\r\\n    #myTable tr.header,\\r\\n    #myTable tr:hover {\\r\\n        background-color: whitesmoke;\\r\\n    }\\r\\n\\r\\n    .header {\\r\\n        border: 1px solid #ddd;\\r\\n        background-color: white;\\r\\n        height: 48px;\\r\\n    }\\r\\n\\r\\n    #createmeasure {\\r\\n        --iron-icon-width: 45px;\\r\\n        --iron-icon-height: 45px;\\r\\n        --iron-icon-fill-color: #455a64;\\r\\n        --iron-icon-stroke-color: #455a64;\\r\\n    }\\r\\n\\r\\n    #columns {\\r\\n        --iron-icon-width: 20px;\\r\\n        --iron-icon-height: 50px;\\r\\n        --iron-icon-fill-color: #455a64;\\r\\n        --iron-icon-stroke-color: #455a64;\\r\\n    }\\r\\n\\r\\n    paper-item {\\r\\n        padding: 0px 16px 0px 16px;\\r\\n    }\\r\\n\\r\\n    paper-listbox {\\r\\n        padding: 8px 0px 8px 0px;\\r\\n    }\\r\\n\\r\\n    paper-checkbox {\\r\\n        margin: 0px 0px 0px 0px;\\r\\n        --paper-checkbox-checked-color: #2196f3;\\r\\n        font-size: 15px;\\r\\n    }\\r\\n\\r\\n    #footer {\\r\\n        background-color: whitesmoke;\\r\\n    }\\r\\n\\r\\n    .flex-container {\\r\\n        display: flex;\\r\\n        flex-wrap: nowrap;\\r\\n        float: right;\\r\\n        padding-right: 20px;\\r\\n    }\\r\\n\\r\\n    .flex-container>div {\\r\\n        margin: 10px;\\r\\n        text-align: center;\\r\\n        font-size: 12px;\\r\\n        color: rgba(0, 0, 0, 0.54);\\r\\n    }\\r\\n</style>\\r\\n<div>\\r\\n    <table id=\\\"headerTable\\\">\\r\\n        <tr id=\\\"titleheader\\\">\\r\\n            <th id=\\\"title\\\" data-message=\\\"measureName::string\\\">\\r\\n                <div id=\\\"label\\\">My Measures</div>\\r\\n            </th>\\r\\n            <th id=\\\"searchheader\\\" data-message=\\\"version::string\\\">\\r\\n                <div id=\\\"search\\\">\\r\\n                    <paper-input no-label-float label=\\\"Search...\\\" on-keyup=\\\"search\\\" value=\\\"{{searchValue}}\\\">\\r\\n                        <iron-icon icon=\\\"search\\\" slot=\\\"prefix\\\"></iron-icon>\\r\\n                    </paper-input>\\r\\n                </div>\\r\\n            </th>\\r\\n            <th id=\\\"filterheader\\\">\\r\\n                <div id=\\\"filter\\\">\\r\\n                    <paper-menu-button>\\r\\n                        <paper-icon-button icon=\\\"icons:filter-list\\\" slot=\\\"dropdown-trigger\\\"></paper-icon-button>\\r\\n                        <paper-listbox slot=\\\"dropdown-content\\\">\\r\\n                            <template is=\\\"dom-repeat\\\" items=\\\"{{columns}}\\\">\\r\\n                                <paper-item>\\r\\n                                    <paper-checkbox checked$=\\\"{{item.show}}\\\" on-click=\\\"columnsChange\\\">{{item.name}}</paper-checkbox>\\r\\n                                </paper-item>\\r\\n                            </template>\\r\\n                        </paper-listbox>\\r\\n                    </paper-menu-button>\\r\\n                </div>\\r\\n            </th>\\r\\n            <th id=\\\"addmeasureheader\\\">\\r\\n                <div id=\\\"addmeasure\\\">\\r\\n                    <!--<iron-icon id=\\\"createmeasure\\\" icon=\\\"icons:add-circle\\\" slot=\\\"prefix\\\"></iron-icon>-->\\r\\n                    <add-measure></add-measure>\\r\\n                </div>\\r\\n            </th>\\r\\n        </tr>\\r\\n    </table>\\r\\n</div>\\r\\n<div>\\r\\n    <table id=\\\"myTable\\\">\\r\\n        <tr class=\\\"header\\\">\\r\\n            <template is=\\\"dom-repeat\\\" items=\\\"{{columns}}\\\">\\r\\n                <template is=\\\"dom-if\\\" if=\\\"{{item.show}}\\\">\\r\\n                    <th colspan$=\\\"{{item.colspan}}\\\" data-message$=\\\"{{item.fieldName}}::{{item.type}}::{{item.sortable}}\\\" on-click=\\\"sort\\\">{{item.name}}</th>\\r\\n                </template>\\r\\n            </template>\\r\\n        </tr>\\r\\n        <template is=\\\"dom-repeat\\\" items=\\\"{{data}}\\\" as=\\\"row\\\">\\r\\n            <tr>\\r\\n                <template is=\\\"dom-repeat\\\" items=\\\"{{columns}}\\\">\\r\\n                    <template is=\\\"dom-if\\\" if=\\\"{{__showAndIcon(item.show, item.type)}}\\\">\\r\\n                        <td colspan$=\\\"{{item.colspan}}\\\">\\r\\n                            <paper-icon-button icon$=\\\"{{__getRowData(row,item.fieldName)}}\\\"></paper-icon-button>\\r\\n                        </td>\\r\\n                    </template>\\r\\n                    <template is=\\\"dom-if\\\" if=\\\"{{__showAndString(item.show, item.type)}}\\\">\\r\\n                        <td colspan$=\\\"{{item.colspan}}\\\">{{__getRowData(row,item.fieldName)}}</td>\\r\\n                    </template>\\r\\n                </template>\\r\\n            </tr>\\r\\n        </template>\\r\\n        <tr>\\r\\n            <td id=\\\"footer\\\" colspan=\\\"12\\\">\\r\\n                <div class=\\\"flex-container\\\">\\r\\n                    <div>Items per page: 10</div>\\r\\n                    <div>{{pageStart}}-{{pageEnd}} of {{dataLength}}</div>\\r\\n                    <paper-icon-button on-click=\\\"previousPage\\\" disabled$=\\\"{{isFirstPage}}\\\" icon=\\\"icons:chevron-left\\\"></paper-icon-button>\\r\\n                    <paper-icon-button on-click=\\\"nextPage\\\" disabled$=\\\"{{isLastPage}}\\\" icon=\\\"icons:chevron-right\\\"></paper-icon-button>\\r\\n                </div>\\r\\n            </td>\\r\\n        </tr>\\r\\n    </table>\\r\\n</div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/app.template.html?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst polymer_element_1 = __webpack_require__(/*! @polymer/polymer/polymer-element */ \"../../node_modules/@polymer/polymer/polymer-element.js\");\r\n__webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js */ \"../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js\");\r\n__webpack_require__(/*! @polymer/iron-icons/iron-icons.js */ \"../../node_modules/@polymer/iron-icons/iron-icons.js\");\r\n__webpack_require__(/*! @polymer/paper-input/paper-input.js */ \"../../node_modules/@polymer/paper-input/paper-input.js\");\r\n__webpack_require__(/*! @polymer/iron-icons/editor-icons.js */ \"../../node_modules/@polymer/iron-icons/editor-icons.js\");\r\n__webpack_require__(/*! @polymer/paper-menu-button */ \"../../node_modules/@polymer/paper-menu-button/paper-menu-button.js\");\r\n__webpack_require__(/*! @polymer/paper-listbox/paper-listbox.js */ \"../../node_modules/@polymer/paper-listbox/paper-listbox.js\");\r\n__webpack_require__(/*! @polymer/paper-item/paper-item.js */ \"../../node_modules/@polymer/paper-item/paper-item.js\");\r\n__webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox.js */ \"../../node_modules/@polymer/paper-checkbox/paper-checkbox.js\");\r\n__webpack_require__(/*! @polymer/iron-icons/social-icons.js */ \"../../node_modules/@polymer/iron-icons/social-icons.js\");\r\n__webpack_require__(/*! @polymer/neon-animation/neon-animations.js */ \"../../node_modules/@polymer/neon-animation/neon-animations.js\");\r\n__webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ \"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js\");\r\n__webpack_require__(/*! ../../add-measure/src/index */ \"../add-measure/src/index.ts\");\r\nconst view = __webpack_require__(/*! ./app.template.html */ \"./src/app.template.html\");\r\nclass MeasuresGrid extends polymer_element_1.PolymerElement {\r\n    constructor() {\r\n        super();\r\n        this.data = [];\r\n        this.masterData = [];\r\n        this.sortDirection = false;\r\n        this.searchValue = '';\r\n        this.columns = [];\r\n        this.pageStart = 1;\r\n        this.pageEnd = 10;\r\n        this.isFirstPage = true;\r\n        this.isLastPage = true;\r\n        this.dataLength = 0;\r\n        this.isInvalid = true;\r\n        this.firstInvalid = false;\r\n        this.secondInvalid = false;\r\n        this.isDirty = false;\r\n        this.isInitialized = false;\r\n    }\r\n    ready() {\r\n        super.ready();\r\n    }\r\n    __init() {\r\n        if (!this.isInitialized && this.data && this.data.length > 0) {\r\n            this.masterData = this.data;\r\n            this.dataLength = this.masterData.length;\r\n            this.loadPagination(this.data);\r\n            this.isInitialized = true;\r\n            this.rerenderData(this.data);\r\n        }\r\n    }\r\n    static get properties() {\r\n        return {\r\n            title: {\r\n                type: String\r\n            },\r\n            data: {\r\n                type: Array,\r\n                notify: true,\r\n                reflectToAttribute: true,\r\n                observer: '__init'\r\n            },\r\n            columns: {\r\n                type: Array,\r\n                notify: true,\r\n                reflectToAttribute: true\r\n            }\r\n        };\r\n    }\r\n    loadPagination(dataObj) {\r\n        if (dataObj.length > 10) {\r\n            this.isFirstPage = true;\r\n            this.isLastPage = false;\r\n            this.pageStart = 1;\r\n            this.pageEnd = 10;\r\n        }\r\n        else {\r\n            this.isFirstPage = true;\r\n            this.isLastPage = true;\r\n            this.pageStart = 1;\r\n            this.pageEnd = dataObj.length;\r\n        }\r\n    }\r\n    rerenderData(dataObj) {\r\n        this.dataLength = dataObj.length;\r\n        let tempData = dataObj.slice(this.pageStart - 1, this.pageEnd);\r\n        this.data = [];\r\n        this.data = tempData;\r\n    }\r\n    previousPage() {\r\n        console.log('Previous Page');\r\n        this.pageStart -= 10;\r\n        if (this.masterData.length === this.pageEnd) {\r\n            this.pageEnd = this.pageEnd - (this.pageEnd % 10);\r\n        }\r\n        else {\r\n            this.pageEnd -= 10;\r\n        }\r\n        this.checkPageStatus();\r\n        this.rerenderData(this.masterData);\r\n    }\r\n    nextPage() {\r\n        console.log('Next Page');\r\n        if (this.masterData.length >= (this.pageEnd + 10)) {\r\n            this.pageStart += 10;\r\n            this.pageEnd += 10;\r\n        }\r\n        else {\r\n            this.pageStart += 10;\r\n            this.pageEnd = this.masterData.length;\r\n        }\r\n        this.checkPageStatus();\r\n        this.rerenderData(this.masterData);\r\n    }\r\n    checkPageStatus() {\r\n        if (this.pageEnd === this.data.length) {\r\n            this.isLastPage = true;\r\n        }\r\n        else {\r\n            this.isLastPage = false;\r\n        }\r\n        if (this.pageStart === 1) {\r\n            this.isFirstPage = true;\r\n        }\r\n        else {\r\n            this.isFirstPage = false;\r\n        }\r\n    }\r\n    columnsChange(e) {\r\n        let columnName = e.target.innerText;\r\n        if (!columnName) {\r\n            return;\r\n        }\r\n        let filteredCols = this.columns.filter((each) => {\r\n            if (each.name === columnName.toUpperCase()) {\r\n                each.show = e.target.checked;\r\n            }\r\n            return true;\r\n        });\r\n        this.columns = [];\r\n        this.columns = JSON.parse(JSON.stringify(filteredCols));\r\n        this.loadPagination(this.data);\r\n        this.rerenderData(this.data);\r\n    }\r\n    __getRowData(row, fieldName) {\r\n        return row[fieldName];\r\n    }\r\n    __showAndString(show, type) {\r\n        return show && type === 'string';\r\n    }\r\n    __showAndIcon(show, type) {\r\n        return show && type === 'icon';\r\n    }\r\n    sort(e) {\r\n        let self = this;\r\n        let target = e.target.dataset.message;\r\n        let colName = target.split('::')[0];\r\n        let colType = target.split('::')[1];\r\n        let isSortable = target.split('::')[2];\r\n        if (!isSortable || isSortable === 'false') {\r\n            return;\r\n        }\r\n        if (!target) {\r\n            return;\r\n        }\r\n        let tempData = this.masterData;\r\n        this.sortDirection = !this.sortDirection;\r\n        tempData = tempData.sort((a, b) => {\r\n            var nameA = colType === 'string' ? a[colName].toUpperCase() : a[colName];\r\n            var nameB = colType === 'string' ? b[colName].toUpperCase() : b[colName];\r\n            if (nameA < nameB) {\r\n                return self.sortDirection ? -1 : 1;\r\n            }\r\n            if (nameA > nameB) {\r\n                return self.sortDirection ? 1 : -1;\r\n            }\r\n            return 0;\r\n        });\r\n        this.rerenderData(tempData);\r\n    }\r\n    static get template() {\r\n        return view;\r\n    }\r\n    _submitForm() {\r\n        console.log('submitForm');\r\n    }\r\n    isFormValid(e) {\r\n        if (!this.isDirty) {\r\n            this.firstInvalid = true;\r\n            this.secondInvalid = true;\r\n            this.isDirty = true;\r\n        }\r\n        if (e.target.value !== '') {\r\n            e.target.invalid = false;\r\n        }\r\n        else {\r\n            e.target.invalid = true;\r\n            this.isInvalid = true;\r\n        }\r\n        if (!this.firstInvalid && !this.secondInvalid) {\r\n            console.log('Form is valid');\r\n            this.isInvalid = false;\r\n        }\r\n    }\r\n    reset() {\r\n        this.isDirty = false;\r\n        this.firstInvalid = false;\r\n        this.secondInvalid = false;\r\n        this.isInvalid = true;\r\n    }\r\n    search() {\r\n        let searchVal = this.searchValue.toUpperCase();\r\n        if (searchVal === '') {\r\n            this.loadPagination(this.masterData);\r\n            this.rerenderData(this.masterData);\r\n            return;\r\n        }\r\n        let tempData = this.masterData.filter(each => {\r\n            let hasFound = false;\r\n            for (let i in each) {\r\n                if (each[i] && each[i].toUpperCase().indexOf(searchVal) != -1) {\r\n                    hasFound = true;\r\n                    break;\r\n                }\r\n            }\r\n            return hasFound;\r\n        });\r\n        this.loadPagination(tempData);\r\n        this.rerenderData(tempData);\r\n    }\r\n}\r\nexports.MeasuresGrid = MeasuresGrid;\r\ncustomElements.define('pk-ecqm-grid', MeasuresGrid);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ 1:
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */\"./src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/index?");

/***/ })

/******/ });
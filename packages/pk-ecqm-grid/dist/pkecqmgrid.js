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

eval("module.exports = \"<style>\\n  body {\\n    line-height: normal;\\n    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;\\n    text-align: center;\\n  }\\n\\n  paper-icon-button {\\n    height: 44px;\\n    width: 44px;\\n    background: #455a64;\\n    color: white;\\n    box-shadow: 0 5px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\\n    border-radius: 50%;\\n\\n  }\\n\\n  .formelement {\\n    width: 100%;\\n  }\\n\\n  .formgroup {\\n    width: 100%;\\n  }\\n\\n\\n\\n  @media (min-width: 768px) {\\n    paper-item {\\n      font-size: 16px;\\n      font-weight: 400;\\n      font: 400 16px Arial;\\n    }\\n    #createmeasureDialog {\\n      padding: 25px;\\n      width: 45%;\\n      margin-top: 0em;\\n    }\\n    .formgroup {\\n      width: 100%;\\n      margin-top: 20px;\\n    }\\n    .custom2 {\\n      width: 100%;\\n    }\\n    .dropdown {\\n      width: 360px;\\n    }\\n  }\\n\\n  #continue {\\n    padding: 25px;\\n    width: 55%;\\n    margin-top: 0em;\\n  }\\n\\n  h2 {\\n    margin: 0 0 20px;\\n  }\\n\\n  .content {\\n    color: #3c763d;\\n    font-size: 18px;\\n  }\\n\\n  paper-button {\\n    font-size: 14px;\\n    font-weight: 500;\\n    font-style: normal;\\n    font: 400 13.3333px Arial;\\n\\n    line-height: 36px;\\n    border-radius: 2px;\\n    padding: 0 16px;\\n  }\\n\\n  .submit[enabled] {\\n    color: white;\\n    background-color: #2196f3;\\n  }\\n\\n  .continue {\\n    color: white;\\n    background-color: #2196f3;\\n  }\\n\\n  .cancel {\\n    background-color: #f44336;\\n    color: white;\\n    margin-left: 20px;\\n\\n  }\\n\\n\\n  @media (max-width: 425px) {\\n\\n    paper-item {\\n      font-size: 14px;\\n      font-weight: 400;\\n      font: 400 16px Arial;\\n    }\\n    #createmeasureDialog {\\n      padding: 15px;\\n      width: 100%;\\n      margin-top: 0em;\\n    }\\n    .dropdown {\\n      width: 300px;\\n    }\\n    #continue {\\n      padding: 5px;\\n      border-radius: 2px;\\n      overflow: auto;\\n      outline: 0;\\n      width: 100%;\\n    }\\n    h2 {\\n      margin: 0 0 10px;\\n    }\\n\\n    paper-dropdown-menu {\\n      position: absolute !important;\\n      top: 8px !important;\\n      right: 8px !important;\\n    }\\n    ;\\n    .content {\\n      color: #3c763d;\\n      font-size: 12px;\\n    }\\n    paper-button {\\n      font-size: 12px;\\n      font-weight: 600;\\n      font-style: normal;\\n      font: 400 10.3333px Arial;\\n      line-height: 26px;\\n      padding: 0 10px;\\n      border-radius: 2px;\\n    }\\n\\n    .submit[enabled] {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n    .continue {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n\\n    .cancel {\\n      background-color: #f44336;\\n      color: white;\\n      margin-left: 8px;\\n    }\\n  }\\n\\n  @media (max-width: 360px) {\\n\\n    paper-item {\\n      font-size: 13px;\\n      font-weight: 400;\\n      font: 400 12px Arial;\\n    }\\n    #createmeasureDialog {\\n      padding: 10px;\\n      width: 100%;\\n      margin-top: 0em;\\n    }\\n\\n    .dropdown {\\n      width: 200px;\\n    }\\n    #continue {\\n      padding: 3px;\\n      border-radius: 2px;\\n      overflow: auto;\\n      outline: 0;\\n      width: 100%;\\n    }\\n    h2 {\\n      margin: 0 0 5px;\\n    }\\n    .content {\\n      color: #3c763d;\\n      font-size: 10px;\\n    }\\n    paper-button {\\n      font-size: 10px;\\n      font-weight: 600;\\n      font-style: normal;\\n      font: 400 9.3333px Arial;\\n      line-height: 25px;\\n      padding: 0 5px;\\n      border-radius: 2px;\\n    }\\n    .submit[enabled] {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n    .continue {\\n      color: white;\\n      background-color: #2196f3;\\n    }\\n    .cancel {\\n      background-color: #f44336;\\n      color: white;\\n      margin-left: 6px;\\n    }\\n \\n  }\\n\\n  paper-menu-button {\\n    float : right;\\n  }\\n</style>\\n   <style is=\\\"custom-style\\\">\\n\\n    paper-input{\\n   --paper-input-container-focus-color: #455a64;\\n}\\n</style>\\n\\n<div class=\\\"gg\\\">\\n  <paper-menu-button on-tap=\\\"triggerred\\\" horizontal-align=\\\"right\\\" id=\\\"papermenubutton\\\">\\n    <paper-icon-button icon=\\\"add\\\" slot=\\\"dropdown-trigger\\\">\\n\\n    </paper-icon-button>\\n    <paper-listbox slot=\\\"dropdown-content\\\">\\n      <paper-item on-tap=\\\"createMeasure\\\">New Measure</paper-item>\\n      <paper-item>Upload Measure</paper-item>\\n    </paper-listbox>\\n  </paper-menu-button>\\n</div>\\n<paper-dialog id=\\\"createmeasureDialog\\\">\\n  <form id=\\\"form_id\\\" is=\\\"iron-form\\\">\\n    <div class=\\\"formgroup\\\">\\n      <paper-input  label=\\\"Measure Name*\\\" value=\\\"{{measureName}}\\\" required auto-validate on-keyup=\\\"isFormValid\\\" invalid=\\\"{{invalidMeasureName}}\\\"></paper-input>\\n\\n    </div>\\n    <div class=\\\"formgroup\\\">\\n\\n      <paper-input label=\\\"eCQM Abbreviated Title*\\\" value=\\\"{{ecqmAbbrevation}}\\\" required auto-validate on-keyup=\\\"isFormValid\\\" invalid=\\\"{{invalidTitle}}\\\"></paper-input>\\n    </div>\\n    <div class=\\\"formgroup\\\">\\n      <paper-dropdown-menu class=\\\"custom2\\\" label=\\\"Measure Scoring*\\\" required auto-validate on-selected-item-changed=\\\"isFormValid\\\"\\n        invalid=\\\"{{invalidScoring}}\\\" class=\\\"formelement\\\">\\n        <paper-listbox class=\\\"custom2\\\" selected=\\\"{{measureScoring}}\\\" attr-for-selected=\\\"name\\\" slot=\\\"dropdown-content\\\">\\n          <paper-item name=\\\"Cohort\\\">Cohort</paper-item>\\n          <paper-item name=\\\"brontosaurus\\\">brontosaurus</paper-item>\\n          <paper-item name=\\\"carcharodontosaurus\\\">carcharodontosaurus</paper-item>\\n          <paper-item name=\\\"diplodocus\\\">diplodocus</paper-item>\\n        </paper-listbox>\\n      </paper-dropdown-menu>\\n\\n    </div>\\n    <div class=\\\"formgroup\\\">\\n      <paper-dropdown-menu label=\\\"Patient-based Measure*\\\" on-selected-item-changed=\\\"isFormValid\\\" required auto-validate invalid=\\\"{{invalidPatient}}\\\"\\n        class=\\\"formelement\\\">\\n        <paper-listbox class=\\\"dropdown\\\" selected=\\\"{{isPatientbased}}\\\" attr-for-selected=\\\"name\\\" slot=\\\"dropdown-content\\\">\\n          <paper-item name=\\\"Yes\\\">Yes</paper-item>\\n          <paper-item name=\\\"No\\\">No</paper-item>\\n        </paper-listbox>\\n      </paper-dropdown-menu>\\n    </div>\\n\\n\\n    <div style=\\\"padding-top:20px;float:right;\\\">\\n      <paper-button class=\\\"submit\\\" enabled$=\\\"{{!isInvalid}}\\\" disabled$=\\\"{{isInvalid}}\\\" on-click=\\\"submit\\\" raised>submit</paper-button>\\n      <paper-button class=\\\"cancel\\\" on-click=\\\"cancel\\\" raised>cancel</paper-button>\\n    </div>\\n  </form>\\n</paper-dialog>\\n\\n<paper-dialog id=\\\"continue\\\" modal>\\n  <div>\\n    <h2>Confirmation</h2>\\n\\n\\n\\n    <div class=\\\"content\\\">\\n      You have created a new measure\\n      <strong>{{measureName}}</strong>\\n      <br> Please click continue to navigate to the Measure Details page.\\n    </div>\\n\\n\\n    <div style=\\\"padding-top:20px;float:right;\\\">\\n      <paper-button class=\\\"continue\\\" on-click=\\\"continueForward\\\" raised>continue</paper-button>\\n      <paper-button class=\\\"cancel\\\" on-click=\\\"cancel1\\\" raised>cancel</paper-button>\\n    </div>\\n\\n\\n  </div>\\n\\n</paper-dialog>\";\n\n//# sourceURL=webpack:///../add-measure/src/app.template.html?");

/***/ }),

/***/ "../add-measure/src/index.ts":
/*!***********************************!*\
  !*** ../add-measure/src/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst polymer_element_1 = __webpack_require__(/*! @polymer/polymer/polymer-element */ \"../../node_modules/@polymer/polymer/polymer-element.js\");\n__webpack_require__(/*! @polymer/iron-icons/iron-icons.js */ \"../../node_modules/@polymer/iron-icons/iron-icons.js\");\n__webpack_require__(/*! @polymer/paper-listbox */ \"../../node_modules/@polymer/paper-listbox/paper-listbox.js\");\n__webpack_require__(/*! @polymer/paper-icon-button */ \"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js\");\n__webpack_require__(/*! @polymer/paper-menu-button */ \"../../node_modules/@polymer/paper-menu-button/paper-menu-button.js\");\n__webpack_require__(/*! @polymer/paper-dialog/paper-dialog.js */ \"../../node_modules/@polymer/paper-dialog/paper-dialog.js\");\n__webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu.js */ \"../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js\");\n__webpack_require__(/*! @polymer/paper-input/paper-input.js */ \"../../node_modules/@polymer/paper-input/paper-input.js\");\n__webpack_require__(/*! @polymer/neon-animation/neon-animations.js */ \"../../node_modules/@polymer/neon-animation/neon-animations.js\");\n__webpack_require__(/*! @polymer/paper-item/paper-item.js */ \"../../node_modules/@polymer/paper-item/paper-item.js\");\n__webpack_require__(/*! @polymer/paper-button */ \"../../node_modules/@polymer/paper-button/paper-button.js\");\nconst view = __webpack_require__(/*! ./app.template.html */ \"../add-measure/src/app.template.html\");\nclass AddMeasure extends polymer_element_1.PolymerElement {\n    constructor() {\n        super();\n        this.invalidMeasureName = false;\n        this.invalidTitle = false;\n        this.invalidScoring = false;\n        this.invalidPatient = false;\n        this.isDirty = false;\n        this.isInvalid = true;\n        this.isPatientbased = \"\",\n            this.measureName = \"\",\n            this.ecqmAbbrevation = \"\",\n            this.measureScoring = \"\";\n        this.isDirty = false;\n        this.invalidMeasureName = false;\n        this.invalidTitle = false;\n        this.invalidScoring = false;\n        this.invalidPatient = false;\n        this.isInvalid = true;\n    }\n    static get template() {\n        return view;\n    }\n    createMeasure() {\n        this.shadowRoot.getElementById('createmeasureDialog').open();\n        this.shadowRoot.getElementById('papermenubutton').opened = false;\n        this.dispatchEvent(new CustomEvent('dialogopened'));\n    }\n    submit() {\n        this.shadowRoot.getElementById('continue').open();\n    }\n    continueForward() {\n        this.totalMeasue = {\n            \"measureName\": this.measureName,\n            \"ecqmAbbrevation\": this.ecqmAbbrevation,\n            \"measureScoring\": this.measureScoring,\n            \"isPatientbased\": this.isPatientbased,\n        };\n        this.dispatchEvent(new CustomEvent('submit', { detail: { value: JSON.stringify(this.totalMeasue) } }));\n        this.cancel1();\n    }\n    isFormValid(e) {\n        if (!this.isDirty) {\n            this.invalidMeasureName = true;\n            this.invalidTitle = true;\n            this.invalidPatient = true;\n            this.invalidScoring = true;\n            this.isDirty = true;\n        }\n        console.log(e.target.value);\n        if (e.target.value !== '') {\n            e.target.invalid = false;\n        }\n        else {\n            e.target.invalid = true;\n            this.isInvalid = true;\n        }\n        if (!this.invalidMeasureName && !this.invalidTitle && !this.invalidPatient && !this.invalidScoring) {\n            this.isInvalid = false;\n        }\n    }\n    reset() {\n        this.isPatientbased = \"\",\n            this.measureName = \"\",\n            this.ecqmAbbrevation = \"\",\n            this.measureScoring = \"\";\n        this.isDirty = false;\n        this.invalidMeasureName = false;\n        this.invalidTitle = false;\n        this.invalidScoring = false;\n        this.invalidPatient = false;\n        this.isInvalid = true;\n    }\n    cancel() {\n        this.shadowRoot.getElementById('createmeasureDialog').close();\n        this.reset();\n        this.dispatchEvent(new CustomEvent('dialogclosed'));\n    }\n    cancel1() {\n        this.shadowRoot.getElementById('continue').close();\n        this.shadowRoot.getElementById('createmeasureDialog').close();\n        this.reset();\n        this.dispatchEvent(new CustomEvent('dialogclosed'));\n    }\n}\nexports.AddMeasure = AddMeasure;\ncustomElements.define('add-measure', AddMeasure);\n\n\n//# sourceURL=webpack:///../add-measure/src/index.ts?");

/***/ }),

/***/ "./src/app.template.html":
/*!*******************************!*\
  !*** ./src/app.template.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    * {\\n        box-sizing: border-box;\\n    }\\n\\n    div {\\n        display: block;\\n    }\\n\\n    iron-icon {\\n        --iron-icon-fill-color: rgba(0, 0, 0, 0.54);\\n    }\\n\\n    paper-icon-button {\\n        color: #455a64;\\n    }\\n\\n    #headerTable {\\n        border-collapse: collapse;\\n        width: 100%;\\n        border: 1px solid #ddd;\\n        font-size: 18px;\\n    }\\n\\n    #titleheader {\\n        background-color: white !important;\\n        border: 1px solid #ddd;\\n        background-color: white;\\n        height: 48px;\\n    }\\n\\n    #titleheader>th {\\n        color: rgba(0, 0, 0, 0.87);\\n        font-weight: 500;\\n        font-size: 20px;\\n        font-family: \\\"Helvetica Neue\\\", sans-serif;\\n        padding: 0px 0px 0px 12px;\\n        text-align: left;\\n        cursor: pointer;\\n    }\\n\\n    #titleheader>th>#label {\\n        border-right: 1px solid rgba(0, 0, 0, 0.12);\\n        max-width: 160px;\\n    }\\n\\n    #titleheader>th>#filter {\\n        text-align: center;\\n    }\\n\\n    #searchheader {\\n        width : 78%\\n    }\\n\\n    #filterheader {\\n        width : 5%\\n    }\\n\\n    #addmeasureheader {\\n        width : 5%\\n    }\\n\\n    #title {\\n        width : 12%\\n    }\\n\\n    #myTable {\\n        border-collapse: collapse;\\n        width: 100%;\\n        border: 1px solid #ddd;\\n        font-size: 18px;\\n    }\\n\\n    #myTable th {\\n        text-align: left;\\n        padding: 4px 0px 4px 25px;\\n        color: rgba(0, 0, 0, 0.54);\\n        font-size: 12px;\\n        cursor: pointer;\\n    }\\n\\n    #myTable td {\\n        text-align: left;\\n        padding: 4px 0px 4px 25px;\\n        color: rgba(0, 0, 0, 0.87);\\n        font-size: 14px;\\n        cursor: pointer;\\n        font-family: Roboto, \\\"Helvetica Neue\\\", sans-serif;\\n    }\\n\\n    #myTable tr {\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    #myTable tr.header,\\n    #myTable tr:hover {\\n        background-color: whitesmoke;\\n    }\\n\\n    .header {\\n        border: 1px solid #ddd;\\n        background-color: white;\\n        height: 48px;\\n    }\\n\\n    #createmeasure {\\n        --iron-icon-width: 45px;\\n        --iron-icon-height: 45px;\\n        --iron-icon-fill-color: #455a64;\\n        --iron-icon-stroke-color: #455a64;\\n    }\\n\\n    #columns {\\n        --iron-icon-width: 20px;\\n        --iron-icon-height: 50px;\\n        --iron-icon-fill-color: #455a64;\\n        --iron-icon-stroke-color: #455a64;\\n    }\\n\\n    paper-item {\\n        padding: 0px 16px 0px 16px;\\n    }\\n\\n    paper-listbox {\\n        padding: 8px 0px 8px 0px;\\n    }\\n\\n    paper-checkbox {\\n        margin: 0px 0px 0px 0px;\\n        --paper-checkbox-checked-color: #2196f3;\\n\\t\\t--paper-checkbox-label-color : rgba(0, 0, 0, 0.87);\\n\\t\\t--paper-checkbox-unchecked-color : rgba(0, 0, 0, 0.54);\\n\\t\\tfont-weight : 500;\\n        font-size: 15px;\\n    }\\n\\n    #footer {\\n        background-color: whitesmoke;\\n    }\\n\\n    .flex-container {\\n        display: flex;\\n        flex-wrap: nowrap;\\n        float: right;\\n        padding-right: 20px;\\n    }\\n\\n    .flex-container>div {\\n        margin: 10px;\\n        text-align: center;\\n        font-size: 12px;\\n        color: rgba(0, 0, 0, 0.54);\\n    }\\n\\t\\n\\tpaper-input {\\n\\t\\t--paper-input-container-focus-color : #455a64;\\n\\t}\\n</style>\\n<div>\\n    <table id=\\\"headerTable\\\">\\n        <tr id=\\\"titleheader\\\">\\n            <th id=\\\"title\\\" data-message=\\\"measureName::string\\\">\\n                <div id=\\\"label\\\">My Measures</div>\\n            </th>\\n            <th id=\\\"searchheader\\\" data-message=\\\"version::string\\\">\\n                <div id=\\\"search\\\">\\n                    <paper-input no-label-float label=\\\"Search...\\\" on-keyup=\\\"search\\\" value=\\\"{{searchValue}}\\\">\\n                        <iron-icon icon=\\\"search\\\" slot=\\\"prefix\\\"></iron-icon>\\n                    </paper-input>\\n                </div>\\n            </th>\\n            <th id=\\\"filterheader\\\">\\n                <div id=\\\"filter\\\">\\n                    <paper-menu-button horizontal-align = \\\"right\\\" ignore-select>\\n                        <paper-icon-button icon=\\\"icons:filter-list\\\" slot=\\\"dropdown-trigger\\\"></paper-icon-button>\\n                        <paper-listbox slot=\\\"dropdown-content\\\" multi>\\n                            <template is=\\\"dom-repeat\\\" items=\\\"{{columns}}\\\">\\n                                <paper-item>\\n                                    <paper-checkbox checked$=\\\"{{item.show}}\\\" on-click=\\\"columnsChange\\\">{{item.name}}</paper-checkbox>\\n                                </paper-item>\\n                            </template>\\n                        </paper-listbox>\\n                    </paper-menu-button>\\n                </div>\\n            </th>\\n            <th id=\\\"addmeasureheader\\\">\\n                <div id=\\\"addmeasure\\\">\\n                    <!--<iron-icon id=\\\"createmeasure\\\" icon=\\\"icons:add-circle\\\" slot=\\\"prefix\\\"></iron-icon>-->\\n                    <add-measure id=\\\"addmeasuredom\\\"></add-measure>\\n                </div>\\n            </th>\\n        </tr>\\n    </table>\\n</div>\\n<div>\\n    <table id=\\\"myTable\\\">\\n        <tr class=\\\"header\\\">\\n            <template is=\\\"dom-repeat\\\" items=\\\"{{columns}}\\\">\\n                <template is=\\\"dom-if\\\" if=\\\"{{item.show}}\\\">\\n                    <th colspan$=\\\"{{item.colspan}}\\\" data-message$=\\\"{{item.fieldName}}::{{item.type}}::{{item.sortable}}\\\" on-click=\\\"sort\\\">{{item.name}}</th>\\n                </template>\\n            </template>\\n        </tr>\\n        <template is=\\\"dom-repeat\\\" items=\\\"{{pageData}}\\\" as=\\\"row\\\">\\n            <tr>\\n                <template is=\\\"dom-repeat\\\" items=\\\"{{columns}}\\\">\\n                    <template is=\\\"dom-if\\\" if=\\\"{{__showAndIcon(item.show, item.type)}}\\\">\\n                        <td colspan$=\\\"{{item.colspan}}\\\">\\n                            <paper-icon-button icon$=\\\"{{__getRowData(row,item.fieldName)}}\\\"></paper-icon-button>\\n                        </td>\\n                    </template>\\n                    <template is=\\\"dom-if\\\" if=\\\"{{__showAndString(item.show, item.type)}}\\\">\\n                        <td colspan$=\\\"{{item.colspan}}\\\">{{__getRowData(row,item.fieldName)}}</td>\\n                    </template>\\n                </template>\\n            </tr>\\n        </template>\\n        <tr>\\n            <td id=\\\"footer\\\" colspan=\\\"12\\\">\\n                <div class=\\\"flex-container\\\">\\n                    <div>Items per page: 10</div>\\n                    <div>{{pageStart}}-{{pageEnd}} of {{dataLength}}</div>\\n                    <paper-icon-button on-click=\\\"previousPage\\\" disabled$=\\\"{{isFirstPage}}\\\" icon=\\\"icons:chevron-left\\\"></paper-icon-button>\\n                    <paper-icon-button on-click=\\\"nextPage\\\" disabled$=\\\"{{isLastPage}}\\\" icon=\\\"icons:chevron-right\\\"></paper-icon-button>\\n                </div>\\n            </td>\\n        </tr>\\n    </table>\\n</div>\\n</div>\";\n\n//# sourceURL=webpack:///./src/app.template.html?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst polymer_element_1 = __webpack_require__(/*! @polymer/polymer/polymer-element */ \"../../node_modules/@polymer/polymer/polymer-element.js\");\n__webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js */ \"../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js\");\n__webpack_require__(/*! @polymer/iron-icons/iron-icons.js */ \"../../node_modules/@polymer/iron-icons/iron-icons.js\");\n__webpack_require__(/*! @polymer/paper-input/paper-input.js */ \"../../node_modules/@polymer/paper-input/paper-input.js\");\n__webpack_require__(/*! @polymer/iron-icons/editor-icons.js */ \"../../node_modules/@polymer/iron-icons/editor-icons.js\");\n__webpack_require__(/*! @polymer/paper-menu-button */ \"../../node_modules/@polymer/paper-menu-button/paper-menu-button.js\");\n__webpack_require__(/*! @polymer/paper-listbox/paper-listbox.js */ \"../../node_modules/@polymer/paper-listbox/paper-listbox.js\");\n__webpack_require__(/*! @polymer/paper-item/paper-item.js */ \"../../node_modules/@polymer/paper-item/paper-item.js\");\n__webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox.js */ \"../../node_modules/@polymer/paper-checkbox/paper-checkbox.js\");\n__webpack_require__(/*! @polymer/iron-icons/social-icons.js */ \"../../node_modules/@polymer/iron-icons/social-icons.js\");\n__webpack_require__(/*! @polymer/neon-animation/neon-animations.js */ \"../../node_modules/@polymer/neon-animation/neon-animations.js\");\n__webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ \"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js\");\n__webpack_require__(/*! ../../add-measure/src/index */ \"../add-measure/src/index.ts\");\nconst view = __webpack_require__(/*! ./app.template.html */ \"./src/app.template.html\");\nclass MeasuresGrid extends polymer_element_1.PolymerElement {\n    constructor() {\n        super();\n        this.data = [];\n        this.masterData = [];\n        this.pageData = [];\n        this.sortDirection = false;\n        this.searchValue = '';\n        this.columns = [];\n        this.pageStart = 1;\n        this.pageEnd = 10;\n        this.isFirstPage = true;\n        this.isLastPage = true;\n        this.dataLength = 0;\n        this.isInitialized = false;\n    }\n    ready() {\n        super.ready();\n        this.$.addmeasuredom.addEventListener('submit', e => {\n            this.dispatchEvent(new CustomEvent('add-measure-submit', e));\n        });\n        this.$.addmeasuredom.addEventListener('dialogclosed', e => {\n            this.dispatchEvent(new CustomEvent('add-measure-close', e));\n        });\n        this.$.addmeasuredom.addEventListener('dialogopened', e => {\n            this.dispatchEvent(new CustomEvent('add-measure-opened', e));\n        });\n    }\n    static get properties() {\n        return {\n            title: {\n                type: String\n            },\n            data: {\n                type: Array,\n                notify: true,\n                reflectToAttribute: true,\n                observer: '__init'\n            },\n            columns: {\n                type: Array,\n                notify: true,\n                reflectToAttribute: true\n            }\n        };\n    }\n    loadPagination(dataObj) {\n        this.dataLength = dataObj.length;\n        if (dataObj.length > 10) {\n            this.isFirstPage = true;\n            this.isLastPage = false;\n            this.pageStart = 1;\n            this.pageEnd = 10;\n        }\n        else {\n            this.isFirstPage = true;\n            this.isLastPage = true;\n            this.pageStart = 1;\n            this.pageEnd = dataObj.length;\n        }\n    }\n    /*\n    * Should render the data and reload pagination\n    */\n    rerenderData(dataObj) {\n        if (this.dataLength !== dataObj.length) { //if the data size is changed reload pagination\n            this.loadPagination(dataObj);\n        }\n        let tempData = dataObj.slice(this.pageStart - 1, this.pageEnd);\n        this.pageData = [];\n        this.pageData = tempData;\n    }\n    previousPage() {\n        this.pageStart -= 10;\n        if (this.isLastPage) {\n            this.pageEnd = this.pageEnd - (this.pageEnd % 10);\n            this.isLastPage = false;\n        }\n        else {\n            this.pageEnd -= 10;\n        }\n        if (this.pageStart == 1) {\n            this.isFirstPage = true;\n        }\n        this.rerenderData(this.data);\n    }\n    nextPage() {\n        this.pageStart += 10;\n        this.pageEnd += 10;\n        if (this.data.length <= this.pageEnd) { //if last page\n            this.pageEnd = this.data.length;\n            this.isLastPage = true;\n        }\n        this.isFirstPage = false;\n        this.rerenderData(this.data);\n    }\n    columnsChange(e) {\n        let columnName = e.target.innerText;\n        if (!columnName) {\n            return;\n        }\n        let filteredCols = this.columns.filter((each) => {\n            if (each.name === columnName.toUpperCase()) {\n                each.show = e.target.checked;\n            }\n            return true;\n        });\n        this.columns = [];\n        this.columns = JSON.parse(JSON.stringify(filteredCols));\n        //this.loadPagination(this.data);\n        //this.rerenderData(this.data);\n    }\n    __init() {\n        if (!this.isInitialized && this.data && this.data.length > 0) {\n            this.masterData = this.data;\n            this.pageData = this.data;\n            this.loadPagination(this.data);\n            this.isInitialized = true;\n            this.rerenderData(this.data);\n        }\n    }\n    __getRowData(row, fieldName) {\n        return row[fieldName];\n    }\n    __showAndString(show, type) {\n        return show && type === 'string';\n    }\n    __showAndIcon(show, type) {\n        return show && type === 'icon';\n    }\n    sort(e) {\n        let self = this;\n        let target = e.target.dataset.message;\n        let colName = target.split('::')[0];\n        let colType = target.split('::')[1];\n        let isSortable = target.split('::')[2];\n        if (!isSortable || isSortable === 'false') {\n            return;\n        }\n        if (!target) {\n            return;\n        }\n        let tempData = this.data;\n        this.sortDirection = !this.sortDirection;\n        tempData = tempData.sort((a, b) => {\n            var nameA = colType === 'string' ? a[colName].toUpperCase() : a[colName];\n            var nameB = colType === 'string' ? b[colName].toUpperCase() : b[colName];\n            if (nameA < nameB) {\n                return self.sortDirection ? -1 : 1;\n            }\n            if (nameA > nameB) {\n                return self.sortDirection ? 1 : -1;\n            }\n            return 0;\n        });\n        this.rerenderData(tempData);\n    }\n    static get template() {\n        return view;\n    }\n    search() {\n        let searchVal = this.searchValue.toUpperCase();\n        if (searchVal === '') {\n            this.data = this.masterData;\n            this.loadPagination(this.masterData);\n            this.rerenderData(this.masterData);\n            return;\n        }\n        this.data = this.masterData.filter(each => {\n            let hasFound = false;\n            for (let i in each) {\n                if (each[i] && each[i].toUpperCase().indexOf(searchVal) != -1) {\n                    hasFound = true;\n                    break;\n                }\n            }\n            return hasFound;\n        });\n        this.loadPagination(this.data);\n        this.rerenderData(this.data);\n    }\n}\nexports.MeasuresGrid = MeasuresGrid;\ncustomElements.define('pk-ecqm-grid', MeasuresGrid);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
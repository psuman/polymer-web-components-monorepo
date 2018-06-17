"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polymer_element_1 = require("@polymer/polymer/polymer-element");
const view = require("./app.template.html");
class MyApp3 extends polymer_element_1.Element {
    constructor() {
        super();
    }
    static get template() {
        return view;
    }
}
exports.MyApp3 = MyApp3;
customElements.define('my-app3', MyApp3);
//# sourceMappingURL=myapp3.js.map
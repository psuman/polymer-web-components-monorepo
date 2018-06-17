"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var polymer_element_1 = require("@polymer/polymer/polymer-element");
var view = require("./app.template.html");
var MyApp3 = /** @class */ (function (_super) {
    __extends(MyApp3, _super);
    function MyApp3() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MyApp3, "template", {
        get: function () {
            return view;
        },
        enumerable: true,
        configurable: true
    });
    return MyApp3;
}(polymer_element_1.Element));
exports.MyApp3 = MyApp3;
customElements.define('my-app3', MyApp3);
//# sourceMappingURL=myapp3.js.map
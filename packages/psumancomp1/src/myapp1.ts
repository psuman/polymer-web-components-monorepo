import { Element as PolymerElement } from '@polymer/polymer/polymer-element';

import * as view from './app.template.html';

export class MyApp1 extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        return view;
    }
}

customElements.define('my-app1', MyApp1);

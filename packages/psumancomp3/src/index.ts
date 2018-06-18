import { PolymerElement } from '@polymer/polymer/polymer-element';

import * as view from './app.template.html';

export class MyApp3 extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        return view;
    }
}

customElements.define('my-app3', MyApp3);

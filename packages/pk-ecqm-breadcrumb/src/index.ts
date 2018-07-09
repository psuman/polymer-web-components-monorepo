import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import * as view from './app.template.html';

export class BreadCrumbs extends PolymerElement {
    public currentPage: string = "";
    public names: Array<string> = [];
    public isHome:boolean = true;

    constructor() {
        super();
    }

    static get template() {
        return view;
    }

    _pageChanged(newValue) {
        if(newValue !== 'Home'){
            this.isHome = false;
        }
        else{
            this.isHome = true;
        }
    }
    static get properties() {
        return {
            currentPage: {
                type: String,
                observer: '_pageChanged'
            },
            names: {
                type: Array,

            }
        };

    }

}

customElements.define('pk-ecqm-breadcrumbs', BreadCrumbs);

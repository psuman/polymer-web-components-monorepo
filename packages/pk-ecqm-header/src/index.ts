import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import * as view from './app.template.html';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/paper-icon-button';
import '@polymer/paper-item/paper-item.js'
import '@polymer/paper-listbox';
import '@polymer/paper-card';
import '@polymer/paper-menu-button';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';

export class Header extends PolymerElement {
    public name: string = "";
    shadowRoot: any;
    notifications: Array<any> = [];
    openDialog() {
        this.shadowRoot.getElementById('model').open();
    }

    constructor() {
        super();
    }


    static get template() {
        return view;
    }


    static get properties() {
        return {
            notifications: {
                type: Array,
            },
            name: {
                type: String,
            }
        };

    }
    shownotifications() {
        var shownotification = this.shadowRoot.getElementById('dropdown-content2');

        if (shownotification.style.display == "none") {
            shownotification.style.display = "block";
        } else {
            shownotification.style.display = "none";
        }
    }
    showoptions() {
        var showoption = this.shadowRoot.getElementById('dropdown-content1');
        if (showoption.style.display == "none") {
            showoption.style.display = "block";
        } else {
            showoption.style.display = "none";
        }
    }

}

customElements.define('pk-ecqm-header', Header);

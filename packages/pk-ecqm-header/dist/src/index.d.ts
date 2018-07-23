import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import * as view from './app.template.html';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/paper-icon-button';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox';
import '@polymer/paper-card';
import '@polymer/paper-menu-button';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
export declare class Header extends PolymerElement {
    name: string;
    shadowRoot: any;
    private dispatchEvent;
    notifications: Array<any>;
    openDialog(): void;
    constructor();
    static readonly template: typeof view;
    static readonly properties: {
        notifications: {
            type: ArrayConstructor;
        };
        name: {
            type: StringConstructor;
        };
    };
    shownotifications(): void;
    showoptions(): void;
    logout(): void;
}

import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import * as view from './app.template.html';
export declare class BreadCrumbs extends PolymerElement {
    currentPage: string;
    names: Array<string>;
    isHome: boolean;
    constructor();
    static readonly template: typeof view;
    _pageChanged(newValue: any): void;
    static readonly properties: {
        currentPage: {
            type: StringConstructor;
            observer: string;
        };
        names: {
            type: ArrayConstructor;
        };
    };
}

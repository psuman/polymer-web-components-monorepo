import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/paper-menu-button';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '../../add-measure/src/index';
import * as view from './app.template.html';
export declare class MeasuresGrid extends PolymerElement {
    private data;
    private masterData;
    pageData: Array<any>;
    private sortDirection;
    private searchValue;
    private columns;
    private pageStart;
    private pageEnd;
    isFirstPage: boolean;
    isLastPage: boolean;
    dataLength: number;
    private isInitialized;
    private $;
    private dispatchEvent;
    constructor();
    ready(): void;
    static readonly properties: {
        title: {
            type: StringConstructor;
        };
        data: {
            type: ArrayConstructor;
            notify: boolean;
            reflectToAttribute: boolean;
            observer: string;
        };
        columns: {
            type: ArrayConstructor;
            notify: boolean;
            reflectToAttribute: boolean;
        };
    };
    loadPagination(dataObj: any): void;
    rerenderData(dataObj: any): void;
    previousPage(): void;
    nextPage(): void;
    columnsChange(e: any): void;
    __init(): void;
    __getRowData(row: any, fieldName: any): any;
    __showAndString(show: any, type: any): boolean;
    __showAndIcon(show: any, type: any): boolean;
    sort(e: any): void;
    static readonly template: typeof view;
    search(): void;
}

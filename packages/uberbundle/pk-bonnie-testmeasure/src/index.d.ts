import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/paper-card';
import '@polymer/paper-button';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icons/social-icons.js';
import * as view from './app.template.html';
export declare class TestMeasure extends PolymerElement {
    measures: Array<any>;
    shadowRoot: any;
    color: any;
    circumference: number;
    constructor();
    static readonly template: typeof view;
    static readonly properties: {
        measures: {
            type: ArrayConstructor;
        };
    };
    setProgress(percent: any, status: string): number;
}

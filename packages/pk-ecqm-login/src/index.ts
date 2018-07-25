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
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button';
import '@polymer/paper-checkbox'
export class Login extends PolymerElement {

    private email: string;
    private password: string;
    private loginDetalis;
    private dispatchEvent: any;
    private invalidemail: boolean;
    private invalidpassword: boolean;
    private isDirty: boolean;
    public isInvalid: boolean;
    private $: any;
    public form_id: any

    constructor() {
        super();
        this.email = "",
        this.password = "",
        this.isDirty = false;
        this.invalidemail = false;
        this.invalidpassword = false;
        this.isInvalid = true;
    }

    static get template() {
        return view;
    }

    submit() {
        this.loginDetalis = {
            "email": this.email,
            "password": this.password
        }
        this.dispatchEvent(new CustomEvent('loginsubmit', { detail: { value: JSON.stringify(this.loginDetalis) } }));
    }

    isFormValid(e) {
        if (!this.isDirty) {
            this.invalidemail = true;
            this.invalidpassword = true;
            this.isDirty = true;
        }
        if (e.target.name == "email") {
            if (e.target.value !== '' && (/^(.)+@[a-z A-Z _]+?\.[a-zA-Z]{2,3}$/.test(e.target.value))) {
                e.target.invalid = false;
            } else {
                e.target.invalid = true;
                this.isInvalid = true;
            }
        }
        else {
            if (e.target.value !== '') {
                e.target.invalid = false;
            } else {
                e.target.invalid = true;
                this.isInvalid = true;
            }
        }
        if (!this.invalidemail && !this.invalidpassword) {
            this.isInvalid = false;
        }
    }

    reset() {
        this.email = "",
        this.password = "",
        this.isDirty = false;
        this.invalidemail = false;
        this.invalidpassword = false;
        this.isInvalid = true;
    }

    validateForm() {
        if (this.$.emailField.validate() && this.$.passField.validate()) {
            this.isInvalid = false;
        } else {
            this.isInvalid = true;
        }
    }
}

customElements.define('pk-ecqm-login', Login);

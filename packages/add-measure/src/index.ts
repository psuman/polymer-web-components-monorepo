import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-listbox';
import '@polymer/paper-icon-button';
import '@polymer/paper-menu-button';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/neon-animation/neon-animations.js'
import '@polymer/paper-item/paper-item.js'

import '@polymer/paper-button'
import * as view from './app.template.html';

export class AddMeasure extends PolymerElement {
    private shadowRoot: any;
    private measureName: string;
    private ecqmAbbrevation: string;
    private totalMeasue;
    private dispatchEvent: any;
    private measureScoring: string;
    private isPatientbased: string;
    private invalidMeasureName:boolean = false;
    private invalidTitle:boolean = false;
    private invalidScoring:boolean = false;
    private invalidPatient:boolean = false;
    private isDirty:boolean=false;
    private isInvalid:boolean=true;
   
    constructor() {
        super();
        this.isPatientbased = "",
        this.measureName = "",
        this.ecqmAbbrevation = "",
        this.measureScoring = ""
        this.isDirty = false;
        this.invalidMeasureName = false;        
        this.invalidTitle = false;
        this.invalidScoring=false;   
        this.invalidPatient=false;        
        this.isInvalid = true;
    }

    static get template() {
        return view;
    }
    createMeasure() {
        this.shadowRoot.getElementById('createmeasureDialog').open();
        this.shadowRoot.getElementById('papermenubutton').opened = false;
    }
    submit() {
      
        this.shadowRoot.getElementById('continue').open();
    }
    continueForward() {
        this.totalMeasue = {
            "measureName": this.measureName,
            "ecqmAbbrevation": this.ecqmAbbrevation,
            "measureScoring": this.measureScoring,
            "isPatientbased": this.isPatientbased,
        }
        console.log("enterd in child"+this.isInvalid);

        this.dispatchEvent(new CustomEvent('submit', { detail: { value: JSON.stringify(this.totalMeasue) } }));
    } isFormValid(e){
        console.log('Form uyf valid');
        if(!this.isDirty){
        
        this.invalidMeasureName = true;
        
        this.invalidTitle = true;
        
        this.invalidPatient = true; 
        this.invalidScoring = true;
        this.isDirty = true;
        }
        console.log(e.target.value);
        if(e.target.value !== '' ){
        
        e.target.invalid = false;
        
        }else{
        
        e.target.invalid = true;
        
        this.isInvalid = true;
        
        }
        
        if(!this.invalidMeasureName && !this.invalidTitle && !this.invalidPatient && !this.invalidScoring){
        
        console.log('Form is valid');
        
        this.isInvalid = false;
        
        }
        
        }

 reset(){

        this.isPatientbased = "",
        this.measureName = "",
        this.ecqmAbbrevation = "",
        this.measureScoring = ""
        this.isDirty = false;
        this.invalidMeasureName = false;        
        this.invalidTitle = false;
        this.invalidScoring=false;   
        this.invalidPatient=false;        
        this.isInvalid = true;
        
        }
        
    cancel() {
    
        this.shadowRoot.getElementById('createmeasureDialog').close();
        this.reset();
      

    }
    cancel1() {
       
        this.shadowRoot.getElementById('continue').close();
        this.shadowRoot.getElementById('createmeasureDialog').close();
        this.reset();
    }

}

customElements.define('add-measure', AddMeasure);

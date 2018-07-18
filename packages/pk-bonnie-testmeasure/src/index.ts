import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/paper-card';
import '@polymer/paper-button';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icons/social-icons.js';
import * as view from './app.template.html';

export class TestMeasure extends PolymerElement {


    public measures: Array<any>=[];
    shadowRoot;
    color;
    circumference: number=138.285;
    constructor() {
        super();
       
    }
    
    static get template() {
        return view;
    }
    static get properties() {
        return {
            measures: {
                type: Array,
            
            }
        };
    }

     setProgress(percent,status:string) {
     
        const offset = this.circumference - percent / 100 * this.circumference;
    

        if(status.toLowerCase()=="new")
        {
            this.color="black"
        }
        else if(status.toLowerCase()=="pass")
        {
            this.color="#23c438"
        }
        else
        {
            this.color="#f23737"
        }       
        return offset;
    
      }


    
}

customElements.define('pk-bonnie-testmeasure', TestMeasure);

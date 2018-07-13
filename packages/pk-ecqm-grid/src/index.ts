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

export class MeasuresGrid extends PolymerElement {

    private data: Array<any>=[];
    private masterData: Array<any> = [];
    public pageData: Array<any> = [];
    private sortDirection: boolean = false;
    private searchValue: string = '';
    private columns: Array<any> = [];
    private pageStart: number = 1;
    private pageEnd: number = 10;
    public isFirstPage: boolean = true;
    public isLastPage: boolean = true;
    public dataLength: number = 0;
    private isInitialized = false;
    private $:any;
    private dispatchEvent:any;
    
    constructor() {
        super();
    }

    ready() {
        super.ready();
        this.$.addmeasuredom.addEventListener('submit', e => {
            this.dispatchEvent(new CustomEvent('add-measure-submit', e));
        });
        this.$.addmeasuredom.addEventListener('dialogclosed', e => {
            this.dispatchEvent(new CustomEvent('add-measure-close', e));
        });
        this.$.addmeasuredom.addEventListener('dialogopened', e => {
            this.dispatchEvent(new CustomEvent('add-measure-opened', e));
        });
    }

    static get properties() {
        return {
            title: {
                type: String
            },
            data: {
                type: Array,
                notify: true,
                reflectToAttribute: true,
				observer: '__init'
            },
            columns: {
                type: Array,
                notify: true,
                reflectToAttribute: true
            }
        };
    }

    loadPagination(dataObj) {
		this.dataLength = dataObj.length;
		if (dataObj.length > 10) {
            this.isFirstPage = true;
            this.isLastPage = false;
            this.pageStart = 1;
            this.pageEnd = 10;
        } else {
            this.isFirstPage = true;
            this.isLastPage = true;
            this.pageStart = 1;
            this.pageEnd = dataObj.length ;
        }
    }
	
	/*
	* Should render the data and reload pagination
	*/
    rerenderData(dataObj) {
		if(this.dataLength !== dataObj.length){//if the data size is changed reload pagination
			this.loadPagination(dataObj);
		}
        let tempData = dataObj.slice(this.pageStart - 1, this.pageEnd);
		this.pageData = [];
		this.pageData = tempData;
    }

    previousPage() {//Enable previous page click if its not first page
        this.pageStart -= 10;
        if (this.isLastPage) {
            this.pageEnd = this.pageEnd - (this.pageEnd % 10);
			this.isLastPage = false;
        } else {
            this.pageEnd -= 10;
        }
		if(this.pageStart == 1){
			this.isFirstPage = true;
		}
        this.rerenderData(this.data);
    }

    nextPage() {//Enable next page click if its not last page
		this.pageStart += 10;
		this.pageEnd += 10;
        if (this.data.length <= this.pageEnd) {//if last page
            this.pageEnd = this.data.length;
            this.isLastPage = true;
        }
		this.isFirstPage = false;
		
        this.rerenderData(this.data);
    }

    columnsChange(e) {
        let columnName = e.target.innerText;
        if (!columnName) {
            return;
        }
        let filteredCols = this.columns.filter((each) => {
            if (each.name === columnName.toUpperCase()) {
                each.show = e.target.checked;
            }
            return true;
        });

        this.columns = [];
        this.columns = JSON.parse(JSON.stringify(filteredCols));
		
		//this.loadPagination(this.data);
        //this.rerenderData(this.data);
    }
	
	__init() {
		if(!this.isInitialized && this.data && this.data.length > 0){
			this.masterData = this.data;
			this.pageData = this.data;
			this.loadPagination(this.data);
			this.isInitialized = true;
			this.rerenderData(this.data);
		}
	}

    __getRowData(row, fieldName) {
        return row[fieldName];
    }

    __showAndString(show, type) {
        return show && type === 'string';
    }

    __showAndIcon(show, type) {
        return show && type === 'icon';
    }

    sort(e) {
        let self = this;
        let target = e.target.dataset.message;
        let colName = target.split('::')[0];
        let colType = target.split('::')[1];
        let isSortable = target.split('::')[2];
        if (!isSortable || isSortable === 'false') {
            return;
        }
        if (!target) {
            return;
        }
        let tempData = this.data;
        this.sortDirection = !this.sortDirection;
        tempData = tempData.sort((a, b) => {
            var nameA = colType === 'string' ? a[colName].toUpperCase() : a[colName];
            var nameB = colType === 'string' ? b[colName].toUpperCase() : b[colName];
            if (nameA < nameB) {
                return self.sortDirection ? -1 : 1;
            }
            if (nameA > nameB) {
                return self.sortDirection ? 1 : -1;
            }
            return 0;
        });
        this.rerenderData(tempData);
    }

    static get template() {
        return view;
    }
	
    search() {
        let searchVal = this.searchValue.toUpperCase();
        if (searchVal === '') {
			this.data = this.masterData;
			this.loadPagination(this.masterData);
            this.rerenderData(this.masterData);
			return;
        }
        this.data = this.masterData.filter(each => {
            let hasFound = false;
            for (let i in each) {
                if (each[i] && each[i].toUpperCase().indexOf(searchVal) != -1) {
                    hasFound = true;
                    break;
                }

            }
            return hasFound;
        });
		this.loadPagination(this.data);
        this.rerenderData(this.data);
    }
}

customElements.define('pk-ecqm-grid', MeasuresGrid);

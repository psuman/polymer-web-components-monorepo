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
    private sortDirection: boolean = false;
    private searchValue: string = '';
    private columns: Array<any> = [];
    private pageStart: number = 1;
    private pageEnd: number = 10;
    public isFirstPage: boolean = true;
    public isLastPage: boolean = true;
    public dataLength: number = 0;
    public isInvalid: boolean = true;
    private firstInvalid: boolean = false;
    private secondInvalid: boolean = false;
    private isDirty: boolean = false;
	private isInitialized = false;

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }
	
	__init() {
		if(!this.isInitialized && this.data && this.data.length > 0){
			this.masterData = this.data;
			this.dataLength = this.masterData.length;
			this.loadPagination(this.data);
			this.isInitialized = true;
			this.rerenderData(this.data);
		}
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

    rerenderData(dataObj) {
		this.dataLength = dataObj.length;
        let tempData = dataObj.slice(this.pageStart - 1, this.pageEnd);
		this.data = [];
		this.data = tempData;
    }

    previousPage() {
        console.log('Previous Page');
        this.pageStart -= 10;
        if (this.masterData.length === this.pageEnd) {
            this.pageEnd = this.pageEnd - (this.pageEnd % 10);
        } else {
            this.pageEnd -= 10;
        }
        this.checkPageStatus();
        this.rerenderData(this.masterData);
    }

    nextPage() {
        console.log('Next Page');
        if (this.masterData.length >= (this.pageEnd + 10)) {
            this.pageStart += 10;
            this.pageEnd += 10;
        } else {
            this.pageStart += 10;
            this.pageEnd = this.masterData.length;
        }
        this.checkPageStatus();
        this.rerenderData(this.masterData);
    }

    checkPageStatus() {
        if (this.pageEnd === this.data.length) {
            this.isLastPage = true;
        } else {
            this.isLastPage = false;
        }
        if (this.pageStart === 1) {
            this.isFirstPage = true;
        } else {
            this.isFirstPage = false;
        }
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
		
		this.loadPagination(this.data);
        this.rerenderData(this.data);
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
        let tempData = this.masterData;
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

    _submitForm() {
        console.log('submitForm');
    }
    isFormValid(e) {
        if (!this.isDirty) {
            this.firstInvalid = true;
            this.secondInvalid = true;
            this.isDirty = true;
        }
        if (e.target.value !== '') {
            e.target.invalid = false;
        } else {
            e.target.invalid = true;
            this.isInvalid = true;
        }
        if (!this.firstInvalid && !this.secondInvalid) {
            console.log('Form is valid');
            this.isInvalid = false;
        }
    }
    reset() {
        this.isDirty = false;
        this.firstInvalid = false;
        this.secondInvalid = false;
        this.isInvalid = true;
    }
    search() {
        let searchVal = this.searchValue.toUpperCase();
        if (searchVal === '') {
			this.loadPagination(this.masterData);
            this.rerenderData(this.masterData);
			return;
        }
        let tempData = this.masterData.filter(each => {
            let hasFound = false;
            for (let i in each) {
                if (each[i] && each[i].toUpperCase().indexOf(searchVal) != -1) {
                    hasFound = true;
                    break;
                }

            }
            return hasFound;
        });
		this.loadPagination(tempData);
        this.rerenderData(tempData);
    }
}

customElements.define('pk-ecqm-grid', MeasuresGrid);

import {TabularViewContainer, TabularViewDOMConfig, TabularViewListener} from "ui-framework-jps";

export class PatientRecordTabularView extends TabularViewContainer {
    protected static config:TabularViewDOMConfig = {
        containedById: 'patientRecord',
        containerId: 'patientRecordTabularView',
        tabViewContainer: {
            type:'div',
            classes: 'row'
        },
        tabBarContainer: {
            type: 'div',
            classes: 'col-12'
        },
        tabBarElement: {
            type: 'ul',
            classes:'nav nav-pills nav-fill'
        },
        tabularViewContainer: {
            type: 'div',
            classes: 'col-12'
        },
        tabs: [
            {
                id: 'demographics',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Demographics'
                },
                isDefaultActive:true
            },
            {
                id: 'consults',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'History and Consults'
                },
                isDefaultActive:false
            },
            {
                id: 'scripts',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Allergies and Scripts'
                },
                isDefaultActive:false
            },
            {
                id: 'results',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Results'
                },
                isDefaultActive:false
            },
            {
                id: 'documents',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Documents and Letters'
                },
                isDefaultActive:false
            },
            {
                id: 'vaccinations',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Vaccinations'
                },
                isDefaultActive:false
            },
            {
                id: 'workcover',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Workcover'
                },
                isDefaultActive:false
            },
            {
                id: 'tasks',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Tasks'
                },
                isDefaultActive:false
            },
            {
                id: 'archive',
                element:{
                    type:'li',
                    classes:'nav-item'
                },
                subElement: {
                    type:'a',
                    classes:'nav-link',
                    attributes:[{name:'href',value:'#'}],
                    innerHTML:'Script Archive'
                },
                isDefaultActive:false
            },
        ],
    }

    constructor() {
        super(PatientRecordTabularView.config);
    }
}
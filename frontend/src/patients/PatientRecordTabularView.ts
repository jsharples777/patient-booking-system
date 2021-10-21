import {TabularViewContainer, TabularViewDOMConfig} from "ui-framework-jps";

export class PatientRecordTabularView extends TabularViewContainer {
    public static TAB_DEMOGRAPHICS = 'demographics';
    public static TAB_CONSULTS = 'consults';
    public static TAB_SCRIPTS = 'scripts';
    public static TAB_RESULTS = 'results';
    public static TAB_DOCUMENTS = 'documents';
    public static TAB_VACCINATIONS = 'vaccinations';
    public static TAB_WORKCOVER = 'workcover';
    public static TAB_TASKS = 'tasks';
    public static TAB_ARCHIVE = 'archive';
    protected static config: TabularViewDOMConfig = {
        containedById: 'patientRecord',
        containerId: 'patientRecordTabularView',
        tabViewContainer: {
            type: 'div',
            classes: 'row'
        },
        tabBarContainer: {
            type: 'div',
            classes: 'col-12'
        },
        tabBarElement: {
            type: 'ul',
            classes: 'nav nav-pills nav-fill'
        },
        tabularViewContainer: {
            type: 'div',
            classes: 'col-12'
        },
        tabs: [
            {
                id: PatientRecordTabularView.TAB_DEMOGRAPHICS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Demographics'
                },
                isDefaultActive: true
            },
            {
                id: PatientRecordTabularView.TAB_CONSULTS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'History and Consults'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_SCRIPTS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Allergies and Scripts'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_RESULTS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Results'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_DOCUMENTS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Documents and Letters'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_VACCINATIONS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Vaccinations'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_WORKCOVER,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Workcover'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_TASKS,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Tasks'
                },
                isDefaultActive: false
            },
            {
                id: PatientRecordTabularView.TAB_ARCHIVE,
                element: {
                    type: 'li',
                    classes: 'nav-item'
                },
                subElement: {
                    type: 'a',
                    classes: 'nav-link',
                    attributes: [{name: 'href', value: '#'}],
                    innerHTML: 'Script Archive'
                },
                isDefaultActive: false
            },
        ],
    }
    private static _instance: PatientRecordTabularView;

    private constructor() {
        super(PatientRecordTabularView.config);
    }

    public static getInstance(): PatientRecordTabularView {
        if (!(PatientRecordTabularView._instance)) {
            PatientRecordTabularView._instance = new PatientRecordTabularView();
        }
        return PatientRecordTabularView._instance;
    }


}

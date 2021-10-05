import {AbstractStatefulCollectionView} from "ui-framework-jps";


class PatientSearchSidebarView extends AbstractStatefulCollectionView {
  constructor(applicationView, htmlDocument) {
    super(applicationView, htmlDocument, applicationView.state.ui.patientSearchSideBar, applicationView.state.uiPrefs.patientSearchSideBar);

    this.loggingPrefix = 'Patient Search Sidebar View: ';
    this.config = applicationView.state;

    // handler binding
    this.updateView = this.updateView.bind(this);
    this.eventPatientSelected = this.eventPatientSelected.bind(this);

    // register state change listening
    stateManager.addChangeListenerForName(this.config.stateNames.patientSearch, this.stateChangedHandler);
    stateManager.addChangeListenerForName(this.config.stateNames.recentPatientSearches, this.stateChangedHandler);
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    const fastSearchEl = $(`#${this.uiConfig.dom.extra.fastSearchInputId}`);
    fastSearchEl.on('autocompleteselect', this.eventPatientSelected);
  }

  getIdForStateItem(name, item) {
    return item._id;
  }

  getLegacyIdForStateItem(name, item) {
    return item.identifiers.legacyId;
  }

  getDisplayValueForStateItem(name, item) {
    return `${item.name.firstname} ${item.name.surname} `;
  }

  getModifierForStateItem(name, item) {
    let modifier = 'normal';
    logger.log(`${this.loggingPrefix} Patient ${item._id} with inactive ${item.flags.isInactive} selected`);
    if (item.flags.isInactive == 'true') {
      modifier = 'inactive';
    }
    return modifier;
  }

  getSecondaryModifierForStateItem(name, item) {
    let modifier = 'normal';
    logger.log(`${this.loggingPrefix} Patient ${item._id} with warnings ${item.flags.hasWarnings} selected`);
    if (item.flags.hasWarnings == 'true') {
      modifier = 'warning';
    }
    return modifier;
  }

  eventPatientSelected(event, ui) {
    event.preventDefault();
    logger.log(`${this.loggingPrefix} Patient ${ui.item.label} with id ${ui.item.value} selected`);
    const patientId = {
      _id: ui.item.value,
    };
    event.target.innerText = '';

    // get the patient item from the state manager
    const patient = stateManager.findItemInState(this.config.stateNames.patientSearch, patientId, isSamePatient);
    /*
          We have the selected patient from the State Manager:
          1.  Let the controller know about the selected patient
          2.  Add the selected patient to our list of saved recent patients and update our view (which should happen automatically)
        */
    this.applicationView.controller.eventPatientSelectedFromPatientSearch(patient);
  }

  eventClickItem(event) {
    event.preventDefault();
    console.log(event.target);
    const patientId = event.target.getAttribute(this.uiConfig.dom.resultDataKeyId);
    logger.log(`${this.loggingPrefix} Patient ${event.target.innerText} with id ${patientId} clicked`, 20);
    // get the patient item from the state manager
    let patient = {
      _id: patientId,
    };
    patient = stateManager.findItemInState(this.config.stateNames.recentPatientSearches, patient, isSamePatient);
    logger.log(this.config.stateNames.recentPatientSearches);
    logger.log(patient);
    this.applicationView.controller.eventPatientSelected(patient, false);
  }


  updateView(name, newState) {
    if (name === this.config.stateNames.recentPatientSearches) {
      this.createResultsForState(name, newState);
    }
    if (name === this.config.stateNames.patientSearch) {
      // load the search names into the search field
      const fastSearchEl = $(`#${this.uiConfig.dom.extra.fastSearchInputId}`);
      // for each name, construct the patient details to display and the id referenced
      const fastSearchValues = [];
      newState.forEach((item) => {
        const searchValue = {
          label: `${item.name.firstname} ${item.name.surname}`,
          value: item._id,
        };
        fastSearchValues.push(searchValue);
      });
      fastSearchEl.autocomplete({ source: fastSearchValues });
      fastSearchEl.autocomplete('option', { disabled: false, minLength: 2 });
    }
  }

  getDragData(event) {
    // use the actual id to pass the patient to the droppable target
    const patientId = event.target.getAttribute(this.uiConfig.dom.resultDataKeyId);
    logger.log(`${this.loggingPrefix} Patient ${event.target.innerText} with id ${patientId} dragging`, 20);
    // get the patient item from the state manager
    let patient = {
      _id: patientId,
    };
    patient = stateManager.findItemInState(this.config.stateNames.recentPatientSearches, patient, isSamePatient);
    patient[this.config.ui.draggable.draggedType] = this.config.ui.draggable.draggedTypePatient;
    patient[this.config.ui.draggable.draggedFrom] = this.config.ui.draggable.draggedFromPatientSearch;
    return patient;
  }
}

export default PatientSearchSidebarView;

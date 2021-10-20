import {AppointmentBookView} from "./AppointmentBookView";

export class AppointmentFilterView {
    private static _instance: AppointmentFilterView;
    private providersEl: HTMLDivElement | null;
    private calendarFilterEl: HTMLDivElement | null;

    public static getInstance(): AppointmentFilterView {
        if (!(AppointmentFilterView._instance)) {
            AppointmentFilterView._instance = new AppointmentFilterView();
        }
        return AppointmentFilterView._instance;
    }

    public onDocumentLoaded() {
        this.providersEl = <HTMLDivElement>document.getElementById('providers');
        this.calendarFilterEl = <HTMLDivElement>document.getElementById('calendarFilter');
    }

    public populateProviders(providers: any[]): void {
        if (providers && this.providersEl) {
            providers.forEach((provider: any) => {
                const labelEl = document.createElement('label');
                const inputEl = document.createElement('input');
                inputEl.setAttribute('type', 'checkbox');
                inputEl.setAttribute('value', provider.name);
                inputEl.setAttribute("checked", '');
                inputEl.setAttribute("mbsc-checkbox", '');
                inputEl.setAttribute('data-label', provider.name);
                inputEl.classList.add('provider-checkbox');
                labelEl.appendChild(inputEl);

                this.providersEl.appendChild(labelEl);


            });
            // @ts-ignore
            mobiscroll5.enhance(this.providersEl);
            // @ts-ignore
            mobiscroll5.enhance(this.calendarFilterEl);


            document.querySelectorAll('.provider-checkbox').forEach(function (elm) {
                elm.addEventListener('change', function () {
                    const checkboxList = document.querySelectorAll('.provider-checkbox');
                    const selected: any[] = [];

                    for (let i = 0; i < checkboxList.length; i++) {
                        const checkbox = checkboxList[i];
                        // @ts-ignore
                        if (checkbox.checked) {
                            // @ts-ignore
                            selected.push({id: checkbox.value, name: checkbox.value});
                        }
                    }


                    AppointmentBookView.getInstance().getCalender().setOptions({
                        resources: selected
                    });
                });
            });

            // document.querySelectorAll('.md-view-change').forEach(function (elm) {
            //     elm.addEventListener('change', function (ev) {
            //
            //         let config = {...AppointmentTemplateController.getInstance().getModel().clinicConfig};
            //          config.view.schedule.type = ev.target.value;
            //
            //         let options = {
            //             //clickToCreate: config.clickToCreate,
            //             //dragTimeStep: config.dragTimeStep,
            //             //dragToCreate: config.dragToCreate,
            //             //dragToMove: config.dragToMove,
            //             //dragToResize: config.dragToResize,
            //             //min: moment().subtract(config.min, "months"),
            //             //controls: config.controls,
            //             //showControls: config.showControls,
            //             view: {
            //                 schedule: {
            //                     type: ev.target.value,
            //                     startTime: config.view.schedule.startTime,
            //                     endTime: config.view.schedule.endTime,
            //                     timeCellStep:10,
            //                     timeLabelStep:60
            //                 }
            //             },
            //             //invalidateEvent: config.invalidateEvent,
            //             //invalid: config.invalid,
            //         }
            //
            //         console.log(options);
            //
            //         AppointmentTemplateView.getInstance().getCalender().setOptions(options);
            //
            //     });
            // });


        }

    }

}

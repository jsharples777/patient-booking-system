import {AppointmentTemplateView} from "./AppointmentTemplateView";
import {Checkbox, enhance, Input, registerComponent} from "@mobiscroll/javascript";

export class AppointmentTemplateFilterView {
    private static _instance: AppointmentTemplateFilterView;
    private providersEl: HTMLDivElement | null;

    public static getInstance(): AppointmentTemplateFilterView {
        if (!(AppointmentTemplateFilterView._instance)) {
            AppointmentTemplateFilterView._instance = new AppointmentTemplateFilterView();
        }
        return AppointmentTemplateFilterView._instance;
    }

    public onDocumentLoaded() {
        this.providersEl = <HTMLDivElement>document.getElementById('providerFilter');
        registerComponent(Checkbox);
        registerComponent(Input);
    }

    public populateProviders(providers: any[]): void {
        if (providers && this.providersEl) {
            providers.forEach((provider: any) => {
                let labelEl = document.createElement('label');
                let inputEl = document.createElement('input');
                inputEl.setAttribute('type', 'checkbox');
                inputEl.setAttribute('value', provider.name);
                inputEl.setAttribute("checked", '');
                inputEl.setAttribute("mbsc-checkbox", '');
                inputEl.setAttribute('data-label', provider.name);
                inputEl.classList.add('template-provider-checkbox');
                labelEl.appendChild(inputEl);

                this.providersEl.appendChild(labelEl);


            });
            enhance(this.providersEl);


            document.querySelectorAll('.template-provider-checkbox').forEach(function (elm) {
                elm.addEventListener('change', function () {
                    let checkboxList = document.querySelectorAll('.template-provider-checkbox');
                    let selected: any[] = [];

                    for (let i = 0; i < checkboxList.length; i++) {
                        let checkbox = checkboxList[i];
                        // @ts-ignore
                        if (checkbox.checked) {
                            // @ts-ignore
                            selected.push({id: checkbox.value, name: checkbox.value});
                        }
                    }

                    AppointmentTemplateView.getInstance().getCalender().setOptions({
                        resources: selected
                    });
                });
            });

        }

    }

}
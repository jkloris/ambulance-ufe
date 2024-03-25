import { Component, EventEmitter, Host, h, Event, Prop, State} from '@stencil/core';
import { AmbulanceWaitingListApiFactory } from '../../api/ambulance-wl'

@Component({
  tag: 'jka-ambulance-wl-list',
  styleUrl: 'jka-ambulance-wl-list.css',
  shadow: true,
})
export class JkaAmbulanceWlList {

  @Event({ eventName: "entry-clicked", composed:true},) entryClicked: EventEmitter<string>;
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  @State() errorMessage: string;
  render() {
    return (
      <Host>
        {this.errorMessage
        ? <div class="error">{this.errorMessage}</div>
        :
           <md-list>
          {this.waitingPatients.map((patient) =>
            <md-list-item onClick={ () => this.entryClicked.emit(patient.id)}>
              <div slot="headline">{patient.name}</div>
              <div slot="supporting-text">{"Predpokladaný vstup: " + this.isoDateToLocale(patient.estimatedStart)}</div>
                <md-icon slot="start">person</md-icon>
            </md-list-item>
          )}
        </md-list>
      }
        <md-filled-icon-button class="add-button"
          onclick={() => this.entryClicked.emit("@new")}>
          <md-icon>add</md-icon>
        </md-filled-icon-button>
      </Host>
    );
  }
  private isoDateToLocale(iso:string) {
    if(!iso) return '';
    return new Date(Date.parse(iso)).toLocaleTimeString()
  }

   waitingPatients: any[];

   async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }


  private async getWaitingPatientsAsync(){
    try {
      const response = await AmbulanceWaitingListApiFactory(undefined, this.apiBase).
          getWaitingListEntries(this.ambulanceId)
      if (response.status < 299) {
        return response.data;
      } else {
        this.errorMessage = `Cannot retrieve list of waiting patients: ${response.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || "unknown"}`
    }
    return [];
  }

}

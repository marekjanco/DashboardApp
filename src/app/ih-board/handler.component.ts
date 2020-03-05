import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NumberCard, Incidents, Series } from '../objects-def/objects.def';

@Component({
  selector: 'handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.scss']
})
export class HandlerComponent {

  view : any[];
  incidentsColorScheme = {
    domain: ['#d92550', '#f7b924', '#59CBB3']
  };
  incidentsEasyColorScheme = {
    domain: ['#e56785', '#f9cb5d', '#80d7c5']
  };
  generalColorScheme = {
    domain: ['#176BA0', '#7D3AC1', '#1DE4BD']
  }; 

  unresolvedIncidents: NumberCard = {} as NumberCard;
  newIncidents: NumberCard = {} as NumberCard;
  untouchedIncidents: NumberCard = {} as NumberCard;
  assignedToMe: NumberCard = {} as NumberCard;

  incidentsByPriority: Incidents = {} as Incidents;
  incidentsAssignedToMe: Incidents =  {} as Incidents;

    constructor(private dataService: DataService){
      this.dataService.getUnresolvedIncidents().subscribe((value: NumberCard) => {
        this.unresolvedIncidents = value;
      });
      this.dataService.getNewIncidents().subscribe((value: NumberCard) => {
        this.newIncidents = value;
      });
      this.dataService.getUntouchedIncidents().subscribe((value: NumberCard) => {
        this.untouchedIncidents = value;
      });
      this.dataService.getIncidentsAssignedToMeNumber().subscribe((value: NumberCard) => {
        this.assignedToMe = value;
      });
      //incidentsByPriority
      this.dataService.getIncidentsByPriority().subscribe((value: Series) => {
        this.processIncidents(this.incidentsByPriority, value);
      });
      //incidentsAssignedToMe
      this.dataService.getIncidentsAssignedToMe().subscribe((value: Series) => {
        this.processIncidents(this.incidentsAssignedToMe, value);
      });
    }

  processIncidents = function(obj, data){
    if(data == null) {
      return null;
    }
    var count = 0;
    data.series.forEach(function (val) {
      count += val.value;
      val.name = val.name + " (" + val.value + ")";
    });
    
    obj.length = count;
    obj.name = data.name;
    obj.series = [data];
  };
}
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import * as chartsData from '../shared/charts.config';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  incidentsByPriority: Incident;
  incidentsByCategory: Incident;
  incidentsAssignedToMe: Incident;

    constructor(private dataService: DataService){
      //incidentsByPriority
      this.dataService.getIncidentsByPriority().subscribe((value: Incident) => {
        this.incidentsByPriority = value;
      });
      //incidentsAssignedToMe
      this.dataService.getIncidentsAssignedToMe().subscribe((value: Incident) => {
        this.incidentsAssignedToMe = value;
      });
    }

    incidentsColorScheme = {
      domain: ['#d92550', '#f7b924', '#59CBB3']
    };
    incidentsEasyColorScheme = {
      domain: ['#e56785', '#f9cb5d', '#80d7c5']
    };
    generalColorScheme = {
      domain: ['#176BA0', '#7D3AC1', '#1DE4BD']
    };


  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  view : any[]
}


export interface Incident {
  name: string;
  series: ItemArray[]; 
}

interface ItemArray {
  name: string;
  series: Item[]; 
}
interface Item {
  name: string;
  value: number;
}
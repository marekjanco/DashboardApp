import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import * as chartsData from '../shared/charts.config';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

    incidentsByCategory: Incident[];

    constructor(private dataService: DataService){
      //incidentsByCategory
      this.dataService.getIncidentsByCategory().subscribe((value: Incident[]) => {
        this.incidentsByCategory = value;
      });
    }

    incidentsColorScheme = {
      domain: ['#d92550', '#f7b924', '#59CBB3']
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
  value: number; 
}
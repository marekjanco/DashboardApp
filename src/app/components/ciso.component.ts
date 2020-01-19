import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ciso-dashboard',
    templateUrl: './ciso.component.html',
    styleUrls: ['./ciso.component.scss']
})
export class CisoComponent {
    multi = [
        {
          "name": "Germany",
          "series": [
            {
              "name": "2010",
              "value": 7300000
            },
            {
              "name": "2011",
              "value": 8940000
            }
          ]
        },
      
        {
          "name": "USA",
          "series": [
            {
              "name": "2010",
              "value": 7870000
            },
            {
              "name": "2011",
              "value": 8270000
            }
          ]
        },
      
        {
          "name": "France",
          "series": [
            {
              "name": "2010",
              "value": 5000002
            },
            {
              "name": "2011",
              "value": 5800000
            }
          ]
        }
      ];
      

    statusChart24h: StatusChart;
    yAxisStatusFormatting = this.yAxisTickFormatting.bind(this);

    constructor(private dataService: DataService){
        this.dataService.getStatus24h().subscribe((value: StatusChart) => {
            this.statusChart24h = value;
            console.log(value);
        });
    }

    yAxisTickFormatting(value) {
        return value == 1 ? "OK" : value == 2 ? "E" : value  == 3 ? "NOK" : "";
    }

    view : any[];
    colorScheme = {
      domain: ['#d92550', '#f7b924', '#59CBB3']
    };
}

export interface StatusChart {
    name: string;
    series: Status[]; 
}
interface Status {
    value: number;
    name: string;
}

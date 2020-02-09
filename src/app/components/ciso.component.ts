import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import * as shape from 'd3-shape';

@Component({
    selector: 'ciso-dashboard',
    templateUrl: './ciso.component.html',
    styleUrls: ['./ciso.component.scss']
})
export class CisoComponent {

    IpBlacklist: Blacklist;
    DnsBlacklist: Blacklist;
    EmailBlacklist: Blacklist;
    incidentsOverWeek: IncidentsOverWeek;
    traffic: Traffic;
    timeToResponseGraph: TimeTo;
    timeToSolveGraph: TimeTo;
    
    statusChart24h: StatusChart;
    yAxisStatusFormatting = this.yAxisTickFormatting.bind(this);
    curveType = shape.curveMonotoneX;

    constructor(private dataService: DataService){
        this.dataService.getStatus24h().subscribe((value: StatusChart) => {
            this.statusChart24h = value;
        });
        this.dataService.getIpBlacklist().subscribe((value: Blacklist) => {
          console.log(value);
          this.IpBlacklist = value;
        });
        this.dataService.getDnsBlacklist().subscribe((value: Blacklist) => {
          this.DnsBlacklist = value;
        });
        this.dataService.getEmailBlacklist().subscribe((value: Blacklist) => {
          this.EmailBlacklist = value;
        });
        this.dataService.getIncidentsOverWeek().subscribe((value: IncidentsOverWeek) => {
          this.incidentsOverWeek = value;
        });
        this.dataService.getTraffic().subscribe((value: Traffic) => {
          this.traffic = value;
        });
        this.dataService.getTimeToResponse().subscribe((value: TimeTo) => {
          this.timeToResponseGraph = value;
        });
        this.dataService.getTimeToSolve().subscribe((value: TimeTo) => {
          this.timeToSolveGraph = value;
        });
    }

    yAxisTickFormatting(value) {
        return value == 1 ? "OK" : value == 2 ? "E" : value  == 3 ? "NOK" : "";
    }

    view : any[];
    colorScheme = {
      domain: ['#d92550', '#f7b924', '#59CBB3']
    };
    timeToColorScheme = {
      domain: ['#95EAFF']
    }
    colorSchemeTraffic = {
      domain: [ '#59CBB3', '#d92550']
    };

    IPColorScheme = {
      domain: ['#D0F6FF', '#B3DAFF', '#96BEFF']
    } 
    EmailColorScheme = {
      domain: ['#FFE2E1', '#FFC6C5', '#E38F8F']
    }
    DNSColorScheme = {
      domain: ['#D9B3DF', '#BD98C3', '#A27EA8']
    }
}

export interface Blacklist {
  name: string;
  series: ItemArray[]; 
}

export interface StatusChart {
    name: string;
    series: Item[]; 
}

export interface IncidentsOverWeek {
  name: string;
  series: ItemArray[]; 
}

export interface Traffic {
  series: ItemArray[]; 
}

export interface TimeTo {
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
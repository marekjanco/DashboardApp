import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Blacklist, Traffic } from '../components/ciso.component';
import { PeriodicElement } from '../components/incident.tables.component';

import * as shape from 'd3-shape';

@Component({
    selector: 'cit-dashboard',
    templateUrl: './cit.component.html',
    styleUrls: ['./cit.component.scss']
})
export class CitComponent {

    IpBlacklist: Blacklist;
    DnsBlacklist: Blacklist;
    EmailBlacklist: Blacklist;
    traffic: Traffic;

    

  columnsToDisplay = ['id', 'subject', 'description', 'priority'];
  dataSource: PeriodicElement[] = [
    {id: 1, subject: 'Possible DoS', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020. We have to wait for a solution from them.`},
    {id: 2, subject: 'Incident 1', status: 'resolved', priority: 'critical', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
    {id: 3, subject: 'A problem', status:  'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020. We have to wait for a solution from them.`},
    {id: 4, subject: 'xxx', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
    {id: 5, subject: '....', status: 'resolved', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
    {id: 6, subject: '..', status: 'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
    {id: 7, subject: 'blabla', status: 'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
    {id: 8, subject: 'xsdadasj', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
    {id: 9, subject: 'aaaaa', status: 'open', priority: 'critical', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  ];

    constructor(private dataService: DataService){
        this.dataService.getIpBlacklist().subscribe((value: Blacklist) => {
          this.IpBlacklist = value;
        });
        this.dataService.getDnsBlacklist().subscribe((value: Blacklist) => {
          this.DnsBlacklist = value;
        });
        this.dataService.getEmailBlacklist().subscribe((value: Blacklist) => {
          this.EmailBlacklist = value;
        });
        this.dataService.getTraffic().subscribe((value: Traffic) => {
          this.traffic = value;
        });
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
    incidentsEasyColorScheme = {
      domain: ['#e56785', '#f9cb5d', '#80d7c5']
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

import { Component, ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'incidents-table',
  templateUrl: './incident.tables.component.html',
  styleUrls: ['./incident.tables.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class IncidentsTableComponent {

  threats: AlienvaultThreat[] = [];


  columnsToDisplay = ['id', 'subject', 'status', 'priority', 'updated'];
  displayedColumnsThreats = ['name', 'created'];
  expandedElement: PeriodicElement;
  expandedElementThreat: AlienvaultThreat;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSourceAssigned = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA_ASSIGNED);
  dataSourceThreats = null;
  
  
   constructor(private dataService: DataService){
    //AlienVaultThreats
    this.dataService.getAlienVaultThreats().subscribe((value: AlienvaultThreat[]) => {
      this.threats = value;
    });
   }

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface AlienvaultThreat {
  id: string;
  name: string;
  description: string;
  author: string;
  created: string;
}

export interface Element {
  id: number;
  subject: string;
  status: string;
  priority: string;
  updated: Date;
}

export interface PeriodicElement {
  id: number;
  subject: string;
  status: string;
  priority: string;
  updated: Date;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, subject: 'Possible DoS', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 2, subject: 'Incident 1', status: 'resolved', priority: 'critical', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 3, subject: 'A problem', status:  'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 4, subject: 'xxx', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 5, subject: '....', status: 'resolved', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 6, subject: '..', status: 'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 7, subject: 'blabla', status: 'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 8, subject: 'xsdadasj', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 9, subject: 'aaaaa', status: 'open', priority: 'critical', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
];

const ELEMENT_DATA_ASSIGNED: PeriodicElement[] = [
  {id: 31, subject: 'Incident 1', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 12, subject: 'Incident 2', status: 'resolved', priority: 'critical', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 14, subject: 'Incident 3', status:  'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 5, subject: 'Incident 4', status: 'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
];

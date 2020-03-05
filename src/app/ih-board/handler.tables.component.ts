import { Component, ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AlienvaultThreat, Element } from '../objects-def/objects.def'

@Component({
  selector: 'handler-tables',
  templateUrl: './handler.tables.component.html',
  styleUrls: ['./handler.tables.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HandlerTableComponent {

  threats: AlienvaultThreat[] = [];


  columnsToDisplay = ['id', 'subject', 'status', 'priority', 'updated'];
  columnsToDisplayThreats = ['name', 'created'];
  expandedElement: Element;
  expandedElementThreat: AlienvaultThreat;
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSourceAssigned = new MatTableDataSource<Element>(ELEMENT_DATA_ASSIGNED);
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

const ELEMENT_DATA: Element[] = [
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

const ELEMENT_DATA_ASSIGNED: Element[] = [
  {id: 31, subject: 'Incident 1', status: 'open', priority: 'medium', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 12, subject: 'Incident 2', status: 'resolved', priority: 'critical', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 14, subject: 'Incident 3', status:  'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
  {id: 5, subject: 'Incident 4', status: 'open', priority: 'low', updated: new Date(), description: `Email was sent to customer on 12.1.2020.`},
];

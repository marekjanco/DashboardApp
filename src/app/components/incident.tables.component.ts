import { Component, ViewChild, onInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'incidents-table',
  templateUrl: './incident.tables.component.html',
  styleUrls: ['./incident.tables.component.scss']
})
export class IncidentsTableComponent {

   displayedColumns: string[] = ['id', 'subject', 'status', 'priority', 'updated'];
   dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

   constructor(private dataService: DataService){
   }

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  id: number;
  subject: string;
  status: string;
  priority: string;
  updated: Date;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, subject: 'Possible DoS', status: 'open', priority: 'medium', updated: new Date()},
  {id: 2, subject: 'Incident 1', status: 'resolved', priority: 'critical', updated: new Date()},
  {id: 3, subject: 'A problem', status:  'open', priority: 'low', updated: new Date()},
  {id: 4, subject: 'xxx', status: 'open', priority: 'medium', updated: new Date()},
  {id: 5, subject: 'xxx', status: 'open', priority: 'medium', updated: new Date()},
];

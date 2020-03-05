import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as $ from 'jquery';
import { Traffic, Series, Element, Blacklist, TreeMapObject } from '../objects-def/objects.def';

@Component({
    selector: 'cit-dashboard',
    templateUrl: './cit.component.html',
    styleUrls: ['./cit.component.scss']
})
export class CitComponent {

  ipBlacklist: Blacklist = {} as Blacklist;
  dnsBlacklist: Blacklist = {} as Blacklist;
  emailBlacklist: Blacklist = {} as Blacklist;  
  traffic: Traffic;
  treeMapData: TreeMapObject[] = {} as TreeMapObject[];
  treeMapRoot: TreeMapObject[] = {} as TreeMapObject[];

  columnsToDisplay = ['id', 'subject', 'description', 'priority'];
  dataSource: Element[] = [
    {id: 1, subject: 'Possible DoS', status: 'open', priority: 'medium', updated: new Date(), description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Fusce nibh. Duis risus. Vivamus luctus egestas leo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Mauris dictum facilisis augue. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Mauris elementum mauris vitae tortor. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.`},
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
    this.dataService.getIpBlacklist().subscribe((value: Series) => {
      this.processBlacklistData(this.ipBlacklist, value);
    });
    this.dataService.getEmailBlacklist().subscribe((value: Series) => {
      this.processBlacklistData(this.emailBlacklist, value);
    });
    this.dataService.getDnsBlacklist().subscribe((value: Series) => {
      this.processBlacklistData(this.dnsBlacklist, value);
    });
    this.dataService.getTraffic().subscribe((value: Traffic) => {
      this.traffic = value;
    });
    this.dataService.getTreeMapData().subscribe((value: TreeMapObject[]) => {
      this.treeMapData = value;
      this.treeMapRoot = value;
    });
  }

  labelFormatting(c) {
    return `${(c.label)}`;
  }
  
  processBlacklistData = function(blacklist, data){
    if(data == null) {
      return null;
    }
    var count = 0;
    data.series.forEach(function (val) {
      count += val.value;
      val.name = val.name + " (" + val.value + ")";
    });
    
    blacklist.length = count;
    blacklist.name = data.name;
    blacklist.series = [data];
  };

  treeMapChoose = function (event) {
    this.treeMapData = event.series != null ? event.series : this.treeMapData;
  }

  ngOnInit() {
    $(window).on('click', () => {  
      console.log(this.treeMapData.join('') == this.treeMapRoot.join(''));
      if(this.treeMapData != this.treeMapRoot){
        this.treeMapData = this.treeMapRoot;
      }
    });
    
    $('#treeMapContainer').click(function(event){
        event.stopPropagation();
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
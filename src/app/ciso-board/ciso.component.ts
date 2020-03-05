import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { SystemStatus, NumberCard, MeanTimeTo, Traffic, Blacklist, Incidents, Series } from '../objects-def/objects.def';
import * as shape from 'd3-shape';

@Component({
    selector: 'ciso-dashboard',
    templateUrl: './ciso.component.html',
    styleUrls: ['./ciso.component.scss']
})
export class CisoComponent {


  view : any[];
  status: SystemStatus = {} as SystemStatus;
  unresolvedIncidents: NumberCard = {} as NumberCard;
  solvedIncidents: NumberCard = {} as NumberCard;
  untouchedIncidents: NumberCard = {} as NumberCard;

  ipBlacklist: Blacklist = {} as Blacklist;
  dnsBlacklist: Blacklist = {} as Blacklist;
  emailBlacklist: Blacklist = {} as Blacklist;  
  incidentsOverWeek: Incidents;
  timeToResponseGraph: MeanTimeTo[] = {} as MeanTimeTo[];
  timeToSolveGraph: MeanTimeTo[] = {} as MeanTimeTo[];
  traffic: Traffic;

  constructor(private dataService: DataService){
      this.dataService.getStatus().subscribe((value: SystemStatus) => {
          this.status = value;
      });
      this.dataService.getUnresolvedIncidents().subscribe((value: NumberCard) => {
          this.unresolvedIncidents = value;
      });
      this.dataService.getSolvedIncidentsToday().subscribe((value: NumberCard) => {
          this.solvedIncidents = value;
      });
      this.dataService.getUntouchedIncidents().subscribe((value: NumberCard) => {
          this.untouchedIncidents = value;
      });
      this.dataService.getTraffic().subscribe((value: Traffic) => {
        this.traffic = value;
      });
      this.dataService.getTimeToResponse().subscribe((value: MeanTimeTo) => {
        this.timeToResponseGraph = [value];
      });
      this.dataService.getTimeToSolve().subscribe((value: MeanTimeTo) => {
        this.timeToSolveGraph = [value];
      });
      this.dataService.getIncidentsOverWeek().subscribe((value: Incidents) => {
        this.incidentsOverWeek = value;
      });
      this.dataService.getIpBlacklist().subscribe((value: Series) => {
        this.processBlacklistData(this.ipBlacklist, value);
      });
      this.dataService.getEmailBlacklist().subscribe((value: Series) => {
        this.processBlacklistData(this.emailBlacklist, value);
      });
      this.dataService.getDnsBlacklist().subscribe((value: Series) => {
        this.processBlacklistData(this.dnsBlacklist, value);
      });
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

  //Color schemes
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

  //Blacklists color schemes
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
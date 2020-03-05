import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { SystemStatus, NumberCard, MeanTimeTo, Incidents, Series, Traffic, TreeMapObject } from '../objects-def/objects.def'; //CISO
import { AlienvaultThreat } from '../objects-def/objects.def'; //IH

@Injectable()
export class DataService {
    constructor(private http: HttpClient){
        console.log('initializing service');
    }

    //shared 
    getIpBlacklist(){
        return this.http.get<Series>('http://localhost:4000/ipBlacklist').pipe(
            map(res => res));
    };
    getDnsBlacklist(){
        return this.http.get<Series>('http://localhost:4000/dnsBlacklist').pipe(
            map(res => res));
    };
    getEmailBlacklist(){
        return this.http.get<Series>('http://localhost:4000/emailBlacklist').pipe(
            map(res => res));
    };
    getTraffic(){
        return this.http.get<Traffic>('http://localhost:4000/traffic').pipe(
            map(res => res));
    } 

    //CISO
    getStatus(){
        return this.http.get<SystemStatus>('http://localhost:4000/status').pipe(
            map(res => res));
    };    
    getUnresolvedIncidents(){
        return this.http.get<NumberCard>('http://localhost:4000/unresolvedIncidents').pipe(
            map(res => res));
    };
    getSolvedIncidentsToday(){
        return this.http.get<NumberCard>('http://localhost:4000/solvedIncidentsToday').pipe(
            map(res => res));
    };
    getUntouchedIncidents(){
        return this.http.get<NumberCard>('http://localhost:4000/untouchedIncidents').pipe(
            map(res => res));
    };
    getIncidentsOverWeek(){
        return this.http.get<Incidents>('http://localhost:4000/incidentsOverWeek').pipe(
            map(res => res));
    };
    getTimeToResponse(){
        return this.http.get<MeanTimeTo>('http://localhost:4000/timeToResponse').pipe(
            map(res => res));
    };
    getTimeToSolve(){
        return this.http.get<MeanTimeTo>('http://localhost:4000/timeToSolve').pipe(
            map(res => res));
    };

    //INCIDENT HANDLER
    getIncidentsAssignedToMeNumber(){
        return this.http.get<NumberCard>('http://localhost:4000/incidentsAssignedToMe').pipe(
            map(res => res));
    };
    getNewIncidents(){
        return this.http.get<NumberCard>('http://localhost:4000/newIncidents').pipe(
            map(res => res));
    };
    getIncidentsByPriority(){
        return this.http.get<Series>('http://localhost:4000/incidentsByPriority').pipe(
            map(res => res));
    }
    getIncidentsAssignedToMe(){
        return this.http.get<Series>('http://localhost:4000/incidentsAssigned').pipe(
            map(res => res));
    }
    getAlienVaultThreats(){
        return this.http.get<AlienvaultThreat[]>('http://localhost:4000/alien-vault-threats').pipe(
            map(res => res));
    }

    //CIT
    getTreeMapData(){
        return this.http.get<TreeMapObject[]>('http://localhost:4000/treeMapData').pipe(
            map(res => res));
    }
}
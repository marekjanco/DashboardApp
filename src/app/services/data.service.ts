import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {Incident} from '../components/content.component';
import {AlienvaultThreat} from '../components/incident.tables.component';
import {StatusChart, Blacklist, IncidentsOverWeek, Traffic, TimeTo} from '../components/ciso.component';

@Injectable()
export class DataService {
    constructor(private http: HttpClient){
        console.log('initializing service');
    }
    getIncidentsByPriority(){
        return this.http.get<Incident>('http://localhost:4000/incidents-by-priority').pipe(
            map(res => res));
    }
    getIncidentsByCategory(){
        return this.http.get<Incident>('http://localhost:4000/incidents-by-category').pipe(
            map(res => res));
    }    
    getIncidentsAssignedToMe(){
        return this.http.get<Incident>('http://localhost:4000/incidents-assigned').pipe(
            map(res => res));
    }
    getStatus24h(){
        return this.http.get<StatusChart>('http://localhost:4000/status-24-hours').pipe(
            map(res => res));
    }
    getIpBlacklist(){
        return this.http.get<Blacklist>('http://localhost:4000/ip-blacklist').pipe(
            map(res => res));
    }
    getDnsBlacklist(){
        return this.http.get<Blacklist>('http://localhost:4000/dns-blacklist').pipe(
            map(res => res));
    }
    getEmailBlacklist(){
        return this.http.get<Blacklist>('http://localhost:4000/email-blacklist').pipe(
            map(res => res));
    }
    getIncidentsOverWeek(){
        return this.http.get<IncidentsOverWeek>('http://localhost:4000/incidents-over-week').pipe(
            map(res => res));
    }    
    getTraffic(){
        return this.http.get<Traffic>('http://localhost:4000/in-out-traffic').pipe(
            map(res => res));
    }
    getTimeToResponse(){
        return this.http.get<TimeTo>('http://localhost:4000/time-to-response').pipe(
            map(res => res));
    }
    getTimeToSolve(){
        return this.http.get<TimeTo>('http://localhost:4000/time-to-solve').pipe(
            map(res => res));
    }
    getAlienVaultThreats(){
        return this.http.get<AlienvaultThreat[]>('http://localhost:4000/alien-vault-threats').pipe(
            map(res => res));
    }
}
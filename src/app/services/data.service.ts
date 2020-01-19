import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {Incident} from '../components/content.component';
import {StatusChart} from '../components/ciso.component';

@Injectable()
export class DataService {
    constructor(private http: HttpClient){
        console.log('initializing service');
    }
    getIncidentsByCategory(){
        return this.http.get<Incident[]>('http://localhost:4000/incidents-by-categories').pipe(
            map(res => res));
    }
    getStatus24h(){
        return this.http.get<StatusChart>('http://localhost:4000/status-24-hours').pipe(
            map(res => res));
    }
}
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {LinearGauge} from '../components/content.component';
import {BubbleChart} from '../components/content.component';
import {NumberCard} from '../components/content.component';
import {Incident} from '../components/content.component';
import {Attack} from '../components/content.component';
import {Visit} from '../components/content.component';

@Injectable()
export class DataService {
    constructor(private http: HttpClient){
        console.log('initializing service');
    }

    getLinearGaugeData(){
        return this.http.get<LinearGauge>('http://localhost:4000/linear-gauge').pipe(
            map(res => res));
    }    
    
    getBubbleChartData(){
        return this.http.get<BubbleChart[]>('http://localhost:4000/bubble-chart').pipe(
            map(res => res));
    }

    getNumberCardsData(){
        return this.http.get<NumberCard[]>('http://localhost:4000/number-cards').pipe(
            map(res => res));
    }

    getIncidentsData(){
        return this.http.get<Incident[]>('http://localhost:4000/incidents-by-categories').pipe(
            map(res => res));
    }
    
    getAttacksData(){
        return this.http.get<Attack[]>('http://localhost:4000/attacks').pipe(
            map(res => res));
    }
    
    getVisitsData(){
        return this.http.get<Visit[]>('http://localhost:4000/visits').pipe(
            map(res => res));
    }
}
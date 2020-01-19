import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ciso-dashboard',
    templateUrl: './ciso.component.html',
    styleUrls: ['./ciso.component.scss']
})
export class CisoComponent {

    constructor(private dataService: DataService){
    }

    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = true;
    showXAxisLabel = true;
    showYAxisLabel = true;
    view : any[]
}
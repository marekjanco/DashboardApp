import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import * as chartsData from '../shared/charts.config';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

    linearGauge: LinearGauge;
    bubbleChartData: BubbleChart[];
    numberCardsData: NumberCard[];
    pieChartData: Incident[];
    stackAreaData: Attack[];
    verticalBarChart: Visit[];

    constructor(private dataService: DataService){
      //linear gauge data
      this.dataService.getLinearGaugeData().subscribe((value: LinearGauge) => {
        this.linearGauge = value;
      });
      //bubble chart data
      this.dataService.getBubbleChartData().subscribe((value: BubbleChart[]) => {
        this.bubbleChartData = value;
      });      
      //number cards data
      this.dataService.getNumberCardsData().subscribe((value: NumberCard[]) => {
        this.numberCardsData = value;
      });
      //pie chart data
      this.dataService.getIncidentsData().subscribe((value: Incident[]) => {
        this.pieChartData = value;
      });
      //stack area data
      this.dataService.getAttacksData().subscribe((value: Attack[]) => {
        this.stackAreaData = value;
      });
      //vertical bar chart
      this.dataService.getVisitsData().subscribe((value: Visit[]) => {
        this.verticalBarChart = value;
      });
    }

    colorScheme = 'picnic';
    colorSchemeGauge = {
      domain: ['#E96B56']
    };
    colorSchemeCards = {
      domain: ['#E96B56', '#faa226', '#aeb5c1', '#59CBB3', '#eee']
    };
    colorSchemeEvents = {
      domain: ['#E96B56', '#59CBB3']
    };
    altColorScheme = {
      domain: ['#34c0cf', '#7938D0', '#4FE0E1', '#07ACFA']
    };

    //BubbleChart
    bubbleChartView: any[] = chartsData.bubbleChart_View;

    bubbleView = chartsData.bubbleChart_View;
    bubbleLegend = chartsData.bubbleChart_legend;
    bubbleLegendTitle = chartsData.bubbleChart_legendTitle;
    bubbleXAxis = chartsData.bubbleChart_xAxis;
    bubbleYAxis = chartsData.bubbleChart_yAxis;
    bubbleShowXAxisLabel = chartsData.bubbleChart_showXAxisLabel;
    bubbleShowYAxisLabel = chartsData.bubbleChart_showYAxisLabel;
    bubbleXAxisLabel = chartsData.bubbleChart_xAxisLabel;
    bubbleYAxisLabel = chartsData.bubbleChart_yAxisLabel;
    bubbleSchemeType = chartsData.bubbleChart_schemeType;
    bubbleRoundDomains = chartsData.bubbleChart_roundDomains;
    bubbleMaxRadius = chartsData.bubbleChart_maxRadius;
    bubbleMinRadius = chartsData.bubbleChart_minRadius;
    bubbleTooltipDisabled = chartsData.bubbleChart_tooltipDisabled;

    
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabelStacked = 'Number';
  xAxisLabelStacked = 'Date';

  view : any[]
}

export interface LinearGauge {
  minValue: number;
  maxValue: number;
  value: number;
  previousValue: number;
  units: string;
}
export interface BubbleChart {
  name: string;
  series: Bubble[]; 
}
interface Bubble {
  name: string;
  x: string;
  y: number;
  r: number;
}
export interface NumberCard {
  name: string;
  value: number; 
}
export interface Incident {
  name: string;
  value: number; 
}
export interface Attack {
  name: string;
  series: Event[]; 
}
export interface Visit {
  name: string;
  series: Event[]; 
}
interface Event {
  name: string;
  value: number;
}
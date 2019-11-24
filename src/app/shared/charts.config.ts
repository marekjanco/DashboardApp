import * as shape from 'd3-shape';

//bubble chart
export var colorScheme = {
    domain: ['#1CBCD8', '#FF8D60', '#FF586B', '#AAAAAA']
};

export var bubbleChart_View: any[];
export var bubbleChart_legend = true;
export var bubbleChart_legendTitle = "Incidents";
export var bubbleChart_xAxis = false;
export var bubbleChart_yAxis = false;
export var bubbleChart_showXAxisLabel = false;
export var bubbleChart_showYAxisLabel = false;
export var bubbleChart_xAxisLabel ="Type";
export var bubbleChart_yAxisLabel = "Priority";
export var bubbleChart_schemeType =  "ordinal";
export var bubbleChart_roundDomains = true;
export var bubbleChart_maxRadius = 10;
export var bubbleChart_minRadius = 3;
export var bubbleChart_tooltipDisabled = false;
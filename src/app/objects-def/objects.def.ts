//shared
export interface NumberCard {
  name: string;
  value: number;
  change : Change;
}
interface Change {
  increase: boolean;
  value: number; 
}

export interface Blacklist {
  name: string;
  length: number;
  series: Series[];
}

export interface Traffic {
  name: String;
  series: Series[]
}

export interface Series {
  name: string;
  series: Item[];
}
interface Item {
  name: string;
  value: number;
}

//CISO
export interface SystemStatus {
  status: string;
}

export interface MeanTimeTo {
  name: string;
  value: number;
  series : Item[];
}

export interface Incidents {
  name: string;
  length: number;
  series: Series[]; 
}

//CIT
export interface TreeMapObject {
  name: string;
  value: number;
  series: TreeMapObject[];
}

//IH
export interface AlienvaultThreat {
  id: string;
  name: string;
  description: string;
  author: string;
  created: string;
}

export interface Element {
  id: number;
  subject: string;
  status: string;
  priority: string;
  updated: Date;
  description: string;
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatTabsModule } from "@angular/material";
import { Routes, RouterModule } from '@angular/router';

//ROUTER
export const appRoutes: Routes = [
  { path: 'ciso-board', 
    component: CisoComponent 
  },
  {
    path: 'incidents-board',
    component: HandlerComponent
  },
  {
    path: 'cit-board',
    component: CitComponent
  }
];

//DEPENDENCIES
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTS
import { AppComponent } from './app.component';
import { CisoComponent } from '../app/ciso-board/ciso.component';
import { CitComponent } from '../app/cit-board/cit.component';
import { HandlerComponent } from './ih-board/handler.component';
import { HandlerTableComponent } from './ih-board/handler.tables.component';
import { NumberCardComponent } from './shared-components/number.card';
import { HttpClientModule } from '@angular/common/http';

//SERVICES
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HandlerComponent,
    CisoComponent,
    HandlerTableComponent,
    CitComponent,
    NumberCardComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,     //angular material
    MatPaginatorModule, //angular material
    MatSortModule,      //angular material
    MatTabsModule,      //angular material
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


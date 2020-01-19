import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";
import { RouterModule } from '@angular/router';

//ROUTER
import appRoutes from './routerConfig';

//DEPENDENCIES
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTS
import { AppComponent } from './app.component';
import { ContentComponent } from '../app/components/content.component';
import { CisoComponent } from '../app/components/ciso.component';
import { IncidentsTableComponent } from '../app/components/incident.tables.component';
import { HttpClientModule } from '@angular/common/http';

//SERVICES
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CisoComponent,
    IncidentsTableComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,     //angular material
    MatPaginatorModule, //angular material
    MatSortModule,       //angular material
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


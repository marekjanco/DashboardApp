import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//DEPENDENCIES
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTS
import { AppComponent } from './app.component';
import { ContentComponent } from '../app/components/content.component';
import { HttpClientModule } from '@angular/common/http';

//SERVICES
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

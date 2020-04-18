import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { ProductionrateComponent } from './productionrate/productionrate.component';
import { OeeComponent } from './oee/oee.component';
import { MachinestatusComponent } from './machinestatus/machinestatus.component';
import { DowntimeComponent } from './downtime/downtime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardmainComponent,
    ProductionrateComponent,
    OeeComponent,
    MachinestatusComponent,
    DowntimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

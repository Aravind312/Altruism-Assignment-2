import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { DowntimeComponent } from './downtime/downtime.component';
import { MachinestatusComponent } from './machinestatus/machinestatus.component';
import { OeeComponent } from './oee/oee.component';
import { ProductionrateComponent } from './productionrate/productionrate.component';
const routes: Routes = [
{   path: '',
redirectTo: '/dashboardmain',
pathMatch: 'full'
},
{
path: '',
component:DashboardmainComponent
},
{
  path: 'dashboardmain',
  component:DashboardmainComponent
  },
{
path: 'productionrate',
component: ProductionrateComponent
}
,
{
path: 'oee',
component: OeeComponent
},
{
path: 'machinestatus',
component: MachinestatusComponent
},
{
  path: 'downtime',
  component: DowntimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

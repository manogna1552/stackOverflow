import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    MaterialModule,
  ],
  exports: [
      
      DashboardComponent // <--- Enable using the component in other modules
    ]
})
export class UserHomeModule { }

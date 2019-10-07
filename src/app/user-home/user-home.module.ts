import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';


@NgModule({
  declarations: [DashboardComponent, AskQuestionComponent, DashHomeComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    MaterialModule,
  ],
  exports: [
      
      DashboardComponent,
      AskQuestionComponent,
      DashHomeComponent // <--- Enable using the component in other modules
    ]
})
export class UserHomeModule { }

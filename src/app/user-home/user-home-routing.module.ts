import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'dHome', pathMatch: 'full' },
   
    {
      path:'dhome',
      component: DashHomeComponent,
    },
    {
      path:'ask',
      component: AskQuestionComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }

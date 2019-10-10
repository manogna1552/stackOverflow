import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { AskComponent } from './components/ask/ask.component';
import { ViewQuestionComponent } from './components/view-question/view-question.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { UserAnswersComponent } from './components/user-answers/user-answers.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'afterLogin',
        component:DashComponent
      },
      {
        path: 'asking',
        component:AskComponent
      },
      {
        path: 'view',
        component:ViewQuestionComponent
      },
      {
        path: 'userAnswers',
        component:UserAnswersComponent
      },
      {
        path: 'userComments',
        component:UserCommentsComponent
      },
      {
        path: 'userQuestions',
        component:UserQuestionsComponent
      },
      {
        path: 'userHome',
        loadChildren: () =>
          import('../user-home/user-home.module').then(
            m => m.UserHomeModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainHomeRoutingModule { }

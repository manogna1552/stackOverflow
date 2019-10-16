import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { AskComponent } from './components/ask/ask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ViewQuestionComponent } from './components/view-question/view-question.component';
import { HeaderComponent } from './components/header/header.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { UserAnswersComponent } from './components/user-answers/user-answers.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { AvatarModule } from 'ngx-avatar';




@NgModule({
  declarations: [HomeComponent, LayoutComponent,  RegisterComponent, LoginComponent, DashComponent, AskComponent, ViewQuestionComponent, HeaderComponent, UserQuestionsComponent, UserAnswersComponent, UserCommentsComponent],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RichTextEditorAllModule,
    AvatarModule
  ]
})
export class MainHomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [HomeComponent, LayoutComponent,  RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    MainHomeRoutingModule,
    MaterialModule,
 
  ]
})
export class MainHomeModule { }

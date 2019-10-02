import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [HomeComponent, LayoutComponent],
  imports: [
    CommonModule,
    MainHomeRoutingModule
  ]
})
export class MainHomeModule { }

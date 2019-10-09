import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { EventEmitterServiceService } from './main-home/event-emitter-service.service';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RichTextEditorAllModule
  ],
  providers: [EventEmitterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

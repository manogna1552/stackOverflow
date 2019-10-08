import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatNativeDateModule,MatDatepickerModule,MatIconModule,
  MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatSidenav, MatSidenavContent, MatSidenavModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [CommonModule,MatButtonModule,MatToolbarModule,
      MatNativeDateModule,MatDatepickerModule,
      MatIconModule,MatButtonModule,MatCheckboxModule, 
      MatToolbarModule, MatCardModule,MatFormFieldModule,
      MatInputModule,MatRadioModule,MatListModule,FormsModule, 
      ReactiveFormsModule,MatGridListModule,FlexLayoutModule,MatSidenavModule,MatChipsModule,MatSelectModule,MatTableModule,MatMenuModule,MatExpansionModule],
      
  exports: [MatNativeDateModule,FormsModule,
      MatDatepickerModule,MatIconModule,MatButtonModule,
      MatCheckboxModule, MatToolbarModule, MatCardModule,
      MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenav,MatSidenavContent,MatSidenavModule,MatChipsModule,MatSelectModule,MatTableModule,MatMenuModule,MatExpansionModule]
   
  })
  
export class MaterialModule { }

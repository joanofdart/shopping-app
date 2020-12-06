import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { OrdinalPipeModule } from 'src/app/pipes/ordinal-date.pipe';

import { DynamicListRoutingModule } from './dynamic-list-routing.module';
import { DynamicListComponent } from './dynamic-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DynamicListComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    OrdinalPipeModule,
    DynamicListRoutingModule
  ]
})
export class DynamicListModule { }

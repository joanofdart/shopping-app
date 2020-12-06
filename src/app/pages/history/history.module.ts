import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';

import { OrdinalPipeModule } from 'src/app/pipes/ordinal-date.pipe';

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    OrdinalPipeModule,
    HistoryRoutingModule,
  ]
})
export class HistoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicListComponent } from './dynamic-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicListComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DynamicListRoutingModule { }

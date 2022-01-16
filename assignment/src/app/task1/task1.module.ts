import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: Task1Component
    }])
  ]
})
export class Task1Module { }

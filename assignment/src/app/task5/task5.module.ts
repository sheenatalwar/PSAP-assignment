import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5Component } from './task5.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Task5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: Task5Component
    }])
  ]
})
export class Task5Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task6Component } from './task6.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Task6Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: Task6Component
    }])
  ]
})
export class Task6Module { }

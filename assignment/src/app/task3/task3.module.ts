import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3Component } from './task3.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Task3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: Task3Component
    }])
  ]
})
export class Task3Module { }

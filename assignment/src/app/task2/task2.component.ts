import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  grid: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.scss']
})
export class Task6Component implements OnInit {

  numbers: number[] = [];

  constructor() {
    for (let index = 1; index <= 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit(): void {
  }

  onClick(n: number) {
    alert(`Button ${n} is clicked!`);
  }
}

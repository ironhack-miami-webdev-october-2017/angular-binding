import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-widget',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  myCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseCount(myEvent) {
      this.myCount += 1;
  }

  decreaseCount(myEvent) {
      this.myCount -= 1;
  }

  reset(myEvent) {
      this.myCount = 0;
  }

}

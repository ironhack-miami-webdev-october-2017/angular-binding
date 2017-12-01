import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-select-widget',
  templateUrl: './food-select.component.html',
  styleUrls: ['./food-select.component.css']
})
export class FoodSelectComponent implements OnInit {

  mySelection: string;
  selectFeedback: string;

  constructor() { }

  ngOnInit() {
  }

  updateFeedback() {
      if (this.mySelection === "mondongo") {
          this.selectFeedback = "You nasty!";
      }
      else if (this.mySelection === "pizza") {
          this.selectFeedback = "My buddy!";
      }
      else if (this.mySelection === "tapioca") {
          this.selectFeedback = "Booooooring.";
      }
      else {
          this.selectFeedback = "Your selection was fine.";
      }
  }

}

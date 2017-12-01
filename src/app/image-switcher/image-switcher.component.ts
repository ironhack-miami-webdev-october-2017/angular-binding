import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-thang',
  templateUrl: './image-switcher.component.html',
  styleUrls: ['./image-switcher.component.css']
})
export class ImageSwitcherComponent implements OnInit {
  images: string[] = [
    "https://media.giphy.com/media/l2JI6lmMX4WIO8waQ/giphy.gif",
    "https://media.giphy.com/media/W4eQt0kAulHQ4/giphy.gif",
    "https://media.giphy.com/media/EsDCYBUQM0KlO/giphy.gif",
    "https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif",
    "https://media.giphy.com/media/b5WqMx1eiFv6U/giphy.gif"
  ];
  currentImage: string = this.images[0];
  index: number = 0;

  constructor() { }

  ngOnInit() {
  }

  switchImage(myEvent) {
      console.log("ANGULAR CLICK!");
      this.index += 1;

      // reset to 0 if index gets too high
      if (this.index === this.images.length) {
          this.index = 0;
      }

      // OR the pro way
      // this.index %= this.images.length;

      this.currentImage = this.images[this.index];
  }

}

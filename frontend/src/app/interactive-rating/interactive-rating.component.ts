import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-rating',
  templateUrl: './interactive-rating.component.html',
  styleUrls: ['./interactive-rating.component.css']
})
export class InteractiveRatingComponent implements OnInit {

  buttons = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onRatingEnter(buttonID: number) {
    this.hoverState = buttonID;
    console.log(this.hoverState);
  }

  onRatingLeave() {
    this.hoverState = 0;
    console.log(this.hoverState);
  }

  onRatingClicked(buttonID: number) {
    this.rating = buttonID;
    console.log(this.rating);
  }








}

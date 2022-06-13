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

  onButtonEnter(buttonID: number) {
    this.hoverState = buttonID;
    console.log("Enter button: " + this.hoverState);
  }

  onButtonLeave() {
    this.hoverState = 0;
    console.log("Leave button: " + this.hoverState);
  }

  onButtonClick(buttonID: number) {
    this.rating = buttonID;
    console.log("Clicked button: " + this.rating);
  }








}

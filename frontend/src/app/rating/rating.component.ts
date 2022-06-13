import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() buttonID!: any;
  @Input() rating!: any;

  @Output() ratingEnter: EventEmitter<number> = new EventEmitter();
  @Output() ratingLeave: EventEmitter<number> = new EventEmitter();
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRatingEnter() {
    this.ratingEnter.emit(this.buttonID);
  }

  onRatingLeave() {
    this.ratingLeave.emit()
  }

  onRatingClicked() {
    this.ratingClicked.emit(this.buttonID)
  }

}

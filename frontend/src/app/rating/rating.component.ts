import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() buttonID!: any;
  @Input() rating!: any;

  @Output() buttonEnter: EventEmitter<number> = new EventEmitter();
  @Output() buttonLeave: EventEmitter<number> = new EventEmitter();
  @Output() buttonClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonEnter() {
    this.buttonEnter.emit(this.buttonID);
  }

  onButtonLeave() {
    this.buttonLeave.emit()
  }

  onButtonClick() {
    this.buttonClick.emit(this.buttonID)
  }

}

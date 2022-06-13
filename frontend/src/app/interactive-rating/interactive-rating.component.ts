import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-interactive-rating',
  templateUrl: './interactive-rating.component.html',
  styleUrls: ['./interactive-rating.component.css']
})
export class InteractiveRatingComponent implements OnInit {

  buttons = [1, 2, 3, 4, 5];
  public ratingForm: FormGroup = new FormGroup({
    rating: new FormControl()
  });

  get selected(): number {
    return this.ratingForm.get('rating')?.value as number;
  }

  constructor() { }

  ngOnInit(): void {
    this.ratingForm.valueChanges.subscribe(change => {
      console.log(change)
    })
  }

}

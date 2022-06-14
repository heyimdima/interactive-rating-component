import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interactive-rating',
  templateUrl: './interactive-rating.component.html',
  styleUrls: ['./interactive-rating.component.css']
})
export class InteractiveRatingComponent implements OnInit {

  public ratingForm: FormGroup = new FormGroup({
    rating: new FormControl('', Validators.required)
  });

  buttons = [1, 2, 3, 4, 5];

  submitted: boolean = false;

  get selected(): number {
    return this.ratingForm.get('rating')?.value as number;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }

}

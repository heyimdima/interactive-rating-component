import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveRatingComponent } from './interactive-rating/interactive-rating.component';

const routes: Routes = [
  {
    path: "",
    component: InteractiveRatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { FoodCategories } from './food-categories';
import { FOODCATEGORIES } from './mock-food-categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chukwudi';
  FoodCategories = FOODCATEGORIES;
}

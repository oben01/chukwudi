import { Component } from '@angular/core';
import { FoodCategories } from './food-categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chukwudi';
}

export const FOODCATEGORIES: FoodCategories[] = [
  { id: 1, title: 'All', imgPath: '/assets/food.svg ' },
  { id: 2, title: 'Pizza', imgPath: '/assets/food.svg ' },
  { id: 3, title: 'Asian', imgPath: '/assets/food.svg ' },
  { id: 4, title: 'Burgers', imgPath: '/assets/food.svg ' },
  { id: 5, title: 'Barbecue', imgPath: '/assets/food.svg ' },
  { id: 6, title: 'Dessers', imgPath: '/assets/food.svg ' },
  { id: 7, title: 'Thai', imgPath: '/assets/food.svg ' },
  { id: 8, title: 'Sushi', imgPath: '/assets/food.svg ' },
];

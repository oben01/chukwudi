import { Component, OnInit, Input } from '@angular/core';
import { FoodCategories } from '../food-categories';

@Component({
  selector: 'app-food-categories-card',
  templateUrl: './food-categories-card.component.html',
  styleUrls: ['./food-categories-card.component.scss'],
})
export class FoodCategoriesCardComponent implements OnInit {

  @Input() foodCategories: FoodCategories;
  toggle: boolean;
  constructor() {
    this.toggle = false;
  }

  ngOnInit(): void { }

  enableDisableRule(job) {
    this.toggle = !this.toggle;
  }
}

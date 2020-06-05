import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingList = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('meat',200),
    new Ingredient('sourcream',150),
    new Ingredient('salad',250)
  ];

  constructor() { }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.shoppingList.next(this.ingredients.slice());
    

  }
  getIngredients(){
    return this.ingredients.slice();
  }
  addMultipleIngredient(recipeIngredients:Ingredient[]){
    this.ingredients.push(...recipeIngredients);
    this.shoppingList.next(this.ingredients.slice());
    

  }
}

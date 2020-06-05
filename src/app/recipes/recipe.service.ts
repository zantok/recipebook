import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  ingredients: Ingredient[];
  private recipes: Recipe[] = [
    new Recipe('first recipe', 
    'description',
    'https://www.seriouseats.com/recipes/images/2016/08/20160801-seekh-kebab-recipe-48.jpg',
    [new Ingredient('meat',1), new Ingredient('bread',2)]),
    new Recipe('Second  recipe', 
    'Second description',
    'https://img07.rl0.ru/eda/-x900i/s2.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg',
    [new Ingredient('makaroni',2),new Ingredient('meat',1),new Ingredient('cheese',0.5)])
  ];


  constructor(private slService:ShoppingListService) { }

  sendIngredientsToSL(recIngredients:Ingredient[]){
    this.slService.addMultipleIngredient(recIngredients);
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(id: number){
    return this.recipes[id];
  }
}

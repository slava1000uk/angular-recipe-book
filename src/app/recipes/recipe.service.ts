import { EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  // recipeWasSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A Test Recipe', 
      'This is simply a test', 
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg', 
      [new Ingredient('Carrot', 5),
       new Ingredient('Cheese', 3)]),
    new Recipe(
      2,
      'Another Test Recipe', 
      'This is simply another test', 
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg', 
      [new Ingredient('Bread', 1),
       new Ingredient('Meat', 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    const recipe = this.recipes.find(
      (recipe) => recipe.id === id
    );
    return recipe;
  }

  getRecipeIngredients(recipe: Recipe) {
    return recipe.ingredients
      .map(ingredient => ingredient.name + " " + ingredient.amount )
    .join('; ');
  }
}
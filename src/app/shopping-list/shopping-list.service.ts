import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return [...this.ingredients];
    // return this.ingredients.slice();
  }

  addToShoppingList(shoppingItem: Ingredient) {
    this.ingredients.push(shoppingItem);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
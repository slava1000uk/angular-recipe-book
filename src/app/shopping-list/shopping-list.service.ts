import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return [...this.ingredients];
    // return this.ingredients.slice();
  }

  addToShoppingList(shoppingItem: Ingredient) {
    this.ingredients.push(shoppingItem);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
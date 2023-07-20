import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeIdSubscription: Subscription;


  constructor(private route: ActivatedRoute, 
    private slService: ShoppingListService,
    private recipeService: RecipeService) {}

  ngOnInit(): void {
    const recipeId = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(recipeId);

    this.recipeIdSubscription = this.route.params.subscribe(
      (params: Params) => {
        const recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipe(recipeId);
      }
    );

  }

  ngOnDestroy(): void {
    this.recipeIdSubscription.unsubscribe();
  }


  toShoppingList() {
    this.recipe.ingredients.forEach(ingredient => {
      this.slService.addToShoppingList(ingredient);
    });
  }

}

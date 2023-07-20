import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipeItem: Recipe;
   
  ingredients: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.ingredients = this.recipeService.getRecipeIngredients(this.recipeItem);
  }


  // onSelected() {
  //   this.recipeService.recipeWasSelected.emit(this.recipeItem);
  // }


}

import BaseRecipeCategory = require('baseRecipeCategory');
import Interfaces = require('interfaces');

export class RecipeCategory extends BaseRecipeCategory.BaseRecipeCategory implements Interfaces.IRecipeCategory {
    description: string;
    examples: Interfaces.IExample[];

   constructor(recipeCategory: RecipeCategory) {
       super(recipeCategory.name, recipeCategory.foodGroups);
       this.description = recipeCategory.description;
       this.examples = recipeCategory.examples;
   }

} 
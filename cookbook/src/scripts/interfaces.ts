import FoodGroup = require('foodGroup');
import Ingredient = require('ingredient');
import RecipeCategories = require('recipeCategories');
import RecipeCategory = require('recipeCategory');

export interface IBaseRecipeCategory {
    name: string;
    foodGroups: FoodGroup.FoodGroup[];
}

export interface IRecipeCategory extends IBaseRecipeCategory{
    description: string;
    examples: IExample[];
}

export interface IRecipeCategorySummary {
    text: string;
    title: string;
}

export interface IRecipeData {
    recipeCategories?: RecipeCategories.RecipeCategories<RecipeCategory.RecipeCategory>;
    recipeCategoriesSummary?: RecipeCategories.RecipeCategories<IRecipeCategorySummary>;
}

export interface IFoodGroup {
    name: string;
}

export interface IExample {
    name: string;
    ingredients: Ingredient.Ingredient[];
    prepTime: string; 
}

export interface IIngredient {
    name: string;
}



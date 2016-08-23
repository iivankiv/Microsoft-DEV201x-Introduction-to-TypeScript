import IBaseRecipeCategory = RecipeData.IBaseRecipeCategory;
import IRecipeData = RecipeData.IRecipeData;
import IRecipeCategorySummary = RecipeData.IRecipeCategorySummary;
import IRecipeCategory = RecipeData.IRecipeCategory;

module RecipeData {
    //TODO (INTERFACES EXERCISE)
    //1. Create a new interface named IBaseRecipeCategory.
    //2. Add a name property (type string) into the interface.
    //3. Add a foodGroups property (type FoodGroup[]) into the interface.
   export interface IBaseRecipeCategory {
        name: string;
        foodGroups: FoodGroup[];
    }

    //TODO (INTERFACES EXERCISE)
    //1. Create a new interface named IRecipeCategory that extends IBaseRecipeCategory
    //2. Add a description property (type string) into the interface.
    //3. Add a examples property (type IExample[]) into the interface.
    export interface IRecipeCategory extends IBaseRecipeCategory{
        description: string;
        examples: IExample[];
    }

    //TODO
    //Create an interface named IRecipeCategorySummary
    //that has the following members
    //text - string
    //title - string

    export interface IRecipeCategorySummary {
        text: string;
        title: string;
    }

    export interface IRecipeData {
        recipeCategories?: RecipeCategories<RecipeCategory>;
        recipeCategoriesSummary?: RecipeCategories<IRecipeCategorySummary>;
    }
}


interface IFoodGroup {
    name: string;
}

interface IExample {
    name: string;
    ingredients: Ingredient[];
    prepTime: string; 
}

interface IIngredient {
    name: string;
}



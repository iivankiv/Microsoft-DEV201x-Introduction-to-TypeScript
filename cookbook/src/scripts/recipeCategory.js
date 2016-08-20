//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//TODO (CONSTRUCTORS EXERCISE)
//2. Delete the name and foodGroups properties.
//1. Add code so that RecipeCategory inherits from BaseRecipeCategory
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    //name: string;
    //foodGroups: FoodGroup[];
    //TODO (INTERFACES EXERCISE)
    //1. Change the constructor's parameter type to IRecipeCategory
    /*
      TODO (CONSTRUCTORS EXERCISE)
      1. Create a constructor that accepts a recipeCategory parameter of type RecipeCategory
      2. Perform the following tasks inside of the constructor:
         a. Pass the "name" and "foodGroups"" values from the recipeCategory constructor
            parameter to the BaseRecipeCategory class (the base class or "super") by calling super().
         b. Assign the recipeCategory parameter's description property to the description property in this class.
         c. Assign the recipeCategory parameter's examples property to the examples property in this class.
    
    */
    function RecipeCategory(recipeCategory) {
        _super.call(this, recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
    return RecipeCategory;
}(BaseRecipeCategory));
//# sourceMappingURL=recipeCategory.js.map
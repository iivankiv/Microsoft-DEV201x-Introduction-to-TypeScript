import Renderer = require('Renderer');
import Interfaces = require('interfaces');
import RecipeCategories = require('recipeCategories');
import RecipeCategory = require('recipeCategory');
import RecipeCategorySummary = require('recipeCategorySummary');
import FoodGroup = require('foodGroup');
import Example = require('recipeExample');
import Ingredient = require('ingredient');

export class Bootstrapper {
 
  renderer: Renderer;
  
  //TODO (INTERFACES EXERCISE)
  //1. Change the type to use IRecipeCategory instead of RecipeCategory.
  recipeCategories: RecipeCategories<Interfaces.IRecipeCategory>;

  loadRecipes() {
      var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      try {
          let category = this.recipeCategories.items
              //Find selected item by name
              .filter(item => item.name === el.value)
              //return the item
              .reduce(item => {
                
                //TODO (CONSTRUCTORS EXERCISE)
                //Change the RecipeCategory code below so that the property values are
                //passed into the constructor rather than set individually.
                var rc = new RecipeCategory({
                    name:el.value,
                    foodGroups:item.foodGroups,
                    description:item.description,
                    examples:item.examples
                });
                return rc;                
              });
          this.renderer.renderCategory(category);
      }
      catch (ex) { alert(ex.message) }
  }
  
  init() {
      let categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      categoriesSelect.onchange = () => this.loadRecipes();

      let recipeLoader = new RecipeLoader("/json/recipeTypes.json");
      
      recipeLoader.load().then((recipeData: Interfaces.IRecipeData) => {
          this.recipeCategories = recipeData.recipeCategories;
          this.renderer = new Renderer.Renderer(recipeData.recipeCategoriesSummary);
      });
  }
  
}


window.onload = () => { 
  var bootstrapper = new Bootstrapper();
  bootstrapper.init();
};

  





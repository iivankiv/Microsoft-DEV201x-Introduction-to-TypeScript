System.register(['jquery', 'recipeCategories', 'recipeCategory', 'recipeCategorySummary', 'foodGroup', 'recipeExample', 'ingredient'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var $, RecipeCategories, RecipeCategory, RecipeCategorySummary, FoodGroup, Example, Ingredient;
    var RecipeLoader;
    return {
        setters:[
            function ($_1) {
                $ = $_1;
            },
            function (RecipeCategories_1) {
                RecipeCategories = RecipeCategories_1;
            },
            function (RecipeCategory_1) {
                RecipeCategory = RecipeCategory_1;
            },
            function (RecipeCategorySummary_1) {
                RecipeCategorySummary = RecipeCategorySummary_1;
            },
            function (FoodGroup_1) {
                FoodGroup = FoodGroup_1;
            },
            function (Example_1) {
                Example = Example_1;
            },
            function (Ingredient_1) {
                Ingredient = Ingredient_1;
            }],
        execute: function() {
            RecipeLoader = (function () {
                function RecipeLoader(url) {
                    this.url = url;
                }
                //TODO (GENERICS EXERCISE)
                //1. Change the load() function's return type to use the JQueryPromise<IRecipeData> generic
                //   This will provide the caller with much better code help as they work with the return value.
                //2. If you're in VS Code, right-click on JQueryPromise and select "Peek Definition" from the menu
                //3. Take a moment to explore how the JQueryPromise interface uses generics
                RecipeLoader.prototype.load = function () {
                    var _this = this;
                    return $.getJSON(this.url).then(function (data) {
                        var recipeData = _this.mapData(data);
                        return recipeData;
                    });
                };
                RecipeLoader.prototype.mapData = function (data) {
                    var _this = this;
                    if (data) {
                        var categories = data.recipeCategories;
                        //TODO (INTERFACES EXERCISE)
                        //Pass IRecipeCategory as the type to the generic below
                        var recipeCategories = new RecipeCategories.RecipeCategories();
                        //TODO (INTERFACES EXERCISE)
                        //Pass IRecipeCategorySummary as the type to the generic below
                        var recipeCategoriesSummary = new RecipeCategories.RecipeCategories();
                        categories.forEach(function (category) {
                            //TODO (CONSTRUCTORS EXERCISE)
                            //Change the RecipeCategory code below so that the property values are
                            //passed into the constructor rather than set individually.
                            var recipeCategory = new RecipeCategory.RecipeCategory({
                                name: category.title,
                                foodGroups: _this.getFoodGroups(category),
                                description: category.details,
                                examples: _this.getExamples(category)
                            });
                            recipeCategories.items.push(recipeCategory);
                            var recipeCategorySummary = new RecipeCategorySummary.RecipeCategorySummary({
                                text: category.title,
                                title: category.details
                            });
                            recipeCategoriesSummary.items.push(recipeCategorySummary);
                        });
                        return {
                            recipeCategories: recipeCategories,
                            recipeCategoriesSummary: recipeCategoriesSummary
                        };
                    }
                    else {
                        return null;
                    }
                };
                RecipeLoader.prototype.getFoodGroups = function (category) {
                    //Map foodgroups data to TS object
                    return category.foodGroups.map(function (foodGroup) {
                        //TODO (CONSTRUCTORS EXERCISE)
                        //Change the FoodGroup code below so that the property value is
                        //passed into the constructor rather than set individually.
                        return new FoodGroup.FoodGroup(foodGroup.title);
                    });
                };
                RecipeLoader.prototype.getExamples = function (category) {
                    var _this = this;
                    return category.examples.map(function (example) {
                        return new Example.Example({
                            name: example.name,
                            ingredients: _this.getIngredients(example),
                            prepTime: example.prepTime
                        });
                    });
                };
                RecipeLoader.prototype.getIngredients = function (example) {
                    return example.ingredients.map(function (value) {
                        return new Ingredient.Ingredient(value);
                    });
                };
                return RecipeLoader;
            }());
        }
    }
});
//# sourceMappingURL=recipeLoader.js.map
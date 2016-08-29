System.register(['Renderer', 'recipeCategory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Renderer, RecipeCategory;
    var Bootstrapper;
    return {
        setters:[
            function (Renderer_1) {
                Renderer = Renderer_1;
            },
            function (RecipeCategory_1) {
                RecipeCategory = RecipeCategory_1;
            }],
        execute: function() {
            Bootstrapper = (function () {
                function Bootstrapper() {
                }
                Bootstrapper.prototype.loadRecipes = function () {
                    var el = document.getElementById('RecipeCategory');
                    try {
                        var category = this.recipeCategories.items
                            .filter(function (item) { return item.name === el.value; })
                            .reduce(function (item) {
                            //TODO (CONSTRUCTORS EXERCISE)
                            //Change the RecipeCategory code below so that the property values are
                            //passed into the constructor rather than set individually.
                            var rc = new RecipeCategory({
                                name: el.value,
                                foodGroups: item.foodGroups,
                                description: item.description,
                                examples: item.examples
                            });
                            return rc;
                        });
                        this.renderer.renderCategory(category);
                    }
                    catch (ex) {
                        alert(ex.message);
                    }
                };
                Bootstrapper.prototype.init = function () {
                    var _this = this;
                    var categoriesSelect = document.getElementById('RecipeCategory');
                    categoriesSelect.onchange = function () { return _this.loadRecipes(); };
                    var recipeLoader = new RecipeLoader("/json/recipeTypes.json");
                    recipeLoader.load().then(function (recipeData) {
                        _this.recipeCategories = recipeData.recipeCategories;
                        _this.renderer = new Renderer.Renderer(recipeData.recipeCategoriesSummary);
                    });
                };
                return Bootstrapper;
            }());
            exports_1("Bootstrapper", Bootstrapper);
            window.onload = function () {
                var bootstrapper = new Bootstrapper();
                bootstrapper.init();
            };
        }
    }
});
//# sourceMappingURL=bootstrapper.js.map
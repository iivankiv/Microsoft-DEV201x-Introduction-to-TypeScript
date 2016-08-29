System.register(['baseRecipeCategory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BaseRecipeCategory;
    var RecipeCategory;
    return {
        setters:[
            function (BaseRecipeCategory_1) {
                BaseRecipeCategory = BaseRecipeCategory_1;
            }],
        execute: function() {
            RecipeCategory = (function (_super) {
                __extends(RecipeCategory, _super);
                function RecipeCategory(recipeCategory) {
                    _super.call(this, recipeCategory.name, recipeCategory.foodGroups);
                    this.description = recipeCategory.description;
                    this.examples = recipeCategory.examples;
                }
                return RecipeCategory;
            }(BaseRecipeCategory.BaseRecipeCategory));
            exports_1("RecipeCategory", RecipeCategory);
        }
    }
});
//# sourceMappingURL=recipeCategory.js.map
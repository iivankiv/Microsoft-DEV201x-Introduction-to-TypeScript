System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseRecipeCategory;
    return {
        setters:[],
        execute: function() {
            BaseRecipeCategory = (function () {
                function BaseRecipeCategory(name, foodGroups) {
                    this.foodGroups = [];
                    this.name = name;
                    this.foodGroups = foodGroups;
                }
                return BaseRecipeCategory;
            }());
            exports_1("BaseRecipeCategory", BaseRecipeCategory);
        }
    }
});
//# sourceMappingURL=baseRecipeCategory.js.map
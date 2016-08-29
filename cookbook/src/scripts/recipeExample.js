System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Example;
    return {
        setters:[],
        execute: function() {
            Example = (function () {
                function Example(example) {
                    this.ingredients = [];
                    this.name = example.name;
                    this.ingredients = example.ingredients;
                    this.prepTime = example.prepTime;
                }
                return Example;
            }());
            exports_1("Example", Example);
        }
    }
});
//# sourceMappingURL=recipeExample.js.map
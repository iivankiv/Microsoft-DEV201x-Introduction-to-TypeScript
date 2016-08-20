var FoodGroup = (function () {
    function FoodGroup() {
    }
    Object.defineProperty(FoodGroup.prototype, "name", {
        //TODO (PROPERTIES EXERCISE) 
        //1. Create a get and set block for a "name" property that is a string type.
        //   The get block should return _name while the set block should assign the value to _name.
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return FoodGroup;
}());
//# sourceMappingURL=foodGroup.js.map
import Interfaces = require('interfaces');
import Ingredient = require('ingredient')


export class Example implements Interfaces.IExample{
    name: string;
    ingredients: Ingredient.Ingredient[] = [];
    prepTime: string; 

    constructor(example: Interfaces.IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}



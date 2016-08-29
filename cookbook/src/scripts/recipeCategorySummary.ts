import Interfaces = require('interfaces');

export class RecipeCategorySummary implements Interfaces.IRecipeCategorySummary {
    text: string;
    title: string;

    constructor(summary: Interfaces.IRecipeCategorySummary) {
        this.text = summary.text;
        this.title = summary.title;
    }
}
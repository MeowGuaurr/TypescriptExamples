interface ItemReport {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary():string{
        return `this is a ${this.name} from ${this.year}`
    }
};

const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary():string{
        return `my drink is color ${this.color} and has ${this.sugar} of sugar`
    }
};

const printSummary = (info: ItemReport): void => {
    console.log(info.summary())
}

printSummary(oldCivic);
printSummary(drinks);
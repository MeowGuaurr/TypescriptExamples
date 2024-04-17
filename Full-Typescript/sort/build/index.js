"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('AjcdCDsfrJ');
charactersCollection.sort();
console.log(charactersCollection.data);
const ListCollection = new LinkedList_1.LinkedList();
ListCollection.add(500);
ListCollection.add(-100);
ListCollection.add(67);
ListCollection.sort();
ListCollection.print();
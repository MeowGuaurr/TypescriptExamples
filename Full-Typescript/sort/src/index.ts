import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection  } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([100, 3, -5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('AjcdCDsfrJ')
charactersCollection.sort();
console.log(charactersCollection.data);

const ListCollection = new LinkedList()
ListCollection.add(500);
ListCollection.add(-100);
ListCollection.add(67);
ListCollection.sort();
ListCollection.print();
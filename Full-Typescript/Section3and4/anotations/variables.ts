// type annotations 
const apples: number = 5;
const speed: string = 'fast';
let hasName: boolean = true;

let nothing: null = null;
let sayNothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: Array<string> = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, true, false];

//classes 
class Car{

}
let car: Car = new Car();

//object literal
let point: { x: number; y: number }= {
    x: 10,
    y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};


//type annotations to fix any type

const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); coordinates type's any

// fix type any with type annotations
const coordinates: {X: number, y: number} = JSON.parse(json);
console.log(coordinates);


// declare a variable and initialize it later
// to fix the ANY type, we type our variable before initialization
let words = ['red', 'green', 'yellow'];
let foundword:  boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'red'){
        foundword = true;
    }
} 


// when we have a variable type cannot be inferred correctly
let numbers = [-10, -1, 12, -5]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}

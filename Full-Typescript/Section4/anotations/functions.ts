// using return annotation
const add = (a: number, b: number): number => {
    return a + b;
};

//return inference
const substract = (a: number, b: number) => {
    return a - b;
};

function divide(a: number, b: number): number{
    return a/b;
};

const mult = function multiply(a: number, b: number): number{
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message)
};

const forecastToday = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
    console.log(weather);
    console.log(date);
}

logWeather(forecastToday);
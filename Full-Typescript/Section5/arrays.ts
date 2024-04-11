const carMakers = ['ford','toyota','chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const carr = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values with the array type
// carMakers.push(100);
carMakers.push('suzuki');
carMakers.map((car: string) : string => {
    return car.toUpperCase();
})

const importantDates: (Date | string)[] = [new Date(), '2015-08-09', 'mothers Day'];
importantDates.push('2015-01-01');
importantDates.push(new Date());
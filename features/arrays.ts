const carMakers = ['ford', 'toyota', 'chevy'];
const date = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Initializing an empty nested array
// const carsByMake: string[][] = [];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // error

// Help with 'map'
carMakers.map((car: strong): string => {
    return car1.toUpperCase();
})

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
// const importantDate: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100); // error
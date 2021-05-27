interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    // summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken? ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken? ${vehicle.broken}`);
    console.log(vehicle.summary());
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printVehicle(oldCivic);

// A single interface can be used for different objects. 
printSummary(oldCivic);
printSummary(drink);
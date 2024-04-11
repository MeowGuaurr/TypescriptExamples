class Vehicle {
    constructor(protected color: string) {}

    protected honk(): void {
        console.log("beep beep beep");
    }
};

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void{
        console.log("driving car");
    }

    startDriving(): void{
        this.drive();
    }
};

const car = new Car(4, 'red');
car.startDriving();

const vehicle = new Vehicle(
    'orange'
);
//console.log(vehicle.color)
// vehicle.drive();
// vehicle.honk();


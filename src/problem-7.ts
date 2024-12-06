// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
    constructor(public make: string, public model: string, public year: number){}

    getCarAge(){
        console.log(new Date().getFullYear() - this.year);
    }

}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

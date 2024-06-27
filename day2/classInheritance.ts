class Vehicle {
  constructor(private wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`);
  }
}

class Motocycle extends Vehicle {
  constructor() {
    super(2);
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motocycle();
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();

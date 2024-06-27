namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number) {}
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motocycle();
  motorCycle.updateWheelCount(1);
  motorCycle.showNumberOfWheels();
  const automobile = new Automobile();
  automobile.updateWheelCount(5);
  automobile.showNumberOfWheels();
}

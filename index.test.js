const { Person, Car, Baby } = require("./index.js");

describe("Person", () => {
  let johnDoe;
  beforeEach(() => {
    johnDoe = new Person("John Doe", 25);
  });
  it("should initiate new person with name, age and empty stomach", () => {
    expect(johnDoe.name).toBe("John Doe");
    expect(johnDoe.age).toBe(25);
    expect(johnDoe.stomach.length).toBe(0);
  });

  it("when eats, stomach should start to fill up", () => {
    expect(typeof johnDoe.eat).toBe("function");
    johnDoe.eat("Dosa");
    expect(johnDoe.stomach.length).toBe(1);
    expect(johnDoe.stomach[0]).toBe("Dosa");
  });

  it("stomach should be filled after eating 10 food items", () => {
    const breakfast = [
      "Dosa",
      "Dosa",
      "Dosa",
      "Dosa",
      "Dosa",
      "Dosa",
      "Coke",
      "Ice Cream",
      "Gulab Jamun",
      "Tea",
      "Dosa",
      "Dosa",
    ];
    breakfast.map(breakfastItem => johnDoe.eat(breakfastItem));
    expect(johnDoe.stomach.length).toBe(10);
    expect(johnDoe.stomach[9]).toBe("Tea");
  });

  it("when poops, stomach should be empty", () => {
    const breakfast = [
      "Dosa",
      "Dosa",
      "Coke",
      "Ice Cream",
      "Gulab Jamun",
      "Tea",
      "Dosa",
      "Dosa",
    ];
    breakfast.map(breakfastItem => johnDoe.eat(breakfastItem));
    johnDoe.poop();
    expect(johnDoe.stomach.length).toBe(0);
  });

  it("should return 'name, age' with toString method", () => {
    expect(johnDoe.toString()).toBe("John Doe, 25");
  });
});

describe("Car", () => {
  let cheeta;
  beforeEach(() => {
    cheeta = new Car("Cheeta", 35);
  });

  it("should have a model and mileage", () => {
    expect(cheeta.model).toBe("Cheeta");
    expect(cheeta.milesPerGallon).toBe(35);
  });

  it("should initialize tank 0 and odometer 0", () => {
    expect(cheeta.tank).toBe(0);
    expect(cheeta.odometer).toBe(0);
  });

  it("should add fuel using `fill` method", () => {
    expect(typeof cheeta.fill).toBe("function");
    cheeta.fill(5);
    expect(cheeta.tank).toBe(5);
  });

  it("Odometer should go up while driving", () => {
    expect(typeof cheeta.drive).toBe("function");
    cheeta.fill(5);
    cheeta.drive(5);
    expect(cheeta.odometer).toBe(5);
  });

  it("should cause the 'tank' to go down taking 'milesPerGallon' into account", () => {
    const filled = 5,
      driveDistance = 5,
      mileage = 35;
    cheeta.fill(filled);
    cheeta.drive(driveDistance);
    expect(cheeta.tank).toBe(filled - driveDistance / mileage);
  });

  it("should show 'I ran out of fuel at x miles!' when car runs out of fuel", () => {
    const filled = 5,
      driveDistance = 50;
    cheeta.fill(filled);
    cheeta.drive(driveDistance);
    cheeta.drive(driveDistance);
    cheeta.drive(driveDistance);
    // mileage = dis/gal => 35*5 = dis = 175
    expect(cheeta.drive(driveDistance)).toBe(
      "I ran out of fuel at 174.99999999999997 miles!"
    );

    expect(cheeta.tank).toBe(0);
  });
});

describe("Baby", () => {
  let nobita;
  beforeEach(() => {
    nobita = new Baby("Nobita", 2, "Doraemon");
  });

  // it("should be subclass of Person constructor", () => {
  //   expect(Object.getPrototypeOf(nobita)).toBe("");
  // });

  it("should have 'name', 'age', and 'favoriteToy' properties", () => {
    expect(nobita.name).toBe("Nobita");
    expect(nobita.age).toBe(2);
    expect(nobita.favoriteToy).toBe("Doraemon");
  });

  it("when eats, stomach should start to fill up", () => {
    expect(typeof nobita.eat).toBe("function");
    nobita.eat("Dosa");
    expect(nobita.stomach.length).toBe(1);
    expect(nobita.stomach[0]).toBe("Dosa");
  });

  it("stomach should be filled after eating 10 food items", () => {
    const breakfast = [
      "Dosa",
      "Dosa",
      "Dosa",
      "Dosa",
      "Dosa",
      "Dosa",
      "Coke",
      "Ice Cream",
      "Gulab Jamun",
      "Tea",
      "Dosa",
      "Dosa",
    ];
    breakfast.map(breakfastItem => nobita.eat(breakfastItem));
    expect(nobita.stomach.length).toBe(10);
    expect(nobita.stomach[9]).toBe("Tea");
  });

  it("when poops, stomach should be empty", () => {
    const breakfast = [
      "Dosa",
      "Dosa",
      "Coke",
      "Ice Cream",
      "Gulab Jamun",
      "Tea",
      "Dosa",
      "Dosa",
    ];
    breakfast.map(breakfastItem => nobita.eat(breakfastItem));
    nobita.poop();
    expect(nobita.stomach.length).toBe(0);
  });

  it("should return 'name, age' with toString method", () => {
    expect(nobita.toString()).toBe("Nobita, 2");
  });

  it("Should return a string 'Playing with Doraemon'", () => {
    expect(nobita.play()).toBe("Playing with Doraemon");
  });
});

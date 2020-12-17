const { Person } = require("./index.js");

let johnDoe;
beforeEach(() => {
  johnDoe = new Person("John Doe", 25);
});

describe("Person", () => {
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
});

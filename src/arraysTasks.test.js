import {
  nums,
  users,
  extraFirstNums,
  extraLastNums,
  extraFirstElements,
  sortedArray,
  unsortedCars
} from "./arraysTasks";

describe("should test arraysTasks", () => {
  it("should test nums array", () => {
    const output = [1, 2, 3, 4, 5, 6];
    expect(nums).toEqual(output);
  });

  it("should test users", () => {
    const output = [
      {
        name: "Borys",
        age: 101
      },
      {
        name: "Dmytro",
        age: 18
      }
    ];
    expect(users).toEqual(output);
  });

  it("should test extraFirstNums", () => {
    const output = [1, 2, 3, 4];
    expect(extraFirstNums).toEqual(output);
  });

  it("should test extraLastNums", () => {
    const output = [1, 2, 3, 4];
    expect(extraLastNums).toEqual(output);
  });

  it("should test sortedArray", () => {
    const output = [1, 2, 3, 4];
    expect(sortedArray).toEqual(output);
  });

  it("should test extraFirstElements", () => {
    const output = [0, 1, 2, 3, 4];
    expect(extraFirstElements).toEqual(output);
  });

  it("should test unsortedCars", () => {
    const output = ["Audi", "Ford", "Skoda", "VW"];
    expect(unsortedCars).toEqual(output);
  });
});

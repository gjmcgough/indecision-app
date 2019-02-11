// arguments no longer bound example

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(5,6));

// this no longer bound example

const user = {
  name: "Greg",
  cities: ["Chicago", "Atlanta", "San Diego"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);

    // console.log(this.name);
    // console.log(this.cities);

    // this.cities.forEach((city) => {
    //   console.log(this.name + " has lived in " + city);
    // });
  }
};

console.log(user.printPlacesLived());


const multiplier = {
  //numbers - array of numbers to multiply
  numbers: [10,20,30],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply - new array where numbes have been multiplied
  multiply() {
    return this.numbers.map((numNum) => this.multiplyBy * numNum)
  }
};

console.log(multiplier.multiply());

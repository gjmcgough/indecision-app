class Person {
  constructor(name = "Anonymous", age = 0) {
    console.log('test');
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

const me = new Person('Greg McG', 30);

console.log(me.getDescription());

const mew = new Person();

console.log(mew.getDescription());

class Animal {

  constructor(name) {
    this.name = name;
  }

  walk() {
    return `${this.name} animal Walking....`;
  }
}

const cat = new Animal("Felix");
console.log(cat.walk());
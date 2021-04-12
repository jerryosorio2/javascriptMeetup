// Clase padre
class Animal {
    constructor() {
      console.log("I am an animal");
    }
  
    walk() {
      console.log("walking....");
    }
  }
  

  class Birds extends Animal {
    constructor() {
      super();
      console.log("I am a bird");
    }
  }
  
  class Fish extends Animal {
    constructor() {
      super();
      console.log("I am a fish");
    }
  }
  
  
const bird = new Birds();
bird.walk();


const fish = new Fish();
fish.walk();
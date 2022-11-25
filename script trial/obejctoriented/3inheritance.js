// Inheritance cara agar mendapat class baru yang memiliki atribut  dari class induk

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present = () => `I Have ${this.brand} banyak`;
}

class Carindo extends Car {
  spion = () => `aku nduwe 2 spion`;
}
const myCar = new Carindo(`mobil smk`);

console.log(myCar.present());
console.log(myCar.spion());

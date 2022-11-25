//Method adalah function sebuah class, dapat membuat 2 methode dalam javascript
// 1.  methode bisa digunakan dimanapun setelah inisiasi
// 2. static methode yang hanya bisa digunakan dalam class itu sendiri, ketika ingin membuat utility dan tidak terganggu dengan methode lain

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present = () => {
    return `I Have ${this.brand}`;
  };
}
class Product {
  static present = (product, snack) => {
    return `I have ${product} and eat a ${snack}`;
  };
}

//const newCar = new Car("Apple");

console.log(Product.present("cappucino", "frencfries"));

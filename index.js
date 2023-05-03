//1.Create a class called "Person" that has properties for name, age, and occupation.
//Add a method called "introduce" that logs a message to the console introducing

// //the person and their occupation.
// class Person {
//     constructor(name, age, occupation) {
//       this.name = name;
//       this.age = age;
//       this.occupation = occupation;
//     }
//  //logs a message to the console introducting the person and occupation.   
//     introduce() {
//       console.log(`Hello nice to meet you, my name is ${this.name} and I'm a ${this.occupation}.`);
//     }
//   }
  
//   const person1 = new Person("Noel", 20, "Astronaut");
//   const person2 = new Person("Mercy", 27, "Doctor");
//   const person3 = new Person("Janny", 22, "Engineer");
  
//   person1.introduce();
//   person2.introduce();
//   person3.introduce();
  

//2.Create a class called "Animal" that has properties for name, species, and sound
//Add a method called "makeSound" that logs the animal's sound to the console
// class Animal {
//     constructor(name, species, sound) {
//       this.name = name;
//       this.species = species;
//       this.sound = sound;
//     }
  
//     makeSound() {
//       console.log(`${this.name} sounds ${this.sound}.`);
//     }
//   }
  
//   const animal1 = new Animal("cat", "domestic", "meowing");
//   const animal2 = new Animal("dog", "domestic", "barking");
//   const animal3 = new Animal("lion", "wild", "roaring");
  
//   animal1.makeSound();
//   animal2.makeSound();
//   animal3.makeSound();
  

// //3.Create a class called "Book" that has properties for title, author, and number of
// //pages. Add a method called "read" that logs a message to the console indicating
// //that the book has been read.

// class Book {
//     constructor(title, author, numberOfPages) {
//       this.title = title;
//       this.author = author;
//       this.numberOfPages = numberOfPages;
//     }
  
//     read() {
//       console.log(`${this.title} has been read.`);
//     }
//   }
  
//   const book1 = new Book("JavaScript: The Definitive Guide, 7th Edition", "David Flanagan", 704);
//   const book2 = new Book("Eloquent JavaScript, 3rd Edition", "Marijn Haverbeke", 472);
//   const book3 = new Book("You Don't Know JS Yet: Get Started", "Kyle Simpson", 278);

//   book1.read();
//   book2.read();
//   book3.read();
  
//4.Create a class called "Car" that has properties for make, model, and year. Add a
//method called "start" that logs a message to the console indicating that the car
//has been started.

// class Car {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     start() {
//       console.log(`${this.make} ${this.model} has been started since ${this.year}.`);
//     }
//   }
  
//   const car1 = new Car("Toyota", "Corolla Cross", 2022);
//   const car2 = new Car("Ford", "Mustang Mach-E", 2021);
//   const car3 = new Car("Hyundai", "Tucson", 2022);
  
//   car1.start();
//   car2.start();
//   car3.start();


//5.Create a class called "Shape" that has properties for width and height. Add
//methods called "getArea" and "getPerimeter" that calculate and return the
//shape's area and perimeter.

// class Shape {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       const area = this.width * this.height;
//       console.log(`The area of the shape is ${area}`);
      
//     }
  
//     getPerimeter() {
//       const perimeter = 2 * (this.width + this.height);
//       console.log(`The perimeter of the shape is ${perimeter}`);
      
//     }
//   }
  
//   const rectangle = new Shape(8, 6);
//   const square = new Shape(4, 4);
  
//   rectangle.getArea();
//   rectangle.getPerimeter();
  
//   square.getArea();
//   square.getPerimeter();

//6.Create a class called "Movie" that has properties for title, director, and rating. 
//Add a method called "play" that logs a message to the console indicating 
//that the movie is playing.


// class Movie {
//   constructor(title, director, rating) {
//     this.title = title;
//     this.director = director;
//     this.rating = rating;
//   }
  
//   play() {
//     console.log(`${this.title} is playing on Netflix.`);
//   }
// }

// const movie1 = new Movie("The Godfather", "Francis Ford Coppola", "9.2/10 on IMDb");
// const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", "9.3/10 on IMDb");
// const movie3 = new Movie("The Dark Knight", "Christopher Nolan", "9.0/10 on IMDb");

// movie1.play();
// movie2.play();
// movie3.play();

//7.Create a class called "Product" that has properties for name, price, and description. 
//Add a method called "display" that logs a message to the console displaying 
//the product's name, price, and description.

// class Product {
//     constructor (name, price, description) {

//     this.name = name;
//     this.price = price;
//     this.description = description;
//     }

//     display () {
//         console.log(`${this.name} which is ${this.description} costs ${this.price}`);
//     }

// }

// const product1 = new Product ("iphone13Pro", 900, "Apple Brand");
// const product2 = new Product ("Android 12", 750, " Samsung Brand")
// const product3 = new Product ("iPad Pro", 500, "Apple Brand");

// product1.display();
// product2.display();
// product3.display();

//8.(Optional) Create a class called "BankAccount" that has properties for account number 
//and balance. Add methods called "deposit" and "withdraw" that allow users to deposit or
// withdraw money from the account.
class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Account ${this.accountNumber} credited with ${amount}. New balance: ${this.balance}`);
    }
  
//     withdraw(amount) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//         console.log(`Account ${this.accountNumber} debited with ${amount}. New balance: ${this.balance}`);
//       } else {
//         console.log(`Insufficient balance. Account ${this.accountNumber} has balance: ${this.balance}`);
//       }
//     }
//   }
  
//   const bankAccount1 = new BankAccount(123, 987000);
//   const bankAccount2 = new BankAccount(1234, 1897000);
  
//   bankAccount1.deposit(120000);
//   bankAccount2.deposit(98000);
//   bankAccount1.withdraw(73000);
//   bankAccount2.withdraw(234000);
  

//9.
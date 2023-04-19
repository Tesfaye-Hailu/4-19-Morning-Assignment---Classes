//Create a class called "Person" that has properties for name, age, and occupation.
//Add a method called "introduce" that logs a message to the console introducing
//the person and their occupation.

// class Person {
//    constructor (name, age, occupation){
// this.name = name;
// this.age = age;
// this.occupation = occupation;
//    }
//    //the below is a method to introduce 
// introduce () {

//     //logs a message to the console introducting the person and occupation.

// console.log(`Hello nice to meet you, my name is ${this.name} & I'm {this.occupation}`)
// }
// }

// const person1 = ("Noel", 20, "astronaut")
// const person2 = ("mercy", 27, "doctor")
// const person3 = ("Janny", 22, "Enginner")

// console.log(person1)
// console.log(person2)
// console.log(person3)

// person1.introduce();
// person1.introduce();
// person1.introduce();

////////////////////////////////////////////////////

class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation
    }
    introduce(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

let person1 = new Person("James", 44, "Pilot")
let person2 = new Person("Sasha", 400, "Witch")
let Jerry = new Person("Jerry", 40, "Pilot")

console.log(typeof new Date());



//2.Create a class called "Animal" that has properties for name, species, and sound
//Add a method called "makeSound" that logs the animal's sound to the console

class Animal {
       constructor (name, species, sound){
    this.name = name;
    this.speies = age;
    this.soundn = sound;}


    makeSound () {
        console.log( `${this.name} sounds ${this.sound}`) 
    }
}

const animal1( "cat", "domestic", "meowing")
const animal2 ("dog", "domestic", "bark")
const animal3("lion", "wild", "roaring")


console.log(animal1)
console.log(animal2)
console.log(animal3)

animal1.makeSound();
animal2.makeSound()
animal3.makeSound()

//3.Create a class called "Book" that has properties for title, author, and number of
//pages. Add a method called "read" that logs a message to the console indicating
//that the book has been read.

class Book {
    constructor (title, author,numberOfPages){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages 
    }

    read() {
        console.log(`${this.title} has been read`)
    }
}

//4.Create a class called "Car" that has properties for make, model, and year. Add a
//method called "start" that logs a message to the console indicating that the car
//has been started.

class Car {
    constructor (make, model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }


start (){
    console.log (`${this.car} has been started since ${this.year}`)
}
}    


//5.Create a class called "Shape" that has properties for width and height. Add
//methods called "getArea" and "getPerimeter" that calculate and return the
//shape's area and perimeter.

class shape {
   Constructor (width, height)
   
       this.width = width;
       this.height = height;

   getArea () {
   console.log (width*length)
   getPerimeter (width*2 + height*2) 
   }
}


//6.Create a class called "Movie" that has properties for title, director, and rating. 
//Add a method called "play" that logs a message to the console indicating 
//that the movie is playing.

class Movie {
    Constructor (title, director, rating){

          this.title = title;
          this.director = director;
          this.rating = rating;
    }
    play ()
    console.log (`${this.title} is playing`)
    
}


//7.Create a class called "Product" that has properties for name, price, and description. 
//Add a method called "display" that logs a message to the console displaying 
//the product's name, price, and description.


class Product {
    Constuct (name, price, description) {

    this.name = name;
    this.price = price;
    this.description = description;
    }

display ()
  console.log (`${this.name} `)

}
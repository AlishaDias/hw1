'use strict'


const Homework1 = class Homework1 {


    // This is already implemented to indicate what a passing test looks like
    static sum = (a, b) => {
        return a + b;
    }


}


const Circle = class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.radius * this.radius * Math.PI;
    }
}


const Student = class Student {
    constructor(firstName, lastName, gpa, degreeType){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;
        this.degreeType = degreeType;
        this.grade = undefined;
        this.graduated = false;
    }
 }


const Product = class Product {
    constructor(inputString) {
        const [name, priceStr, availability] = inputString.split(',');
        this.name = name.trim();
        this.price = parseFloat(priceStr.trim());
        this.availability = availability.trim();
      }
   
    static inStock = (products) => {
        return products.filter(products => products.availability == 'In Stock');
    }


    static halfOff = (products) => {
        return products.map(product => new Product(`${product.name},${(product.price / 2).toFixed(2)},${product.availability}`));
    }

    static printProducts = (products) => {
        products.forEach((product) => {
            const formattedPrice = new Intl.NumberFormat('us-US', {
                style: 'currency',
                currency: 'USD'
            }).format(product.price);
    
            const availability = product.availability === 'In Stock' ? 'Yes' : 'No';
    
            console.log(`Product: ${product.name}, Cost: ${formattedPrice}, Availability: ${availability}`);
        });
    }
    };




module.exports = {
    'Homework1': Homework1,
    'Circle': Circle,
    'Student': Student,
    'Product': Product
};

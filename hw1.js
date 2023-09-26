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


    /**
     * *****************
     * ***** TODO ******
     * *****************
     *
     * Implement the static method printProducts below
     *
     * This method will accept an array of Products and will console.log all the products in the following format:
     * Product: Apple, Cost: $1.00, Available: Yes
     * Take note, for 'Available' we are not returning 'In Stock' or 'Out of Stock' but 'Yes' or 'No'
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (currency formatting)
     */
        static printProducts = (products) => {
        
        }


    };




module.exports = {
    'Homework1': Homework1,
    'Circle': Circle,
    'Student': Student,
    'Product': Product
};

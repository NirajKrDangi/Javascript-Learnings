// Assignment 3: Car Description Class

class Car{
    constructor(year, company, model){
        this.Year = year;
        this.Company = company;
        this.Model = model;
    }
    getDescription(){
        return `This is a ${this.Year} ${this.Company} ${this.Model}`;
    }
}
const Cars1 = new Car(2022, "Toyota", "Fortuner");
const result = Cars1.getDescription(); 
console.log(result);

/**
 * :::OUTPUT:::
 * 
 * This is a 2022 Toyota Fortuner
 */
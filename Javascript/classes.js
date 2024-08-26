/* //classes in javascript
class studentt{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    printname(){
        console.log(this.name);
        
    }
}
const student1 = new studentt("arpan",20);
student1.printname(); */

//Inheritance in javascript using car brand example
class car{
    constructor(name){
        this.name = name;
    }
    printname(){
        console.log(this.name);
    }
}
class brand extends car{
    constructor(name,brand){
        super(name);
        this.brand = brand;
    }
}
const brand1 = new brand("arpan","BMW");
brand1.printname();
console.log(brand1.brand);


//Inheritance in javascript using car brand example
class car2{
    constructor(brand){
        this.brand = brand;
    }
    dispay(){
        return ' I have a '+ this.brand;
    }
}
class model extends car2{
    constructor(brand,model){
        super(brand);
        this.model = model;
    }
    show(){
        return this.dispay() + ', it is a ' + this.model;
    }
}
const model1 = new model("BMW","X5");
console.log(model1.show());


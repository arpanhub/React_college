// arrao funciton with sinle expression
const square = (x) => x * x;
console.log(square(4)); // 16

//arrow function with two expressions
const adding = (x,y) => x+y;
console.log(adding(4,6)); // 16

// arraq function with objects
const obj = (x,y) => (
    {
        x,
        y
    }
);
console.log(obj(4,6)); // {x:4,y:6}

// arrow function with objects
const person = (name,age) => (
    {
       name:name,
         age:age,

    }
);
const X_person = person("Arpan",20);
console.log(X_person.name); // John

//bind method in javascript or shairng the method
const student = {
    name:"arpan",
    printname:function(){
        console.log(this);
    }
};
const student2 = {
    name:"arpan"
};
student.printname();
student.printname.call(student2);


// enclosing lexical content in javascript
const obj4 = {
    j:34,
    h:function(){
        const i = () => {
            console.log(this);
        };
        i();
    },
};
obj4.h();






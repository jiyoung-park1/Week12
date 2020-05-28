class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
    fullName(){
        return `your full name is ${this.firstName} ${this.lastName}` ;
    }
    getEmail(){
       return `your NMIT Email is ${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}@live.nmit.ac.nz`;
    }

}

let firstStudent = new Student("Jiyoung", "Park", 2020);
console.log(firstStudent);

console.log(firstStudent.fullName());
console.log(firstStudent.getEmail());

/*
<CLASSES TEMPLATE>
class DataStructure(){
    constructor(){
        what default properties should it have?
    }
    someInstanceMethod(){
        what should each object created from this class be able to do?
    }
}
*/

class calcu{
    //with constructor
    // constructor(a, b){
    //     this.a = a;
    //     this.b = b;
    // }
    // plus(){
    //     return this.a + this.b;
    // }
    // minus(){
    //     if(this.a < this.b){
    //         return this.b - this.a;
    //     }else return this.a - this.b;
    // }
    // multiply(){
    //     return this.a * this.b;
    // }
    
    //without constructor 
    add(a, b){return a +b;}
    substract(a, b){return a - b;}
    multiply(a, b){return a * b;}
    divide(a,b){return a/b;}
 
}

//with constructor 
// let num = new calcu(1, 2);
// console.log(num);
// console.log(num.plus());
// console.log(num.minus());
// console.log(num.multiply());

//without constructor
var cal = new calcu();
console.log(cal.add(7, 8));

//how to visualize a stack 
function factorial(x){
    if(x === 0) return 1;
    return x * factorial(x - 1)
}
console.log(factorial(4))


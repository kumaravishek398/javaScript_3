//Question1

class Rectangular{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }

}

let obj1=new Rectangular(5,7);  //creating object of rectangular class
let obj2=new Rectangular(8,9);

console.log("Width:",obj1.width ," Height:",obj1.height );
console.log("Width2:",obj2.width ," Height2:",obj2.height );

obj1.height=10;
obj2.width=25;
console.log("After modifying height of object 1 and width of object 2" );

console.log("Width:",obj1.width ," Height:",obj1.height );
console.log("Width2:",obj2.width ," Height2:",obj2.height );


//question 2

class Rectangular{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }  
    
}
  Rectangular.prototype.getArea=function(){  //using prototype property to add getArea method
      return this.height*this.width;
  }

let obj1=new Rectangular(4,5);  //creating object of rectangular class
let obj2=new Rectangular(8,9);

console.log("Area :",obj2.getArea() );


//Question 3

let obj3=new Rectangular(4,5);  
obj1.Height=50;
let obj4=new Rectangular(8,9);

console.log("Area :",obj1.getArea());  
//output is 20 instead of 200 means height property value is not updated


//Question 4

var  details={             //creating object and assigning it to a a variable without class
    firstName: "Avishek",
    lastName: "kumar"
};
console.log(details);  

details.lastName="Rastogi";
console.log(details);


//Question 5
var  details={             //creating object and assigning it to a a variable without class
    firstName: "Avishek",
    middleName:"kumar",
    lastName: "singh"
};
console.log(details);  

details.middleName="Rastogi";
console.log(details);
//not a good thing ,not secure



//Question 6
//Takes a jason string and transform it into an object
var  personal=  '({"firstName": "Avishek",  "lastName": "singh"})';
let result=eval(personal);

console.log(eval(result));  
//not recommended to use eval because it is not secure

result.lastName="kumar";
console.log(eval(result));  


//Question 7

//Takes a jason string and transform it into an object
var  personal=  '{"firstName": "Avishek",  "lastName": "singh"}'; 
console.log(JSON.parse(personal));



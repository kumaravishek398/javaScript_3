//1) using constructor to create dynamic object
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = new Date(dateOfbirth);  //creating date object and passing date
    this.address = address;
    this.married = married;
    this.profession = profession;
}

 Person1 = new Person("Avishek","Kumar",24,['java','c#','python'],"01/01/1996",{city:"Bangalore",pincode:756277},"false","AnalystA5");
Person2 = new Person("Aman","kumar",23,["++","c#"],"02/02/1994",{city:"Asansol",pincode:713301},"True","AnalystA4");

console.log(Person1);
console.log(Person2);

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}(); 



//queation 2


function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Amithabh = new Person("Amithabh","Bacchan",80,['python','c#'],"01/01/1947",{city:"Bangalore",pincode:6556},"false","AnalystA4");
Abhishek = new Person("Abhishek",50,["no skils"],"05/06/1975","false","unemployeed");
Aaradhya = new Person("Aaradhya",14,"01/01/2008","false","film");

var Abhishek = Object.create(Amithabh); //creating a new object using existing(Amithabh) object ,has the properties of amithabh
var Aaradhya = Object.create(Amithabh);
print = function()
{
    console.log("Name:",Amithabh);
    console.log("lastname:",Abhishek.lastName);
    console.log(Abhishek.address);
    console.log(Aaradhya.lastName);
    Aaradhya.lastName="Ray";
    console.log(Aaradhya.lastName);  //can overrite the inherited properties also
    
    console.log(Aaradhya.skills);
    console.log(Aaradhya.address);
    console.log(Aaradhya.firstName);
}();

//CREATING BANKING APPLICATION


function BankAccount(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}

function SavingAccount(isSalary,accountNumber,accountHolderName,accountBalance) 
{   
    //using create method can inherit properties of Bankaccount
   // var py=Object.create(account);

    this.isSalary=isSalary;
    this.accountNumber =  accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;

    this.withdraw=function(amt){
        if(this.accountBalance<=0)
          console.log("Zero balance....");
         


          else if(this.accountBalance<amt)
          {
            console.log("Low balance....");
          
          }
          else if(this.accountBalance>=amt)
          {
            this.accountBalance-=amt;
            console.log("Succesfully withdrawn from saving account: ",amt);
        
          }
     
    };

    this.getCurrentBalance=function(){
        console.log("Remaining balance :",this.accountBalance);

    };
}

function CurrentAccount(odLimit,accountNumber,accountHolderName,accountBalance) 
{   
    this.odLimit=odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;

    this.withdraw=function(amt){
        if(this.accountBalance<this.odLimit)
          console.log("your od limit is less ");
         
          
          else if(this.accountBalance>=amt)
          {
            this.accountBalance-=amt;
            console.log("Succesfully withdrawn from saving account: ",amt);
           
          }
     
    };
    this.getCurrentBalance=function(){
        console.log("Remaining balance :",this.accountBalance);

    };

}


      account=new BankAccount(95158972,"Avishek kumar",50000.00);

     saving=new SavingAccount("true",95158972,"Aman kumar",5480.00) ;
     saving.withdraw(5000);
     saving.getCurrentBalance();

     current=new CurrentAccount(1000,95158972,"Aman kumar",5480.00) ;
     current.withdraw(3000);
     current.getCurrentBalance();

     
    
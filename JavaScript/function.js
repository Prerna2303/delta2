function classinfo(){
    console.log("hello");
}

classinfo();

// Practice Q1

function printPoem(){
    console.log("twinkle twinkle little star");
    console.log("how are wonder what you are");
}

printPoem();

//Practice Q2

function dice(){
    let random = Math.floor(Math.random() * 6)+1;
    console.log(random);
}

dice();

//functions with arguments

function printName(name){
    console.log(name);
}

printName("prena");

//functions with arguments with 2 parameters

function printInfo(name,age){
    console.log(`${name}'s age is ${age} years.`)
}

printInfo("prerna",23);
printInfo("Mahesh",24);

//Example

function sum(a,b){
    console.log(a+b);
}

sum(2,3);

//example

function dob(date,month,year){
    // console.log("Date of birth: "+ date + "/" + month + "/" +year);
    console.log(`Dare of birth: ${date}/${month}/${year}`)
}

dob(23,5,2002);
dob(3,3,200);

//practice Q3

function calcAvg(a,b,c){
    let avg=(a+b+c)/3;   //variable
    console.log(avg);
}

calcAvg(2,4,6); //function Call

// Practic Q4 //print a table

function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

console.log("Table")
printTable(5);

//return keyword //Pracice Q5
//In this return keyword we call a function in console(inspect)
function getSum(n) {
    let sum=0;

    for(let i=1;i<=n;i++) {
        sum+=i;
    }

    return sum;
}



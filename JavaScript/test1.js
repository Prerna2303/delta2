let pencilPrice=10;
let erasserPrice=5;

let output= `The total price is ${pencilPrice+erasserPrice} Rupees.`;
console.log(output);

//if Statement
let age = 23;
if (age >= 18){
    console.log("you can vote.")
    console.log("you can drive.")
}
if (age < 18){
    console.log("you cannot vote")
}

//QS  Traffic Signal System
let color = "green";
if(color == "red"){
    console.log("stop")
}
if (color == "Yellow"){
    console.log("Go slow")
}
if (color == "green"){
    console.log("You can go now")
}

//else if statements
let marks=40;
if (marks >= 80){
    console.log("A+");
}
else if (marks <= 60 ){
    console.log("C");
}

//else statement
let marina = "off";
if(marina == "red"){
    console.log("stop");
}
else if (marina == "Yellow"){ 
    console.log("Go slow");
}
else if (marina == "green"){
    console.log("You can go now");
}
else {
    console.log("you can go wherever u want")
}

//Qs Popcorn
let size = 'M';
if(size == 'M'){
    console.log("price is 200/-");
}
else if (size == 'XL'){
    console.log("price is 250");
}
else if (size == 'L'){
    console.log("price is 150/-");
}
else {
    console.log("only 's' size is available");
}

//nested if else statement
let mark = 88;
if (mark>=40){
    console.log("Pass");
 if(mark >= 80){
    console.log("Grade is A+");
    } else{
    console.log("Grade is C");
    }
}else{
    console.log("fail");
}

//QS
let fruit = "apple";
if ((fruit[0]=='a')&&(fruit.length>3)){
    console.log("Good string.")
}else{
    console.log("not a good string.")
}
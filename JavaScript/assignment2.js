//Q1. Create a number variable num with some value. 
//Now, print “good” if the number is divisible by 10 and 
//print “bad” if it is not.
let num = 20;

if (num % 10 == 0){
    console.log("good");
}else {
    console.log("bad");
}

// Qs2.Take the user's name & age as input using prompts.Then return back the following statement 
//to the user as an alert (by substituting their name & age): *name* is *age* years old.
//[Use template Literals to print this sentence]
//answer
// let fullname = prompt("Enter your name");
// let age = prompt("Enter your age");
// let msg = fullname + " is " + age + " years old.";
// alert(msg);

//Qs3.Write a switch statement to print the months in a  quarter.
// Months in Quarter1 : January,February,March
// Months in Quarter2 : April,May,June
// Months in Quarter3 : July,August,September
// Months in Quarter4 : October,November,December
// [Use the number as the case value in switch]
 let quarter = 2;

 switch (quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("No month found");
 }

 //Qs4.A string is a golden string if it starts with the character ‘A’ or ‘a’
 //and has a total length greater than 5.
 //For a given string print if it is golden or not.
 let fruit = "banana";
 
 if ((fruit[0]=='a' || fruit[0] == 'A') && (fruit.length > 5)) {
  console.log("golden string");
 }else{
    console.log("not a golden string.")
 }


 //Qs5.Write a program to find the largest of 3 numbers
 let a = 88;
 let b = 98;
 let c = 67;

 if (a > b) {
    if(a > c){
        console.log(a, "is largest number.");
    }else{
        console.log(c, "is largest number.");
    }
 }else{
    if (b > c){
        console.log(b, "is largest number.");
    }else{
        console.log(c, " is largest number.");
    }
 }

 //Qs6(Bonus).Write a program to check if 2 numbers have the same last digit.
 //Eg: 32 and 47852 have the same last digit i.e. 2
 let num1= 32;
 let num2 = 47852;

 if ((num1 % 10) == (num2 % 10)){
    console.log("numbers have the same last digit which is", num1 % 10);
 } else {
    console.log("numbers dont have the same last digit.");
 }
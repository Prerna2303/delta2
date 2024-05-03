// for (let i=1; i<=5; i++){
//     console.log(i);
// }

// for (let i = 5; i>=1; i--){
//     console.log(i);
// }

// for (let i = 10; i>=1; i = i-3){
//     console.log(i);
// }

// for(let i=1;i<=15; i=i+2){
//     console.log(i);
// }

// console.log("Backwards");

//  for(let i=15;i>=1; i=i-2){
//      console.log(i);
//   }
  
// console.log("Even Numbers");

// for (let i=2;i<=10; i=i+2){
//     console.log(i);
// }

//Table of 5
// for (let i=5;i<=50;i=i+5){
//     console.log(i);
// }

// console.log ("table")
// let n = prompt("Enter a number");
// n = parseInt(n);

// for (let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//Nested for loop
// for (i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(j=1;j<=3;j++){
//         console.log(j);
//     }
// }

//while Loops
// let i = 1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// console.log("backward");

// let j=5;

// while(j>=1){
//     console.log(j);
//     j--;
// }


// console.log("break keywork");
// const favMovie = "avtar";

// let guess = prompt("guess my favorite movie");

// while(guess != favMovie){
//     if (guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess. Please try again");
// }

// if (guess == favMovie){
//     console.log("congrats!!..");
// }

//Loop with array
let fruits = ["Mango","apple","banana","litchi","strawberry"];
fruits.push("Pineapple");

 for(let i=0;i<fruits.length;i++){
     console.log(i,fruits[i]);
}
console.log ("reversed");
 for(let i=fruits.lenght-1; i>=0; i--){
     console.log(i,fruits[i]);
 }

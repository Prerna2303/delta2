//Qs1.WriteaJavaScriptprogramtogetthefirstnelementsofanarray.
//[ncanbeanypositivenumber].Forexample:forarray[7,9,0,-2]andn=3Print,[7,9,0]
let arr = [7,9,0,-2];
n=3;

let ans = arr.slice(0,n);
console.log(ans);


//Qs2.WriteaJavaScriptprogramtogetthelastnelementsofanarray.
//[ncanbeanypositivenumber].Forexample:forarray[7,9,0,-2]andn=3Print,[9,0,-2]
// arr = [7,9,0,-2];
// arr.shift(3);
// console.log(arr);
let ans2 = arr.slice(arr.length-n);
console.log(ans2);

//Qs3.WriteaJavaScriptprogramtocheckwhetherastringisblankornot.
// let str = prompt("Enter a string");

// if (str.length == 0){
//     console.log("string is empty");
// }else{
//     console.log("string is not empty");
// }

//Qs4.Write a JavaScript program to test whether the character
//at the given(character)index is lowercase.
let str = "Prera";
idx = 3;

if (str[idx] == str[idx].toLowerCase()){
    console.log("character at the given index is lowercase");
}else{
    console.log("char at the given index is uppercase");
}

//Qs5.Write a JavaScript program to strip leading and trailing spaces from a string
// let key = prompt("Please enter a string");
// console.log(`original string = ${key}`);
// console.log(`string without spaces = ${key.trim()}`);


//Qs6.Write  a JavaScript program to check if an element exists in an array or not.
let item = 0;

if(arr.indexOf(item) != -1){
    console.log("element exist in an array.");
}else {
    console.log("element doesn't exist in an array.");
}
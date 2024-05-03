//Qs1.Create a program that generates a random number representing a diceroll.
//[The number should be between 1 and 6].
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);


//Q2 Createanobjectrepresentingacarthatstoresthefollowingpropertiesforthecar:name,model,color.Printthecar’sname
const car ={
    name: "altroz",
    color: "grey",
    model: 650
};
console.log(car.name);


//Qs3.CreateanobjectPersonwiththeirname,ageandcity.Edittheircity’soriginalvaluetochangeitto“NewYork”.AddanewpropertycountryandsetittotheUnitedStates
const person={
    name: "John",
    age:23,
    city: "london"
};
person.city = "New York";
person.country = "United States"
console.log(person);

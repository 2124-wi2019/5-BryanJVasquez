/*
Bryan Vasquez
Vasquez_a05a.js
INFO 2124
Thoendel
01/19/2020
*/

//creating array with four items//
let TO_DO = ["run", "jump", "walk", "talk"];
console.log(TO_DO);
console.log("");

//Adding one item to beginning of TO_DO array//
TO_DO.unshift("sing");
console.log(TO_DO);
console.log("");

//reversing items on array//
TO_DO.reverse();
console.log(TO_DO);
console.log("");

//Sorting items on array//
TO_DO.sort();
console.log(TO_DO);
console.log("");

//verifing if array contains a letter "x" in its values//
console.log(TO_DO.includes("x"));
console.log("");

//computer parts array//
let grocery = ["Processor", "GraphicCard", "MemoryRAM", "MotherBoard", "PowerSupply", "CPUcooler"];
console.log(grocery);
console.log("");

//removing the first item of the array//
grocery.shift();
console.log(grocery);
console.log("");

//adding two more items to the array in the middle of the values//
grocery.splice(2, 0, "Fans");
grocery.splice(4, 0, "SSD");
console.log(grocery);

//Fin!!!//



    
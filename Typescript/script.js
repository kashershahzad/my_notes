"use strict";
// // npm install -g typescript
// //  tsc --init
// // Typescript types
// var num: number = 10;
// var num1: number = 1;
// var str: string = "hey";
// var bol: boolean = true;
// var un: undefined = undefined;
// var isnull: null = null;
// var is: unknown = "unknown";
// var any: any = false;
// // FOR ARRAY
// var arr: number[] = [1, 2, 3, 4]
// var arr2: string[] = ["hello", "this"]
// var arr3: [string, number, string] = ["12", 12, "hi"]
// // FUCTIONS
// function add(num1: number, num2: number):number {
//     return num1 + num2
// }
// add(12, 3)
// OBJECTS
// type usertype = {
//     name: string;
//     class: string;
//     age: number
//     email?:string
// }
// let user: usertype = {
//     name: "kasher",
//     class: "BSCS",
//     age: 22,
// }
// simple counter app in ts
let count = document.getElementById("number");
const counter = () => {
    let currentValue = parseInt(count.innerHTML);
    count.innerHTML = (currentValue + 1).toString();
};

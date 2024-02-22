
// // var str = "hello";
// // console.log(str.toUpperCase()); // Outputs: "HELLO"

// // var str = "HELLO";
// // console.log(str.toLowerCase()); // Outputs: "hello"

// // var str = "hello";
// // console.log(str.charAt(0)); // Outputs: "h"

// // var str = "hello";
// // console.log(str.indexOf("e")); // Outputs: 1

// // var str = "hello world";
// // console.log(str.substring(6, 11)); // Outputs: "world"

// // var str = "hello world";
// // console.log(str.slice(6, 11)); // Outputs: "world"

// // str1="Java"
// // str2="Script"

// // str3=str1+str2
// // console.log(str3)

// var str = "java script is a front end language";
// console.log(str.split("a"));

var str = "hello";
console.log(str.replace("h", "H"));

var str = "   hello   ";
console.log(str.trim());

var str = "hello";
console.log(str.startsWith("he")); // Outputs: true

var str = "hello";
console.log(str.endsWith("lo")); // Outputs: true

var str1 = "hello";
var str2 = "world";
console.log(str1.concat(" ", str2));

var str = "The rain in Spain falls mainly in the plain";
var regex = /ain/g;
console.log(str.match(regex));

var str = "The rain in Spain falls mainly in the plain";
console.log(str.search("Spain"));

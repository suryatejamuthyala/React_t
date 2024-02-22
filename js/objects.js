
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj)); 


// const obj1 = { a: 1, b: 2, c: 3 };
// console.log(Object.values(obj1));

// const obj3 = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj3)); 

// const obj4 = { a: 1 };
// const obj5 = { b: 2 };
// const obj6 = Object.assign({}, obj4, obj5);
// console.log(obj6); 

// str1="Java"
// str2="Script"

// console.log(str1+str2)
// console.log(obj4+obj5)

// const obj1 = { a: 1 };
// Object.freeze(obj1);
// obj1.a = 2;
// console.log(obj1); // Outputs: { a: 1 }

// const obj = { a: 1 };
// Object.seal(obj);
// obj.b = 2;
// delete obj.a;
// console.log(obj); // Outputs: { a: 1 }

// const obj = { a: 1, b: 2 };
const obj ={name:"Deepak",city:"Vizag"}
console.log(obj.hasOwnProperty("a")); 
console.log(obj.hasOwnProperty("city")); 

// str3="Name123"

const obj1 = { a: 1, b: 2 };
console.log(Object.getOwnPropertyNames(obj1)); // Outputs: ["a", "b"]

// const parent = { a: 1 };
// const child = Object.create(parent);
// child.b = 2;
// console.log(child.a); // Outputs: 1
// console.log(child.b); // Outputs: 2

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj)); // Outputs: [["a", 1], ["b", 2], ["c", 3]]


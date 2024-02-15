let numbers = [1,2,3]

console.log(numbers.indexOf(3))

numbers.pop();

console.log(numbers)

numbers.push('united States')

console.log(numbers)

console.log(numbers.includes('States'))

numbers = [7, 2, 1, 5, 12]

console.log(numbers.sort())

numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let numbers2 = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];
let addition = []

for (let i = 0; i < numbers.length; i++) {
  addition.push([]);
  
  for (let j = 0; j < numbers[i].length; j++) {
    addition[i].push(numbers[i][j] + numbers2[i][j]);
    console.log(addition[i].push(numbers[i][j] + numbers2[i][j]))
  }
}

console.log(numbers)
console.log(numbers2)
console.log(addition)


let oddArray = []
let evenArray= []
  for (i = 0; i < 10; i++){
    if (i % 2 === 0) {
      evenArray.push(i)
    }
    else oddArray.push(i);
}
console.log("odd Numbers:", oddArray)
console.log("even Numbers:", evenArray)

let a = [1, 8, 7, 9, 1]

const hasDuplicates = (arr) => arr.length !== new Set(arr).size;

console.log(hasDuplicates(a))


let multiplication = []

for (let i = 0; i < numbers.length; i++) {
  multiplication.push([]);
  for (let j = 0; j < numbers2[i].length; j++) {
    multiplication[i].push(numbers[i][j] * numbers2[i][j]);
  }
}

console.log(numbers)
console.log(numbers2)
console.log(multiplication)

function transpose(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < i; j++) {
      const swap = numbers[i][j];
      numbers[i][j] = numbers[j][i];
      numbers[j][i] = swap;
    }
  }
}

transpose(numbers)
transpose(numbers2)
console.log(numbers)
console.log(numbers2)

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
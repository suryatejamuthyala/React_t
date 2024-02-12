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
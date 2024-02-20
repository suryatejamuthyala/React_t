1.Write a program to multiply two matrices
2.Write a program to transpose of a matrices


// fetch('https://randomuser.me/api')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.text(); 
//   })
//   .then(data => {
//     console.log('Response:', data); 
//     const jsondata = JSON.parse(data);
//     console.log('DATA:',data)
//     const firstName = jsondata.results[0].name.first;
//     console.log('FIRSTNAME:',firstName)
//   })
//   .catch(error => {
//     console.error('Error fetching DATAM FROM API:', error);
//   });


Date :15/02/2024
1.Write a js code to find leap year or not 
2.Write a js code to find a string or a number is palindorme or not 
3.write a program to find the squares of the given array
4.Write a program to find the given number is amstrong or not

**
**Note**:
after you are done with the code part of each one can you give me the link of the file like the example below so that it will be easy to track (you can paste the link beside each question):
https://github.com/suryatejamuthyala/React_t/blob/main/js/arrays.js**

Date :16/02/2024


20/2/2024
1)function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 !== 0)
                return num1 / num2;
            else
                return "Division by zero error";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(3, 0, '/'));  // Output: Division by zero error
console.log(calculate(5,5,'*'))

// arthametic 
// logical 
//comparison

2)Even orr odd,palindrome ,amstrong (functions with exception handling)

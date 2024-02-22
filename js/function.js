function checkPalindrome(str) {
    try {
        str = str.toLowerCase();
        
        if (str.length <= 1) {
            return "It is a palindrome";
        }
                if (str[0] === str[str.length - 1]) {
            return checkPalindrome(str.slice(1, -1));
        } else {
            return "Not a palindrome";
        }
    } catch (error) {
        console.error("Error occurred during palindrome checking:", error);
        return "Error occurred in  palindrome Checking";
    }
}
console.log(checkPalindrome('Madam'));


function isPalindrome(str) {
    let reversedStr = reverseString(str);
        if ( str === reversedStr){
            return "It is a Palindrome"
        }
        else {
            return "It is Not palindrome"
        }
}
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(isPalindrome('Madam'));
console.log(isPalindrome('madam')); 
console.log(isPalindrome("MADAM"))


// function oddOrEven(x) {
//     try {
//         if (!Number.isInteger(x)) {
//             throw new Error("Not an integer!");
//         }
  
//         if (x % 2 === 0) {
//             return "The number is even";
//         } else {
//             return "The number is odd";
//         }
  
//     } catch (error) {
//         return error.message;
//     } finally {
//         console.log("This function is to check odd or even.");
//     }
// }

// result = oddOrEven(25);
// console.log(result); 


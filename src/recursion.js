/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

//Input: non-negative integer
//Output: product of all positive integers less than or equal to n
//Constraints: must use recursion
//Edge cases: ?
var factorial = function(n) {
    if (n < 0) {
        return null;
    }

    var result = 1;

    //Base case
    if (n === 0) {
        return result;
    }

    //Recursive case
    result = result * n;

    if (n > 0) {
        result = result * factorial(n-1);
    } 

    //return value
    return result;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
//I: array
//O: integer
//C: use recursion, don't mutate input array, one argument
//E: return 0 for empty array
var sum = function(array) {
    //Store result
    var result = 0;

    if (array.length === 0) {
        return result;
    }

    //Base case
    if (typeof(array) === 'number') {
        return result += array;
    }

    //Recursive case
    array.forEach(function(element) {
        result = result + sum(element);
    });

    //Return result
    return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//I: array
//O: integer
//C: use recursion, don't mutate input array, one argument
//E: return 0 for empty array
var arraySum = function(array) {
    var result = 0;

    if (array.length === 0) {
        return result;
    }

    if (typeof(array) === 'number') {
        return result += array;
    }

    array.forEach(function(element) {
        result = result + arraySum(element);
    });

    return result;
};

// 4. Check if a number is even.
//I: integer
//O: boolean
//C: don't use modulo, use recursion, one argument
var isEven = function(n) {
    if (n < 0) {
        n = n * -1;
    }

    if (n - 2 === 0) {
        return true;
    } else if (n - 2 === -1) {
        return false;
    }

    return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//I: Integer
//O: Integer (sum of all integers below a given integer)
//C: Use recursion, one argument
var sumBelow = function(n) {
    var result = 0;

    if (n > 1) {
        result += n-1;
        result = result + sumBelow(n - 1);
    } else if (n < -1) {
        result += n + 1;
        result = result + sumBelow(n+1);
    }

    return result;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
//I: Two integers
//O: An array of integers between the input integers, non-inclusive
//C: Two arguments, use recursion
//E: Return empty array if no integers in range, accept negative integers, accept 
// starting integer that's larger than ending
var range = function(x, y) {
    var result = [];
    
    if (y > x) {
        if (x === y - 1) {
            return result;
        } else if (x < y - 1) {
            result = result.concat(x+1);
            result = result.concat(range(x+1, y));
        }   
    } else if (x > y) {
        if (x === y + 1) {
            return result;
        } else if (x > y + 1) {
            result = result.concat(x-1);
            result = result.concat(range(x-1, y));
        } 
    }
 
    return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//I: two integers
//O: one integer
//C: use recursion, don't use complex math
//E: return 1 when exp === 0, return base when exp === 1
var exponent = function(base, exp) {
    var result = 1;

    if (exp === 0) {
        return result;
    }

    if (exp > 0) {
      result = base * exponent(base, exp-1) 
    } else if (exp < 0) {
      result = result * (1 / base * exponent(base, exp+1));
    }
    
    result = result.toFixed(5);
    return parseFloat(result);
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//I: Integer
//O: Boolean
//C: One argument, use recursion
//E: to the power of 0 equals 1
var powerOfTwo = function(n) {
    if (n === 1) {
        return true;
    }

    if (n / 2 === 1) {
        return true;
    } else if (n / 2 < 1) {
        return false;
    } else if (n / 2 > 1) {
        return powerOfTwo(n/2);
    }
};

// 9. Write a function that reverses a string.
//I: String
//O: String reversed
//C: use recrusion, one argument, don't use native reverse
//E: none 
var reverse = function(string) {
    var resultArray = [];
    var stringArray = string.split('');

    //Base case
    if (string.length === 1) {
        return string;
    }

    //For each element in the array, unshift it to the resultArray
    stringArray.forEach(function(element) {
        resultArray.unshift(reverse(element));
    });

    return resultArray.join('');
    
};

// 10. Write a function that determines if a string is a palindrome.
//I: string
//O: boolean
//C: use recursion, one argument, ignore spaces/capital letters
//E: none
var palindrome = function(string) {
    // [a, b, c, b, a] 

    if (string.length === 1) {
        return true; 
    }
    if (string.length > 1) {
        string = string.toLowerCase();
        string = string.split(' ').join('');

        var n = string.length; 

        if (string[0] === string[n - 1]) {
            var newString = string.slice(1, n-1);
            return palindrome(newString);
        } else {
            return false;
        }
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
//I: object, value of interest
//O: Integer
//C: Two arguments, call itself
//E: none
var countValuesInObj = function(obj, value) {
    //Store results
    var valueCount = 0;

    for (key in obj) {
        //Base Case
        if (!(typeof(obj[key]) === 'object')) {
            if (obj[key] === value) {
              return valueCount = 1; 
            } else {
              return valueCount;
            }
        } else {
            valueCount = valueCount + countValuesInObj(obj[key], value);
        }
    }

    return valueCount;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

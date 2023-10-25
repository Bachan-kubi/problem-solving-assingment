// Problem 1: Write a function to calculate the area of a triangle.

const calculteTriangle =(base, height)=>{
    if(base>=0 && height>=0){
        const area = 1/2 * (base*height);
        return area;
    } else{
        return "Input should be none negetive numaber!"
    }
}
const base = 10;
const height = 5;
const result = calculteTriangle(base, height)
console.log(result);

//-2 Write a function to convert degrees to radians.
const degreeToRadiums = (degree)=>{
    return (Math.PI /180);
}
const degree = 50;
console.log(degreeToRadiums(degree));

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

const calculateFactorial = (number)=>{
    if(number===0){
        return 1;
    } else if (number<0){
        return "Factorial is udefined for negetive numbers!"
    } else{
        let factorial = 1;
        for(let i = 1; i<=number; i++){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calculateFactorial(4));

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

const isPrime = (n) => {
    if (n <= 1) {
      return false;
    } else if (n <= 3) {
      return true; 
    } else if (n % 2 === 0) {
      return false; 
    } else {
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          return false; 
        }
      }
      return true;
    }
  };
  

  // Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

  const mergeArray = (arr1, arr2)=>{
    let newArr = arr1.concat(arr2);
    return newArr;
  }
  console.log(mergeArray([1, 2], [4, 5]));

//   Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

const isLeapYear = (year)=>{
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "This is a leap year";
    } else {
      return "Not a leap year";
    }
  }
  
  const year = 2024;
  const r = isLeapYear(year);
  console.log(r);

//   Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
const removeDuplicates = (arr)=>{
    const removedItems = [...new Set(arr)];
    return removedItems;
}
console.log(removeDuplicates([1, 1, 2, 2, 5]));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
const convertToCelsius = f=>{
    const celsius = (f-32) *(5/9);
    return celsius;
} 
console.log(convertToCelsius(80));

// Problem 9: Write a function to find the maximum of five numbers.

const findMaxOfFive = (num1, num2, num3, num4, num5)=>{
    let max = num1; 
  
    if (num2 > max) {
      max = num2;
    }
  
    if (num3 > max) {
      max = num3;
    }
  
    if (num4 > max) {
      max = num4;
    }
  
    if (num5 > max) {
      max = num5;
    }
  
    return max;
  }

  // Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

  const evenOdd = (items)=>{
    const length = items.length;
    if(length%2 === 0){
        return "even"
    } else{
        return "odd";
    }
  }

  console.log(evenOdd('j'));
  
  
  
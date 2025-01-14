console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Jonathan'));   //should say "Hello, Jonathan!"

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;  //un no-comment the line to use
}
//test to call the function
console.log('adding numbers 22 + 9 =', addNumbers(22, 9));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1 * num2 * num3;
}
//test to call the function
console.log('multiplying 2 * 6 * 4 =', multiplyThree(2,6,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;  //add true to the return
  }
    return false; //add false to the return
//below works as well. the expression 'number > 0' evaluate to a boolean
// return number > 0;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if( array.length === 0){
    return undefined;
  }
  else {
    return array[array.length -1];
  }
}
/////  ternary: i like using this  /////
// function getLast( array ) {
//   return array.length === 0 ? undefined : array[array.length -1];
// }
//
//test to call function
let list = [ 'a', 'b', 'c', 'd'];
let emptyList = [];
console.log('the value is d:', getLast(list));
console.log('no list, so it should say undefined', getLast(emptyList));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for( let i=0; i<array.length; i++){
    if( array[i] === value){
      return true;
    }
  }
  return false;  
}

// test to call the function
let list1 = [1,2,3,4,5];
console.log('should say true', find(4, list1));
console.log('should say false', find(711, list1));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    if( letter === string[0]){
      return true;
    }
    return false;
  }

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log('another test - should say false', isFirstLetter('c', 'bacon'));

// 9. Function to return the sum of all numbers in an array
function sumAll( addingArray ) {
  let sum = 0
  // TODO: loop to add items
  for( let i=0; i<addingArray.length; i++){
    sum = addingArray[i] + sum;
  }
  return sum;
}
//test to call function
let adding = [10,15,20,5];
console.log('adding array (10+15+20+5):',sumAll(adding));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function posNum(array){
  let array1 = [];
  for( let i=0; i<array.length; i++){
    if( array[i] > 0){
      array1.push(array[i]);
    }
  }
  return array1;
}

//test to call function
let pos = [3,6,-5,-2,17];
let neg = [-2,-4,-34,-6];
console.log('test to show only positive number:', posNum(pos));
console.log('test to show empty arry:', posNum(neg));
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

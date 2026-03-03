//min + max function built in
const max = Math.max(1, 5, 7, 8,10);   // buit-in max function
// console.log(max);
const min = Math.min(2,4,6,7,80);  // built-in min function
// console.log(min);

//spread operator wrong concept

const arraySum = (a, b, c) => a+b+c;
// console.log(arraySum);

const array = [1, 4, 5];
arraySum(array);  // this is wrong concept

//spread operator wrong concept
const array2 = [1, 4, 5];
const arraySum2 = (a, b, c) => a+b+c;

console.log(arraySum2(...array2));     // spread operator niye kaj korle of course console age variable a nite hobe;
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
const arraySum2 = (a, b, c) =>{
    const sum = a+b+c;
    console.log(a, b,c);
    return sum;
}


console.log(arraySum2(...array2));     // spread operator niye kaj korle of course console ar  age variable a nite hobe;

//copy array ba copy object onno kono array ta object korte hole, sei khettre properly copy hoi na, karon same reference dui ta ak e thake, tai ak tate change korle onno ta te o hoye jai, r ai plm dur korar jonno spread operator dorkar

// wrong way to copy array
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(5);
console.log(arr1);  
console.log(arr2);  // reference same thakar karone duitatei 4 add hobe, reference same mane dui ta ak e jaiga ba box a ase, tai j dik thekei value asuk na keno dui tatei change hobe

//right way to copy array with spread operator
const array3 = [2,4,5];
const array4 = [...array3];
array4.push(9);
console.log(array3);
console.log(array4);

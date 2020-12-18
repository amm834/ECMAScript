let fruits = ['Apple','Mango','Orange','PineApple'];
console.log(fruits);
// Get Length
console.log(fruits.length);
// Remove Last Index
fruits.pop();
console.log(fruits);
// Remove First Index 0
fruits.shift();
console.log(fruits);
// Add Value at last of Array
fruits.push('PineApple-Added');
console.log(fruits);
// Add Value at first index of Array
fruits.unshift('Apple-Added')
console.log(fruits);

let nums = [10,20,30,40,50,100];
nums.sort();
console.log(nums);  // Think as String
nums.reverse();
console.log(nums);
nums.sort((x,y)=>{return x-y});//less to greater
console.log(nums);
nums.sort((x,y)=>{return y-x});//greater to less
console.log(nums);

// Array Concattination
let boys = ['Mg Mg','Aung Aung'];
let girls = ['Hla Hla','Mya Mya'];
let joinedAry = boys.concat(girls); 
// girls.concat(boys)
console.log(joinedAry);
// Remove Value Not index
delete joinedAry[1];
console.log(joinedAry);
// Add Individually
joinedAry[1] = "Aung Aung";
console.log(joinedAry);
// Array Splice (Very Useful)
joinedAry.splice(1,3);
console.log(joinedAry);
// Add By Splice
joinedAry.splice(1,0,"Aung Aung","Hla Hla","Mya Mya");
console.log(joinedAry);
// Get new array from existing array 
let whatIWant = joinedAry.slice(1,3);
console.log(whatIWant);
const array1=["ajay","ankit","manu"]
const array2=["abhishek","manish","ajeet"]
 
array1.push(array2);
//  console.log(array1);

 array1.concat(array2);
//  console.log(array1);

 const array3= array1.concat(array2);
//  console.log(array3);
 const newarray =[...array1,...array2]
//  console.log(newarray);

const array4=[1,2,3,4,[5,6,7],[8,9,[4,5,6]]];

// console.log(array4.flat(Infinity));

// console.log(Array.isArray("ajay"));

console.log(Array.from("ajay"));

let a=200;
let b=300;
let c=300;
console.log(Array.of(a,b,c));


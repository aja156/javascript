

const myarray=[1,2,3,4,5,6,7,8,9,10];

for (const key of myarray) {
    console.log(key)
}

const mynewarray=myarray.map((num)=>{
     return num+10;
} )

console.log(mynewarray);
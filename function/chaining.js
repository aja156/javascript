// let myarray=[1,2,3,4,5,6,7,8,9,10]

// const mynewarray=myarray.
//                         map((num)=>num*10 )
//                         .map((num)=>num+2)
//                         .filter((num)=>num >=20)
//                         console.log(mynewarray);


/// reduce function


// const data=[1,2,3]


// const total=data.reduce( function(acc,curval){
//     console.log(`acc:${acc} and curval${curval}`)

//     return  acc + curval; 
// },0)

// console.log(total);

//using arrow function

// const retotal=data.reduce( (acc , acurval)=>acc+ acurval,0 );

// console.log(retotal);


const techcourse=[
    {
        coursename:"js",
        price:1299
    },
    {
        coursename:"php",
        price:999
    },
    {
        coursename:"js",
        price:1299
    },
    {
        coursename:"py",
        price:1699
    }
];

const pricetopay=techcourse.reduce((acc,item)=>acc+item.price,0);

console.log(pricetopay);
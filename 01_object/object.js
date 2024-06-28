//note: when objects ko constructor se declear ketry hai tb singleton object bnta hai lekin jb literal se keter hai to singleton se nahi banta

//object.create //isi method ko singleton kehtey hai
//singleton//

//object literals

// const symbl= symbl("key1");
 
const newobject = {
    name:"ajay",
    age:28,
    ["symbl"]:"mykey1",
    location:"chandigarh",
    "country":"india",
};

 newobject.age=30;
// console.log(newobject["age"]);
// console.log(newobject["age"]);

//  console.log(newobject["age"]);
//  console.log(newobject.country);
// console.log(newobject[symbl]);
// Object.freeze(newobject);
// newobject.name="ankit";
// console.log(newobject["name"]);

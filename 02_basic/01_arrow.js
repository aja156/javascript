const newobject={
    username:"ajay",
    price:999,

    userlogin: function(){
        console.log('${this.username} ,welcome to website');
        // console.log(this);
    }

}

newobject.userlogin();
username="aryan";
newobject.userlogin();

// console.log(this);
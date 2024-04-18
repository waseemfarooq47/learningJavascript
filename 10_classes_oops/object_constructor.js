const user ={
    username:"Waseem@123",
    password: 12345,
    logInCount: 8,
    isLogged: false,
    userDet: function(){
        console.log("Deatials got correctly")
        console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}


// console.log(user.username)
// console.log(user.userDet())
// console.log(this)

/************** above code causes problem when we have multple instance objects too overcome this we have constructors ********************/

/******* CONSTRUCTOR FUNCTION *******/ 

function myUser(username,loginCount,isLoggedIn){
   this.username=username 
    this.loginCount= loginCount
    this.isLoggedIn=isLoggedIn

    this.greet= function(){
        console.log(`Welcome ${this.username}`);
    }

    this.greet();

    // return this (this is not required it is already returned)
}


const userOne = new myUser("waseem123",12,true)
const userTwo = new myUser("irfan123",2,false)

console.log(userOne.loginCount)


// >>> constructor comes with 4 steps 
//1 object is created using new
// 2 pass on to the function
// 3 returned to this 
// 
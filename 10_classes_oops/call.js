
/****** CALL In JavaScript *********/

function setUsername(username){
    this.username=username
    console.log("called")
}


function userDetails(username,email,password){
    setUsername.call(this,username)
    this.email=email,
    this.password=password
}


let myObj = new userDetails("waseem","ww@dd.com",12345)
console.log(myObj);
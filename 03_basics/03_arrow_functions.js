const user={
    username:"waseem",
    age:12,
    welcome:function(){
        console.log(this)
        console.log(this.username + " You're Welcome!!")
    }
}

// user.welcome()

// user.username = "irfan"

// user.welcome()


function chai(){
    console.log(this)
}

// console.log(this)

chai()

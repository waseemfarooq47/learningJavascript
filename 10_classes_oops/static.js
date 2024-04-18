class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username}`)
    }

    // static keyword does not give acess outside thw scope. we will not be able to called it 
    //as method as i shows error also it doesn't work in inheritance

    static userId(){
        return "123"
    }
}


const user1 = new User("Waseem")
// console.log(user1)
// user1.logMe()
// console.log(user1.userId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}


const user2 = new Teacher("Waseem","www.aa@com")
console.log(user2)
// console.lof(user2.userId())
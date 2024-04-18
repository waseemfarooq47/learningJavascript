class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        return `${this.username} is logged in`
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    courseOpted(){
        return `${this.username} opted the course`
    }
}

const student = new Teacher("waseem","mmm.ww@.com","2345@qwe")

const newUser = new User("Irfan")

// console.log(student)
// console.log(student.courseOpted())

console.log(newUser)
console.log(newUser.logMe())



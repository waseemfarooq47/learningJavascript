class User{
    constructor(username,email,password){
            this.username =username
            this.email= email
            this.password=password
    }

    encryptPassword(){
        return `${this.password}&abc`
    }

    usernameChanged(){
        return `${this.username.toUpperCase()}`
    }
}



const user1 = new User("waseem","waseem@ee.com",123)

console.log(user1)
console.log(user1.usernameChanged())
console.log(user1.encryptPassword())


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
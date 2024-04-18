class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }

    get username(){
        return this._username.toUpperCase()
    }

    set username(value){
        this._username=value
    }

    get password(){
        return `@waseem@${this._email}$123xyz`
    }

    set password(value){
        this._email=value
    }
}


const account= new User("Waseem","12wazz")

console.log(account)
console.log(account.username)
console.log(account.password)


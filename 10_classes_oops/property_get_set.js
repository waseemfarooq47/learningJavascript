function User (email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return `$@&${this._password}*//`
        },

        set: function(value){
            this._password=value
        }
    })

}

const account = new User("waseem@cc.com",123)

console.log(account.email)
console.log(account.password)
// function multiplxer(num){
//     return num * 5
// }

// multiplxer.power = 2
// console.log(multiplxer(7))
// console.log(multiplxer.power)
// console.log(multiplxer.prototype)



function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
    console.log(this.score)
}
createUser.prototype.printMe=function(){
   console.log(`Price is ${this.score}`)
}


// ********* Here we had created object now we can use method directly without use of prototype ***********??
const chai = new createUser("Waseem",30)
console.log(chai)
chai.printMe()
console.log(chai.increment())

const tea = new createUser("Tahir",233)
console.log(tea)
tea.increment()
tea.printMe()

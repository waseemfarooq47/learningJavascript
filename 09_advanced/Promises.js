const promiseOne=new Promise((resolve,reject)=>{
    console.log("Async is completed")
    resolve()
})

promiseOne.then(()=>{
    console.log("Resolve is completed")
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 2 Task")
    },1000)
    resolve()
}).then(()=>{
    console.log("Async 2 Resolved")
})


const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"waseem",password:"12345"})
    })
})

promiseThree.then((user)=>{
    console.log(user)
})


//*******Using then,catch,finally method *********/

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:"waseem",email:"waseem2@gmail.com"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})


//*******Using Async Await method *********/

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"Irfan Ahmad",email:"waseeem@example.com"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
});

async function myPromise(){
    try {
        const response = await(promiseFive)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

myPromise()


//******* Using fetch method  using trycatch *********/

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     try {
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
// }


// getAllUsers()


//******* Using fetch method  using then catch *********/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
        return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error",error)
})
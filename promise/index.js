const promise = new Promise(function(resolve, reject){
    resolve('hey!')
})

promise
    .then((result)=>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })


const cows=9;

const countCows= new Promise(function(resolve,reject){
    if(cows>10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject('There is not cows on the farm');
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('Finaly'));
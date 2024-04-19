// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not suitable car'), 5000);
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

//Invoke these 3 function in parallel
Promise.all([
    askFirstDealer(),
    askSecondDealer(),
    askThirdDealer()
])
.then( prices => {
    console.log(prices);
})
.catch(error => {
    console.log(error);
})

// this can be written as
Promise.all([
    askFirstDealer().catch( error => console.log(error)),
    askSecondDealer().catch( error => console.log(error)),
    askThirdDealer().catch( error => console.log(error)),
    Promise.reject('rejected for some reason')
])
.then( prices => {
    console.log(prices);
})
.catch(error => {
    console.log(error);
})

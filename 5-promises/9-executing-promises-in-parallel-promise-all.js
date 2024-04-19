// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
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
});

//what if i pass regular values instead of functions.
Promise.all([1,'string',true])
    .then(values => console.log(values));

//what if i pass an empty array
Promise.all([]).then(values => console.log(values));
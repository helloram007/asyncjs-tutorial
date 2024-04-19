// Declaring calculateSquare function
function calculateSquare(number){
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number !== 'number'){
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        },1000);
    });
    return promise;
}

calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        throw new Error('Something went wrong');
        console.log(value);
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });

//insteading of throwing an error, we return a promise.
    calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            return reject(new Error('Something went wrong'));
        });
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });
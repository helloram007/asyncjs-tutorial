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

// Example of invoking calculateSquare function with correct argument as an number 2.
calculateSquare(2)
    .then(value => {
        console.log('Success: ' + value);
    }, error => {
        console.log('Error' + error)
    });

// Example of invoking calculateSquare function with incorrect argument as a string 'string'.
calculateSquare('string')
    .then(value => {
        console.log('Success: ' + value);
    }, error => {
        console.log('Error' + error)
    });
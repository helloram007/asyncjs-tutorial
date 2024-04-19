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
    })
    .then(value2 => {
        console.log(value2);
    });
//above 2nd then returns undefined.
// this is because, the first then returns nothing.
calculateSquare(1)
    .then(value => {
        console.log(value);
        return 25;
    })
    .then(value2 => {
        console.log(value2);
    });
// now the above returns 25 , as first then returns static 25;

// now instead of 25, i will  throw an error.
calculateSquare(1)
    .then(value => {
        console.log(value);
        throw new Error('error');
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error occured: ' + reason);
});

// Happy path with recursive,
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error occured: ' + reason);
});

// now lets try with string being passed.
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare('string');
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error occured: ' + reason);
});
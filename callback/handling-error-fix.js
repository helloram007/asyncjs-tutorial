function calculateSquare(number, callback) {
    setTimeout(function(){
        if(typeof number !== 'number'){
            //Below instead of throwing an error, i will call the callback and pass the error.
            //throw new Error('Argument of type number is expected');
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        //Above if everything goes well, the first of argument of call is null
        callback(null, result);
    },1000);
}

    calculateSquare('bad argument', function(error, result){
        if( error !== null){
            console.log('Caught error: ' + String(error));
            return;
        }
        console.log(result);
    });
    calculateSquare(2, function(error, result){
        if( error !== null){
            console.log('Caught error: ' + String(error));
            return;
        }
        console.log(result);
    });
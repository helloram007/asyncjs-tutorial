function calculateSquare(number, callback) {
    setTimeout(function(){
        if(typeof number !== 'number'){
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    },1000);
}

try {
    calculateSquare(100, function(result){
        console.log(result);
    });
    console.log("Error Handling now")
    calculateSquare('bad argument', function(result){
        console.log(result);
    });
} catch (error) {
    console.log('Caught error: ' + String(error));
}
// Ordinary capitalize function
function capitalize(text){
    return text[0].toUpperCase() + text.substr(1);
}

// Promisified capitalize function
function capitalizePromise(text){
    return new Promise(function(resolve, reject){
        if(typeof text !== 'string'){
            return reject(new Error('Argument must be a string'));
        //Don't forget to put a return statement here, otherwise
        //the execution will go further
        }
        const result = text[0].toUpperCase() + text.substring(1);
        return resolve(result);
    });
}

const hello = "hello";

// test the happy path scenario
capitalizePromise(hello)
    .then(
        value => {
            console.log('Value: ' + value);
        } , 
        error => {
            console.log('Error: ' + error);
        });

// now test the error scenario
 capitalizePromise(1)
    .then(
        value => {
            console.log('Value: ' + value);
        } , 
        error => {
            console.log('Error: ' + error);
        });
    
# aysncjs-tutorial
This is an Async Javascript Tutorial

## What is a callback?
Callback is any function that is passed as an argument to another function, and then invoked from within that function.

```
function print(number){
  console.log(number)
}
const numbers = [1,2,3,4];
//here in this case, print function is passed as argument and executed within the loop.
numbers.forEach(print)
```

## Why callbacks are not Asynchronous always.
take an example.
```
function f(callback){
    setTimeout(( => callback(),0));
}
f(() => console.log('This is a callback '));
console.log('Hello world!');
```
Here when setTimeout is call, Javascript engine puts this into Message Queue and once the call stack is empty, then the timeout is called.
hence this is an asynchronous function, but if you remove setTimeout and only call "callback()", then this becomes synchromous function.
[!NOTE]
Callbacks are not always Asynchronous.

## Handling Errors in callbacks.
This example throws and error.
[Handling Errors in callbacks](callback/handling-error.js)

#### Now We will Fix this.
[Fixing Handling Errors in callbacks](callback/handling-error-fix.js)

### Pros & Cons of Callbacks.
#### Pros
  1. Simplicity
  2. Popularity

#### Cons:
  1. Lack of Readability
  2. Callback Hell.

## Promises
### What are Promises?
In JavaScript, promises are objects that represent the eventual completion or failure of an asynchronous operation. They are commonly used for handling asynchronous operations such as fetching data from a server, reading files, or executing other time-consuming tasks without blocking the main execution thread.

Promises have three states:
  1. Pending: Initial state, neither fulfilled nor rejected.
  2. Fulfilled: The operation completed successfully.
  3. Rejected: The operation failed.

Promises can be created using the Promise constructor. The constructor takes a function with two parameters: resolve and reject. Inside this function, you perform the asynchronous operation, and when it's completed, you call resolve to indicate success or reject to indicate failure.

A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
"Producing Code" can take some time and "Consuming Code" must wait for the result.

Promise Signature
```
  const myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
  });

  // "Consuming Code" (Must wait for a fulfilled Promise).
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
```
** Basic Example **

    const myPromise = new Promise((resolve, reject) => {
      // Perform asynchronous operation
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
          resolve(randomNumber); // Operation succeeded
        } else {
          reject(new Error("Operation failed")); // Operation failed
        }
      }, 1000);
    });

    // Using the promise
    myPromise
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
```
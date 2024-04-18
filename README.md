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

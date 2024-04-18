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

async function printNumber1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber1 is done');
            resolve(1);
        }, 1000);
    });
}

async function printNumber2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber2 is done');
            resolve(2);
        }, 1000);
    });
}

async function inParallel(){
    const promise1 = await printNumber1();
    const promise2 = await printNumber2();

    
    //const number1 = await promise1;
    //const number2 = await promise2;
    //console.log(number1, number2);

    //above 3 lines can be written as below
    console.log(await promise1, await promise2);
}

inParallel();
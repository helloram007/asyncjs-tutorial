function getSpecificNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42),2000)
    });
}

async function f() {
    const specificNumber = await getSpecificNumber();
    console.log(specificNumber)
}
f();

async function f1() {
    getSpecificNumber()
        .then( specificNumber => console.log(specificNumber));
}

f1();
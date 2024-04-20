async function f() {
    return 'hello world!';
}

console.log(f());

async function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true),5000);
    })
}

console.log(f1());

async function f2(){ 
    return Promise.reject(404)
}

f2();
async function f(){
    const response = await fetch('https://some-host.comwrong-url');
}

f().catch(e => alert('Custom error: ' + e));

async function f1(){
    try{
        const response = await fetch('https://some-host.comwrong-url');
    }catch(e){
        console.log('Some error: ' + e)
    }
}

f1();
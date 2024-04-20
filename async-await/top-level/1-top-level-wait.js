function getSpecificNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42),2000)
    });
}

const specificNumber = await getSpecificNumber();
console.log(specificNumber);    

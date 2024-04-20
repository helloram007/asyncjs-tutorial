const promiseAll = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.resolve([]);
    }

    const promiseValues = [];

    let settledPromisesCount = 0;

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            
            promise.then((result) => {
                settledPromisesCount += 1;
                promiseValues[index] = result;
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                }
            }).catch((reason) => {
                reject(reason);
            });
        });
    });
}

const getOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1),1000);
    });
}
const getTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2),1000);
    });
}
const getThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(3),1000);
    });
}

const getOneModified = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => reject(1),1000);
    });
}

promiseAll([getThree(),getTwo(),getOne()])
    .then(values => {
        console.log(values);
    });

promiseAll([1,'str',true])
    .then(values => console.log(values));
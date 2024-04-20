var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Yep, I got one extra pen.'),3000);
    });
}

var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> reject('Sorry man,got only one pen.'),3000);
    });
}

var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Sure, I have a pen for you.'),3000);
    });
}

var askAtShop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('We always have pens, you can buy one for $1'),3000);
    });
}

Promise.race([askJohn(),askEugene(),askSusy()])
    .then(value => console.log(value));

Promise.race([askJohn(),askEugene(),askSusy()])
    .then(value => console.log(value))
    .catch(reason => console.log(reason));

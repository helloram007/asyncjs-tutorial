var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> reject('Yep, I got one extra pen.'),3000);
    });
}

var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> reject('Sorry man,got only one pen.'),1000);
    });
}

var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> reject('Sure, I have a pen for you.'),2000);
    });
}

Promise.any([askJohn(),askEugene(),askSusy()]);

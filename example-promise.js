function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        typeof a === 'number' && typeof b === 'number' ? resolve(a + b) : reject("try again.");
    });
};

addPromise(2, 6).then(function(result) {
    console.log("The answer is: " + result)
}, function(err) {
    console.log("error: these are not numbers - " + err)
});

addPromise(2, "dinosaur").then(function(result) {
    console.log("The answer is: " + result)
}, function(err) {
    console.log("error: these are not numbers - " + err)
});

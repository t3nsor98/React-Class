// Define a function createCounter with parameter n
var createCounter = function (n) {
    // Initialize count with value of n
    let count = n;
    // Return an inner function
    return function () {
        // Increment count by 1 and return its value
        return count++;
    };
};

// Call createCounter with argument 69 and assign the returned function to county
const county = createCounter(69);

// Loop 5 times
for (let i = 0; i < 5; i++) {
    // Call county function (which increments count by 1)
    console.log(county());
}

// Call county function and log its returned value
console.log(county());

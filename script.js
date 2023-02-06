const sum = function(numbers = []) {
    return numbers.reduce((a, b) => a + b, 0);
};

const sub = function(numbers = []) {
    return numbers.reduce((a, b) => a - b);
};

const multiply = function(numbers = []) {
    return numbers.reduce((a, b) => a * b, 1);
};

const div = function(numbers = []) {
    return numbers.reduce((a, b) => a / b); 
};

const power = function(numbers = []) {
    if (numbers.length < 2) {
        return 0;
    }
    return numbers[0] ** numbers[1];
};



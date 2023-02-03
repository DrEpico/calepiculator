const sum = function(numbers = []) {
    return numbers.reduce((a, b) => a + b, 0);
};

const sub = function(numbers = []) {
    return numbers.reduce((a, b) => a - b, 0); //sum([4, 9]) => -13?!
};

const multiply = function(numbers = []) {
    return numbers.reduce((a, b) => a * b, 1);
};

const div = function(numbers = []) {
    return numbers.reduce((a, b) => a / b, 1); //div([6, 3]) => 0.05555555555555555?!
};

const power = function(numbers = []) {
    return numbers.reduce((a, b) => a ** b, 1); //power([4, 2]) => 1?!
};
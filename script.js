numbers = []

const sum = function(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
};

const sub = function(numbers) {
    return numbers.reduce((a, b) => a - b);
};

const multiply = function(numbers) {
    return numbers.reduce((a, b) => a * b, 1);
};

const div = function(numbers) {
    return numbers.reduce((a, b) => a / b); 
};

// const power = function(numbers = []) {
//     if (numbers.length < 2) {
//         return 0;
//     }
//     return numbers[0] ** numbers[1];
// };

const inputField = document.querySelector("form #input")
const buttons = document.querySelectorAll("#container button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        operator = this.innerHTML;
        numbers[0] = parseFloat(document.querySelector('#input').value);
        numbers[1] = numbers[0];
        inputField.value = "";
        
        console.log(numbers[0]);
        console.log(numbers[1]);
        console.log(operator);
        console.log(numbers);
        //if or switch operator statement and do sum(numbers) and etc.
    });
});


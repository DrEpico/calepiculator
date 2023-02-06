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

// const power = function(numbers = []) {
//     if (numbers.length < 2) {
//         return 0;
//     }
//     return numbers[0] ** numbers[1];
// };



// function getValue() {
//     let input = document.querySelector('#input').value;
//     console.log(input);
// }

function storeVar(numbers = []){
    numbers[0] = parseFloat(document.querySelector('#input').value);
    console.log(numbers[0]);
}
const buttons = document.querySelectorAll("#container button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        operator = this.innerHTML;
        console.log(operator);
    });
});

//if or switch operator statement and function call
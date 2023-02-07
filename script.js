numbers = []
const inputField = document.querySelector("form #input");
const buttons = document.querySelectorAll("#container .midCalc");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        operator = this.innerHTML;
        numbers[1] = numbers[0];
        numbers[0] = parseFloat(document.querySelector('#input').value);
        inputField.value = "";
        console.log(numbers[0]); 
        console.log(numbers[1]); 
        console.log(operator); 
        console.log(numbers);
        updateNumbers = numbers;
    });
});

const finalCalculation = document.querySelectorAll("#container .endCalc");
finalCalculation.forEach(button => {
    button.addEventListener("click", function() {  
        numbers[1] = numbers[0];
        numbers[0] = parseFloat(document.querySelector('#input').value);  
        if(operator === "+"){
            inputField.value = sum(updateNumbers);
            //console.log(sum(updateNumbers));
        } else {
            console.log("error")
        }
    });
});
const sum = function(numbers) {
    return numbers.reduce(function(a, b){
        console.log(a + b)
        return a + b;
    });
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




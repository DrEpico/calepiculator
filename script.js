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
        updateNumbers = numbers;
    });
});

const finalCalculation = document.querySelectorAll("#container .endCalc");
finalCalculation.forEach(button => {
    button.addEventListener("click", function() {  
        numbers[1] = numbers[0];
        numbers[0] = parseFloat(document.querySelector('#input').value);
        switch(true){
            case operator === "+":
                inputField.value = sum(updateNumbers);
                console.log(updateNumbers);
                console.log(sum(updateNumbers));
                break;
            case operator === "-":
                inputField.value = sub(updateNumbers);
                console.log(updateNumbers);
                console.log(sub(updateNumbers));
                break;
            case operator === "x":
                inputField.value = multiply(updateNumbers);
                console.log(updateNumbers);
                console.log(multiply(updateNumbers));
                break;
            case operator === "➗":
                inputField.value = div(updateNumbers);
                console.log(updateNumbers);
                console.log(div(updateNumbers));
                break;
            case operator === "^":
                inputField.value = power(updateNumbers);
                console.log(updateNumbers);
                console.log(power(updateNumbers));
                break;
            case operator=== "C":
                inputField.value = "";
                numbers = [];
                updateNumbers = [];
                console.log(updateNumbers);
                break;
            default: 
                console.log("error");
        }
        
    });
});

const sum = function(numbers) {
    return numbers[1] + numbers[0];
    // return numbers.reduce(function(a, b){
    //     return a + b;
    // });
};

const sub = function(numbers) {
    return numbers[1] - numbers[0];
    // return numbers.reduce((a, b) => a - b);
};

const multiply = function(numbers) {
    return numbers[1] * numbers[0];
    //return numbers.reduce((a, b) => a * b, 1);
};

const div = function(numbers) {
    return numbers[1] / numbers[0];
    //return numbers.reduce((a, b) => a / b); 
};

const power = function(numbers = []) {
    if (numbers.length < 2) {
        return 0;
    }
    return numbers[1] ** numbers[0];
};




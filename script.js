numbers = []
const inputField = document.querySelector("form #input");
const buttons = document.querySelectorAll("#parent-container .midCalc");
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

const finalCalculation = document.querySelectorAll("#parent-container .endCalc");
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

const backBtn = document.querySelector("#parent-container #back");
backBtn.addEventListener("click", function() {
    inputField.value = inputField.value.substring(0, inputField.value.length -1);
})

const decimalBtn = document.querySelector("#parent-container #decimal");
decimalBtn.addEventListener("click", function() { 
        if (!inputField.value.includes(".") && inputField.value.length < 10){
            inputField.value += ".";
        }
    });


const numpad = document.querySelectorAll("#parent-container .numpad");
numpad.forEach(button => {
    button.addEventListener("click", function() { 
        if (inputField.value.length < 10){
            inputField.value += button.textContent;
        }
    });
});

document.querySelector("#input").addEventListener("keypress", function(event) {
        const inputValue = event.key;
        const allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", "+", "*", "/"];
        if (!allowedValues.includes(inputValue)) {
        event.preventDefault();
        }
    });

const sum = function(numbers) {
    return numbers[1] + numbers[0];
};

const sub = function(numbers) {
    return numbers[1] - numbers[0];
};

const multiply = function(numbers) {
    return numbers[1] * numbers[0];
};

const div = function(numbers) {
    if (numbers[1] === 0) {
        return "Error: Divide by zero";
    } else {
    return numbers[1] / numbers[0];
    }
};

const power = function(numbers = []) {
    if (numbers.length < 2) {
        return 0;
    }
    return numbers[1] ** numbers[0];
};




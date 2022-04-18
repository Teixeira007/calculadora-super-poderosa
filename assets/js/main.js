const container = document.querySelector('.container');
const table = document.querySelector('.table');
const calculationField = document.querySelector('.calculation-field');
const numberZero = document.querySelector('.number-zero');
const temperatureCelsiu = document.querySelector('.celsius-input');
const temperatureKelvin = document.querySelector('.kelvin-input');
const temperatureFahrenheit = document.querySelector('.fahrenheit-input');
const divTemperature = document.querySelector('.div-temperature');




document.addEventListener('click',  function(event){
    const element = event.target;
    // let calculadoraValue = calculationField.value;
    
    // Numbers
    if(element.classList.contains('number-zero')){
        calculationField.value += 0;
    }
    if(element.classList.contains('number-one')){
        calculationField.value += 1;
    }
    if(element.classList.contains('number-two')){
        calculationField.value += 2;
    }
    if(element.classList.contains('number-three')){
        calculationField.value += 3;
    }
    if(element.classList.contains('number-four')){
        calculationField.value += 4;
    }
    if(element.classList.contains('number-five')){
        calculationField.value += 5;
    }
    if(element.classList.contains('number-six')){
        calculationField.value += 6;
    }
    if(element.classList.contains('number-seven')){
        calculationField.value += 7;
    }
    if(element.classList.contains('number-eight')){
        calculationField.value += 8;
    }
    if(element.classList.contains('number-nine')){
        calculationField.value += 9;
    }
    

    // Operation
    if(element.classList.contains('sum')){
        calculationField.value += " + " ; 
    }
    if(element.classList.contains('subtraction')){
        calculationField.value += " - " ; 
    }
    if(element.classList.contains('multiplication')){
        calculationField.value += " * " ; 
    }
    if(element.classList.contains('division')){
        calculationField.value += " / " ; 
    }

    // Equality
    if(element.classList.contains('equality')){
        equality();
    }

    // Clear Field
    if(element.classList.contains('clear')){
        clearField();
    }
    if(element.classList.contains('pointer')){
        calculationField.value += '.';
    }
    if(element.classList.contains('pi')){
        calculationField.value += Math.PI;
    }
    if(element.classList.contains('potency')){
        calculationField.value += " ** ";
    }
    if(element.classList.contains('root')){
        calculationField.value += "√ ";
    }
    if(element.classList.contains('factorial')){
        calculationField.value += " !  ";
    }
    if(element.classList.contains('exp')){
        calculationField.value += " E ";
    }
    if(element.classList.contains('temperature')){
        divTemperature.style.visibility = "visible";
        temperatureConverter();
    }
    
});


let sum = (num1, num2) => Number(num1) + Number(num2)

let subtraction = (num1, num2) => Number(num1) - Number(num2);

let multiplication = (num1, num2) => Number(num1) * Number(num2);

let division = (num1, num2) => Number(num1) / Number(num2);

let potency = (num1, num2) => Math.pow(Number(num1), Number(num2));

let root = (num1) => Math.sqrt(Number(num1));

let exp = (num1, num2) => num1 * (Math.pow(10, num2));

let factorial = (num1) => {
    let result = num1;
    for(let i = num1-1; i > 0; i--){
        result *= i
    }
    return result;
}

 
function whichOperation(operation, arrayNumbers){
    if(operation === "+"){
        return sum(arrayNumbers[0], arrayNumbers[2]);
    }
    else if(operation === '-'){
        return subtraction(arrayNumbers[0], arrayNumbers[2]);
    }
    else if(operation === '*'){
        return multiplication(arrayNumbers[0], arrayNumbers[2]);
    }
    else if(operation === '/'){
        return division(arrayNumbers[0], arrayNumbers[2]);
    }else if(operation === "**"){
        return potency(arrayNumbers[0], arrayNumbers[2]);
    }
    else if(operation === "√"){
        return root(arrayNumbers[1]);
    }
    else if(operation === '!'){
        return factorial(arrayNumbers[0]);
    }
    else if(operation === "E"){
        return exp(arrayNumbers[0], arrayNumbers[2]);
    }
    else{
        return '∉';
    }
}

function equality(){
    let arrayNumbers = calculationField.value.split(' ');
    
    if(arrayNumbers.length !== 2){
        let operation = arrayNumbers[1]; 
        const resultado  = whichOperation(operation, arrayNumbers);
        calculationField.value = resultado;   
    }else{
        operation = arrayNumbers[0];
        const resultado  = whichOperation(operation, arrayNumbers);
        calculationField.value = resultado;
    }
        
    arrayNumbers = [];
}

function clearField(){
    calculationField.value = '';
}

function temperatureConverter(){
    document.addEventListener('click', function(event){
        const element = event.target;
        if(element.classList.contains('celsius')){
            converterDeCelsius();
        }
        if(element.classList.contains('kelvin')){
            converterDeKevin();
        }
        if(element.classList.contains('fahrenheit')){
            converterDeFahrenheit();
        }
    });
}

function converterDeCelsius(){
    let celsius = Number(temperatureCelsiu.value);
    let kelvin = celsius + 273;
    let fahrenheit = ((celsius/5) * 9) + 32;

    showTemperatures(kelvin, celsius, fahrenheit)
}

function converterDeKevin(){
    let kelvin = Number(temperatureKelvin.value);
    let celsius = kelvin - 273;
    let fahrenheit = (((kelvin - 273)/5) * 9) + 32;
    showTemperatures(kelvin, celsius, fahrenheit);
}

function converterDeFahrenheit(){
    let fahrenheit = Number(temperatureFahrenheit.value);
    let celsius = ((fahrenheit-32)/9) * 5;
    let kelvin = (((fahrenheit-32)/9) * 5) + 273;

    showTemperatures(kelvin, celsius, fahrenheit);
}

function showTemperatures(kelvin, celsius, fahrenheit){
    temperatureCelsiu.value = celsius.toFixed(2);
    temperatureKelvin.value = kelvin.toFixed(2);
    temperatureFahrenheit.value = fahrenheit.toFixed(2);
}



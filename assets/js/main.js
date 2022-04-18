const container = document.querySelector('.container');
const table = document.querySelector('.table');
const calculationField = document.querySelector('.calculation-field');
const numberZero = document.querySelector('.number-zero');
const divTemperature = document.querySelector('.div-temperature');
const divCurrency = document.querySelector('.div-currency');


document.addEventListener('click',  function(event){
    const element = event.target;
    
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
    

    // Operators
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
    // pointer
    if(element.classList.contains('pointer')){
        calculationField.value += '.';
    }
    // PI
    if(element.classList.contains('pi')){
        calculationField.value += Math.PI;
    }
    // potency
    if(element.classList.contains('potency')){
        calculationField.value += " ** ";
    }
    // root
    if(element.classList.contains('root')){
        calculationField.value += "√ ";
    }
    // factorial
    if(element.classList.contains('factorial')){
        calculationField.value += " !  ";
    }
    // exp
    if(element.classList.contains('exp')){
        calculationField.value += " E ";
    }
    // percentagem
    if(element.classList.contains('percentagem')){
        calculationField.value += ' % ';
    }
    // temperature
    if(element.classList.contains('temperature')){
        if(divCurrency.style.display = 'block'){
            divCurrency.style.display = 'none';
            clearFieldsTemperature();
        } 
        divTemperature.style.display = 'block';
        temperatureConverter();
    }
    // currency
    if(element.classList.contains('currency')){
        if(divTemperature.style.display = 'blobk') {
            divTemperature.style.display = 'none';
            clearFieldsCurrency();
        }
        divCurrency.style.display = "block";
        currencyConverter()
    }
    
});

// Calculate operations
let sum = (num1, num2) => Number(num1) + Number(num2)

let subtraction = (num1, num2) => Number(num1) - Number(num2);

let multiplication = (num1, num2) => Number(num1) * Number(num2);

let division = (num1, num2) => Number(num1) / Number(num2);

let potency = (num1, num2) => Math.pow(Number(num1), Number(num2));

let root = (num1) => Math.sqrt(Number(num1));

let exp = (num1, num2) => num1 * (Math.pow(10, num2));

let percentagem = (num1, num2) => (num1/100) * num2;

let factorial = (num1) => {
    let result = num1;
    for(let i = num1-1; i > 0; i--){
        result *= i
    }
    return result;
}


// Check which operator will be used
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
    else if(operation == "%"){
        return percentagem(arrayNumbers[0], arrayNumbers[2]);
    }
    else{
        return '∉';
    }
}

// Called when equal sign is selected
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

// Clear calculator main field
function clearField(){
    calculationField.value = '';
}

// Clear temperature fields
function clearFieldsTemperature(){
    temperatureCelsiu.value = '';
    temperatureKelvin.value = '';
    temperatureFahrenheit.value = '';
}

// Clear currency fields
function clearFieldsCurrency(){
    currencyReal.value = '';
    currencyDolar.value = '';
    currencyEuro.value = '';
}

const temperatureCelsiu = document.querySelector('.celsius-input');
const temperatureKelvin = document.querySelector('.kelvin-input');
const temperatureFahrenheit = document.querySelector('.fahrenheit-input');

// get temperature button event
function temperatureConverter(){
    document.addEventListener('click', function(event){
        const element = event.target;
        if(element.classList.contains('celsius')){
            converterDeCelsius();
        }
        if(element.classList.contains('kelvin')){
            converterDeKelvin();
        }
        if(element.classList.contains('fahrenheit')){
            converterDeFahrenheit();
        }
    });
}

// converter from celsius to other scales
function converterDeCelsius(){
    let celsius = Number(temperatureCelsiu.value);
    let kelvin = celsius + 273;
    let fahrenheit = ((celsius/5) * 9) + 32;

    showTemperatures(kelvin, celsius, fahrenheit)
}

// converter from kelvin to other scales
function converterDeKelvin(){
    let kelvin = Number(temperatureKelvin.value);
    let celsius = kelvin - 273;
    let fahrenheit = (((kelvin - 273)/5) * 9) + 32;
    showTemperatures(kelvin, celsius, fahrenheit);
}

// converter from fahrenheit to other scales
function converterDeFahrenheit(){
    let fahrenheit = Number(temperatureFahrenheit.value);
    let celsius = ((fahrenheit-32)/9) * 5;
    let kelvin = (((fahrenheit-32)/9) * 5) + 273;

    showTemperatures(kelvin, celsius, fahrenheit);
}

//Shows converted temperatures
function showTemperatures(kelvin, celsius, fahrenheit){
    temperatureCelsiu.value = celsius.toFixed(2);
    temperatureKelvin.value = kelvin.toFixed(2);
    temperatureFahrenheit.value = fahrenheit.toFixed(2);
}

// get currency button event 
function currencyConverter(){
    document.addEventListener('click', function(event){
        const element = event.target;

        if(element.classList.contains('real')){
            converterDeReal();
        }
        if(element.classList.contains('dolar')){
            converterDeDolar();
        } if(element.classList.contains('euro')){
            converterDeEuro();
        }
    });
}

const currencyReal =  document.querySelector('.real-input');
const currencyDolar =  document.querySelector('.dolar-input');
const currencyEuro =  document.querySelector('.euro-input');

// converter from real to other currencies
function converterDeReal(){
    let real = Number(currencyReal.value);
    let euro = real * 0.20;
    let dolar = real * 0.21;

    showCurrency(real, dolar, euro);
}

// converter from dolar to other currencies
function converterDeDolar(){
    let dolar = Number(currencyDolar.value);
    let euro = dolar * 0.93;
    let real = dolar * 4.70;

    showCurrency(real, dolar, euro);
}

// converter from euro to other currencies
function converterDeEuro(){
    let euro = Number(currencyEuro.value);
    let real = euro * 5.08;
    let dolar = euro * 1.08;

    showCurrency(real, dolar, euro);
}

// Show converted currencies
function showCurrency(real, dolar, euro){
    currencyReal.value = real.toFixed(2);
    currencyDolar.value = dolar.toFixed(2);
    currencyEuro.value = euro.toFixed(2);
}


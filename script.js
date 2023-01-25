function add(){
    let number1 = document.getElementById("inputGetNumber").value;
    let number2 = document.getElementById("inputGetNumber2").value;

    let sum = parseInt(number1) + parseInt(number2);

    let text = sum.toString();

    document.getElementById("result").innerHTML = "Result is : " + text;
};

function multiply(){
    let number1 = document.getElementById("inputGetNumber").value;
    let number2 = document.getElementById("inputGetNumber2").value;

    let sum = parseInt(number1) * parseInt(number2);

    let text = sum.toString();

    document.getElementById("result").innerHTML = "Result is : " + text;
};

function minus(){
    let number1 = document.getElementById("inputGetNumber").value;
    let number2 = document.getElementById("inputGetNumber2").value;

    let sum = parseInt(number1) - parseInt(number2);

    let text = sum.toString();

    document.getElementById("result").innerHTML = "Result is : " + text;
};

function divide(){
    let number1 = document.getElementById("inputGetNumber").value;
    let number2 = document.getElementById("inputGetNumber2").value;

    let sum = parseInt(number1) / parseInt(number2);

    let text = sum.toString();

    document.getElementById("result").innerHTML = "Result is : " + text;
};

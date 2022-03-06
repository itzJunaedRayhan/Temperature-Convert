let celsius    = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

//  celsius to Fahrenheit Convert:
function celToFar () {
    const result = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(result.toFixed(2));
}

//  Fahrenheit to Celsius Convert:
function farToCel () {
    const result = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(result.toFixed(2)) 
}


document.querySelectorAll(".form-group input")[0].addEventListener("input", celToFar);
document.querySelectorAll(".form-group input")[1].addEventListener("input", farToCel);

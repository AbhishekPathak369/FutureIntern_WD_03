function convertToFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = (celsius * 1.8) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}

function convertToCelsius() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = (fahrenheit - 32) / 1.8;
    document.getElementById('celsius').value = celsius;
}
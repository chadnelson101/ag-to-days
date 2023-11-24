let button = document.getElementById('convert');
button.addEventListener('click', convertToDays);

function convertToDays() {
    let ageInput = document.getElementById('ageInput').value;
    let age = parseFloat(ageInput);

    if (!isNaN(age)) {
        let days = age * 365.25;

        let result = document.getElementById('resultOutput');
        result.value = `Age in days: ${days.toFixed(2)}`;
    } else {
        alert('Please enter a valid age.');
    }
}
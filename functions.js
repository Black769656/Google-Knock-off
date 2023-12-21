function validateInput(elementId) {
    var inputElement = document.getElementById(elementId);
    var inputValue = inputElement.value;

    // Restrict to alphanumeric characters only
    inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');

    // Limit the length to 10 characters
    if (inputValue.length > 10) {
        inputValue = inputValue.slice(0, 10);
    }

    // Update the input value
    inputElement.value = inputValue;
}

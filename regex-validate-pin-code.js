// https://www.codewars.com/kata/regex-validate-pin-code

function validatePIN(pin) {
    return /^\d{4}(?:\d{2})?$/.test(pin);
}
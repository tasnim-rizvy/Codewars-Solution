const validatePIN = (pin) => {
    const pinRegex = /^(\d{4}|\d{6})$/

    return pinRegex.test(pin)
}

console.log(validatePIN('12345'))
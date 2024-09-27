const createPhoneNumber = (numbers) => {
    numbers = numbers.replace('+', '')
    let countryCode = '(+' + numbers.slice(0, 3) + ')'
    let result = countryCode + ' '

    for(let i = 3; i < (numbers.length - 3); i+= 3){
        if((numbers.length - 3 - i) < 3) {
            result += numbers.slice(i)
        } else {
            result += numbers.slice(i, i+3) + '-'
        }
    }

    return result
}

console.log(createPhoneNumber('8801729202684'))
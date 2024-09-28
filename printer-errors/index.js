const printerError = (s) => {
    let total = s.split('').length
    let bad = s.match(/[n-z]/g)
    let errors = bad ? bad.length : 0
    return errors + '/' + total
}

console.log(printerError('aaabbbbhaijjjm'))
const maskify = (cc) => {
    return cc.slice(-4).padStart(cc.length, '#')
}

let result = maskify('4556364607935616')

console.log(result)

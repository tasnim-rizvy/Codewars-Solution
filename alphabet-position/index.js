function alphabetPosition(text) {
    let t = text.replace(/[^a-zA-Z]/g, '').toLowerCase()
    let result = ''

    for(let i=0; i<text.length; i++){
        result += (t.charCodeAt(i) - 96) + ' '
    }

    return result
}

let text = "The sunset sets at twelve o' clock."

console.log(alphabetPosition(text))
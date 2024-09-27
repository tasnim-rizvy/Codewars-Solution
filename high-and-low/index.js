const highAndLow = (numbers) => {
    let num_array = numbers.split(' ').map(Number)
    let highest, lowest

    for (let i = 0; i < num_array.length; i++){
        if(!highest || num_array[i] > highest){
            highest = num_array[i]
        }
        if(!lowest || num_array[i] < lowest){
            lowest = num_array[i]
        }
    }

    return highest + ' ' + lowest
}

console.log(highAndLow("1 2 3 4 5"))
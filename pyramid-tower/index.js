function towerBuilder(n) {
    const steps = 2*n-1
    let tower = []

    for(let i = 1; i <= n; i++){
        let block = 2*i-1
        let space = (steps - block)

        let x = ' '.repeat(space/2) + '*'.repeat(block) + ' '.repeat(space/2)
        tower.push(x)
    }

    return tower
}

console.log(towerBuilder(6))
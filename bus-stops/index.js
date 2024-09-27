var number = (busStops) => {
    let result = busStops.reduce((a, [b, c]) => (a + b -c), 0)
    return result
}

bus_stops = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]

console.log(number(bus_stops))
function fracturedNumbers(input, times) {
    let array = [];
    let result;
    result = input;

    for( i = 0; i<times; i++){
        let y = result / 11
        result = y;
        array.push(y - Math.floor(y));
    }
    return array;
}
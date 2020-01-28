let array = [1, 2, 3, 4, 5];

function third_greatest_number(){
    let array2 = array;

    let max = Math.max.apply(null, array2);
    array2.splice(array2.indexOf(max), 1);

    let max2 = Math.max.apply(null, array2);
    array2.splice(array2.indexOf(max2), 1);

    return Math.max.apply(null, array2);
}
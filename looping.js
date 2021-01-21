//prerequisites: a very basic understanding of javascript variables, array, functions and operators.

function forLoopCount(howManyLoops) {
    let count = 0;
    for (let index = 0; index < howManyLoops; index++) {
        count ++
        console.log(count);
    }
    return count
}

//console.log(forLoopCount(5))

//console.log(forLoopCount(0))


function whileLoopCount(howManyLoops){
    let count = 0;
    let index = 0;
    while (index < howManyLoops) {
        count ++
        console.log(count);
        index ++
    }
    return count
}

//console.log(whileLoopCount(5))

//console.log(whileLoopCount(0))


function doWhileLoopCount(howManyLoops) {
    let count = 0
    let index = 0
    do {
        count ++
        console.log(count);
        index ++
    } while (index < howManyLoops)
    return count
}
//console.log(doWhileLoopCount(5))
//console.log(doWhileLoopCount(0))

function forLoopUseSum(numberArray){
    let sum = 0
    for (let index = 0; index < numberArray.length; index++){
        let currentNumber = numberArray[index]
        sum += currentNumber
        console.log('current number: ' + currentNumber)
        console.log('current sum: ' + sum)
    }
    return sum
}

//console.log(forLoopUseSum(numberArray))

function whileLoopUseSum(numberArray){
    let sum = 0
    let index = 0
    while (index < numberArray.length){
        let currentNumber = numberArray[index]
        sum += currentNumber
        console.log('current number: ' + currentNumber)
        console.log('current sum: ' + sum)
        index ++
    }
    return sum
}

//console.log(whileLoopUseSum(numberArray))

let numberArray = [1, 2, 3]
function doWhileLoopUseSum(numberArray){
    let sum = 0
    let index = 0
    do {
        let currentNumber = numberArray[index]
        sum += currentNumber
        console.log('current number: ' + currentNumber)
        console.log('current sum: ' + sum)
        index ++
    } while (index < numberArray.length)
    return sum
}

//console.log(doWhileLoopUseSum(numberArray))

let emptyArray = []

console.log(doWhileLoopUseSum(emptyArray))

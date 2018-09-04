function myMap (arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}

function haha (number, item) {
    return item > number
}

function wraper (number) {
    return function (item) {
        return item > number
    }
}

(function () {
    return haha()
}())

let a = myMap([1,2,3], wraper(1))
console.log(a)

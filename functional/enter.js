/*

 */

// 1 hoc
// function highFunc (lowFunc) {
//     let state = undefined
//     const tryState = () => {
//         try (state) {
//             catch '*':
//
//         }
//     }
//     return function (props, type) {
//         let resultOfLowFunc = lowFunc(props)
//         if ()
//         return resultOfLowFunc * resultOfLowFunc
//     }
// }
//
// function addOne (number) {
//     return number + 1
// }
//
//
// highFunc()


function myMap (arr, fn) {
    // 他会新建一个空数组
    let newArr = []
    // 他会遍历老数组
    // 把元素依次调用传给他的函数
    // 然后将函数返回的东西，打到新数组里面，依次
    for (let item of arr) {
        newArr.push(fn(item))
    }
    // 最后他会返还给我们这个数组
    return newArr
}

function myFilter (arr, fn) {
    // 他会新建一个空数组
    let newArr = []
    // 他会遍历老数组
    // 把元素依次调用传给他的函数
    // true 打入 false 舍弃
    // 然后将函数返回的东西，打到新数组里面，依次
    for (let item of arr) {
        fn(item) && newArr.push(item)
    }
    // 最后他会返还给我们这个数组
    return newArr
}

[3, 2, 1]

function myRank (arr, fn) {
    // 他会新建一个空数组
    let newArr = []
    // 遍历老数组，打给他两个元素，让他。。。比较大小？
    newArr =  rank(arr, fn)

    // 最后他会返还给我们这个数组
     return newArr
}

function rank (arr, fn) {
    let afterArr = arr
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let a = arr[j]
            let b = arr[j+1]
            if (fn(a, b) < 0) {
                var space = arr[j]
                afterArr[j] = arr[j+1]
                afterArr[j+1] = space
            }
        }

    }
    return afterArr
}

let arr = myRank([3,6,8,5,2,5,7,98,6,1,3,5,7,9], (a, b) => {
    return b - a
})
console.log(arr)

const testArr = myMap([1,3,5,6], function (item) {
    if (item < 3) {
        return item
    } else {
        return 'toBig'
    }
})

const testArr2 = myFilter([1,3,5,6], function (item) {
    return item < 4
})

console.log(testArr)
console.log(testArr2)




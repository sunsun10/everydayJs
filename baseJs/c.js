console.log('c')
console.log(secret)
function out (outParam) {
    let b = function (innerParam) {
        console.log(outParam + innerParam)
    }
    return b
}

/*
闭包的根本原因是，js引擎对于在haha形成的执行空间中，和执行空间中的函数，保存了一种闭包关系。
就算外层的执行空间销毁了。内部也能够通过很诡异的chain，访问到他所需要的，只有闭包空间才有的变量。
这种变量的踪迹就是闭包的作用。

这个demo let可以破坏闭包。因为let会形成3个独立的变量。

闭包就是某种记忆性。无论何时调用。闭包都能记住所需要的变量
 */
function haha () {
    var arr = []
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            var j = i
            return function () {
                console.log(j)
            }
        })
    }
    return arr
}

function iife () {
    var arr = []
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            var j = i
            return function () {
                console.log(j)
            }
        }() )

    }
    return arr
}

// var hahaR = haha()
var cou = iife()
console.log(cou[0]())
console.log(cou[1]())
console.log(cou[2]())

// iife做工厂还是很不错的。他为什么能控制模块化呢？因为它能创造局部变量？

var module = function () {
    var a = 100;
    var b = 200;
    return function () {
        var c = a * b + a - b
        return c
    }
}()

function haha () {
    var a = 0;
}

function myTime (fn, whatTime) {
    var p1 = new Promise((reslove, reject) => {
        setTimeout(() => {
        reslove()
    }, whatTime)
    })
    p1.then((res) => {
        return fn(res)
    })

}
var aa = 'hahahahahahahaha'
myTime(function (a) {
    console.log(a)
}, 1000)

function hahahaha (hehe) {
    return function () {
        setTimeout((hehe) => {
            console.log(hehe)
    }, 1000)
    }
}

hahahaha('hahahahah')()

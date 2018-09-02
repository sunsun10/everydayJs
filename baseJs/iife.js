(function () {
    window.secret = 'love'
    console.log('iife')
    var code = 'power'
    var func = function iife (number) {
        var a = 1 + number
        console.log(a)
        return a
    }(1)
}())

// 括号中都是表达是吗？
function aha (fn) {
    console.log('is fn')
    return fn
}

// 浏览器有万能的window。那么node环境里面的global是啥呢

aha(function hehe () {console.log('1233211234567')})()


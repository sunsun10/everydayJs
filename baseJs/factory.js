/*
为什么一个变量在haha上可以。在其他的地方不可以。

现在内心有点焦虑。得掌握好节奏。沉浸在一个可以研究一阵子的事务上。
把这块结算掉。（完成立即执行函数。）
 */

var haha = 'haha'
function test () {
    console.log(abc)
}



var a = {
    log: function (content) {window.console.log(content); console.log(this); console.log(console);console.log(haha)}
}

a.log(abc)

function f () {
    // some thing useful cou
    let data = new Date()
    return function () {
        a.log(data)
    }

}

f()()
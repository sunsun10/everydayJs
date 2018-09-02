var funcA = function () {
    console.log('funcA')
}

var objFunc = {
    funcB: function () {

    }
}

funcA.bind(this)

var objA = {
    name: 'objA',
    func: function () {
        console.log('powerby objA')
        console.log(this)
    }
}

var objB = {
    name: 'objB',

}
objA.func.call(objB)
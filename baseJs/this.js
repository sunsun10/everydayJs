let hello = {
    name: 'name',
    log: function () {

        this.name = 2
        console.log(this)
        function haha (name) {
            this.name = name
            console.log(this)
        }

        haha(3)
        console.log(this)
    }
}

function test () {
    console.log('1')
    console.log(this)
    function testInner () {
        console.log('2')
        console.log(this)
    }
    testInner()
}
test()
/*
当call func的时候，func会建立一个空间.
并且，这个空间会建立一个this。
并且，这个this会指向一个黏黏obj。来依附于他。
but why？
i dont know
但是可以通过self，来指定他引用的方向。
 */
hello.log()
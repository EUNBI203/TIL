function a(){
    console.log('a') // 3.
}
console.log('hi') // 1.
setTimeout(a, 0)
console.log('bye') // 2.

function printHello(){
    console.log('Hellooo')
}

function baz(){
    console.log('baz')
    setTimeout(printHello, 0)
    console.log('baz end')
}

function bar(){
    console.log('bar')
    baz()
    console.log('bar end')
}

function foo(){
    console.log('foo')
    bar()
    console.log('foo end')
}

foo()
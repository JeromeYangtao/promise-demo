function red() {
    console.log('red')
}

function green() {
    console.log('green')
}

function yellow() {
    console.log('yellow')
}

let signal = function(color, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`${timer/1000}秒后`)
            color()
            resolve()
        }, timer)
    })
}


let colorPromise = new Promise(function(resolve, reject) {
    resolve()
})

let cycle = function() {
    colorPromise.then(function() {
            return signal(red, 3000)
        })
        .then(function() {
            return signal(green, 1000)
        })
        .then(function() {
            return signal(yellow, 2000)
        })
        .then(function() {
            //递归
            cycle()
        })
}

cycle()
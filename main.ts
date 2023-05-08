let numero = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        numero = randint(1, 10)
        basic.showNumber(8)
        basic.pause(1000)
        if (numero == 1) {
            basic.showString("si")
        } else if (numero == 2) {
            basic.showString("no")
        } else if (numero == 3) {
            basic.showString("puede")
        } else if (numero == 4) {
            basic.showString("probablemente")
        } else if (numero == 5) {
            basic.showString("puede que no")
        } else if (numero == 6) {
            basic.showString("me da igual")
        } else if (numero == 7) {
            basic.showString("no quiero contestar")
        } else if (numero == 8) {
            basic.showString("claro")
        } else if (numero == 9) {
            basic.showString("claro que no")
        } else if (numero == 10) {
            basic.showString("obviamente")
        }
        basic.showNumber(8)
        basic.pause(1000)
    }
})

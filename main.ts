input.onButtonPressed(Button.A, function () {
    if (x > 0 && x <= 4) {
        led.unplot(x, y)
        led.plot(x - 1, y)
        x = x - 1
    } else if (x == 0 && y == 0) {
        led.unplot(x, y)
        led.plot(x + 4, y + 4)
        y = 4
        x = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (x >= 0 && x <= 3) {
        led.unplot(x, y)
        led.plot(x + 1, y)
        x = x + 1
    } else if (x == 0 && y == 0) {
        led.unplot(x, y)
        led.plot(x * 0, y + 1)
        y = y + 1
        x = 0
    }
})
function Tomber (num: number) {
    yt = num
    led.plot(xt, yt)
    basic.pause(500)
    led.unplot(xt, yt)
    if (yt == y && xt == x) {
        xt = randint(0, 4)
        yt = num
        led.plot(x, y)
        score += 1
    } else if (yt == 4) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            # . . . .
            # # # # #
            `)
        basic.showNumber(score)
    } else {
    	
    }
}
let xt = 0
let yt = 0
let score = 0
let y = 0
let x = 0
x = 2
y = 4
score = 1
led.plot(x, y)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        Tomber(index)
    }
})

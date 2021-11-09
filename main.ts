input.onButtonPressed(Button.A, function () {
    basic.showString("T:")
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    input.calibrateCompass()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    control.waitMicros(10000)
    led.enable(true)
    basic.showIcon(IconNames.Happy)
})
let degrees = 0
music.setVolume(80)
led.setBrightness(15)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 || degrees > 315) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (degrees < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (degrees < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})

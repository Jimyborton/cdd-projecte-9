input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})

input.onButtonPressed(Button.A, function () {
    radio.sendValue("BUT_A", 0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("BUT_AB", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("BUT_B", 0)
})
radio.setGroup(1)

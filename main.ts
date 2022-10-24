let temp = 0
radio.setGroup(1)
let diff = 5
let prev_temp = 0
basic.forever(function () {
    temp = pins.analogReadPin(AnalogPin.P0)
    if (prev_temp > temp) {
        if (prev_temp - temp > diff) {
            radio.sendValue("temp", temp)
        }
    } else {
        if (temp - prev_temp > diff) {
            radio.sendValue("temp", temp)
        }
    }
    prev_temp = temp
})

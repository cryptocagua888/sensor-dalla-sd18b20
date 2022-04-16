let temp = 0
basic.forever(function () {
    temp = dstemp.celsius(DigitalPin.P0)
    basic.showNumber(dstemp.celsius(DigitalPin.P0))
    basic.pause(500)
    if (dstemp.celsius(DigitalPin.P0) >= 70) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})

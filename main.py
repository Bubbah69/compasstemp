def on_button_pressed_a():
    basic.show_string("Temp")
    basic.show_string("" + str((input.temperature())))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    control.wait_micros(10000)
    basic.clear_screen()
    input.calibrate_compass()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    basic.show_icon(IconNames.HEART)
    control.wait_micros(10000)
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

led.set_brightness(70)
basic.show_icon(IconNames.HAPPY)

def on_forever():
    basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading():
        basic.show_arrow(ArrowNames.NORTH)
        music.set_volume(80)
        music.play_tone(988, music.beat(BeatFraction.QUARTER))
basic.forever(on_forever)

input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let Javier = game.createSprite(0, 2)
let Andrea = game.createSprite(randint(1, 4), randint(0, 4))
let Andrea2 = game.createSprite(randint(1, 4), randint(0, 4))
let Andrea3 = game.createSprite(randint(1, 4), randint(0, 4))
Andrea.set(LedSpriteProperty.Brightness, 100)
Andrea2.set(LedSpriteProperty.Brightness, 100)
Andrea3.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        Javier.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        Javier.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        Javier.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        Javier.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (Javier.isTouching(Andrea)) {
        Andrea.delete()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        game.addScore(1)
    }
    if (Javier.isTouching(Andrea2)) {
        Andrea2.delete()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        game.addScore(1)
    }
    if (Javier.isTouching(Andrea3)) {
        Andrea3.delete()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        game.addScore(1)
    }
    if (game.score() == 3) {
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    Andrea.set(LedSpriteProperty.X, randint(0, 5))
    Andrea.set(LedSpriteProperty.Y, randint(0, 5))
})
loops.everyInterval(3000, function () {
    Andrea2.set(LedSpriteProperty.X, randint(0, 5))
    Andrea2.set(LedSpriteProperty.Y, randint(0, 5))
})
loops.everyInterval(3000, function () {
    Andrea3.set(LedSpriteProperty.X, randint(0, 5))
    Andrea3.set(LedSpriteProperty.Y, randint(0, 5))
})

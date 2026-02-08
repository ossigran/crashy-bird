input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(0)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.Shake, function () {
    music.setVolume(127)
})
let empty0bstacley = 0
let Ticks = 0
let Bird: game.LedSprite = null
let score = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.LoopingInBackground)
let plats = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 200)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
        score += 1
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        empty0bstacley = randint(0, 4)
        for (let plats = 0; plats <= 4; plats++) {
            if (plats != empty0bstacley) {
                Obstacles.push(game.createSprite(4, plats))
            }
        }
    }
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            music.stopMelody(MelodyStopOptions.Background)
            basic.clearScreen()
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
            basic.showString("" + (score))
        }
    }
    Ticks += 1
    basic.pause(500)
})

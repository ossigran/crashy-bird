input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(0)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let empty0bstacley = 0
let Ticks = 0
let Bird: game.LedSprite = null
let score = 0
let plats = 0
let Obstacles: game.LedSprite[] = []
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.LoopingInBackground)
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 200)
basic.forever(function () {
    music.setVolume(0)
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
        score += 0.25
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        empty0bstacley = randint(0, 4)
        for (let plats2 = 0; plats2 <= 4; plats2++) {
            if (plats2 != empty0bstacley) {
                Obstacles.push(game.createSprite(4, plats2))
            }
        }
    }
    for (let Obstacle2 of Obstacles) {
        if (Obstacle2.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle2.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            music.stopMelody(MelodyStopOptions.Background)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
            basic.clearScreen()
            for (let index = 0; index < 1e+110; index++) {
                basic.showString("GAME OVER SCORE " + score)
                basic.pause(5000)
            }
            score = 0
        }
    }
    Ticks += 1
    basic.pause(500)
})

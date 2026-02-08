input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
    music.play(music.createSoundExpression(WaveShape.Square, 623, 403, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let empty0bstacley = 0
let Ticks = 0
let Bird: game.LedSprite = null
let score = 0
let plats = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
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
            basic.clearScreen()
            basic.showString("GAME OVER ")
            basic.clearScreen()
        }
    }
    Ticks += 1
    basic.pause(1000)
})

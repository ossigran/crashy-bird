input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Ticks = 0
let empty0bstacley = 0
let Bird: game.LedSprite = null
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
    empty0bstacley = randint(0, 4)
    if (Ticks % 3 == 0) {
        for (let plats = 0; plats <= 4; plats++) {
            if (plats != empty0bstacley) {
                Obstacles.push(game.createSprite(4, plats))
            }
        }
        Ticks += 1
        basic.pause(1000)
    }
})

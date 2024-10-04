namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
info.player2.onScore(11, function () {
    game.gameOver(true)
})
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        . . . . . . 1 8 8 . . . . . . . 
        `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        . . . . . . 8 8 1 . . . . . . . 
        `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
info.player1.onScore(11, function () {
    info.score()
    web.open("https://115.111.238.147:889/api/ECommReflection?playername=" + info.score() + "&score=" + info.score())
    game.over(false)
   // game.gameOver(true)
})
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . . 
        . 6 d 4 4 4 6 . 
        6 d 4 4 4 4 d 6 
        c 1 b 4 4 4 d c 
        . c b 1 1 4 c . 
        . . c c c c . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()

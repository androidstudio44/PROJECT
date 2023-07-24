// MOVE BLOCK

const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX+=5
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionY < 449 && positionX >= 449) {
        positionY+=5
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX > 0 && positionY >= 449) {
        positionX-=5
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if (positionX >= 0 && positionY >= 0) {
        positionY-=5
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    }
}

move()

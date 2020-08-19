let teclas = {}

let down = (e) => {
    teclas[e.keyCode] = true
}
let up = (e) => {
    teclas[e.keyCode] = false
}

document.addEventListener('keydown', down)
document.addEventListener('keyup', up)

export default teclas
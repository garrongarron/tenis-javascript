import _ from './creator.js'


let contorno = _('rect', null, {
    width: 540,
    height: 340,
    style: `fill:#1E8449;stroke-width:4;stroke:rgb(255, 255, 255 )`
})
contorno.setAttribute('x',30)
contorno.setAttribute('y',30)

let red = _('line', null, {
    x1: 300,
    y1: 30,
    x2: 300,
    y2: 370,
    'stroke-dasharray':"7, 7",
    style: `stroke-width:4;stroke:rgb(255, 255, 255 )`
})


let cancha = _('svg', [contorno,red], { height: 400, width: 600 })

export default cancha

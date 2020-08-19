import _ from './creator.js'
import teclas from './Teclas.js'
import maquina from './Maquina.js'

let circle = _('circle', null, {
    cx: 50,
    cy: 50,
    r: 7,
    stroke: "black",
    "stroke-width": 1,
    fill: "#46E80E",
})

class Bola {
    constructor(circle) {
        this.node = circle
        this.direccion = 15
        this.speed = 3
    }
    getNode() {
        return this.node
    }
    setCoor(coor) {
        this.node.setAttribute('cx', coor.x)
        this.node.setAttribute('cy', coor.y)
    }
    getCoor() {
        return {
            x: this.node.getAttribute('cx'),
            y: this.node.getAttribute('cy'),
        }
    }
    avanzar(){
        let c = this.getCoor()
        c.x = +c.x + Math.cos((Math.PI / 180) * this.direccion)*this.speed
        c.y = +c.y - Math.sin((Math.PI / 180) * this.direccion)*this.speed
        this.setCoor(c)
    }
}
const bolaH = new Bola(circle)



maquina.add(()=>{
    if (teclas[37]) bolaH.direccion++
    if (teclas[39]) bolaH.direccion--
    bolaH.avanzar()
})



export { bolaH }
export default circle


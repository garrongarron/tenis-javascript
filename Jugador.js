import _ from './creator.js'
import maquina from './Maquina.js'
import teclas from './Teclas.js'


class Jugador {
    constructor() {
        this.color = 'red'
        this.node = _('rect', null, {
            width: 20,
            height: 100,
            style: `fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)`
        })
        this.speed = 3
        this.x = 75
        this.up = 87
        this.down = 83
        this.angulo = 90
        maquina.add(()=>{
            let j = this.getCoor()
            j.y *= 1
            j.x = this.x
            if (teclas[this.up]) j.y -= this.speed
            if (teclas[this.down]) j.y += this.speed
            if (teclas[this.up]){
                this.angulo = 100
            } else if (teclas[this.down]) {
                this.angulo = 80
            } else {
                this.angulo = 90
            }
            this.setCoor(j)
        })
    }
    setColor(color){
        this.color = color
        this.node = _('rect', null, {
            width: 20,
            height: 100,
            style: `fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)`
        })
    }
    setControls(upCode, downCode){
        this.up = upCode
        this.down = downCode
    }
    setSpeed(speed){
        this.speed = speed
    }
    setX(x){
        this.x = x
    }
    getNode() {
        return this.node
    }
    setCoor(coor) {
        this.node.setAttribute('x', +coor.x)
        this.node.setAttribute('y', +coor.y)
    }
    getCoor() {
        return {
            x: this.node.getAttribute('x'),
            y: this.node.getAttribute('y'),
        }
    }
}
const jugadorH = new Jugador()
jugadorH.setColor('#935116')
let c = jugadorH.getCoor()
c.y = 150
jugadorH.setCoor(c)

const jugadorH2 = new Jugador()
jugadorH2.setX(500)
jugadorH2.setControls(38,40)
jugadorH2.setColor('#16938F')
let c2 = jugadorH2.getCoor()
c2.y = 150
jugadorH2.setCoor(c2)
export { jugadorH, jugadorH2 }
export default Jugador
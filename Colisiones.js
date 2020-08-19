import cancha from './Cancha.js'
import { bolaH } from './Bola.js'
import { jugadorH, jugadorH2 } from './Jugador.js'
import maquina from './Maquina.js'
import puntuacion from './Puntuacion.js'
import {pegar} from './Audio.js'


let jugadorRebote = (jugadorH, bolaH) => {
    let halfWidth = jugadorH.getNode().getAttribute('width') / 2
    let colision = [
        Math.abs(+bolaH.getCoor().x - +jugadorH.getCoor().x - halfWidth) < halfWidth,
        +bolaH.getCoor().y > +jugadorH.getCoor().y,
        +bolaH.getCoor().y < +jugadorH.getCoor().y + jugadorH.getNode().getAttribute('height') * 1
    ]
    if (colision.every(e => e)) {
        pegar.play()
        bolaH.direccion += 2 * (jugadorH.angulo - bolaH.direccion)
        bolaH.direccion = (bolaH.direccion < 0) ? bolaH.direccion + 360 : bolaH.direccion
    }
}
let reobte = (cancha, bolaH) => {
    let vertical = [
        +bolaH.getCoor().y > +cancha.getAttribute('height') - 5,
        +bolaH.getCoor().y < 5
    ]
    if (!vertical.every(c => !c)) {
        bolaH.direccion += 2 * (0 - bolaH.direccion)
        bolaH.direccion = (bolaH.direccion < 0) ? bolaH.direccion + 360 : bolaH.direccion
        bolaH.avanzar()
    }
    let horizontal = [
        +bolaH.getCoor().x > +cancha.getAttribute('width') - 5,
        +bolaH.getCoor().x < +5
    ]
    puntuacion(cancha, bolaH)
    if (!horizontal.every(c => !c)) {
        bolaH.direccion += 2 * (90 - bolaH.direccion)
        bolaH.direccion = (bolaH.direccion < 0) ? bolaH.direccion + 360 : bolaH.direccion
        bolaH.avanzar()
    }
}



maquina.add(()=>{
    reobte(cancha, bolaH)
    jugadorRebote(jugadorH, bolaH)    
    jugadorRebote(jugadorH2, bolaH)    
    
})

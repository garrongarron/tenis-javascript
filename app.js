import _ from './creator.js'
import { bolaH } from './Bola.js'
import cancha from './Cancha.js'
import { jugadorH, jugadorH2 } from './Jugador.js'
import './Colisiones.js'
import boton from './Comenzar.js'

let verde = _(cancha, [bolaH.getNode(), jugadorH.getNode(),  jugadorH2.getNode()])
let conainer = _('div', verde,{class:'container'})
_(document.body,conainer)




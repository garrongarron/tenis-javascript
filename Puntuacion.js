import _ from './creator.js'
import {moneda, aplausos} from './Audio.js'
import boton from './Comenzar.js'
import maquina from './Maquina.js'

let puntuacionIz = _('div','0')
let puntuacionDe = _('div','0')
let score = _('div',[puntuacionIz,puntuacionDe ],{class:'score'})
document.body.appendChild(score)
let h1 = _('h1', '')
document.body.appendChild(h1)
let puntuacion = (cancha, bolaH) =>{
    if(+bolaH.getCoor().x > +cancha.getAttribute('width') - 5){
        puntuacionIz.innerText = +puntuacionIz.innerText+1
        moneda.pause();
        moneda.currentTime = 0;
        moneda.play()
    }
    if(+bolaH.getCoor().x < +5){
        puntuacionDe.innerText = +puntuacionDe.innerText+1
        moneda.pause();
        moneda.currentTime = 0;
        moneda.play()
    }
    if( +puntuacionDe.innerText==3||+puntuacionIz.innerText==3){
        aplausos.pause();
        aplausos.currentTime = 0;
        aplausos.play()
        if( +puntuacionIz.innerText==3){
            h1.innerText = 'Gana el Jugador 1'   
        }else{
            h1.innerText = 'Gana el Jugador 2'
        }      
        boton.classList.remove('hide')
        maquina.restart()  
    }
    
}

export default puntuacion
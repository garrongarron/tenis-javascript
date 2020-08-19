import _ from './creator.js'
import maquina from './Maquina.js'
import { play } from './Audio.js'

let texto = _('div', 'Comenzar')
let boton = _('div',texto, {class:'comenzar'})
_(document.body,boton)

let comenzar = ()=>{
    maquina.run()
    boton.classList.add('hide')
    boton.removeEventListener('click', comenzar)
    boton.addEventListener('click', finalizar)
    texto.innerText = 'Reiniciar'
    play()
}
let finalizar = ()=>{
    location.reload()
}

boton.addEventListener('click', comenzar)

maquina.callbacks.forEach(cb => {
    if (typeof cb === 'function') {
        cb()
    }
})
export default boton
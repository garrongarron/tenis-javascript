import _ from './creator.js'
let pegar = _('audio',null,{src:"/esfuerzo.mp3", preload:"auto"})
let moneda = _('audio',null,{src:"/moneda.mp3", preload:"auto"})
let aplausos = _('audio',null,{src:"/aplausos.mp3", preload:"auto"})
let background = _('audio',null,{src:"/background.mp3", preload:"auto"})
let stop = _('span', 'Música')
document.body.appendChild(stop)


let musica = JSON.parse(localStorage.getItem('musica')||true)
stop.addEventListener('click',()=>{
    if(musica){
        background.pause()
        localStorage.setItem('musica', 'false')
        stop.innerText = 'Escuchar Música'
    } else {
        localStorage.setItem('musica', 'true')
        background.play()
        stop.innerText = 'Quitar Música'
    }
    musica = JSON.parse(localStorage.getItem('musica')||true)
})

let play = () =>{
    if(musica){
        background.play()
    }
}


export {pegar, moneda, aplausos, play}
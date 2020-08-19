class Maquina {
    constructor() {
        this.callbacks = []
        this.stop = false
    }
    add(cb) {
        this.callbacks.push(cb)
    }
    run() {
        this.callbacks.forEach(cb => {
            if (typeof cb === 'function') {
                cb()
            }
        })
        if(!this.stop){
            requestAnimationFrame(this.run.bind(this))
        } 
    }
    restart(){
        this.stop = true
    }
}

const maquina = new Maquina()
export default maquina
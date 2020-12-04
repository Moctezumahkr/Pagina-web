addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.numero')
    const velocidad = 1000

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidad,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad

                if(valor_actual < cantidad_maxima) {
                    contador.innerText =  Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 5)
                } else {
                        contador.innerText = cantidad
                }
            }
            actualizar_contador()
        }
        
    }
    animarContadores()

    
})

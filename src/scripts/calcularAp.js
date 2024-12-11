import { aps } from './criarElementosAp.js'

const resultadoAp = document.getElementById('resultado-ap')

let notasDasAps = []

function calcularAp() {

    notasDasAps = []
    resultadoAp.innerHTML = ''

    if (aps.length <= 1) {

        let notaPortal = parseInt(document.getElementById('portal').value) * 0.5
        let notaTrabalho = parseInt(document.getElementById('trabalho').value)
    
        if (isNaN(notaPortal) || isNaN(notaTrabalho)) {

            alert('Por favor, preencha todos os valores.')
            return

        } 

        let total = (notaPortal * 0.6363) + (notaTrabalho * 0.3636)
    
        const p = document.createElement('p')
        p.innerHTML = `A nota da AP é aproximadamente ${total.toFixed(1)}`
        resultadoAp.appendChild(p)

    } else {
        
        aps.forEach((ap, index) => {

            const portalNum = document.getElementById(`portal-${index + 1}`)
            const trabalhoNum = document.getElementById(`trabalho-${index + 1}`)

            if (portalNum && trabalhoNum) {

                let notaPortal = parseInt(portalNum.value) * 0.5
                let notaTrabalho = parseInt(trabalhoNum.value)

                if (isNaN(notaPortal) || isNaN(notaTrabalho)) {

                    alert('Por favor, preencha todos os valores.')
                    return

                } else {

                    let totalUnidade = (notaPortal * 0.6363) + (notaTrabalho * 0.3636)
                    notasDasAps.push(totalUnidade.toFixed(1))

                }

            } else {

                console.error(`Elementos para AP${index + 1} não encontrados.`)
            
            }

        })
    }

    notasDasAps.forEach((nota, index) => {

        const p = document.createElement('p')
        p.innerHTML = `A nota da AP${index + 1} é aproximadamente ${nota}`
        resultadoAp.appendChild(p)

    })

    localStorage.setItem('notasDasAps', JSON.stringify(notasDasAps))

}

export { calcularAp }
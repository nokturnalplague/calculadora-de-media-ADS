const resultadoMf = document.getElementById('resultado-mf')

function calcularMf() {

    resultadoMf.innerHTML = ''

    let av1 = parseInt(document.getElementById('av1').value)
    let av2 = parseInt(document.getElementById('av2').value)

    if (isNaN(av1) || isNaN(av2)) {

        alert('Por favor, preencha todos os valores.')
        return

    }

    let total = (av1 * 0.4) + (av2 * 0.6)

    const p = document.createElement('p')
    p.innerHTML = `A nota da média final é aproximadamente ${total.toFixed(1)}`
    resultadoMf.appendChild(p)
    resultadoMf.style.display = 'block'

    localStorage.clear()

}

export { calcularMf }
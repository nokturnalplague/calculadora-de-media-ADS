const resultadoAv1 = document.getElementById('resultado-av1')

function calcularAv1() {

    resultadoAv1.innerHTML = ''

    let ap1 = parseInt(document.getElementById('ap1').value)
    let ap2 = parseInt(document.getElementById('ap2').value)
    let ap3 = parseInt(document.getElementById('ap3').value)
    let ap4 = parseInt(document.getElementById('ap4').value) * 0.5

    if (isNaN(ap1) || isNaN(ap2)  || isNaN(ap3) || isNaN(ap4)) {

        alert('Por favor, preencha todos os valores.')
        return

    }

    let total = (ap1 * 0.275) + (ap2 * 0.275) + (ap3 * 0.275) + (ap4 * 0.175)

    const p = document.createElement('p')
    p.innerHTML = `A nota da AV1 é aproximadamente ${total.toFixed(1)}`
    resultadoAv1.appendChild(p)
    resultadoAv1.style.display = 'block'

    console.log(p, resultadoAv1)

    localStorage.setItem('totalAv1', total.toFixed(1));
}

export { calcularAv1 }

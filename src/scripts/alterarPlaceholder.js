function alterarPlaceholderAv1() {

    const notas = JSON.parse(localStorage.getItem('notasDasAps'))
    let [ap1, ap2, ap3] = notas

    const inputAp1 = document.getElementById('ap1')
    if (ap1) {

        inputAp1.value = ap1
        inputAp1.placeholder = ap1

    }


    const inputAp2 = document.getElementById('ap2')
    if (ap2) {

        inputAp2.value = ap2
        inputAp2.placeholder = ap2

    }

    const inputAp3 = document.getElementById('ap3')
    if (ap3) {

        inputAp3.value = ap3
        inputAp3.placeholder = ap3

    }

}

function alterarPlaceholderMf() {

    const av1 = JSON.parse(localStorage.getItem('totalAv1'))

    const inputAv1 = document.getElementById('av1')
    if (av1) {

        inputAv1.value = av1
        inputAv1.placeholder = av1

    }

}

export { alterarPlaceholderAv1, alterarPlaceholderMf }
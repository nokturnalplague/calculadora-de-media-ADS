import { criarElementos, submitAp } from "./criarElementosAp.js"
import { calcularAv1 } from "./calcularAv1.js"
import { alterarPlaceholderAv1 } from "./alterarPlaceholder.js"

const currentPage = window.location.pathname.split('/').pop()

if (currentPage.startsWith('ap')) {

    document.addEventListener('DOMContentLoaded', () => {
        
        criarElementos()
        submitAp()

    })

}

if (currentPage.startsWith('av1')) {

    document.addEventListener("DOMContentLoaded", () => {
        
        const formAv1 = document.getElementById('form-av1')

        alterarPlaceholderAv1()

        formAv1.addEventListener('submit', (event) => {

            event.preventDefault()
            calcularAv1()
            formAv1.reset()
    
        })
    
    })

}  
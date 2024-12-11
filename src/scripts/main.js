import { criarElementos, submitAp } from "./criarElementosAp.js"
import { calcularAv1 } from "./calcularAv1.js"
import { alterarPlaceholderAv1, alterarPlaceholderMf } from "./alterarPlaceholder.js"
import { calcularMf } from "./calcularMf.js"

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

if (currentPage.startsWith('media-final')) {

    document.addEventListener("DOMContentLoaded", () => {
        
        const formMf = document.getElementById('form-mf')

        alterarPlaceholderMf()

        formMf.addEventListener('submit', (event) => {

            event.preventDefault()
            calcularMf()
            formMf.reset()
    
        })
    
    })

}
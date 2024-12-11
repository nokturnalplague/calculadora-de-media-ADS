import { calcularAp } from "./calcularAp.js"
import { validarInputs } from "./validarInputs.js"

const umaAp = document.getElementById('uma')
const todasAp = document.getElementById('todas')
const exibicaoCalculo = document.getElementById('calculo-ap')
const resultado = document.getElementById('resultado-ap')

const formAp = document.createElement('form')

let aps = []

function criarForm() {

    formAp.id = 'form-ap'
    formAp.innerHTML = ''

    if (aps.length === 1) {

        formAp.innerHTML = `
            <div>
                <label for="portal">Quantas questões você acertou nessa unidade? <br> (0 à 20)</label>
                <input type="text" id="portal" min="0" max="20" required>
            </div>

            <div>
                <label for="trabalho">Qual foi a nota do trabalho nessa unidade?</label>
                <input type="text" id="trabalho" min="0" max="10" required>
            </div>
        `
    } else {

        aps.forEach((ap, index) => {
            
            formAp.innerHTML += `
                <div>
                    <h3>Unidade ${index + 1}</h3>

                    <div>
                        <label for="portal-${index + 1}">Quantas questões você acertou nessa unidade? <br> (0 à 20)</label>
                        <input type="text" id="portal-${index + 1}" min="0" max="20" required>
                    </div>

                    <div>
                        <label for="trabalho-${index + 1}">Qual foi a nota do trabalho nessa unidade?</label>
                        <input type="text" id="trabalho-${index + 1}" min="0" max="10" required>
                    </div>
                </div>
            `
        })
    }

    formAp.innerHTML += `<input type="submit" value="Calcular nota">`

    validarInputs()

    exibicaoCalculo.innerHTML = ''
    exibicaoCalculo.appendChild(formAp)

}

function criarElementos() {

    umaAp.addEventListener('click', () => {

        resultado.innerHTML = ''
        aps = ['ap']
        criarForm()

    })

    todasAp.addEventListener('click', () => {

        resultado.innerHTML = ''
        aps = ['ap1', 'ap2', 'ap3']
        criarForm()

    })

}

function submitAp() {

    formAp.addEventListener('submit', (event) => {
        
        event.preventDefault()
        calcularAp()
        formAp.reset()
        
    })

}

export { aps, criarElementos, submitAp }
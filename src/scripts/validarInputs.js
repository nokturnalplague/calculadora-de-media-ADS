function validarInputs() {

    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {

        input.addEventListener('input', () => {

            const min = parseFloat(input.min)
            const max = parseFloat(input.max)
            let inputValue = input.value

            if (max === 10) {

                inputValue = inputValue.replace(',', '.')

                if (!/^\d*\.?\d*$/.test(inputValue)) {

                    alert('Insira apenas números.')
                    input.value = ''
                    return
                }

            } else if (max === 20) {
                
                if (!/^\d*$/.test(inputValue)) {

                    alert('Insira apenas números inteiros.')
                    input.value = ''
                    return

                }

            }

            const numValue = parseFloat(inputValue)

            if (isNaN(numValue) || numValue < min || numValue > max) {

                alert(`O valor deve estar entre ${min} e ${max}.`)
                input.value = ''

            }

        })

    })

}

export { validarInputs }

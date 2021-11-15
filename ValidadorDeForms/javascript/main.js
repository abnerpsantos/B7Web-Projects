let formValidator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll('input');

        formValidator.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = formValidator.checkInput(input);
            console.log(check);
            if (check !== true) {
                send = false;
                formValidator.showError(input, check);
            }
        }
        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');

        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let ruleDetails = rules[k].split('=');
                switch (ruleDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio!';
                        }
                        break;
                    case 'min':
                        if (input.value.length < ruleDetails[1]) {
                            return 'Pelo menos ' + ruleDetails[1] + ' caracteres';
                        }
                        break;
                }
            }
        }

        return true;
    },
    showError: (input, error) => {
        console.log(error);
        input.style.borderColor = 'red';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }
        let errorElements = document.querySelectorAll('.error');

        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }
}

let form = document.querySelector('.validator');

form.addEventListener('submit', formValidator.handleSubmit);
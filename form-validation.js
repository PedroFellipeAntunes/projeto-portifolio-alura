document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário e o botão de envio
    const form = document.querySelector('.form');
    const sendButton = document.querySelector('.form .button');

    // Função para exibir mensagens de erro
    function showError(input, message) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.remove();
        }

        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error');
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '12px';
        errorMessage.textContent = message;
        input.insertAdjacentElement('afterend', errorMessage);
    }

    // Função para limpar mensagens de erro
    function clearError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.remove();
        }
    }

    // Função para validar campos individuais
    function validateField(input) {
        const value = input.value.trim();
        const name = input.name;

        if (!value) {
            showError(input, `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
            return false;
        }

        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            showError(input, 'Please enter a valid email address.');
            return false;
        }

        clearError(input);
        return true;
    }

    // Função para validar o formulário completo
    function validateForm() {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach((input) => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    // Adiciona um evento de clique no botão "Send"
    sendButton.addEventListener('click', (event) => {
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });
});

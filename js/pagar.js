document.addEventListener('DOMContentLoaded', () => {
    const profileTitle = document.querySelector('.profile__title');
    const songsSection = document.querySelector(".songs__section");

    // Cargar los usuarios desde el localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    // Verificar si el usuario está registrado
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Si el usuario está registrado, muestra el nombre de usuario y la opción de cerrar sesión
        profileTitle.textContent = loggedInUser.username;

        // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
        profileLinkSession.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser'); // Marcar que el usuario cerró sesión
            profileTitle.textContent = 'Nombre de usuario'; // Restablecer el nombre de usuario en la interfaz
        });
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'Nombre de usuario'; // Puedes personalizar el mensaje para invitados
    }
})

function cancelar() {
    window.location.href = '../index.html'; 
}

function validarCampos() {
    const card = document.getElementById('card').value;
    const cvc = document.getElementById('cvc').value;

    const errorContainer = document.getElementById('error-container');
    const cardError = document.getElementById('cardError');
    const cvcError = document.getElementById('cvcError');

    // Validacion de campos
    const cardRegex = /^\d{16}$/;
    const cvcRegex = /^(?!000|999)\d{3}$/;

    if (!cardRegex.test(card)) {
        errorContainer.classList.add('error-message');
        cardError.textContent = 'Numero de tarjeta incorrecto';
        cardError.classList.add('error-message');
        setTimeout(() => {
            cardError.textContent = '';
            cardError.classList.remove('error-message');
        }, 3000);
    } else {
        cardError.textContent = '';
    }

    if (!cvcRegex.test(cvc)) {
        cvcError.textContent = 'Codigo de seguridad incorrecto';
        cvcError.classList.add('error-message');
        setTimeout(() => {
            cvcError.textContent = '';
            cvcError.classList.remove('error-message');
        }, 3000);
    } else {
        cvcError.textContent = '';
    }

    // Si todos los campos estan correctos
    if (cardRegex.test(card) && cvcRegex.test(cvc)) {
        alert('Pago exitoso');
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        loggedInUser.premium = true;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        
        if (loggedInUser) {
            window.location.href = 'home.html';
        } else {
            window.location.href = '../index.html';
        }
    }
}
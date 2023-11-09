document.addEventListener('DOMContentLoaded', function() {
    const profileTitle = document.querySelector('.profile__title');
    const profileLinkSession = document.querySelector('.profile__link-session');

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

    document.getElementById('next-button').addEventListener('click', (e) => {
        e.preventDefault();

        let seleccionoPlan = document.querySelector('input[name="option"]:checked')
        
        if (!seleccionoPlan) {
            let errorMsg = document.getElementById('error-msg');
            errorMsg.classList.add('error__message-show');
            errorMsg.classList.remove('error__message');
            
            setTimeout(() => {
                errorMsg.classList.remove('error__message-show');
                errorMsg.classList.add('error__message');
            }, 3000);
            return;
        }
        
        let planSeleccionado = document.querySelector('input[name="option"]:checked').getAttribute('id');

        window.location.href = 'pagar.html?plan=' + planSeleccionado;
        console.log(window.location.href)
    });
    
});
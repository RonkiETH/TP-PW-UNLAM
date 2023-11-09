document.addEventListener("DOMContentLoaded", function() {
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

    // Seleccionar todas las estrellas
    const stars = document.querySelectorAll(".songs__star");

    // Obtener el índice del usuario actual en el array de usuarios
    const userIndex = users.findIndex((user) => user.username === loggedInUser.username);

    // Cargar los álbumes favoritos del usuario actual desde el objeto del usuario
    const favoritos = loggedInUser.albumsFavoritos || [];

    // Iterar a través de las estrellas
    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Verificar si el álbum ya es un favorito
            const isFavorite = star.classList.contains("selected");
            const albumName = document.querySelectorAll(".songs__image")[index].getAttribute("alt");

            if (isFavorite) {
                // Si ya es un favorito, quitarlo de la lista de favoritos y actualizar el estilo
                favoritos.splice(favoritos.indexOf(albumName), 1);
                star.classList.remove("selected");
            } else {
                // Si no es un favorito, agregarlo a la lista de favoritos y actualizar el estilo
                favoritos.push(albumName);
                star.classList.add("selected");
            }

            // Actualizar la lista de álbumes favoritos del usuario en el objeto del usuario
            loggedInUser.albumsFavoritos = favoritos;

            // Actualizar el objeto del usuario en el localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

            // Actualizar el array de usuarios en el localStorage
            users[userIndex] = loggedInUser;
            localStorage.setItem('users', JSON.stringify(users));
        });
    });

    // Marcar las estrellas según los álbumes favoritos del usuario
    favoritos.forEach((albumName) => {
        // Aquí, puedes utilizar el albumName para identificar y marcar las estrellas de los álbumes favoritos
        // Puedes comparar el valor de albumName con el atributo alt de las imágenes para determinar cuáles deben estar marcadas.
        document.querySelectorAll(".songs__image").forEach((image, index) => {
            if (image.getAttribute("alt") === albumName) {
                stars[index].classList.add("selected");
            }
        });
    });

    const songAside = document.querySelector(".song__image");
    const texto = document.querySelector(".song__description");

    if(loggedInUser.cancionSonando === "Canserbero - Na"){
        songAside.src= '../img/canserbero cancion 1.jpg';
        texto.textContent = "La canción Na de Canserbero es una canción de rap intensa y apasionada que se centra en los desafíos y luchas de ser un artista y una persona que se niega a conformarse con las normas y expectativas sociales. Las letras son crudas y poderosas, transmitiendo una sensación de frustración, ira y desafío.";
    }

    if(loggedInUser.cancionSonando === "Ciro y los persas - Caminando"){
        songAside.src= '../img/ciro cancion 3.jpg';
        texto.textContent = "La canción Caminando de Ciro y los Persas explora temas de resiliencia, determinación y abrazar la individualidad. Las letras describen el viaje del narrador, quien navega por los desafíos de la vida con un sentido de propósito y confianza en sí mismo.";
    }

    if(loggedInUser.cancionSonando === "Wos - Live Set"){
        songAside.src= '../img/wos cancion 4.jpg';
        texto.textContent = "La canción FREESTYLE (Live Set) de WOS explora temas de autoexpresión, libertad y luchas internas. Las letras profundizan en el viaje introspectivo del artista, abrazando su identidad única y encontrando consuelo en su arte."
    }
    
    if(loggedInUser.cancionSonando === "Tupac - Only God Can Judge Me"){
        songAside.src= '../img/tupac album 5.jpg';
        texto.textContent = "La canción Only God Can Judge Me de 2Pac (ft. Rappin' 4-Tay) explora la vida de los afroamericanos que viven en los guetos de Estados Unidos, donde se enfrentan a diario a la pobreza, la delincuencia y el racismo.";
    }

    if(loggedInUser.cancionSonando === "Aerosmith - I Don't Want to Miss a Thing"){
        songAside.src= '../img/Idontwanttomissathing cancion 6.jpg';
        texto.textContent = "La canción I Don't Want to Miss a Thing de Aerosmith es una declaración de amor y devoción"
    }
});
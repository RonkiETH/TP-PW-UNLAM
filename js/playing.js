document.addEventListener("DOMContentLoaded", function() {
    
    const profileTitle = document.querySelector('.profile__title');
    const profileLinkSession = document.querySelector('.profile__link-session');
    
    // Verificar si el usuario está registrado
    const loggedInUsername = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUsername) {
        // Si el usuario está registrado, muestra el nombre de usuario y la opción de cerrar sesión
        profileTitle.textContent = loggedInUsername.username;
        
        // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
        profileLinkSession.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser'); // Marcar que el usuario cerró sesión
            profileTitle.textContent = 'Nombre de usuario'; // Restablecer el nombre de usuario en la interfaz
        });
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'Nombre de usuario'; // Puedes personalizar el mensaje para invitados
    }

        // Función para cargar los álbumes favoritos desde el localStorage
    function cargarAlbumsFavoritos() {
        const favoritos = localStorage.getItem("favoritos");
        return favoritos ? JSON.parse(favoritos) : [];
    }

    function cargarCancionesFavoritas() {
        const cancionesFavoritas = localStorage.getItem("cancionesFavoritas");
        return cancionesFavoritas ? JSON.parse(cancionesFavoritas) : [];
    }

    // Función para guardar los álbumes favoritos en el localStorage
    function guardarAlbumsFavoritos(favoritos) {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    function guardarCancionesFavoritas(cancionesFavoritas) {
        localStorage.setItem("cancionesFavoritas", JSON.stringify(cancionesFavoritas));
    }

    // Seleccionar todos los elementos con la clase 'songs__article'
    const songsArticles = document.querySelectorAll(".songs__article");

    // Cargar los álbumes favoritos existentes desde el localStorage
    const favoritos = cargarAlbumsFavoritos();
    const cancionesFavoritas = cargarCancionesFavoritas();

    // Iterar a través de los elementos
    songsArticles.forEach((article) => {
        // Encontrar la estrella dentro de este artículo
        const star = article.querySelector(".songs__star");
        
        // Obtener el nombre del álbum
        const albumName = article.querySelector(".songs__image").getAttribute("src");
        const songName = document.querySelectorAll(".songs")[index].getAttribute("alt");

        // Agregar un manejador de eventos al hacer clic en la estrella
        star.addEventListener("click", () => {
            const isFavorite = star.classList.contains("selected")
            if (isFavorite) {
                // Si ya es un favorito, eliminarlo de la lista de favoritos y actualizar el estilo
                const indexToRemove = favoritos.indexOf(albumName);
                if (indexToRemove !== -1) {
                    favoritos.splice(indexToRemove, 1);
                    guardarAlbumsFavoritos(favoritos);
                    guardarCancionesFavoritas(cancionesFavoritas);
                }
                star.classList.remove("selected");
            } else {
                // Si no es un favorito, agregarlo a la lista de favoritos y actualizar el estilo
                favoritos.push(albumName);
                cancionesFavoritas.push(songName);
                guardarAlbumsFavoritos(favoritos);
                guardarCancionesFavoritas(cancionesFavoritas);
                star.classList.add("selected");
                

            };
        });
    });

    // Al hacer click se actualiza la imagen de la cancion sonando y el texto
    const cancion1 = document.querySelector("#song__first");
    const cancion3 = document.querySelector("#song__third");
    const cancion4 = document.querySelector("#song__fourth");
    const cancion5 = document.querySelector("#song__fifth");
    const cancion6 = document.querySelector("#song__sixth");
    const songAside = document.querySelector(".song__image");
    const texto = document.querySelector(".song__description");

    if(loggedInUsername.cancionSonando === "Canserbero - Na"){
        songAside.src= '../img/canserbero cancion 1.jpg';
        texto.textContent = "La canción Na de Canserbero es una canción de rap intensa y apasionada que se centra en los desafíos y luchas de ser un artista y una persona que se niega a conformarse con las normas y expectativas sociales. Las letras son crudas y poderosas, transmitiendo una sensación de frustración, ira y desafío.";
    }

    if(loggedInUsername.cancionSonando === "Ciro y los persas - Caminando"){
        songAside.src= '../img/ciro cancion 3.jpg';
        texto.textContent = "La canción Caminando de Ciro y los Persas explora temas de resiliencia, determinación y abrazar la individualidad. Las letras describen el viaje del narrador, quien navega por los desafíos de la vida con un sentido de propósito y confianza en sí mismo.";
    }

    if(loggedInUsername.cancionSonando === "Wos - Live Set"){
        songAside.src= '../img/wos cancion 4.jpg';
        texto.textContent = "La canción FREESTYLE (Live Set) de WOS explora temas de autoexpresión, libertad y luchas internas. Las letras profundizan en el viaje introspectivo del artista, abrazando su identidad única y encontrando consuelo en su arte."
    }
    
    if(loggedInUsername.cancionSonando === "Tupac - Only God Can Judge Me"){
        songAside.src= '../img/tupac album 5.jpg';
        texto.textContent = "La canción Only God Can Judge Me de 2Pac (ft. Rappin' 4-Tay) explora la vida de los afroamericanos que viven en los guetos de Estados Unidos, donde se enfrentan a diario a la pobreza, la delincuencia y el racismo.";
    }

    if(loggedInUsername.cancionSonando === "Aerosmith - I Don't Want to Miss a Thing"){
        songAside.src= '../img/Idontwanttomissathing cancion 6.jpg';
        texto.textContent = "La canción I Don't Want to Miss a Thing de Aerosmith es una declaración de amor y devoción"
    }

    cancion1.addEventListener("click", function() {
        songAside.src= '../img/canserbero cancion 1.jpg';
        texto.textContent = "La canción Na de Canserbero es una canción de rap intensa y apasionada que se centra en los desafíos y luchas de ser un artista y una persona que se niega a conformarse con las normas y expectativas sociales. Las letras son crudas y poderosas, transmitiendo una sensación de frustración, ira y desafío.";
        loggedInUsername.cancionSonando = "Canserbero - Na";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        console.log(loggedInUsername);
        cancion1.style.display = 'block'
    })

    cancion3.addEventListener("click", function() {
        songAside.src= '../img/ciro cancion 3.jpg';
        texto.textContent = "La canción Caminando de Ciro y los Persas explora temas de resiliencia, determinación y abrazar la individualidad. Las letras describen el viaje del narrador, quien navega por los desafíos de la vida con un sentido de propósito y confianza en sí mismo.";
        loggedInUsername.cancionSonando = "Ciro y los persas - Caminando";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        console.log(loggedInUsername);
    })

    cancion4.addEventListener("click", function() {
        songAside.src= '../img/wos cancion 4.jpg';
        texto.textContent = "La canción FREESTYLE (Live Set) de WOS explora temas de autoexpresión, libertad y luchas internas. Las letras profundizan en el viaje introspectivo del artista, abrazando su identidad única y encontrando consuelo en su arte."
        loggedInUsername.cancionSonando = "Wos - Live Set";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        console.log(loggedInUsername);
    })

    cancion5.addEventListener("click", function() {
        songAside.src= '../img/tupac album 5.jpg';
        texto.textContent = "La canción Only God Can Judge Me de 2Pac (ft. Rappin' 4-Tay) explora la vida de los afroamericanos que viven en los guetos de Estados Unidos, donde se enfrentan a diario a la pobreza, la delincuencia y el racismo.";
        loggedInUsername.cancionSonando = "Tupac - Only God Can Judge Me";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        console.log(loggedInUsername);
    })

    cancion6.addEventListener("click", function() {
        songAside.src= '../img/Idontwanttomissathing cancion 6.jpg';
        texto.textContent = "La canción I Don't Want to Miss a Thing de Aerosmith es una declaración de amor y devoción, expresando admiración por alguien tan envuelto en ellos que nunca quiere separarse de su lado. La letra habla del deseo de permanecer en el momento para siempre y nunca dejar ir su amor."
        loggedInUsername.cancionSonando = "Aerosmith - I Don't Want to Miss a Thing";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        console.log(loggedInUsername);
    })

    const starsSong = document.querySelectorAll(".fav-song");
    const starsAlbum = document.querySelectorAll('.fav-album');

    const users = JSON.parse(localStorage.getItem('users'));

    const userIndex = users.findIndex((user) => user.username === loggedInUsername.username);

    // Iterar a través de las estrellas
    // ESTRELLA ALBUM
    starsAlbum.forEach((star, index) => {
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
            loggedInUsername.albumsFavoritos = favoritos;

            // Actualizar el objeto del usuario en el localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));

            // Actualizar el array de usuarios en el localStorage
            users[userIndex] = loggedInUsername
            localStorage.setItem('users', JSON.stringify(users));
        });
    });

    // ESTRELLA CANCION
    console.log(starsSong);
    starsSong.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Verificar si el álbum ya es un favorito
            const isFavorite = star.classList.contains("selected");
            const songName = document.querySelectorAll(".songs")[index].getAttribute("alt");
            console.log(songName);

            if (isFavorite) {
                // Si ya es un favorito, quitarlo de la lista de favoritos y actualizar el estilo
                cancionesFavoritas.splice(cancionesFavoritas.indexOf(songName), 1);
                star.classList.remove("selected");
            } else {
                // Si no es un favorito, agregarlo a la lista de favoritos y actualizar el estilo
                cancionesFavoritas.push(songName);
                star.classList.add("selected");
            }

            // Actualizar la lista de álbumes favoritos del usuario en el objeto del usuario
            loggedInUsername.cancionesFavoritas = cancionesFavoritas;

            // Actualizar el objeto del usuario en el localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));

            // Actualizar el array de usuarios en el localStorage
            users[userIndex] = loggedInUsername
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
});

// Al hacer click en las estrellas, el álbum se debe agregar/retirar como álbum favorito.

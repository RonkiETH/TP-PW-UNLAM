document.addEventListener("DOMContentLoaded", function() {
    let cancionesContainer = document.getElementById('grid-container');
    
    
    const profileTitle = document.querySelector('.profile__title');
    const profileLinkSession = document.querySelector('.profile__link-session');
    
    // Verificar si el usuario está registrado
    const loggedInUsername = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUsername) {
        // Si el usuario está registrado, muestra el nombre de usuario y la opción de cerrar sesión
        profileTitle.textContent = loggedInUsername.username;
        mostrarCancionesFavoritas(cancionesContainer);
        
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
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        return user.cancionesFavoritas ? user.cancionesFavoritas : [];
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
    console.log(cancionesFavoritas);

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
        
    })

    cancion3.addEventListener("click", function() {
        songAside.src= '../img/ciro cancion 3.jpg';
        texto.textContent = "La canción Caminando de Ciro y los Persas explora temas de resiliencia, determinación y abrazar la individualidad. Las letras describen el viaje del narrador, quien navega por los desafíos de la vida con un sentido de propósito y confianza en sí mismo.";
        loggedInUsername.cancionSonando = "Ciro y los persas - Caminando";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        
    })

    cancion4.addEventListener("click", function() {
        songAside.src= '../img/wos cancion 4.jpg';
        texto.textContent = "La canción FREESTYLE (Live Set) de WOS explora temas de autoexpresión, libertad y luchas internas. Las letras profundizan en el viaje introspectivo del artista, abrazando su identidad única y encontrando consuelo en su arte."
        loggedInUsername.cancionSonando = "Wos - Live Set";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        
    })

    cancion5.addEventListener("click", function() {
        songAside.src= '../img/tupac album 5.jpg';
        texto.textContent = "La canción Only God Can Judge Me de 2Pac (ft. Rappin' 4-Tay) explora la vida de los afroamericanos que viven en los guetos de Estados Unidos, donde se enfrentan a diario a la pobreza, la delincuencia y el racismo.";
        loggedInUsername.cancionSonando = "Tupac - Only God Can Judge Me";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        
    })

    cancion6.addEventListener("click", function() {
        songAside.src= '../img/Idontwanttomissathing cancion 6.jpg';
        texto.textContent = "La canción I Don't Want to Miss a Thing de Aerosmith es una declaración de amor y devoción, expresando admiración por alguien tan envuelto en ellos que nunca quiere separarse de su lado. La letra habla del deseo de permanecer en el momento para siempre y nunca dejar ir su amor."
        loggedInUsername.cancionSonando = "Aerosmith - I Don't Want to Miss a Thing";
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));
        
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
    starsSong.forEach((star) => {
        star.addEventListener("click", () => {
            // Verificar si el álbum ya es un favorito
            const cancionSeleccionada = star.getAttribute("alt");
            let cancionesFiltradas;
            console.log(cancionSeleccionada);
        
            if (cancionSeleccionada) {
                // Si ya es un favorito, quitarlo de la lista de favoritos y actualizar el estilo
                cancionesFiltradas = cancionesFavoritas.filter(song => song !== cancionSeleccionada);
                
            }

            // Actualizar la lista de álbumes favoritos del usuario en el objeto del usuario
            loggedInUsername.cancionesFavoritas = cancionesFiltradas;

            // Actualizar el objeto del usuario en el localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUsername));

            // Actualizar el array de usuarios en el localStorage
            users[userIndex] = loggedInUsername
            localStorage.setItem('users', JSON.stringify(users));
            

            cancionesContainer.innerHTML = `
                <article class="songs__white">
                </article>
                <article class="songs__category">
                    <h4>Canción</h4>
                </article>
                <article class="songs__category">
                    <h4>Album</h4>
                </article>
                <article class="songs__category">
                    <h4>Duración</h4>
                </article>
                <article class="songs__category">
                    <h4>Reproducciones</h4>
                </article>
            `;
            mostrarCancionesFavoritas(cancionesContainer);
            document.location.reload();
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

    
    function mostrarCancionesFavoritas(cancionesContainer){
        loggedInUsername.cancionesFavoritas.forEach(cancion => {
            if(cancion === "Canserbero - Na"){
                cancionesContainer.innerHTML += `
                <article class="songs__content" id="fila1BotonPlay">
                    <img src="../img/boton play.png" alt="Reproducir" width="90px" class="songs__button-img">
                </article>
                <article class="songs__content" id="fila1Cancion">
                    <img class="songs__image songs" id="song__first" src="../img/canserbero cancion 1.jpg" alt="Canserbero - Na" width="201vh">
                    <img src="../img/estrella.png" class="songs__star fav-song selected" alt="Canserbero - Na">
                </article>
                <article class="songs__content" id="fila1Album">
                    <img class="songs__image" src="../img/canserbero album 1.jpg" alt="Vida" width="201vh">
                    <img src="../img/estrella.png" class="songs__star fav-album">
                </article>
                <article class="songs__info" id="fila1Duracion">
                    <p>6:22</p>
                </article>
                <article class="songs__info" id="fila1Reproducciones">
                    <p>17.135.570</p>
                </article>
                `;

            }
    
            if(cancion === "Ciro - Caminando"){
                cancionesContainer.innerHTML += `
                <article class="songs__content" id="fila3BotonPlay">
                    <img src="../img/boton play.png" alt="Reproducir" width="90px" class="songs__button-img">
                </article>
                <article class="songs__content" id="fila3Cancion">
                    <img class="songs__image songs" id="song__third" src="../img/ciro cancion 3.jpg" alt="Ciro - Caminando" width="201vh">
                    <img src="../img/estrella.png" class="songs__star fav-song selected" alt="Ciro - Caminando">
                </article>
                <article class="songs__content" id="fila3Album">
                    <img class="songs__image" src="../img/ciro album 3.jpg" alt="27" width="201vh">
                    <img src="../img/estrella.png" class="songs__star fav-album">
                </article>
                <article class="songs__info" id="fila3Duracion" >
                    <p>5:03</p>
                </article>
                <article class="songs__info" id="fila3Reproducciones">
                    <p>11.934.304</p>
                </article>
                `
            }
    
            if(cancion === "Wos - Live Set(FreeStyle)"){
                cancionesContainer.innerHTML += `
                    <article class="songs__content" id="fila4BotonPlay">
                        <img src="../img/boton play.png" alt="Reproducir" width="90px" class="songs__button-img">
                    </article>
                    <article class="songs__content" id="fila4Cancion">
                        <img class="songs__image songs" id="song__fourth" src="../img/wos cancion 4.jpg" alt="Wos - Live Set(FreeStyle)" width="201vh">
                        <img src="../img/estrella.png" class="songs__star fav-song selected" alt="Wos - Live Set(FreeStyle)">
                    </article>
                    <article class="songs__content" id="fila4Album">
                        <img class="songs__image" src="../img/wos cancion 4.jpg" alt="Live Set" width="201vh">
                        <img src="../img/estrella.png" class="songs__star fav-album">
                    </article>
                    <article class="songs__info" id="fila4Duracion">
                        <p>11:00</p>
                    </article>
                    <article class="songs__info" id="fila4Reproducciones">
                        <p>34.581.113</p>
                    </article>
                `
            }
    
            if(cancion === "Tupac - Only God Can Judge Me"){
                cancionesContainer.innerHTML += `
                    <article class="songs__content" id="fila5BotonPlay">
                        <img src="../img/boton play.png" alt="Reproducir" width="90px" class="songs__button-img">
                    </article>
                    <article class="songs__content" id="fila5Cancion">
                        <img class="songs__image songs" id="song__fifth" src="../img/tupac album 5.jpg" alt="Tupac - Only God Can Judge Me" width="201vh">
                        <img src="../img/estrella.png" class="songs__star fav-song selected" alt="Tupac - Only God Can Judge Me">
                    </article>
                    <article class="songs__content" id="fila5Album">
                        <img class="songs__image" src="../img/tupac album 5.jpg" alt="All Eyez On Me" width="201vh">
                        <img src="../img/estrella.png" class="songs__star fav-album">
                    </article>
                    <article class="songs__info" id="fila5Duracion">
                        <p>4:57</p>
                    </article>
                    <article class="songs__info" id="fila5Reproducciones">
                        <p>24.966.867</p>
                    </article>
                `
            }
    
            if(cancion === "Aerosmith - I Dont Want To Miss a Thing"){
                cancionesContainer.innerHTML += `
                <article class="songs__content" id="fila6BotonPlay">
                    <img src="../img/boton play.png" alt="Reproducir" width="90px" class="songs__button-img">
                </article>
                <article class="songs__content" id="fila6Cancion"> 
                    <img class="songs__image songs" id="song__sixth" src="../img/Idontwanttomissathing cancion 6.jpg" alt="Aerosmith - I Dont Want To Miss a Thing" width="201vh">
                    <img src="../img/estrella.png" class="songs__star fav-song selected" alt="Aerosmith - I Dont Want To Miss a Thing">
                </article>
                <article class="songs__content" id="fila6Album">
                    <img class="songs__image" src="../img/aerosmith album 6.jpeg" alt="Armageddon" width="201vh">
                    <img src="../img/estrella.png" class="songs__star fav-album">
                </article>
                <article class="songs__info" id="fila6Duracion" >
                    <p>4:52</p>
                </article>
                <article class="songs__info" id="fila6Reproducciones">
                    <p>580.794.918</p>
                </article>
                `
            }
        })
    }
});

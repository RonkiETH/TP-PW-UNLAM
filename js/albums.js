document.addEventListener("DOMContentLoaded", function() {
    const profileTitle = document.querySelector('.profile__title');
    const songsSection = document.querySelector(".songs__section");

    // Cargar los usuarios desde el localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    // Verificar si el usuario está registrado
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Si el usuario está registrado, muestra el nombre de usuario
        profileTitle.textContent = loggedInUser.username;
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'Nombre de usuario'; // Puedes personalizar el mensaje para invitados
    }

    // Obtener los álbumes favoritos del usuario actual
    const favoritos = loggedInUser.albumsFavoritos || [];

    const albums = [
        {
            name: "Canserbero",
            image: "../img/canserbero_cancion_1.jpg"
        },
        {
            name: "Patricio Rey",
            image: "../img/salando_las_heridas_cancion_2.jpg"
        },
        {
            name: "Ciro",
            image: "../img/ciro_cancion_3.jpg"
        },
        {
            name: "Wos",
            image: "../img/wos_cancion_4.jpg"
        },
        {
            name: "Tupac",
            image: "../img/tupac_album_5.jpg"
        },
        {
            name: "Aerosmith",
            image: "../img/Idontwanttomissathing_cancion_6.jpg"
        },
        {
            name: "Richard Rodgers",
            image: "../img/Cancion7.jpg"
        },
        {
            name: "Kirby",
            image: "../img/Cancion8.jpg"
        },
        {
            name: "Wes Montgomery",
            image: "../img/Cancion9.jpg"
        },
        {
            name: "ABBA Voyage",
            image: "../img/Cancion10.webp"
        },
        {
            name: "Daft Punk",
            image: "../img/Cancion12.webp"
        },
        {
            name: "Astral",
            image: "../img/Cancion13.webp"
        },
        {
            name: "Def Leppard",
            image: "../img/Cancion14.webp"
        },
        {
            name: "Harry Styles",
            image: "../img/Cancion15.webp"
        },
        {
            name: "Sisster",
            image: "../img/Cancion16.jpg"
        }
    ];

    // Función para actualizar la vista de álbumes favoritos
    function updateAlbumsView() {
        // Elimina todos los elementos de la vista
        songsSection.innerHTML = '';

        // Recrea la lista de álbumes favoritos en la vista
        favoritos.forEach((albumName) => {
            const album = albums.find((a) => a.name === albumName);
            if (album) {
                const article = document.createElement("article");
                article.className = "songs__article";

                const link = document.createElement("a");
                link.href = "playing.html";
                link.className = "songs__link";

                const image = document.createElement("img");
                image.className = "songs__image";
                image.src = album.image;
                image.alt = album.name;

                link.appendChild(image);
                article.appendChild(link);

                const star = document.createElement("img");
                star.className = "songs__star";
                star.src = "../img/estrella.png";

                article.appendChild(star);

                // Agregar un evento de clic a la estrella para eliminar el álbum
                star.addEventListener("click", () => {
                    // Obtén el índice del álbum en favoritos
                    const albumIndex = favoritos.indexOf(albumName);

                    // Elimina el álbum de la lista de favoritos
                    favoritos.splice(albumIndex, 1);

                    // Actualiza el objeto del usuario en el almacenamiento local
                    loggedInUser.albumsFavoritos = favoritos;
                    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

                    // Actualiza la vista de álbumes favoritos
                    updateAlbumsView();
                });

                songsSection.appendChild(article);
            }
        });
    }
    updateAlbumsView();

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

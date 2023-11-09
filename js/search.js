document.addEventListener("DOMContentLoaded", function () {
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

    
        const searchInput = document.getElementById("search");
        const songs = document.querySelectorAll(".songs__article");
      
        searchInput.addEventListener("input", function () {
          const searchTerm = searchInput.value.toLowerCase();
      
          songs.forEach((song) => {
            const songName = song.querySelector("img").getAttribute("data-alt").toLowerCase();
            if (songName.includes(searchTerm)) {
              song.style.display = "block";
            } else {
              song.style.display = "none";
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


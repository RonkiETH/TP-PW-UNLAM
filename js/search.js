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
      
});


function ocultarTitulo() {
    var titulo = document.querySelector(".title_message");
    titulo.style.animation =
      "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
  }
  
  // Llama a la función después de 216 segundos (216,000 milisegundos)
  setTimeout(ocultarTitulo, 216000);
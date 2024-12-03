document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos los elementos h1 y h3 dentro de section-main
  const elementsToAnimate = document.querySelectorAll('.animate__animated');

  const handleScroll = () => {
    elementsToAnimate.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Si el elemento está visible en el viewport
      if (rect.top < windowHeight - 100) {
        element.classList.add('animate__fadeInUp'); // Agrega la clase de animación específica
      }
    });
  };

  // Llama a la función al hacer scroll
  window.addEventListener('scroll', handleScroll);

  // Ejecuta una vez para capturar elementos visibles al cargar la página
  handleScroll();
});

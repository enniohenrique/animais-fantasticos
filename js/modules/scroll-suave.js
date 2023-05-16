// A linha abaixo cria uma função para fazer um scroll suave nos links internos
export default function initScrollSuave() {

    // Guardando todos os links internos em uma variável
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    // A linha abaixo cria uma função que vai scrollar até a section do link interno
    function scrollToSection(event) {

      // A linha abaixo preveni o padrão
      event.preventDefault();

      // A linha abaixo guarda o href em uma variável
      const href = event.currentTarget.getAttribute("href");

      const section = document.querySelector(href);

      // A linha abaixo cria uma função que vai fazer o scroll suave até a section clicada
      section.scrollIntoView({        
        behavior: "smooth",
        block: "start",
      });
    }
    
    // foreach para cada link interno realizar o scroll
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
  
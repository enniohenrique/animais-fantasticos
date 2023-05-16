// A linha abaixo cria uma função para fazer um scroll suave nos links internos
export default class ScrollSuave {
	constructor(links, options) {
		// Guardando todos os links internos em uma variável
		this.linksInternos = document.querySelectorAll(links);
		if (options === undefined) {
			this.options = { behavior: "smooth", block: "start" };
		} else {
			this.options = options;
		}

		this.scrollToSection = this.scrollToSection.bind(this);
	}

	// A linha abaixo cria uma função que vai scrollar até a section do link interno
	scrollToSection(event) {
		// A linha abaixo preveni o padrão
		event.preventDefault();

		// A linha abaixo guarda o href em uma variável
		const href = event.currentTarget.getAttribute("href");

		const section = document.querySelector(href);

		// A linha abaixo cria uma função que vai fazer o scroll suave até a section clicada
		section.scrollIntoView(this.options);
	}

	addLinkEvent() {
		// foreach para cada link interno realizar o scroll
		this.linksInternos.forEach((link) => {
			link.addEventListener("click", this.scrollToSection);
		});
	}

	init() {
    if(this.linksInternos.length){

      this.addLinkEvent();
    }
		return this;
	}
}

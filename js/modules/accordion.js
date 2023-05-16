// A linha abaixo cria uma função para poder abrir e fechar as perguntas do faq
export default class Accordion {
	constructor(list) {
		this.accordionList = document.querySelectorAll(list);
		this.activeClass = "ativo";
	}

	// A linha abaxo cria uma função que vai adicionar ou remover(toggle) a classe 'ativo' nas perguntas do FAQ quando elas forem clicadas
	toggleAccordion(item) {
		// Adicionando o 'ativo' na dt
		item.classList.toggle(this.activeClass);
		// Adicionando o 'ativo' na dd
		item.nextElementSibling.classList.toggle(this.activeClass);
	}


	// Adiciona os eventos ao accordion
	addAccordionEvent() {
		// foreach para passar por cada item do array aplicando a arrow function que vai criar um evento do tipo 'click' que vai chamar a função 'activeAccordion'
		this.accordionList.forEach((item) => {
			item.addEventListener("click", () => {
				this.toggleAccordion(item);
			});
		});
	}

	// Iniciar função
	init() {
		if (this.accordionList.length) {
			// Ativar primeiro item
			this.toggleAccordion(this.accordionList[0]);
			this.addAccordionEvent();
		}
	}
}

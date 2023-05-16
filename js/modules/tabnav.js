// A linha abaixo cria uma função para a navegação entre tabs com as imagens e descrições dos animais
export default class TabNav {
	constructor(menu, content) {
		this.tabMenu = document.querySelectorAll(menu);
		this.tabContent = document.querySelectorAll(content);
		this.activeClass = "ativo";
	}

	// A função abaixo é para adicionar a classe 'ativo' no item que foi clicado e remover o 'ativo' dos outros
	activeTab(index) {
		// foreach para passar por cada item do array aplicando a arrow function que vai remover a classe 'ativo'
		this.tabContent.forEach((section) => {
			// Removendo a classe 'ativo' dos itens
			section.classList.remove(this.activeClass);
		});
		// Adicionando as classes 'ativo' e 'show-down/show-right' no item que foi clicado
		const direcao = this.tabContent[index].dataset.anime;
		this.tabContent[index].classList.add(this.activeClass, direcao);
	}
	
	// Adicions os eventos nas tabs
	addTabNavEvent() {
		// foreach para passar por cada item do array aplicando a arrow function que vai ativar a função activeTab no item que for clicado
		this.tabMenu.forEach((itemMenu, index) => {
			// A linha abaixo cria um evento do tipo 'click' e chama a função activeTab
			itemMenu.addEventListener("click", () => {
				this.activeTab(index);
			});
		});
	}

	init() {
		if (this.tabMenu.length && this.tabContent.length) {
			// Ativar primeiro item
			this.activeTab(0);
			this.addTabNavEvent();
		}
	}
}

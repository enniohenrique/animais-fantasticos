// A linha abaixo cria uma função para a navegação entre tabs com as imagens e descrições dos animais
export default function initTabNav() {
	const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
	const tabContent = document.querySelectorAll(
		'[data-tab="content"] section'
	);

	// A função abaixo é para adicionar a classe 'ativo' no item que foi clicado e remover o 'ativo' dos outros
	function activeTab(index) {
		// foreach para passar por cada item do array aplicando a arrow function que vai remover a classe 'ativo'
		tabContent.forEach((section) => {
			// Removendo a classe 'ativo' dos itens
			section.classList.remove("ativo");
		});
		// Adicionando as classes 'ativo' e 'show-down/show-right' no item que foi clicado
		const direcao = tabContent[index].dataset.anime;
		tabContent[index].classList.add("ativo", direcao);
	}

	// A linha abaixo verifica se existe o menu e o conteudo para não dar erro
	if (tabMenu.length && tabContent.length) {
		// A linha abaixo adiciona a classe 'ativo' no primeiro item para a página nao começar sem a descrição de nenhum animal
		tabContent[0].classList.add("ativo");

		// foreach para passar por cada item do array aplicando a arrow function que vai ativar a função activeTab no item que for clicado
		tabMenu.forEach((itemMenu, index) => {
			// A linha abaixo cria um evento do tipo 'click' e chama a função activeTab
			itemMenu.addEventListener("click", () => {
				activeTab(index);
			});
		});
	}
}

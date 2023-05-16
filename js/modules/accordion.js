// A linha abaixo cria uma função para poder abrir e fechar as perguntas do faq
export default function initAccordion() {
	const accordionList = document.querySelectorAll(
		'[data-anime="accordion"] dt'
	);
	// A linha abaixo adicionar a string 'ativo' à uma variável
	const activeClass = "ativo";

	// A linha abaxo cria uma função que vai adicionar ou remover(toggle) a classe 'ativo' nas perguntas do FAQ quando elas forem clicadas
	function activeAccordion() {
		// Adicionando o 'ativo' na dt
		this.classList.toggle(activeClass);
		// Adicionando o 'ativo' na dd
		this.nextElementSibling.classList.toggle(activeClass);
	}

	// A linha abaixo verifica se existe o faq e o conteudo para não dar erro
	if (accordionList.length) {
		// A linha abaixo adiciona a variável 'activeClass' na primeira pergunta e resposta (dt e dd) do FAQ que os usuários entendam que as perguntas são clicáveis
		accordionList[0].classList.add(activeClass);
		accordionList[0].nextElementSibling.classList.add(activeClass);

		// foreach para passar por cada item do array aplicando a arrow function que vai criar um evento do tipo 'click' que vai chamar a função 'activeAccordion'
		accordionList.forEach((item) => {
			item.addEventListener("click", activeAccordion);
		});
	}
}

console.log("teste1");


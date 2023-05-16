// A linha abaixo cria uma função que vai animar o scroll fazendo ele vir da esquerda para a direita
export default function initAnimacaoScroll() {
	// Quando a section estiver a 60% do topo da página, a animação vai começar

	const sections = document.querySelectorAll('[data-anime="scroll"]');
	const windowMetade = window.innerHeight * 0.6;

	function animaScroll() {
		sections.forEach((section) => {
			// const sectionTop = section.getBoundingClientRect().top - windowMetade;

			const sectionTop = section.getBoundingClientRect().top;
			const isSectionVisible = sectionTop - windowMetade < 0;
			// Quando a section estiver a 60% do topo da página, a animação vai começar

			if (isSectionVisible) section.classList.add("ativo");
			else if (section.classList.contains("ativo")) {
				section.classList.remove("ativo");
			}
		});
	}
	if (sections.length) {
		animaScroll();

		window.addEventListener("scroll", animaScroll);
	}
}

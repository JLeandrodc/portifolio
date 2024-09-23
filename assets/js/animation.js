let typedInstances = [];

// Função para destruir instâncias existentes
function destroyTypedInstances() {
  typedInstances.forEach(instance => instance.destroy());
  typedInstances = []; // Limpa o array
}

// Função para inicializar a animação de digitação
function initializeTyped() {
  destroyTypedInstances(); // Destrói instâncias anteriores

  // Seleciona apenas o texto visível
  document.querySelectorAll('.typed').forEach((typedElement) => {
    if (!typedElement.classList.contains('hidden')) {
      const items = typedElement.getAttribute('data-typed-items').split(', ');
      const typed = new Typed(typedElement, {
        strings: items,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      });
      typedInstances.push(typed);
    }
  });
}

// Inicializa a animação de digitação ao carregar a página
window.onload = initializeTyped;

// Inicializa novamente as animações de digitação após um pequeno atraso
setTimeout(() => {
  initializeTyped();
}, 500); // Atraso para garantir que a troca de idiomas funcione corretamente

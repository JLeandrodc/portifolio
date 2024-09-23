const toggleButton = document.getElementById('language-toggle');
const langElements = document.querySelectorAll('.lang');

// Inicializa a linguagem no localStorage se não existir
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'pt'); // Padrão: português
}

// Função para aplicar a linguagem com base no localStorage
function applyLanguage() {
  const savedLang = localStorage.getItem('language');
  langElements.forEach(element => {
    const isVisible = element.getAttribute('data-lang') === savedLang;
    element.classList.toggle('hidden', !isVisible);
  });
  toggleButton.textContent = savedLang === 'en' ? 'Português' : 'English';
}

// Evento de clique para alternar idiomas
toggleButton.addEventListener('click', () => {
  const currentLang = localStorage.getItem('language');
  const newLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('language', newLang);
  
  langElements.forEach(element => {
    element.classList.toggle('hidden');
  });
  
  toggleButton.textContent = newLang === 'en' ? 'Português' : 'English';
});

// Aplicar a linguagem ao carregar a página
applyLanguage();

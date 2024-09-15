// scripts.js

// Efeito de movimento do fundo
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const background = document.querySelector('.background');
    if (background) {
        background.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
    }
});

// Manipulação do formulário de pesquisa
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');

    if (form && input) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Previne o envio do formulário

            const query = input.value.toLowerCase();
            const contentSections = document.querySelectorAll('main section, main article'); // Selecione todas as seções relevantes

            let hasResults = false;

            contentSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(query)) {
                    section.style.display = 'block'; // Exibe a seção
                    hasResults = true;
                } else {
                    section.style.display = 'none'; // Oculta a seção
                }
            });

            if (!hasResults) {
                alert('Nenhum resultado encontrado.');
            }
        });
    }
});

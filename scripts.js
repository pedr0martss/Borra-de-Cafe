// Detecta o movimento do mouse
document.addEventListener('mousemove', (event) => {
    // Obtém as coordenadas do mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Obtém a largura e altura da janela
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calcula a porcentagem da posição do mouse
    const xPercent = (mouseX / width) * 100;
    const yPercent = (mouseY / height) * 100;

    // Aplica a distorção ao fundo do body
    document.body.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calcular valores de distorção com base na posição do mouse
    const xPercent = (mouseX / width) * 100;
    const yPercent = (mouseY / height) * 100;

    document.body.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

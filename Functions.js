// Seleciona todos os links da navbar
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        const targetClass = this.getAttribute('data-target'); // Obtém a classe da seção
        const targetElement = document.querySelector(targetClass); // Seleciona a seção correspondente

        if (targetElement) {
            // Rola suavemente para a seção
            targetElement.scrollIntoView({
                behavior: 'smooth', // Efeito suave
                block: 'start' // Alinha a seção no topo da página
            });
        }
    });
});

//======================================================================================================================
const dotsElement = document.getElementById('dots');
let dots = '';
let count = 0;

// Função para reescrever os pontos
function animateDots() {
    count = (count + 1) % 4; // Alterna entre 0, 1, 2, 3
    dots = '.'.repeat(count); // Adiciona de 0 a 3 pontos
    dotsElement.textContent = dots; // Atualiza o conteúdo do span
}

// Atualiza os pontos a cada 500ms
setInterval(animateDots, 500);

//======================================================================================================================

const fullText = "Bem-vindo à Barbearia nove, onde tradição e modernidade se encontram para transformar o seu visual. Nosso time de barbeiros especializados está pronto para oferecer um atendimento exclusivo, cortes impecáveis e aquele cuidado que você merece.";
const typingTextElement = document.getElementById('typing-text');
let currentIndex = 0;

// Função para escrever o texto
function typeText() {
    if (currentIndex < fullText.length) {
        typingTextElement.textContent += fullText.charAt(currentIndex); // Adiciona uma letra por vez
        currentIndex++; // Incrementa o índice
        setTimeout(typeText, 30); // Define o intervalo de tempo entre cada letra
    }
}

// Inicia a animação de escrita
typeText();

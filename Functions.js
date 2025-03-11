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
setInterval(animateDots, 1000);

//======================================================================================================================
/*
const fullText = "Sua melhor experiência em uma barbearia em Chapadinha agora por ASSINATURA.";
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
*/
//======================================================================================================================
/*
let textoOriginal = "Barbearia Nove - Sua melhor experiência em uma barbearia em Chapadinha agora por ASSINATURA. ";
let titulo = textoOriginal;
let indice = 0;

function animarTitle() {
    document.title = titulo.substring(indice, titulo.length) + titulo.substring(0, indice);
    indice++;
    if (indice > titulo.length) {
        indice = 0;
    }
    setTimeout(animarTitle, 500); // Ajuste o tempo em milissegundos (200ms para velocidade)
}
*/
//window.onload = animarTitle; // Chama a função ao carregar a página

//======================================================================================================================

const fullText = "Sua melhor experiência em uma barbearia em Chapadinha agora por ASSINATURA.";
const typingTextElement = document.getElementById('typing-text');

// Função para criar o efeito fade no texto
function fadeText() {
    typingTextElement.textContent = fullText; // Define o texto completo
    typingTextElement.style.opacity = 0; // Começa o texto com opacidade 0 (invisível)
    let opacity = 0;

    // Função para aumentar a opacidade até 1 (texto totalmente visível)
    function increaseOpacity() {
        if (opacity < 1) {
            opacity += 0.02; // Aumenta a opacidade de forma mais lenta
            typingTextElement.style.opacity = opacity; // Aplica a opacidade ao elemento
            setTimeout(increaseOpacity, 35); // Chama a função novamente após 35ms
        }
    }

    // Inicia o efeito fade
    increaseOpacity();
}

// Inicia o efeito fade
fadeText();


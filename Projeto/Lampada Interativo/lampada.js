// Referência à imagem da lâmpada no HTML.
const lamp = document.getElementById('lamp');

// Referência ao botão de alternância
const toggleButton = document.getElementById('toggle');
const titulo = document.getElementById('titulo');

// Referência ao botão "Reiniciar"
const resetButton = document.getElementById('reset');

// Variável para rastrear o número de cliques
let clickCount = 0;

// Limite de cliques para quebrar a lâmpada
const clickLimitToBreak = 7;

// Função para ligar/desligar a lâmpada
function toggleLamp() {
    if (isLampBroken()) {
        // Se a lâmpada estiver quebrada, não faz nada
     
        return;
    }

    if (clickCount >= clickLimitToBreak) {
        // Se o limite de cliques for atingido, quebra a lâmpada
        lamp.src = "./img/lampadaQuebrada.jpg";
        document.body.classList.add('dark-background');
        toggleButton.style.display = 'none';
        titulo.style.display = 'none';
        resetButton.style.display = 'block'; // Mostra o botão "Reiniciar"
        return;
    }

    if (lamp.src.indexOf('lampadaLigada.jpg') > -1) {
        // Se a lâmpada está ligada, desliga
        lamp.src = "./img/lampadaDesligada.jpg";
    } else {
        // Se a lâmpada está desligada, liga
        lamp.src = "./img/lampadaLigada.jpg";
    }

    clickCount++;
    document.getElementById('clickCount').textContent = `Cliques: ${clickCount}`;
}

// Event listener para o botão "Reiniciar"
resetButton.addEventListener('click', () => {
    lamp.src = "./img/lampadaDesligada.jpg";
    document.body.classList.remove('dark-background');
    toggleButton.style.display = 'block';
    titulo.style.display = 'block';
    clickCount = 0;
    document.getElementById('clickCount').textContent = `Cliques: ${clickCount}`;
    resetButton.style.display = 'none'; // Oculta o botão "Reiniciar" novamente após ser clicado
});

// Event listener para o botão de alternância
toggleButton.addEventListener('click', toggleLamp);

// Verifica se a lâmpada está quebrada verificando se o atributo src da imagem contém a string "lampadaQuebrada.jpg"
function isLampBroken() {
    return lamp.src.indexOf('lampadaQuebrada.jpg') > -1;
}

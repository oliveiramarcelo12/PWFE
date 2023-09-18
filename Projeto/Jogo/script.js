// Variáveis globais
const currentPlayer = document.querySelector(".currentPlayer");
const winsXElement = document.getElementById("winsX");
const winsOElement = document.getElementById("winsO");
let selected;
let player = "X"; // O jogador começa como "X"
let winsX = 0;
let winsO = 0;
const resultElement = document.getElementById("result");
const resultTextElement = document.getElementById("resultText");
let againstCPU = true; // Por padrão, jogar contra a CPU
let gameActive = true; // Variável para controlar se o jogo ainda está ativo
const cpuModeButton = document.getElementById("cpuModeButton");
const humanModeButton = document.getElementById("humanModeButton");
const restartButton = document.getElementById("restartButton");



// Combinações vencedoras
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

// Função para inicializar o jogo
function init() {
    selected = [];
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
    gameActive = true;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.classList.remove("button-x", "button-o");
        item.addEventListener("click", newMove);
    });

    if (againstCPU && currentPlayer.innerHTML === `JOGADOR DA VEZ: O`) {
        setTimeout(() => makeCPUMove(), 500); // Adiciona um atraso para a CPU jogar depois do jogador
    }
}

// Iniciar o jogo
init();

// Função para uma nova jogada
function newMove(e) {
    if (!gameActive) return; // Impede movimentos após o término do jogo

    const index = e.target.getAttribute("data-i");
    if (!selected[index]) {
        e.target.innerHTML = player;
        e.target.classList.add(`button-${player.toLowerCase()}`);
        e.target.removeEventListener("click", newMove);
        selected[index] = player;

        const isGameOver = checkWinner();
        togglePlayer();
        e.target.classList.add("fade-in");

        if (!isGameOver && againstCPU && currentPlayer.innerHTML === `JOGADOR DA VEZ: O`) {
            setTimeout(() => makeCPUMove(), 500); // Adiciona um atraso para a CPU jogar depois do jogador
        }
    }
}

function makeCPUMove() {
    if (!gameActive) return; // Impede que a CPU jogue após o término do jogo

    const emptyCells = Array.from(document.querySelectorAll(".game button")).filter(
        (cell) => !cell.textContent
    );

    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.innerHTML = "O"; // A CPU sempre joga como "O"
    randomCell.classList.add("button-o");
    randomCell.removeEventListener("click", newMove);

    selected[parseInt(randomCell.getAttribute("data-i"))] = "O"; // Registre a jogada da CPU

    const isGameOver = checkWinner();
    togglePlayer();

    if (!isGameOver && againstCPU && currentPlayer.innerHTML === `JOGADOR DA VEZ: O`) {
        setTimeout(() => makeCPUMove(), 500); // Adiciona um atraso para a CPU jogar depois do jogador
    }
}
function makeSmartCPUMove() {
    if (!gameActive) return; // Impede que a CPU jogue após o término do jogo

    // Verificar se a CPU pode ganhar na próxima jogada
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (selected[a] === "O" && selected[b] === "O" && !selected[c]) {
            makeMove(c);
            return;
        }
        if (selected[a] === "O" && selected[c] === "O" && !selected[b]) {
            makeMove(b);
            return;
        }
        if (selected[b] === "O" && selected[c] === "O" && !selected[a]) {
            makeMove(a);
            return;
        }
    }

    // Verificar se o jogador está prestes a ganhar e bloquear essa jogada
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (selected[a] === "X" && selected[b] === "X" && !selected[c]) {
            makeMove(c);
            return;
        }
        if (selected[a] === "X" && selected[c] === "X" && !selected[b]) {
            makeMove(b);
            return;
        }
        if (selected[b] === "X" && selected[c] === "X" && !selected[a]) {
            makeMove(a);
            return;
        }
    }

    // Priorizar centro e cantos
    const corners = [1, 3, 7, 9];
    const center = 5;

    if (!selected[center]) {
        makeMove(center);
        return;
    }

    for (const corner of corners) {
        if (!selected[corner]) {
            makeMove(corner);
            return;
        }
    }

    // Escolher aleatoriamente
    const emptyCells = Array.from(document.querySelectorAll(".game button")).filter(
        (cell) => !cell.textContent
    );

    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const index = randomCell.getAttribute("data-i");
        makeMove(index);
    }
}

function makeMove(index) {
    const cell = document.querySelector(`[data-i="${index}"]`);
    cell.innerHTML = "O"; // A CPU sempre joga como "O"
    cell.classList.add("button-o");
    cell.removeEventListener("click", newMove);
    selected[index] = "O"; // Registre a jogada da CPU
    const isGameOver = checkWinner();
    togglePlayer();
    if (!isGameOver && currentPlayer.innerHTML === "JOGADOR DA VEZ: O") {
        setTimeout(() => makeSmartCPUMove(), 500);
    }
}


// Verificar se há um vencedor ou empate
function checkWinner() {
  for (const combination of winningCombinations) {
      if (
          selected[combination[0]] === player &&
          selected[combination[1]] === player &&
          selected[combination[2]] === player
      ) {
          const message = `O JOGADOR ${player} GANHOU!`;
          showResult(message, true);
          updateScore(player);
          gameActive = false; // O jogo terminou
          setTimeout(init, 2000); // Reinicia o jogo após 2 segundos
          return true;
      }
  }

  if (selected.filter((item) => item).length === 9) {
      const message = "DEU EMPATE!";
      showResult(message, true);
      gameActive = false; // O jogo terminou
      setTimeout(init, 2000); // Reinicia o jogo após 2 segundos
      return true;
  }

  return false;
}

function showResult(message, isWin) {
  resultTextElement.textContent = message;

  if (isWin) {
    resultElement.classList.add("win-message");
  } else {
    resultElement.classList.add("tie-message");
  }

  resultElement.classList.add("fade-in"); // Adiciona a animação de entrada
  resultElement.style.display = "block";

  setTimeout(() => {
    resultElement.classList.add("fade-out"); // Adiciona a animação de saída
    resultTextElement.textContent = "";
    setTimeout(() => {
      resultElement.style.display = "none";
      resultElement.classList.remove("fade-in", "fade-out", "win-message", "tie-message"); // Remove as classes de animação e estilo
    }, 500); // Tempo de espera após a animação de saída
  }, 3000); // Tempo de exibição da mensagem de resultado
}

// Alternar entre os jogadores
function togglePlayer() {
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

// Atualizar a contagem de vitórias
function updateScore(playerLastMove) {
    if (playerLastMove === "X") {
        winsX++;
        winsXElement.textContent = winsX;
    } else {
        winsO++;
        winsOElement.textContent = winsO;
    }
}

cpuModeButton.addEventListener("click", () => setGameMode(true));
humanModeButton.addEventListener("click", () => setGameMode(false));
restartButton.addEventListener("click", restartGame);

// Função para definir o modo de jogo
function setGameMode(isAgainstCPU) {
    againstCPU = isAgainstCPU;
    restartGame();
}

// Função para reiniciar o jogo
function restartGame() {
    selected = [];
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.classList.remove("button-x", "button-o");
        item.addEventListener("click", newMove);
    });
    resultElement.style.display = "none";
    gameActive = true; // Restaure o estado do jogo para ativo

    // Se o modo de jogo for contra a CPU e a CPU começar, faça a primeira jogada da CPU
    if (againstCPU && currentPlayer.innerHTML === `JOGADOR DA VEZ: O`) {
        setTimeout(() => makeCPUMove(), 500); // Adiciona um atraso para a CPU jogar depois do jogador
    }
}
function resetResult() {
    resultTextElement.textContent = "";
    resultElement.style.display = "none";
    resultElement.classList.remove("win-message", "tie-message");
}

// Adicione manipuladores de eventos aos botões de modo
cpuModeButton.addEventListener("click", () => {
    cpuModeButton.classList.add("selected");
    humanModeButton.classList.remove("selected");
    // Adicione aqui qualquer lógica adicional que você precise para alternar para o modo de CPU
});

humanModeButton.addEventListener("click", () => {
    humanModeButton.classList.add("selected");
    cpuModeButton.classList.remove("selected");
    // Adicione aqui qualquer lógica adicional que você precise para alternar para o modo de jogador humano
});
// O código para alternar entre jogar contra a CPU ou outro jogador pode ser adicionado, mas requer algumas modificações na função init() e na interface do usuário.

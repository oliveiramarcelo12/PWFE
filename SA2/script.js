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

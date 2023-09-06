  // Variáveis globais
  const currentPlayer = document.querySelector(".currentPlayer");
  const winsXElement = document.getElementById("winsX");
  const winsOElement = document.getElementById("winsO");
  let selected;
  let player = "X";
  let winsX = 0;
  let winsO = 0;
  const resultElement = document.getElementById("result");
const resultTextElement = document.getElementById("resultText");

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

      document.querySelectorAll(".game button").forEach((item) => {
          item.innerHTML = "";
          item.classList.remove("button-x", "button-o");
          item.addEventListener("click", newMove);
      });
  }

  // Iniciar o jogo
  init();

  // Função para uma nova jogada
  function newMove(e) {
      const index = e.target.getAttribute("data-i");
      e.target.innerHTML = player;
      e.target.classList.add(player === "X" ? "button-x" : "button-o"); // Adicionar classe de cor ao botão
      e.target.removeEventListener("click", newMove);
      selected[index] = player;

      checkWinner();
      togglePlayer();
      e.target.classList.add("fade-in"); //animação
  }
  

  // Verificar se há um vencedor ou empate
  function checkWinner() {
    const playerLastMove = player === "X" ? "O" : "X";
  
    for (const combination of winningCombinations) {
      if (
        selected[combination[0]] === playerLastMove &&
        selected[combination[1]] === playerLastMove &&
        selected[combination[2]] === playerLastMove
      ) {
        const message = `O JOGADOR ${playerLastMove} GANHOU!`;
        showResult(message, true); // Indicador de vitória
        updateScore(playerLastMove);
        init();
        return;
      }
    }
  
    if (selected.filter((item) => item).length === 9) {
      const message = "DEU EMPATE!";
      showResult(message, false); // Indicador de empate
      init();
      return;
    }
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
  
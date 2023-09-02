const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";
let winsX = 0;
let winsO = 0;

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
//jogador que vai jogar

function init() {
  selected = [];

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();//inicia o jogo

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}
//verificar se houve um vencedor ou empate
function check() {
    let playerLastMove = player === "X" ? "O" : "X";
  
    const items = selected
      .map((item, i) => [item, i])
      .filter((item) => item[0] === playerLastMove)
      .map((item) => item[1]);
  
    for (pos of positions) {
      if (pos.every((item) => items.includes(item))) {
        alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
        
        // Atualize a contagem de vitórias do jogador vencedor
        if (playerLastMove === "X") {
          winsX++;
        } else {
          winsO++;
        }
  
        // Atualize a exibição das vitórias na página
        document.getElementById("winsX").textContent = winsX;
        document.getElementById("winsO").textContent = winsO;
  
        init();
        return;
      }
    }
  
    if (selected.filter((item) => item).length === 9) {
      alert("DEU EMPATE!");
      init();
      return;
    }
  }
  // Inicialização de variáveis




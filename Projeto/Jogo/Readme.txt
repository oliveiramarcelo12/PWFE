Relatório do Jogo da Velha
Introdução
Este relatório descreve os principais aspectos dos códigos HTML, CSS e JavaScript usados para criar um jogo da velha simples. O jogo da velha é um jogo de dois jogadores em que eles alternam para marcar células em uma grade 3x3. O objetivo é formar uma linha horizontal, vertical ou diagonal com suas respectivas marcas (X ou O) para vencer o jogo.
Código HTML
O código HTML é responsável pela estrutura da página web. Ele inclui os elementos necessários para renderizar o jogo e exibir informações como o jogador atual e a contagem de vitórias. Aqui estão os principais elementos HTML utilizados:
1.	<button> Elements: Nove botões são usados para representar as células do tabuleiro. Cada botão tem um atributo data-i que é usado para identificar a posição da célula no tabuleiro.
2.	<h1> Element: Um cabeçalho <h1> é usado para exibir o título "JOGO DA VELHA".
3.	<hr> Element: Uma linha horizontal <hr> é usada como uma divisão visual após o título.
4.	<h2> Element: Um cabeçalho <h2> é usado para exibir o jogador atual.
5.	<div> Elements: Várias <div> são usadas para agrupar elementos e aplicar estilos CSS.
6.	<p> Elements: Parágrafos <p> são usados para exibir a contagem de vitórias para os jogadores X e O.
Código CSS
O código CSS é responsável por estilizar a aparência do jogo. Ele define as cores, tamanhos e animações usados no jogo. Aqui estão os principais aspectos do código CSS:
1.	Reset de Estilos (* {}): O código inclui um reset de estilos para remover margens e preenchimentos padrão e definir uma fonte genérica.
2.	Estilos Globais: Define estilos globais para o body e main para centralizar o conteúdo e definir um fundo de tela.
3.	Estilos para o Tabuleiro de Jogo: Define estilos para o tabuleiro de jogo usando grid para criar uma grade 3x3 de células de botão. Também estiliza os botões para definir seu tamanho, fonte e cores padrão.
4.	Estilos para Botões X e O: Define estilos para os botões X e O, incluindo cores diferentes para X e O.
5.	Animações: Define animações para a entrada suave de elementos usando @keyframes e a classe fade-in.
Código JavaScript
O código JavaScript é responsável pela lógica do jogo. Ele controla as interações do jogador, verifica vitórias e empates e atualiza a interface do usuário. Aqui estão os principais aspectos do código JavaScript:
1.	Inicialização: O jogo é inicializado usando a função init(). Isso define o jogador atual, adiciona ouvintes de clique aos botões do jogo e inicia o tabuleiro.
2.	Nova Jogada: Quando um botão é clicado, a função newMove() é chamada. Ela marca a célula com a marca do jogador, verifica a vitória ou empate e alterna para o próximo jogador.
3.	Verificação de Vitória: A função checkWinner() verifica se houve uma vitória ou empate. Ela percorre as combinações vencedoras e compara as marcações do jogador.
4.	Alternância de Jogadores: A função togglePlayer() alterna entre os jogadores X e O após cada jogada.
5.	Atualização da Contagem de Vitórias: A função updateScore() atualiza a contagem de vitórias para os jogadores X e O na interface do usuário.
6.	Animações: O código inclui animações para a entrada suave de elementos e uma animação de vitória que destaca as células vencedoras.
Conclusão
Os códigos HTML, CSS e JavaScript fornecem uma base sólida para criar um jogo da velha funcional e estilizado. Eles são responsáveis por estruturar a página, estilizar elementos e implementar a lógica do jogo. Com esses códigos como ponto de partida, é possível expandir e aprimorar ainda mais o jogo da velha, adicionando recursos adicionais, como multiplayer online ou dificuldade ajustável.


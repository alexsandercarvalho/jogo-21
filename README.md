Você foi contratado pela Ubsoft, uma das maiores empresas de desenvolvimento de jogos eletrônicos do mundo, para desenvolver o novo jogo da empresa.

Nesse jogo online e de azar, baseado no famoso jogo de cartas 21, dois participantes competem entre si. O jogo funciona da seguinte forma:

O jogo é jogador por dois jogadores;

Uma sequência de números inteiros no intervalo de 1 a 10 é gerada de forma aleatória pelo computador;

Cada jogador, sem conhecer a sequência, escolhe a quantidade de números desta sequência, começando do primeiro, que ele deseja adicionar nas mãos;

Exemplo: Se a sequência for [1,4,2,5,7,10,3,2,2,1] e um jogador escolher 5 números, ele terá nas mãos os números [1,4,2,5,7]; se o outro jogador escolher 3, ele terá nas mãos os números [1,4,2];

Após isso, cada jogador soma os números que estão em suas mãos. No exemplo acima, o jogador 1 teria uma soma de 1 + 4 + 2 + 5 + 7 = 19; e o jogador 2, 1 + 4 + 2 = 7;

Ganha o jogador que tiver se aproximado, mas sem ultrapassar, 21. Então, quatro resultados são possíveis:

Vitória do jogador 1: caso a soma do jogador 1 seja mais próxima, mas sem ultrapassar, de 21. Ou caso a soma do jogador 2 tenha ultrapassado 21 e a do jogador 1 não;

Vitória do jogador 2: caso a soma do jogador 2 seja mais próxima, mas sem ultrapassar, de 21. Ou caso a soma do jogador 1 tenha ultrapassado 21 e a do jogador 2 não;

Empate: caso a soma de ambos tenha se aproximado igualmente de 21;

Ambos perderam: caso a soma de ambos tenha dado maior que 21.

Entrada
A entrada do seu programa será composta por três variáveis:

baralho: variável do tipo array de números;

pedido1: variável  do tipo number que armazena a quantidade de números pedidos pelo Jogador 1;

pedido2: variável  do tipo number que armazena a quantidade de números pedidos pelo Jogador 2;

Saída
Você deve imprimir na tela:

JOGADOR 1: caso a soma do jogador 1 seja mais próxima, mas sem ultrapassar, de 21. Ou caso a soma do jogador 2 tenha ultrapassado 21 e a do jogador 1 não;

JOGADOR 2: caso a soma do jogador 2 seja mais próxima, mas sem ultrapassar, de 21. Ou caso a soma do jogador 1 tenha ultrapassado 21 e a do jogador 2 não;

EMPATE: caso a soma de ambos tenha se aproximado igualmente de 21;

SEM VENCEDORES: caso a soma de ambos tenha dado maior que 21.

Exemplos
Entrada 1
baralho = [1, 2, 1, 4, 6, 3, 8, 7, 6]

pedido1 = 3

pedido2 = 4

Saída 1
JOGADOR 2

Explicação 1
A soma dos números do Jogador 1, composta pelos 3 primeiros números do baralho, é 1 + 2 + 1 = 4; a soma do 2, composta pelos 4 primeiros números do baralho, é 1 + 2 + 1 + 4 = 8. A soma do jogador 2 está mais perto de 21.

Entrada 2
baralho = [10, 2, 10, 4, 6, 3, 8, 7, 6]

pedido1 = 2

pedido2 = 3

Saída 2
JOGADOR 1

Explicação 2
A soma do Jogador 1, composta pelos 2 primeiros números do baralho, foi igual a 10 + 2 = 12; a do Jogador 2, composta pelos 3 primeiros números do baralho, foi de 10 + 2 + 10 = 22. Apesar da soma do Jogador 2 ter sido mais próxima de 21, ela ultrapassou, enquanto a soma do Jogador 1 não.



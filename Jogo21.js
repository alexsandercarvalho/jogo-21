// jogo de cartas

const baralho = [ ];
var pedido1 = 4; /// ENTRADA DE DADOS 1o GAMER 
var pedido2 = 4; /// ENTRADA DE DADOS 2o GAMER
var separar1, separar2;
let contador = 0;

/// retorna um inteiro aleatório entre os valores especificados, sem zeros
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(11);
  return Math.floor(Math.random() * (max - min) + min);
  }
  while(contador < 10) {
  contador = contador + 1; // incrementa o contador
  const event = getRandomInt();  // executa a função
  baralho.push(event); // preenche o array com os valores aleatórios
  }

separar1 = baralho.slice(0, pedido1); 
separar2 = baralho.slice(0, pedido2); 
 
// faz as comparações 

    let sumA = separar1.reduce((accumulator, number) => {
    return accumulator + number
    }, 0);
    if (sumA === 21) {console.log('JOGADOR 1 '+"["+sumA+"]");} 
    else {console.log('não foi dessa vez jogador 1 '+"["+sumA+"]");}

    let sumB = separar2.reduce((accumulator, number) => {
    return accumulator + number
    }, 0);
    if (sumB === 21) {console.log('JOGADOR 2 '+"["+sumB+"]");} 
    else {console.log('não foi dessa vez jogador 2 '+"["+sumB+"]");}
    
    if (sumA === sumB && sumA === 21 && sumB === 21 ) {console.log("EMPATE");};

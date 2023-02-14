// jogo de cartas

const baralho = [ ];
var pedido1 = 4; /// ENTRADA DE DADOS 1o GAMER (problema é quem ditar 10 pq limpa o array)
var pedido2 = 4; /// ENTRADA DE DADOS 2 GAMER
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
  baralho.push(event); // preenchi o array com os valores 
  }
//const pega1 = baralho;
//const pega2 = baralho;

//console.log("da máquina "+baralho);
//console.log('pegou 1: '+pega1);
//console.log('pegou 2: '+pega2);

separar1 = baralho.slice(0, pedido1); 
separar2 = baralho.slice(0, pedido2); 
// o problema resolvido, slice e não splice
// quando se usa splice ele remove os indices do array
// quando se usa slice ele não remove os itens do array, 
// então tenho o resultado esperado de se ler o array novamente deste o primeiro indice 
 
//console.log(separar1);
//console.log(separar2);

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

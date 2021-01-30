// let name = prompt('Digite seu nome!');

// alert('Seja Bem-Vindo '+name);

// let numeros = prompt('Digite um número qualquer entre 0 e 100');

//  if((numeros >= 0) && (numeros <= 100)){
//      for(let i = 0; i <= numeros; i++){
//         document.write('número: '+ i + '<br>');
//      }
    
//  }
//  else{
//      alert('O valor inserido não pertence ao intervalo de números');
//  }

// alert('Seja Bem-Vindo '+ name +'!');

/***Arrays Aninhados***/

// const menu = [
//     {
//     title: 'Aperitivos',
//     items: ['soup', 'salad'],
//     },
//     {
//     title: 'Entradas',
//     items: ['burger', 'pizza', 'sandwich'],
//     },
//     {
//     title: 'Bebidas',
//     items: ['soda', 'water', 'beer']
//     }
// ];

// for(let i = 0; i < menu.length; i++){
//     let section = menu[i];
//     let items = section.items;
    
//     document.write(section.title+'<br>');

//     for(let j = 0; j < items.length; j++){
//         // item = items[j];
//         document.write(j + ': '+items[j]+'<br>');
//     }
    
// }

/**JOGO DA VELHA**/

let board = [
    [0, 0, 4, 0, 0, 0, 0],
    [0, 4, 3, 0, 0, 2, 0],
    [4, 0, 0, 3, 1, 1, 1],
    [0, 0, 2, 0, 3, 0, 2],
    [0, 0, 2, 0, 0, 0, 2],
    [0, 0, 2, 0, 2, 2, 2]
];

//Se pesquisarmos além da borda, obteremos um erro de ponteiro nulo
const edgeX = board[0].length - 2;
const edgeY = board.length - 2;

// HORIZONTAL
//itera/repete cada linha
for (let y = 0; y < board.length; y++){

    //itera/repete cada célula na linha
    for(let x = 0; x < edgeX; x++){
        let cell = board[y][x];

        // Checa somente se a célula está preenchida
        if(cell !== 0){

            //Verificando as proximas duas celulas(na horizontal) com o mesmo valor
            if(cell === board[y][x+1] && cell === board[y][x+2]){
                console.log('3 em sequência em uma linha horizontal encontrada em '+ (x+1) + ':' + (y+1));
            }
        }
    }
}


// VERTICAL
//itera/repete cada linha
for(let y = 0; y < edgeY; y++){

    //itera/repete cada célula na linha
    for(let x = 0; x < board[y].length; x++){
        let cell = board[y][x];

        // Checa somente se a célula está preenchida
        if(cell !== 0){

            //Verificando as proximas duas células(na vertical) com o mesmo valor 
            if(cell === board[y+1][x] && cell === board[y+2][x]){
                console.log('3 em sequência em uma linha vertical encontrada em '+ (x+1) + ':' + (y+1));
            }

        }
    }
}

//DIAGONAL (PARA BAIXO À DIREITA)
//itera/repete cada linha
for(let y = 0; y < edgeY; y++){

    //itera/repete a cada celular na linha
    for(let x = 0; x < edgeX; x++){

        let cell = board[y][x];

        // Checa somente se a célula está preenchida
        if(cell !== 0){

            //Verificando as proximas duas células(na diagonal rigth) com o mesmo valor
            if(cell === board[y+1][x+1] && cell === board[y+2][x+2]){
                console.log('3 em sequência em uma linha para baixo à direita encontrada em '+ (x+1) + ':' + (y+1));
            }
        }
    }
}



//DIAGONAL (PARA BAIXO À ESQUERDA)
//itera/repete a cada linha
for(let y = 2; y < board.length; y++){

    //itera/repeta cada celular da linha
    for(let x = 0; x < edgeX; x++){

        let cell = board[y][x];

        //Checa se a célula não esta vazia 
        if(cell !== 0){

            //Verificando as proximas duas células(na diagonal left) com o mesmo valor
            if(cell === board[y-1][x+1] && cell === board[y-2][x+2]){
                console.log('3 em sequência em uma linha para baixo à esquerda encontrada em '+ (x+1) + ':' + (y+1));
            }
        }
    }
}

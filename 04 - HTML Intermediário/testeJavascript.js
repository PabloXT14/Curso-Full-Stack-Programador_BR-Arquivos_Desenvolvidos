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



/***FUNÇÕES***/

/*Função com parâmetro*/
//mensagem = parâmetro da função
function alerta(mensagem){
    alert(mensagem);
}
//Chamando ou Invocando a função
//alerta('Fala galerinha do YouTube');


/*Função com return*/
function metade(num){
    return num / 2;
}
//alerta('A metade de 15 é: '+metade(15));


/*Função com mais um parâmetro*/
//por = 2 -> quando não definirmos nenhum valor
function dividir(num, por = 2){
    return num / por;
}
//alerta('O resultado da divisão é: '+ dividir(15, 3));

/*Escopo de Variáveis*/
//Variável local = Variáveis ​​declaradas em uma função JavaScript tornam-se LOCAL para a função. Variáveis ​​locais só podem ser acessadas de dentro da função
//Variável global = pode ser utilizada em qualquer parte do script

/*+ Demonstração função com parâmetros*/

//Área Retângulo
// let altura = prompt('Digite a altura');
// altura = parseFloat(altura);

// let largura = prompt('Digite a largura');
// largura = parseFloat(largura);

// function calcularArea(a,l){

//   return alert('Área do retângulo = '+l*a); 

// }

// calcularArea(altura, largura);


//Cálculo Tabuada
// let number = prompt('Digite um número para saber a sua tabuada');
// let limit  = prompt('Digite até que multiplo deseja saber a tabuada do '+number);

// function tabuada(num = 0){
//     console.log('Tabuada do '+num);

//        for(let i = 0; i <= limit;i++){
//             console.log(num+' X '+i+' = '+num*i+);
//         }
    
// }

// tabuada(number);



/******MÉTODOS DE ARRAYS******/

// let arr1 = [1, 2, 3, 4];
// let arr2 = ['a', 'b', 'c', 'a'];

// /*Concat (Concatenação)*/
// let arrFinal = arr1.concat(arr2);
// console.log(arrFinal);

// /* Every (verifica todos os elementos de uma array)*/
// let everyX = arrFinal.every(
//     function verifyElements(elem, ind, obj){
//         //verifica se todos os elemento do array são números, se sim retorna true, se não retorna false..
//         return (typeof elem == 'number');
//     }
// );
// console.log(everyX);

// /*Filter (filtra os elementos da forma que vc quiser)*/
// let filterX = arrFinal.filter(
//     function verifyElements(elem, ind, obj){
//         //filtra os elementos, retornando apenas aqueles do tipo string, mas vc pode fazer outras comparações com elem > 2
//         return (typeof elem == 'string');
//         //return (elem > 2);
//     }
// );
// console.log(filterX);


// /*forEach (percorre todos os indices do seu array, semelhante a um loop)*/
// let data = "";
// let forEachX = arrFinal.forEach(
//     function verifyElements(elem, ind, obj){
//         // if(typeof elem === "string"){
//         //     data +="Índice "+ind+" : "+elem+"\n";
//         // }
//         data +="Índice "+ind+" : "+elem+"\n";
//     }
// );
// // console.log(arrFinal);
// console.log(data);


// /*IndexOf (mostra a posição/índice de um elemento específico do array)*/
// let indexOfX = arrFinal.indexOf('c');
// //quando um elemento não pertence ao array, o indexOf retorna -1
// if(indexOfX === -1){
//     alert('Esse elemento não existe no array');
// }
// console.log(indexOfX);

// /*LastIndexOf (mostra a posição/índice de um elemento específico do array até sua ultima aparição no array)*/
// let lastIndexOfX = arrFinal.lastIndexOf('a');
// console.log(lastIndexOfX);

// /*Join (transforma uma array em uma string)*/
// //dentro do join vc escolhe pelo que os elem vão ser separados
// let joinX = arrFinal.join('-');
// console.log(joinX);

// /*Map (percorre todo o array, modificando ele da forma que vc preferir)*/
// /*Push (adiciona um elemento no final do array)*/
// /*Pop (remove um elemento do final do array)*/
// let mapFinal = [];
// let mapX = arrFinal.map(
//     function verifyElements(elem, ind, obj){
        
//         if(typeof elem === 'number'){
//             // return elem * 2;
//             mapFinal.push(elem * 2);
//         }
//         else{
//             mapFinal.push(elem);
//         }
//     }
// );
// mapFinal.pop();
// console.log(mapFinal);


// /*Some (percorre todo o array verificando se tem um determinado elemento, se sim retorna 'true', se não 'false')*/
// let someX = arrFinal.some(
//     function verifyElements(elem, ind, obj){
//         return (elem === 3);
//         // return (typeof elem === 'number');
//     }
// );
// console.log(someX);

// /*Reverse (inverte a ordem dos elementos do array. Obs: altera a ordem do array original)*/
// let copyArrFinal = arr1.concat(arr2);
// let reverseX = copyArrFinal.reverse();
// console.log('Array original '+arrFinal);
// console.log(reverseX);

// /*Reduce (percorre todo os elementos do array, e faz cálculos desse elemento em relação ao elemento anterior ou próximo ao elemento analisado )*/
// //reduceRight (única diferença é que inicia os cálculos do último elemento até o primeiro, ou seja, inverte a ordem)
// let reduceX = arrFinal.reduceRight(
//     function verfifyElements(v1, v2, ind, arr){
//         return v1+v2;
//     }
// );
// console.log(reduceX);
    
// /*Shift (remove o 1º elemento de um array e exibe) Obs: altera a ordem do array original)*/
// let copy2ArrFinal = arr1.concat(arr2);
// let shiftX = copy2ArrFinal.shift();
// console.log('Array original '+arrFinal);
// console.log(shiftX);

// /*Slice (serve para pegar os valores em um intervá-lo de índices do array)*/
// let sliceX = arrFinal.slice(3, 6);//seleciona do indice 3 ao 5, não vai ate o 6 sempre um indice antes 
// console.log(sliceX);

// /*Sort (coloca os elementos do array em ordem alfabética e/ou numérica) Obs: altera a ordem do array original*/
// let copy3ArrFinal = arr1.concat(arr2);
// let sortX = copy3ArrFinal.sort();
// console.log('Array original: '+arrFinal);
// console.log(sortX);

// /*Splice (serve para remover um valor no array a partir de um determinado indice) Obs: altera a ordem do array original*/
// let copy4ArrFinal = arr1.concat(arr2);
// let spliceX = copy4ArrFinal.splice(3, 2);//-> indice de onde será removidos os elementos + quantos elementos serão removidos a partir do indice dito.
// console.log('Array original: '+arrFinal);
// console.log(spliceX);

// /*Unshift (insere valores no começo do array e retornao nº de itens que o array tem)*/
// let copy5ArrFinal = arr1.concat(arr2);
// let unshiftX = copy5ArrFinal.unshift(-1, -2, -3);

// console.log(copy5ArrFinal);
// console.log(unshiftX);

// /*toString (converte todos os valores do array para string)*/
// let toStringX = arrFinal.toString();
// console.log(arrFinal);
// console.log(toStringX);

/************MÉTODOS DE STRINGS**************/


/*length (mostra o nº de caracteres da string)*/
let nome = 'Pabla';
console.log(nome.length);

/*IndexOf (mostra o índice de um caracter da string, se não tiver o caracter aparce -1) */
let frase = 'O rato roeu a roupa do rei de Roma';
console.log(frase.indexOf('roeu'));

/*Slice (remove um certo caracter da string)*/
let roeu = frase.slice(7, 11);//(indice de início da palavra + indice de término da palavra)
console.log(roeu);

/*Replace (troca um determinado caracter da string por outro caracter)*/
//pode usar replaceAll para mudar todos os caracteres repetidos de uma string
let novaFrase = frase.replace('roeu', 'testou');
console.log(novaFrase);

/*toLowerCase e toUpperCase (deixa a string em caixa baixa ou alta respectivamente)*/
console.log('Caixa baixa: '+frase.toLowerCase());
console.log('Caixa alta: '+frase.toUpperCase());


/*Trim (retira espaços em branco do início e fim de uma string)*/
let espaços = '       Batata         ';
let newEspaços = espaços.trim();
console.log(espaços);
console.log(newEspaços);

/*Split (transforma uma string em array e identifica através de um parâmetro onde vai seperar os elementos para o array)*/
let tags = 'PHP, Javascript, HTML, CSS';
console.log(tags.split(', '));

/*LastIndexOf (encontra o índice da última letra de uma palavra de uma string)*/
let fraseDois = 'Eu quero a última palavra teste desta frase de teste';
console.log(fraseDois.lastIndexOf('teste'));




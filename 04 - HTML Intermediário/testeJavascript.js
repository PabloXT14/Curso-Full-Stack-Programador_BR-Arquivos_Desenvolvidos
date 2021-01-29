let name = prompt('Digite seu nome!');

let numeros = prompt('Digite um número qualquer entre 0 e 100');

 if((numeros >= 0) && (numeros <= 100)){
     for(let i = 0; i <= numeros; i++){
        document.write('número: '+ i + '<br>');
     }
    
 }
 else{
     alert('O valor inserido não pertence ao intervalo de números');
 }

// alert('Seja Bem-Vindo '+ name +'!');
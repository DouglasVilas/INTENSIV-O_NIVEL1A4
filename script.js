//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

    alert("Hello World!")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

    let number1 = 2, number2 = 3
    console.log(number1 + number2)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

    let number = 3;

    if (typeof number === 'number' && !isNaN(number)) {
        console.log("É um número");
    } else {
        console.log("Não é um número");
    }
    
 // 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
    let string = 'Douglas';

    if (typeof string === 'string') {
        console.log("É uma string");
    } else {
        console.log("Não é uma string");
    }


//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
    let booleano = false;

    if (booleano == true || booleano == false) {
        console.log("É um boleano");
    } else {
        console.log("Não é boleano");
    }


//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
    let number3 = 2 , number4 = 1
    console.log(number3 - number4)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
    let number5 = 10 , number6 = 5
    console.log(number5 * number6)


//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
    let number7 = 8 , number8 = 2
    console.log(number7 / number8)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
    let escolhaImparPar = 3
    if (escolhaImparPar % 2 === 0 ){

        console.log('É um numero par')
    }   
    else{
        
        console.log('É um numero ímpar')

    }


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".


let escolhaParImpar = 3
if (escolhaParImpar % 2 !== 0 ){

    console.log('É um numero impar')
}   
else{
    
    console.log('É um numero par')

}
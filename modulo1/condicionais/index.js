/*
Exercícios de interpretação de código
1
a: O código atesta se o número escolhido pelo usuário é divisivel por 2.
Se sim, imprime passou no teste, se não, imprime não passou no teste.
b: Números em que a divisão por 2 tem resto igual a 0
c: Números em que a divisão por 2 tem resto diferente de 0

2
a: O códifo serve para mostrar o preço da fruta escolhida pelo usuário
b: Se a fruta for maçã, o console irá imprimir: O preço da fruta ", maçã, " é ", "R$ 2.25.
c: O preço da fruta Pêra é R$ 5.5

3
a: Está pedindo o usuário para digitar um número

b: Se o usuario digitar 10, a mensagem será "Esse número passou no teste"
E se digitar -10 não aparecerá nada pois não foi criada essa hipótese.

c: Haverá erro com relação ao console.log(mensagem, pois mensagem não foi invocado 
    e está fora do escopo onde está a variável.

    Exercícios de escrita de código */

//1

const idadeUsuario = (prompt("qual a sua idade?"))

if (idadeUsuario >= 18){
    console.log ("você pode dirigir")
}
else {
    console.log ("você não pode dirigir")
}

//2

let turnoEstudante = prompt("Qual o seu turno de estudo: M, V ou N? ")

if (turnoEstudante = M) {
    console.log ("Bom dia")
}
else if (turnoEstudante = V){
    console.log ("Boa tarde")
}
else 
console.log("Boa noite!")

//3

let turnoEstudante = prompt("Qual o seu turno de estudo: M, V ou N? ")
switch(turnoEstudante) {
   case: "M"
    console.log ("Bom dia")
    break
   case: V
    console.log ("Boa tarde")
    break
   case: N
    console.log("Boa noite!")
    break
}

//4


 let generoFilme = prompt("qual o genero do filme")
 let precoIngresso = prompt ("qual o preço do ingresso")

 if (generoFilme = fantasia){
 if (precoIngresso <= 15)
 console.log("Bom filme")
}
 else 
 console.log("Escolha outro filme :(")
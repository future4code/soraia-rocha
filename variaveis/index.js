/* Exercícios de interpretação de código:

Enunciado 1:

10
10 5

Enunciado 2:

10 10 10

Enunciado 3:

O programa calcula quanto o usuário ganha por hora baseado na quantidade
de horas trabalhadas no dia e o valor recebido por um dia.

Para melhorar o programa eu renomearia as variáveis para nomes mais significativos, como:

horasTrabahadas e salarioDia

*/

// Exercícios de escrita de código: //

// 1: //

// a: //

let nome

// b: //

let idade

// c: //

// console.log(typeof nome)
// console.log(typeof idade)

// d: //

/* O tipo "undefined" foi impresso porque as variáveis foram declaradas,
mas não foi atribuído nenhum valor a elas */

// e: //

nome = prompt("Qual é o seu nome?")

idade = prompt("Qual é a sua idade?")

// f: //

console.log(typeof nome)
console.log(typeof idade)

/* Ambas as variáveis são strings. Isso acontece porque toda entrada
através de prompt é uma string. */

// g: //

console.log("Olá ", nome, "você tem ", idade, "anos.")

// 2 //

// a //

let perguntaClima = prompt("Responda com SIM ou NÃO. Está chovendo hoje?")

let blusaVermelha = prompt("Responda com SIM ou NÃO. Sua blusa é vermelha?")

let temCachorro = prompt("Responda com SIM ou NÃO. Você tem cachorro?")

// b: //

console.log("Está chovendo hoje? ", perguntaClima)
console.log("Sua blusa é vermelha? ", blusaVermelha)
console.log("Você tem cachorro? ", temCachorro)

// 3 //

let a = 10
let b = 25

console.log(a)
console.log (b)

let c = a

a = b
b = c 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 
  const alturaRetangulo = prompt("Informe a altura do retângulo:");
  const larguraRetangulo = prompt("Informe a largura do retângulo:");
  const areaRetangulo = alturaRetangulo * larguraRetangulo;

console.log(areaRetangulo);
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
const anoAtual = prompt("Informe em que ano estamos:");
const anoNascimento = prompt("Informe em que ano você nasceu:");
const idade = anoAtual - anoNascimento;

console.log(idade);
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const peso = prompt("Informe seu peso em kg:");
  const altura = prompt("Informe sua altura em metros:");
  const imc = peso / (altura * altura);

  console.log(imc);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  const nome = prompt("Informe seu nome:");
  const idade = prompt("Informe sua idade:");
  const email = prompt("Informe seu email:");
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`;

  console.log(frase);
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  const cor1 = prompt("Qual sua cor favorita?");
  const cor2 = prompt("Qual sua segunda cor favorita?");
  const cor3 = prompt("Qual sua terceira cor favorita?");
  const coresFavoritas = [cor1, cor2, cor3];

  console.log(coresFavoritas);

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const frase = prompt("Digite sua frase favorita:");

  console.log(frase.toUpperCase());
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoEspetaculo = prompt("Informe o custo do espetáculo de teatro:");
  const valorIngresso = prompt("Informe o valor de cada ingresso do espetáculo:");
  const numeroIngressos = custoEspetaculo / valorIngresso;

  console.log(numeroIngressos);
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

const string1 = prompt (escreva uma lista)
const string2 = prompt(escreva outra lista)
const checkTamanho = string1.lenght === string2.lenght
return checkTamanho
console.log checkTamanho


}



// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const exemplo1 = prompt(digite uma lista com 3 numeros)
  const exemplo2 = prompt(digite uma lista com 3 frutas)
  const primeiroElemento = [0]
  return primeiroElemento
console.log primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
const exemplo1 = prompt(digite uma lista com 5 numeros)
const exemplo2 = prompt(digite uma lista com 3 frutas)
const ultimoElemento = 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
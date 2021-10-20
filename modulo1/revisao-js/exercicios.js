// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.lenght
    return tamanhoArray
}

console.log (tamanhoArray)


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = array.reverse()
  return arrayInvertido
}
console.log (arrayInvertido)


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arrayOrdenado = array.sort((a,b)=> a-b)
  return arrayOrdenado
}
console.log (arrayOrdenado)


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = array.filter()
  return numerosPares % 2 === 0
}
console.log (numerosPares)


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter()
  const pares = numerosPares % 2 === 0
  const paresAoQuadrado = pares*pares
  return paresAoQuadrado
}
console.log (paresAoQuadrado)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maiorNumero = -Infinity
  while (i < retornaMaiorNumero.lenght) {
    if (retornaMaiorNumero [i] > maiorNumero)}
    maiorNumero = retornoMaiorNumero [i]    
  }
  i++
}
console.log (maiorNumero)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC)
return equilatero
if else (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC)
return isosceles
if else (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC)
return escaleno
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = array.sort((a,b)=> a-b)
  constSegundoMaiorValor = arrayOrdenado.lenght-2
  constSegundoMenorValor = arrayOrdenado [0]
  const resultado = [constSegundoMaiorValor, constSegundoMenorValor]
  return resultado
}
console.log (resultado)

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let objetoFilme = {... filme
  }
    const frase = ('venha assistir ao filme ${objetoFilme.nome}, de ${objetoFilme.ano}, com direção de ${objetoFilme.diretor}, estrelado por ${objetoFilme.atores}")
  
   return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 let objetoPessoa = {
   ...pessoa
 }  
 let pessoaAnonima = {... pessoa
nome: "ANÔNIMO" }
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
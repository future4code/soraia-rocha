// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comparador de igualdade ${a}===${b} é ${a === b}`
        
 }
console.log(checarIgualdade(1, 2));


// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b) {

    return `No comparador ${a}>${b} é ${a > b}`
 
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------


const cadastro = () => {
    
        const usuario = []
        const nomeDoUsario = prompt("Digite o seu nome")
        const anoDeNascimento = prompt("Digite o ano do seu nascimento")
        const senhaDoUsuario = prompt("Digite uma senha de no minimo 6 caracteres")
        const nacionaliade = prompt("Digite a sua nacionalidade").toLowerCase()
        const idade = 2021-anoDeNascimento
      
        if (idade >= 18 && senhaDoUsuario.lenght >= 6 && "nacionaliade" === "brasileira"){
   console.log ("Usuário cadastrado com sucesso")
        usuario.push({nomeDoUsario, idade, nacionaliade, senhaDoUsuario})
   console.log(usuario)
   }
        else {
   console.log ("Não foi possível cadastrar usuário")
   
   }
   console.log(cadastro());
   }

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
const login = "labenu"
const senhaDoUsuario = prompt("Digite uma senha")

    if (login === senhaDoUsuario) {
console.log ("Usuário logado")
}
    else {
console.log ("senha invalida")}
 
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    const nome = prompt ("Digite seu nome")
    const vacina = promp ("Digite qual vacina você tomou")
    

    if (vacina === Astrazeneca)
    tempo 90 && data 19/12

    if (vacina === Pfizer)
    tempo 90 && data 19/12

    else 
    tempo 28 && data 16/11
    
    

return primeiraDose (`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}`)

}
console.log(primeiraDose)


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());
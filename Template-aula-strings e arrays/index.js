/*
Exercicios de Interpretação de codigo

1.
     a. undefined 
    
   
    b. 
    
   c.
    
   d.

    e.
    
   f.
    ```
    
2. 
   SUBI NUM ONIBUS EM MIRROCOS 27 */


//Exercícios de escrita de código

//1

const nomeUsuario = prompt("qual o seu nome")
const emailUsuario = prompt("qual o seu email")
const frase = "o email" + emailUsuario + "foi cadastrado com sucesso.Seja bem vindo" + nomeUsuario
console.log (frase)

//2. 

const comidasFavoritas = ["Ceviche", "Pizza", "Strogonoff","Hamburger", "Bacalhau"]

//a 
console.log (comidasFavoritas)

//b 
const frase = "Essas sao as minhas comidas favoritas" + comidasFavoritas
console.log(frase)

//c

const comidaUsuario = prompt("qual a sua comida preferida")
comidasFavoritas.splice(1,1)
const lista = comidasFavoritas,splice(1,1) 
const novaLista = lista.push(comidaUsuario)
console.log (novaLista) 

//3. 
//a
const listaDeTarefas = []

//b
const tarefasUsuario = prompt("escreva tres tarefas que voce precisa fazer no dia")
const listaUsuario = [tarefasUsuario]

//c
console.log(listaUsuario)

//d
const tarefaRealizada = prompt("diga qual dessas tarefas foi realizada")

console.log(tarefaRealizada)

//e
listaUsuario.splice(0,1)


//f
console.log = (listaUsuario)

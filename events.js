/*Estudo sobre Eventos 
    Pode haver diversos eventos como:
    1º clicar com o mouse sobre um elemento;
    2º Passar o ponteiro do mouse sobre um elemento;
    3º Pressionar uma tecla do teclado;
    4º Redimensionar ou fechar a janela do navegador;
    5º Uma página web terminando de carregar;
    6º Enviar um formulário;
    7º Um vídeo sendo reproduzido, interrompido, ou terminando sua reprodução;
    8º Um erro ocorrendo.
*/


//click events


//Método 1: Adicionando o evento Click
/* 
addEventListener espera o evento e a função para executar o evento
titulo.addEventListener (evento, functionDeRetorno);

click, somente o nome da função
*/

function imprimirTitulo() {
    //return alert ("Clicou")

}
const titulo = document.getElementById("titulo");

titulo.addEventListener("click", imprimirTitulo)


//submit button
//Como o submit button faz com que a página seja atualizada, vamos parar este comportamento padrão

/*
Submit button, evento padrão = enviar form.
método preventDefault() = Previnir padrão

*/

const btn = document.querySelector(".button")

// function btnColor(event) {
//     event.preventDefault();

//     //alterando o fundo 
//     document.getElementById("meu_form").style.background = "blue";
//     document.querySelector("body").style.background = "green";
//     document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h2> Alterado </h2>"
   
    
// }

/*
Podemos Declarar a function diretamente no addEventListener
*/
btn.addEventListener("click", (event) => {

    event.preventDefault();

    //alterando o fundo 
    document.getElementById("meu_form").style.background = "black"
    document.querySelector("body").style.background = "black";
    document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h2> Alterado </h2>"
    document.getElementById("Exorcista").style.display = "block";
    document.getElementById("audio").play();
   
});
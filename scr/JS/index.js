/* 
CLicar no botao ver trailer e abrir a modal com o trailer!
- pegar o elemento que representa o botao e colocar no JS
- identificar quando é clicado no botão
- pegar o elemento da modal no js
- abrir a modal na tela


CLicar no X deve fechar a modal
- pegar elemento de fechar a modal
- identifocar quando é clicado no X
- fechar a modal
*/


//console.log('mostar o documente', document);

//console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer'); //Localizou a classe
const video = document.getElementById("video"); //localizou o Elemento
const modal = document.querySelector('.modal'); 
const botaoXis = document.querySelector('.fechar-modal');  
const linkDoVideo = video.src; //localizou o SCR

function alterModal(){
    modal.classList.toggle("aberto");    
}

botaoTrailer.addEventListener("click", () => { //"ouve" o click e abre o video
    alterModal();
    video.setAttribute("src", linkDoVideo);
});

botaoXis.addEventListener("click", () => { //"ouve" o click e fecha o video
    alterModal();
    video.setAttribute("src", "");
});






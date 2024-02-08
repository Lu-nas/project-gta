/*
Objetivo 1 - Quando o usuario Clicar no botao de selecao de plataformas deve abrir uma 
caixa com os botoes de selecao de plataformas.
    passo 1 - Pegar o botao de selacao de plataformas no JS pra poder verificar quando o usuario clicar em cima dele

    passo 2- pegar o elemento do conteudo que precisa ser mostado

    passo 3 - pegar o click de usuario no JS

    passo 4- Quando o usario clicar, adicionar a classe ativo na listagem de pltaformas dentro do botao pra que o conteudo dele apareca 



Objetivvo 2 - Caso a lista de botoes de plataforma ja esteja aparecendo e o usuario clicar em cima do botao, o conteudo deve ser escondido

    passo 1 - Verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente
*/ 

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => { 
   elementoPlataformas.classList.toggle("ativo");
});


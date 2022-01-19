const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
const totalDeImagens = imagensPainel.length-1;
let imagemAtual = 0;

if(imagemAtual === 0){
    setaVoltar.style.opacity = 0.4;
}
if(imagemAtual === totalDeImagens){
    setaAvancar.style.opacity = 0.4;
}

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    setaVoltar.style.opacity = 1;
    if(imagemAtual === totalDeImagens) {
        
        return;
    }
    imagemAtual++; 
    if(imagemAtual === totalDeImagens){
        setaAvancar.style.opacity = 0.4;
    }
    esconderImagens();
    mostrarImagem();
});
setaVoltar.addEventListener('click', function () {
    setaAvancar.style.opacity = 1;
    if(imagemAtual === 0){
        return;
    }
    imagemAtual--;
    if(imagemAtual ===0){
        setaVoltar.style.opacity = 0.4;
    }
    esconderImagens();
    mostrarImagem();
});

//Variaveis:
    let listaDeNumerosS = [];
    let nuumeroMax = 3;
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativa = 1;
    let reqsParaGanhar = 'Para ganhar você deve acertar qual e o número secreto, lembre-se que o número esta entre 1 e ' + nuumeroMax + '!';
    let tentativasConsole = 0;

//Primeiras Infos Visuais:
    textInicial();
    infoConsole();

//Function Principal
function verificarChute() {
    textInicial();
    let palavraTentativa = tentativa > 1 ? 'Tentativas' : 'Tentativa';
    let textTentativa = (palavraTentativa + ':')
    exibirTextoNaTela('h3', textTentativa)
    exibirTextoNaTela('p3', tentativa);
    let chute = document.querySelector('input').value;
    infoConsole();

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let menssagenTentativas = 'Você acertou o número secreto.';
        exibirTextoNaTela('p', menssagenTentativas);
        exibirTextoNaTela('p2', chute + ' era o número secreto!');
        limparCampo();
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log('✔️ - Jogador acertou o número era: ' + chute);
    }
    else{
        let maiorOuMenor = numeroSecreto < chute ? chute +" é maior que o numero secreto!" : chute+ " é menor que o numero secreto!";
        exibirTextoNaTela('p2', maiorOuMenor);
        tentativa++
        tentativasConsole++
        limparCampo();
        infoConsole();
        console.log('🤨 - Ultimo Chute Do Jogador: ' + chute);
        console.log('❌ - O Número ' + maiorOuMenor);
    }
}

//Functions Extras
    //Padronização Da Menssagens Na Tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
        //Aplicando Function De Menssagen Na Tela
function textInicial() {
    exibirTextoNaTela('h1', 'Informaçoes:');
    exibirTextoNaTela('p', reqsParaGanhar);
    exibirTextoNaTela('p3', '0');
}

function gerarNumeroAleatorio() {
    let numeroSelecionado = parseInt(Math.random() * nuumeroMax + 1);
    let numerosNaLista = listaDeNumerosS.length

if(numerosNaLista == nuumeroMax) {
    listaDeNumerosS = []
}

    if (listaDeNumerosS.includes(numeroSelecionado)) {
        return gerarNumeroAleatorio();
} else {
    listaDeNumerosS.push(numeroSelecionado);
    return numeroSelecionado;
}
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
    console.clear();
}

function reiniciarJogo() {
 numeroSecreto = gerarNumeroAleatorio();
 textInicial();
 limparCampo();
 infoConsole();
 tentativa = 1;
 tentativasConsole = 1;
 document.getElementById('reiniciar').setAttribute('disabled', 
    true);
}

function infoConsole() {
    console.log('🤐 - Jogo Do Número Secreto - 🤐');
    console.log('💯 - Número Secreto: ' + numeroSecreto);
    console.log('😓 - Número De Tentativas: ' + tentativasConsole);
    console.log('🌌 - Números Sorteados: '+ listaDeNumerosS);
}
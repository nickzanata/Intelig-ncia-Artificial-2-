import { aleatorio, nome } from './aleatorio.js'; // Importando a função aleatorio() e a variável nome
import { perguntas } from './perguntas.js'; // Importando o objeto perguntas

const caixaPrincipal = document.querySelector(".caixa-principal"); // Selecionando a caixa principal
const caixaPerguntas = document.querySelector(".caixa-perguntas");// Selecionando a caixa de perguntas
const caixaAlternativas = document.querySelector(".caixa-alternativas"); // Selecionando a caixa de alternativas
const caixaResultado = document.querySelector(".caixa-resultado"); // Selecionando a caixa de resultado
const textoResultado = document.querySelector(".texto-resultado"); // Selecionando o elemento de texto do resultado
const botaoJogarNovamente = document.querySelector(".novamente-btn"); // Selecionando o botão de jogar novamente
const botaoIniciar = document.querySelector(".iniciar-btn"); // Selecionando o botão de iniciar
const telaInicial = document.querySelector(".tela-inicial"); // Selecionando a tela inicial

let atual = 0; // Variável para armazenar o índice da pergunta atual
let perguntaAtual; // Variável para armazenar a pergunta atual
let historiaFinal = ""; // Variável para armazenar a história final

botaoIniciar.addEventListener('click', iniciaJogo); // Adicionando um evento de clique ao botão de iniciar

function iniciaJogo() { // Função para iniciar o jogo
    atual = 0; // Inicializando o índice da pergunta atual
    historiaFinal = ""; // Limpando a história final
    telaInicial.style.display = 'none'; // Ocultando a tela inicial
    caixaPerguntas.classList.remove("mostrar"); // Removendo a classe mostrar da caixa de perguntas
    caixaAlternativas.classList.remove("mostrar"); // Removendo a classe mostrar da caixa de alternativas
    caixaResultado.classList.remove("mostrar"); // Removendo a classe mostrar da caixa de resultado
    mostraPergunta(); // Chamando a função mostraPergunta() para mostrar a primeira pergunta
}

function mostraPergunta() { // Função para mostrar a pergunta atual    
    if (atual >= perguntas.length) { // Verificando se chegou ao final das perguntas
        mostraResultado(); // Chamando a função mostraResultado() para mostrar o resultado final 
        return; // Retornando para a função principal
    }
    perguntaAtual = perguntas[atual]; // Obtendo a pergunta atual
    caixaPerguntas.textContent = perguntaAtual.enunciado; // Atualizando o texto da caixa de perguntas com o enunciado da pergunta atual
    caixaAlternativas.textContent = ""; // Limpando o texto da caixa de alternativas
    mostraAlternativas(); // Chamando a função mostraAlternativas() para mostrar as alternativas da pergunta atual
}

function mostraAlternativas() { // Função para mostrar as alternativas da pergunta atual
    for (const alternativa of perguntaAtual.alternativas) { // Percorrendo as alternativas da pergunta atual
        const botaoAlternativas = document.createElement("button"); // Criando um botão
        botaoAlternativas.textContent = alternativa.texto; // Atualizando o texto do botão com o texto da alternativa
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); // Adicionando um evento de clique ao botão com a função respostaSelecionada()
        caixaAlternativas.appendChild(botaoAlternativas); // Adicionando o botão à caixa de alternativas
    }
}

function respostaSelecionada(opcaoSelecionada) { // Função para tratar a resposta selecionada
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); // Obtendo as afirmações aleatórias da opção selecionada
    historiaFinal += afirmacoes + " "; // Adicionando as afirmações à história final
    if (opcaoSelecionada.proxima !== undefined) { // Verificando se há próxima pergunta
        atual = opcaoSelecionada.proxima; // Atualizando o índice da pergunta atual com o próximo índice da perg
    } else { // Se não houver próxima pergunta
        mostraResultado(); // Chamando a função mostraResultado() para mostrar o resultado final
        return; // Retornando para a função principal
    }
    mostraPergunta(); // Chamando a função mostraPergunta() para mostrar a próxima pergunta
}

function mostraResultado() { // Função para mostrar o resultado final
    caixaPerguntas.textContent = `Em 2049, ${nome}`; // Atualizando o texto da caixa de perguntas com o nome da pessoa
    textoResultado.textContent = historiaFinal; // Atualizando o texto do resultado com a história final
    caixaAlternativas.textContent = ""; // Limpando o texto da caixa de alternativas
    caixaResultado.classList.add("mostrar"); // Adicionando a classe mostrar à caixa de resultado
    botaoJogarNovamente.addEventListener("click", jogaNovamente); // Adicionando um evento de clique ao botão de jogar novamente com a função jog
}

function jogaNovamente() { // Função para jogar novamente
    atual = 0; // Inicializando o índice da pergunta atual
    historiaFinal = ""; // Limpando a história final
    caixaResultado.classList.remove("mostrar"); // Removendo a classe mostrar da caixa de resultado
    mostraPergunta(); // Chamando a função mostraPergunta() para mostrar a primeira pergunta
}

function substituiNome() { // Função para substituir o nome da pessoa
    for (const pergunta of perguntas) { // Percorrendo as perguntas
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome); // Substituindo o nome na pergunta
    }
}

substituiNome(); // Chamando a função substituiNome() para substituir o nome da pessoa
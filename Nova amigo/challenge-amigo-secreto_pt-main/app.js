//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let listaAmigosElement = document.getElementById('listaAmigos');
    let amigoNome = amigoInput.value.trim();

    if (amigoNome === '') {
        alert('Por favor, digite o nome de um amigo.');
        return;
    }

    if (amigos.includes(amigoNome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(amigoNome);
    
    // Cria um novo item de lista (li) para exibir o nome
    let novoItem = document.createElement('li');
    novoItem.textContent = amigoNome;
    listaAmigosElement.appendChild(novoItem);
    
    amigoInput.value = ''; // Limpa o campo de entrada
}

function sortearAmigo() {
    let resultadoElement = document.getElementById('resultado');

    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para o sorteio.');
        return;
    }

    // Embaralha a lista de amigos
    embaralhar(amigos);
    
    resultadoElement.innerHTML = ''; // Limpa resultados anteriores

    for (let i = 0; i < amigos.length; i++) {
        // Encontra o próximo amigo na lista
        let paraQuem = amigos[(i + 1) % amigos.length];
        
        let novoItem = document.createElement('li');
        novoItem.textContent = `${amigos[i]} -> ${paraQuem}`;
        resultadoElement.appendChild(novoItem);
    }
}

// Função para embaralhar o array usando o algoritmo de Fisher-Yates
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Botão para resetar o sorteio
function resetar() {
    amigos = []; // Limpa o array de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Limpa a lista na tela
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado na tela
}
let amigos = [];
let ultimoSorteado = null;

function adicionarAmigo() {
    // Captura e limpa o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();

    // Exibe confirmação temporária
    const mensagem = document.getElementById('mensagem');
    if (mensagem) {
        mensagem.textContent = `${nomeAmigo} foi adicionado à lista!`;
        setTimeout(() => mensagem.textContent = '', 3000);
    }

    // Devolve o foco para o campo de entrada
    inputAmigo.focus();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
    atualizarContador();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    // Sorteia um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    ultimoSorteado = amigoSorteado;

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Adiciona o amigo sorteado à lista de resultados
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);

    // Atualiza a lista para destacar o sorteado
    atualizarListaAmigos();
}

function atualizarContador() {
    const contador = document.getElementById('contador');
    if (contador) {
        contador.textContent = amigos.length;
    }
}
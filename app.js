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
    
    // Verifica se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já está na lista!");
        return;
    }

    // Adiciona o amigo à lista
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
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
    // Atualiza a lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista atual
    listaAmigos.innerHTML = '';
    
    // Adiciona cada amigo à lista
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        
        // Destaca o último amigo sorteado
        if (amigos[i] === ultimoSorteado) {
            item.classList.add('sorteado');
        }

        // Adiciona o item à lista
        listaAmigos.appendChild(item);
    }

    // Atualiza o contador
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
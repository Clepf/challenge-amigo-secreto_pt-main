let amigos = [];

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
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}
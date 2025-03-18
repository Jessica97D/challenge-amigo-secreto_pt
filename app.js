
const amigos = [];


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome válido!');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Amigo Secreto: ${amigoSorteado} 🎊</li>`;
}

let convidados = [];

document.getElementById('adicionar-convidado').addEventListener('click', adicionarConvidado);

function adicionarConvidado() {
    let nomeConvidado = document.getElementById('nome-convidado').value.trim();
    if (nomeConvidado !== '') {
        convidados.push(nomeConvidado);
        document.getElementById('nome-convidado').value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    let listaConvidados = document.getElementById('lista-convidados');
    listaConvidados.innerHTML = '';
    convidados.forEach((convidado, index) => {
        let li = document.createElement('li');
        li.textContent = convidado;
        let button = document.createElement('button');
        button.textContent = 'Remover';
        button.className = 'remover';
        button.addEventListener('click', () => {
            removerConvidado(index);
        });
        li.appendChild(button);
        listaConvidados.appendChild(li);
    });
}

function removerConvidado(index) {
    convidados.splice(index, 1);
    atualizarLista();
}

atualizarLista();

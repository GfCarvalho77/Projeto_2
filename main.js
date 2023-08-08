const form = window.document.getElementById('form-contato');
let linhas = '';
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
    limpaCampos();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (!inputNomeContato.value || !inputTelefoneContato.value) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica se o nome do contato já existe
    const nomeExistente = contatos.some(contato => contato.nome === inputNomeContato.value);
    if (nomeExistente) {
        alert(`O contato "${inputNomeContato.value}" já existe na agenda.`);
        return;
    }

    const novoContato = {
        nome: inputNomeContato.value,
        telefone: inputTelefoneContato.value
    };

    contatos.push(novoContato);

    let linha = '<tr>';
    linha += `<td>${novoContato.nome}</td>`;
    linha += `<td>${novoContato.telefone}</td>`;
    linha += '</tr>';

    linhas += linha;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function limpaCampos() {
    document.getElementById('nome-contato').value = '';
    document.getElementById('telefone-contato').value = '';
}

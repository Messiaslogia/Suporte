function obterIdDivClicada(event) {
    let div = event.target
    let divPai = div.parentNode;
    let divSupreme = divPai.parentNode;
    var ultimoFilho = divSupreme.lastElementChild;
    toggleClass(`#${ultimoFilho.id}`, 'titulos-artigos')
}

function toggleClass(elemento, classe) {
    let div = document.querySelector(elemento);
    div.classList.toggle(classe);
}

function abrirElementoURL() {
    const url = window.location.hash;
    const fragmento = url.substr(1); // Remove o "#" do início do fragmento

    if (fragmento) {
        // Verifica se o fragmento não está vazio
        var elemento = document.getElementById(fragmento);
        if (elemento) {
            // Verifica se o elemento com o ID correspondente existe
            elemento.click();
        } else {
            console.log("Erro: Elemento não encontrado.");
        }
    }
}

function abrirElementoMenu(id) {
    var elemento = document.getElementById(id); // Encontra o elemento pelo id
    if (elemento) {
        elemento.dispatchEvent(new Event('click')); // Simula o evento de clique no elemento
    }
}

abrirElementoURL();
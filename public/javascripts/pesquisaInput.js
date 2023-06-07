
    let caixaDePesquisa = document.querySelector('.input_search')
    let resultadoDaPesquisa = document.querySelector('#results_search')

    caixaDePesquisa.addEventListener('input', async function () {
        resultadoDaPesquisa.style.display = 'block'
        let pesquisa = caixaDePesquisa.value
        if(pesquisa == ''){
            resultadoDaPesquisa.style.display = 'none'
        }else{
            await fetch(`https://downloads.showdeimagem.com.br/moldura/pesquisa/${pesquisa}`)
            .then(response => response.json())
            .then(data => {
                resultadoDaPesquisa.innerHTML = ''
                for( i = 0; i <= data.length; i++){
                    let div = `
                        <div>
                            <p><a class="linksFiltroBusca" href="${data[i].url}">${data[i].titulo_artigo}</a></p>
                        </div>
                    `
                    resultadoDaPesquisa.innerHTML += div
                }
            })
            .catch(error => {
                            console.error(error)
            })
        }
    })

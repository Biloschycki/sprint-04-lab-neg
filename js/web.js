// pegando o id do tbody que receberá os dados 
const tbody = document.querySelector('#dadosConta');
// testando se peguei o id corretamente
console.log(tbody);

// pegar o formulário - atribuir um listener para quando o formulário ser enviado (submit) - iremos cancelar este evento e criar uma função para ele executar
// e funciona como uma variável da função
document.querySelector('form').addEventListener('submit', function (e) {
    //cancelar o evento submit - e.preventDefault() este método não permite que a página seja envada
    e.preventDefault()
    // alert('função enxecutada - Dados continuam no form')

    //pegar os campos do formulário
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#data'),
        document.querySelector('#tipo')
    ]
    console.log(campos)

    //criar a linha da tabela para receber as colunas com os valores
    const tr = document.createElement('tr')

    //percorrer o array campos com forEach e criar uma td para cada campo
    campos.forEach(campo => {

        //criar a td
        const td = document.createElement('td')

        //passar o valor do campo para dentro da td 
        td.textContent = campo.value

        //colocando a td dentro da tr
        tr.appendChild(td)
    })

    //colocar a tr dentro do tbody que foi recuperado 
    tbody.appendChild(tr)

    //limpar o formulário
    //this ele indica o elemento que estou, no caso o form
    this.reset()

})
 function confirmarCompra() {
     alert("Compra realizada com sucesso!");
 }
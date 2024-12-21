const form = document.getElementById("form-atividade");

const nomes = [];
const numeros = []; // dá pra usar string e formatar antes de salvar, faço depois


let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionalinha();
  atualizaTabela();
  
});

function adicionalinha() {
  const inputNomeContato = document.getElementById("nomeContato");
  const inputNumTelefone = document.getElementById("numTelefone");


  if (nomes.includes(inputNomeContato.value) || numeros.includes(inputNumTelefone.value)) {
    alert(`O contato ${inputNomeContato.value} com numero ${inputNumTelefone.value} já foi adicionado!`);
    return;

  } if (verificaNumero(inputNumTelefone)) {

    nomes.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumTelefone.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumTelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;
    }


  inputNomeContato.value = "";
  inputNumTelefone.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function verificaNumero(numtelefone) {
  
  if (isNaN(parseInt(numtelefone.value)) || (numtelefone.value.length < 8 || numtelefone.value.length > 14)) {
    alert("Digite um número válido!");

    return false;
  }

  return true;
  
}


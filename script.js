/* Algoritmo:

1. Pegar os valores
2. Calcular a Idade
      a. Com base no ano
      b. Com mês (EXTRA)
      c. Com dia (EXTRA)

3. Gerar a faixa etária
   
    Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso
   

4. Organizar o objeto pessoa para salvar na lista
5. Cadastrar a pessoa na lista
6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
7. Renderizar o conteúdo da tabela com as pessoas cadastradas
8. Botão para limpar os registros; */




// função principal, o html só chama essa função
function calculaIdade(event) {
    event.preventDefault()
    let dadosUsuario = pegarValores();
    let idade = calcular(dadosUsuario.ano)

    /*  console.log("funciono!!!!!!!!!!!!"); */
}

//passo 1 - pegar valor

function pegarValores() {

    let nomeRecebido = document.getElementById("nome").value.trim()
    // trim corta o espaço vazio no começo e final do valor

    let diaRecebido = parseInt(document.getElementById("dia").value)

    let mesRecebido = parseInt(document.getElementById("mes").value)

    let anoRecebido = parseInt(document.getElementById("ano").value)

    let dadosUsuario = {

        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido
    }


    console.log(dadosUsuario);

    return dadosUsuario;

}
//Passo 2 calcular idade 


function calcular(ano, mes, dia) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let idade = anoAtual - ano

    console.log(idade);

    return idade;
}

/* 3. Gerar a faixa etária
   
    Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso
    */
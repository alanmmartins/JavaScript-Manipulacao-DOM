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
   
//================================================================
4. Organizar o objeto pessoa para salvar na lista
5. Cadastrar a pessoa na lista
6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
7. Renderizar o conteúdo da tabela com as pessoas cadastradas
8. Botão para limpar os registros; */




// função principal, o html só chama essa função
function calculaIdade() {
    let dadosUsuario = pegarValores();
    let idade = calcular(dadosUsuario.ano)

    let classificacaoIdade = classificarIdade(idade);

    let dadosUsuarioAtualizado = organizarDados(dadosUsuario, idade, classificacaoIdade);
    cadastrarUsuario(dadosUsuarioAtualizado);

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
    function classificarIdade(idade) {
        if (idade >= 0 && idade <= 12) {
            return 'Criança';
          } else if (idade >= 13 && idade <= 17) {
            return 'Adolescente';
          } else if (idade >= 18 && idade <= 65) {
            return 'Adulto';
          } else if (idade > 65) {
            return 'Idoso';
          } /* else {
            return 'idade A.C';
          } */
        
    }
    

    
    //Passo 4 - Organizar Informacoes 
    function organizarDados(dadosUsuario, valoridade, classificaridade){
    
        let idadeAtualizado = {
            ...dadosUsuario,
            idade: valoridade,
            classificacao: classificaridade,
        }
    
        console.log(idadeAtualizado);
    
        return idadeAtualizado;
    }
    
    //Passo 5 - Salvar
    function cadastrarUsuario(usuario) {
        // Cria um array vazio
        let listaUsuarios = [];
    
        // Verifica se existe o item "usuariosCadastrados" no localStorage
        //if (localStorage.getItem("usuariosCadastrados") == true) {
        if (localStorage.getItem("usuariosCadastrados")) {
            // Caso o item exista ele converte e salva no array criado
            listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
        }
    
        // Acrescenta o usuario recebido a lista
        listaUsuarios.push(usuario)
    
        // Salva o item "usuariosCadastrados" no localStorage com o conteudo do array convertido para string
        localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
    }
    
    
    // Passo 6 - Ler lista
    function carregarUsuarios() {
        // Cria um array vazio
        let listaUsuarios = [];
    
        // Verifica se existe o item "usuariosCadastrados" no localStorage
        if (localStorage.getItem("usuariosCadastrados")) {
            // Caso o item exista ele converte e salva no array criado
            listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
        }
    
        // Verifica se o tamanho do array é igual a zero
        if (listaUsuarios.length == 0) {
            // Se o tamanho do array for igual a zero,
            // Obtém o elemento html (tabela) pelo ID
            let tabela = document.getElementById("corpo-tabela");
    
            //Cria uma linha na tabela com a mensagem "Nenhum usuario cadastrado!""
            tabela.innerHTML = `<tr class="linha-mensagem">
            <td colspan="6">Nenhum usuario cadastrado!</td>
        </tr>`
    
        }else{
            // Se o tamanho do array for diferente de zero, ou seja tem algum item dentro do array
            // Executa a função montarTabela
            montarTabela(listaUsuarios);
        }
    }
    
    // Adiciona o evento a janela/navegador que executa a função carregarUsuarios quando o DOM estiver carregado
    window.addEventListener('DOMContentLoaded', () => carregarUsuarios());
    
    
    // Passo 7 - Montar tabela
    function montarTabela(listaDeCadastrados) {
        // Obtém o elemento html (tabela) pelo ID
        let tabela = document.getElementById("corpo-tabela");
    
        // Cria uma variavel vazia
        let template = '';
    
        console.log(listaDeCadastrados);
    
        // Obtém cada item dentro do array listaDeCadastrados
        listaDeCadastrados.forEach(pessoa => {
            // Cria uma linha de tabela mesclando tag html e valor dos atributos do objeto que esta dentro do array
            // E adiciona um bloco de codigo igual o a baixo dentro da variavel template para cada elemento do array
            template += `<tr>
            <td data-cell="nome">${pessoa.nome}</td>
            <td data-cell="data de nascimento">${pessoa.dia}-${pessoa.mes}-${pessoa.ano}</td>
            <td data-cell="idade">${pessoa.idade}</td>
            <td data-cell="faixa etária">${pessoa.classificacao}</td>
        </tr>`
     
        });
    
        // Adiciona o conteudo que esta dentro da variavel template ao elemento tabela
        tabela.innerHTML = template;
    }
    
    
    // Passo 8 - Limpar local storage
    function deletarRegistros() {
        // Remove o item "usuariosCadastrados" do localStorage
        localStorage.removeItem("usuariosCadastrados")
    
        // Recarrega a pagina
        window.location.reload();
    
    }

    //mudei o nome no repositorio
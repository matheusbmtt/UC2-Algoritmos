// Sistema de gerenciamento de informações Banco de dados
const readlineSync = require('readline-sync');
let dadosFake = [];
// Função para cadastrar um novo doador no sistema
function personagemDaSerie() {
    console.log("===== Personagens da Série =====");
    let nome = readlineSync.question("NOME DO PERSONAGEN: ");
    let função = readlineSync.question("FUNCAO DO PERSONAGEN: ");
    let arma = (readlineSync.question("ARMA DO PERSONAGEN: "));
    let explosivos = (readlineSync.question("QUANTIDADE DE EXPLOSIVOS: "));
    // cria um objeto que armazena os dados do usuario
    let dadosPersonagem = {
        nome: nome,
        função: função,
        arma: arma,
        explosivos: explosivos,
    };
// adiciona ao fim da array "doador" os novos dados
    dadosFake.push(dadosPersonagem);
    console.log("PERSONAGEN CRIADO COM SUCESSO!\n");
    console.clear() //Para limpar o terminal  
    
}

function visualizarPersonagens(){
    console.log("===== PERSONAGENS =====")
    console.log("NOME          |    FUNÇÃO      |    ARMA          | EXPLOSIVOS  "    )

    console.log("----------------------------------------------------------------");
    for(let i = 0; i < dadosFake.length; i++){
        let dados = dadosFake[i]
        console.log(`${dados.nome.padEnd(14, " ")}|   ${dados.função.padEnd(13, " ")}|    ${dados.arma.padEnd(14, " ")}|  ${dados.explosivos}`)
    }
    console.log("-----------------------------------------------------------------\n");
    
}
// Função para atualizar a arma de um personagem
function atualizarArma() {
    const nomePersonagem = readlineSync.question("DIGITE O NOME DO PERSONAGEN CUJA ARMA DESEJA ATUALIZAR: ");
    let personagemIndex = -1;
    for (let i = 0; i < dadosFake.length; i++) {
        if (dadosFake[i].nome === nomePersonagem) {
            personagemIndex = i;
            break;
        }
    }
    if (personagemIndex !== -1) {
        const novaArma = readlineSync.question("DIGITE A NOVA ARMA: ");
        dadosFake[personagemIndex].arma = novaArma;
        console.log("------------------------");
        console.log(`Arma de ${nomePersonagem} atualizada para ${novaArma}!`);
        console.log("------------------------");
    } else {
        console.log(`Personagem "${nomePersonagem}" não encontrado.`);
    }
}

function verificaExplosivos(){
    console.log("------------------------");
    console.log("===== VERIFICA EXPLOSIVOS =====")
    console.log("------------------------");
    console.log(`${Number(dadosFake[3])}`)
    console.log("-------------------------------------------------------------");
    console.clear() //Para limpar o terminal  
}

// Função principal do Sistema
function main(){
    let opcao = '';
    // loop While para o sistema rodar até o Usuario escolher a opeção "5"
    while (opcao !== '5'){
        console.log("===== LA CASA DE PAPEL =====");
        console.log("1. ADICIOONAR NOVO PERSONAGEN ");
        console.log("2. VIZUALIZAR TODOS OS PERSONAGENS");
        console.log("3. ATUALIZAR ARMA DO PERSONAGEN");
        console.log("4. VERIFICAR QUANTIDADE DE EXPLOSIVOS");
        console.log("5. SAIR");
        opcao = readlineSync.question("ESCOLHA UMA OPCAO: ");

        switch(opcao){
            case "1":
                personagemDaSerie()
                break;
            case "2":
                visualizarPersonagens()
                break;
            case "3":
                atualizarArma()
                break;
            case "4":
                verificaExplosivos()
                break;
            case "5":
                console.log("SAINDO DA CASA DA MOEDA......")
                break;
                default:
                console.log("OPÇÃO ÍNVALIDA!!!, ESCOLHA NOVAMENTE ")
        }
    }
}

main()

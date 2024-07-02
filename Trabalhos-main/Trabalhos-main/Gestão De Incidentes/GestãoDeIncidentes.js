// Sistema de Gestão de incidentes 
const readlineSync = require('readline-sync');

let ocorrencias = [];
// Função para cadastrar ocorrencia
function cadastrarOcorrencia() {
    console.log("===== CADASTRO DE OCORRÊNCIA =====");
    let nome = readlineSync.question("Nome: ");
    let endereco = readlineSync.question("Digite seu Endereco: ");
    let nivelOcorrencia = readlineSync.question("-----NIVEL 1: Ruas Alagadas e indisponibilidade de circulacao-----\n-----NIVEL 2: Agua começando a invadir a residencia-----\n-----NIVEL 3: Agua invadiu completamente a residencia-----\nQual o seu Nivel?:");
    let moradores = readlineSync.question("Quantas pessoas moram na residencia?:");
// cria um objeto que armazena os dados da ocorrencia
    let ocorrencia = {
        nome: nome,
        endereco: endereco,
        nivelOcorrencia: nivelOcorrencia,
        moradores: moradores
    };
// adiciona ao fim da array "ocorrencia" as novas ocorrencias
    ocorrencias.push(ocorrencia);
    console.log("-------------------------------------------------");
    console.log("Ocorrencia cadastrada com sucesso!\n")
    console.clear() //Para limpar o terminal  
}
// Função para listar ocorrencias
function listarOcorrencias() {
    console.log("===== LISTAGEM DE OCORRÊNCIAS =====");
    console.log("NOME             | ENDEREÇO                         | NÍVEL DA OCORRÊNCIA    | MORADORES"); 
    console.log("-----------------------------------------------------------------");
    // loop FOR para percorrer minha array "ocorrencia"
    for (let i = 0; i < ocorrencias.length; i++) {
        let ocorrencia = ocorrencias[i]; //AQUI EU DECLARO QUE A OCORRENCIA É IGUAL AO OBJETO DO INDICE[I], ENTAO ESSA LET OCORRENCIA VIRA UM OBJETO 

        //Para aparecer os dados da ocorrencia.
        console.log(`${ocorrencia.nome.padEnd(17, " ")}|   ${ocorrencia.endereco.padEnd(31, " ")}|   ${ocorrencia.nivelOcorrencia.padEnd(21, " ")}| ${ocorrencia.moradores.padEnd(13, " ")} `);
    }
    console.log("-----------------------------------------------------------------\n");
}

// Função para NOTICIAS DA SEMANA
function noticias(){
    let qualNoticia = " ";
    while(qualNoticia !== '8'){
    console.log("===== ÚLTIMAS NOTÍCIAS =====")
    console.log("1. SEGUNDA-FEIRA:");
    console.log("2. TERCIRA-FEIRA:");
    console.log("3. QUARTA-FEIRA:");
    console.log("4. QUINTA-FEIRA:");
    console.log("4. SEXTA-FEIRA");
    console.log("5. SÀBADO:");
    console.log("6. DOMINGO:");
    console.log("7. VOLTAR MENU PRINCIPAL");
qualNoticia = readlineSync.question("ESCOLHA UMA OPCAO: ");
console.clear()
switch(qualNoticia){
    case "1":
        console.log(` ===== Alerta sobre Possíveis Inundações no RS =====\n Autoridades meteorológicas emitiram um alerta preocupante\n para o Rio Grande do Sul, prevendo fortes chuvas nas próximas 24 horas.\n Moradores de áreas de risco foram aconselhados a\n se preparar para possíveis inundações e deslizamentos de terra.`)
            break;
        case "2":
        console.log(` ===== Primeiras Inundações Registradas =====\n As chuvas intensas resultaram nas primeiras inundações em várias regiões do RS.\n Estradas foram bloqueadas, casas foram inundadas e alguns moradores ficaram\n presos em suas residências. Equipes de resgate estão em alerta máximo,\n respondendo a chamados de emergência.`)
            break;
    case "3":
        console.log(` ===== Mortes Trágicas Confirmadas!!! =====\n A situação no RS se agrava à medida que as inundações persistem.\n Relatos trágicos de mortes começam a surgir,\n com famílias inteiras sendo arrastadas pelas águas devastadoras.\n Equipes de resgate lutam para alcançar áreas isoladas e prestar assistência às vítimas.`)
            break;
    case "4":
        console.log(` ===== Cidades Inteiras Submersas =====\n As águas continuam a subir, deixando várias cidades do RS completamente submersas.\n O caos e o desespero se espalham à medida que os recursos de emergência se esgotam.\n Helicópteros são mobilizados para resgatar pessoas presas em telhados e áreas elevadas.`)
            break;
    case "5":
        console.log(` ===== Governo Declara Estado de Calamidade =====\n Com a situação fora de controle, o governo do RS declara estado de calamidade pública.\n A ajuda internacional começa a chegar,\n com equipes de resgate e suprimentos sendo enviados às áreas afetadas.\n O número de mortos continua a aumentar, enquanto muitos permanecem desaparecidos.`)
            break;
    case "6":
        console.log(" ===== Epidemia de Doenças Transmitidas =====\n Além das inundações, uma nova ameaça emerge no RS:\n Uma epidemia de doenças transmitidas pela água.\n Com o abastecimento de água contaminado e a falta de condições sanitárias adequadas,\n os sobreviventes lutam contra a disseminação de doenças como cólera e hepatite.")
            break;
    case "7":
        console.log(" ===== Esforços de Reconstrução Começam!!! =====\n Enquanto as águas começam a recuar, os esforços de reconstrução começam no RS.\n No entanto, as cicatrizes deixadas por uma semana de devastação são profundas.\n Comunidades inteiras foram destruídas, e o trauma emocional perdurará por anos.\n O Estado agora enfrenta uma longa jornada rumo à recuperação.")
            break;
    case "8":
        console.log("VOLTANDO PARA MENU PRINCIPAL....")
            break;
            default:
            console.log("OPÇÃO ÍNVALIDA!!!, ESCOLHA NOVAMENTE ")
        }
    }
}

// Função para central de duvidas 
function duvidas(){
    let qualSuaDuvida = " ";
    while(qualSuaDuvida !== '6'){
    console.log("===== CENTRAL DE DUVIDAS =====")
    console.log("1. COMO POSSO PROTEGER MINHA CASA CONTRA INUNDAÇÕES?");
    console.log("2. ONDE ENCONTRO ABRIGO?");
    console.log("3. NÚMERO DE EMERGÊCIA:");
    console.log("4. DOAÇÕES:");
    console.log("5. COMO ME PREVENIR DE DOENÇAS TRASMITIVIES PELA ÁGUA?");
    console.log("6. SAIR....");
qualSuaDuvida = readlineSync.question("ESCOLHA UMA OPCAO: ");
console.clear()
switch(qualSuaDuvida){
    case "1":
        console.log(` 1- Identifique se sua casa está localizada em uma área de risco de inundação\n 2- Limpe regularmente ralos, calhas e canaletas\n 3- Monte kits de emergência com suprimentos essenciais`)
            break;
        case "2":
        console.log(`Em escolas, centros comunitários, igrejas ou instalações públicas.`)
            break;
    case "3":
        console.log(` 192 (Ambulância)\n 193 (Bombeiros)\n 190 (Polícia)`)
            break;
    case "4":
        console.log(`Contato Para Doações (55 51 99537755)`)
            break;
    case "5":
        console.log(` 1- Beber Água Segura\n 2- Lavar as Mãos Regularmente\n 3- Manter a Higiene dos Alimentos\n 4- Evitar o Contato com Água Contaminada\n 5- Fique Atento aos Sintomas`)
            break;
            default:
            console.log("OPÇÃO ÍNVALIDA!!!, ESCOLHA NOVAMENTE ")
        }
    }
}
// Função MENU 
function main() {
    let opcao = '';
// loop While para o sistema rodar até o Usuario escolher a opeção "4"
    while (opcao !== '5') {
        console.log("===== SISTEMA DE REGISTRO DE OCORRÊNCIAS =====");
        console.log("1. CADASTAR OCORRÊNCIA");
        console.log("2. LISTAR OCORRÊNCIA");
        console.log("3. AJUDA/INFORMAÇÕES");
        console.log("4. ÚLTIMAS NOTÍCIAS")
        console.log("5. SAIR....");
        opcao = readlineSync.question("Escolha uma opcao: ");

        switch(opcao) {
            case '1':
                cadastrarOcorrencia();
                break;
            case '2':
                listarOcorrencias();
                break;
            case '3':
                duvidas();
            case '4':
                noticias();
                break;
            case '5':
                console.log("Saindo....")
                break;
                default:
                    console.log("OPÇÃO ÍNVALIDA!!!, ESCOLHA NOVAMENTE ")
        }
    }
}
// Invocando a função principal para iniciar o sistema
main();

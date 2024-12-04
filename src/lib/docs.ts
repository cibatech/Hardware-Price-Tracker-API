import * as fs from 'fs';

// Define uma função para carregar e converter o arquivo JSON em um objeto
function loadJsonFile(filePath: string){
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8'); // Lê o conteúdo do arquivo
        const jsonObject = JSON.parse(fileContent); // Converte o conteúdo JSON para objeto
        return jsonObject; // Retorna o objeto tipado
    } catch (error) {
        console.error(`Erro ao carregar o arquivo JSON: ${error}`);
        throw error; // Repassa o erro, caso necessário
    }
}

export const config = loadJsonFile('./docs/HPT - API.json');
console.log('Config carregado:', JSON.stringify(config));


const OpenAPiConfig=config



import { Scrap } from "../../../prisma/deploy-output";
import { ScrapRepository } from "../../repository/ScrapRepository";
interface GetScrapListByDateResponse{
    ScrapList:Scrap[],
    ScrapInfo:Record<string,number>
}

export class GetScrapListByDateUseCase {
    constructor(private ScrapRepo:ScrapRepository){}
    async execute(PasDays:number):Promise<GetScrapListByDateResponse>{
        // Chama o método findByDate para obter os dados filtrados
        const scrapData = await this.ScrapRepo.findByDate(PasDays);
        const ScrapReturn = scrapData
        // Obtém o ano atual
        const anoAtual = new Date().getFullYear();

        // Inicializa o dicionário com os meses
        const meses = [
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ];
        const resultado = meses.reduce<Record<string, number>>((acc, mes) => {
            acc[mes] = 0; // Inicializa cada mês com 0
            return acc;
        }, {});

        // Filtra os itens do último ano e contabiliza os dados
        scrapData.forEach(item => {
            const createdAt = new Date(item.CreatedAt);
            const anoItem = createdAt.getFullYear();
            if (anoItem === anoAtual) {
                const mes = meses[createdAt.getMonth()]; // Obtém o mês pelo índice
                resultado[mes] += 1; // Incrementa a contagem para o mês
            }
        });

        return {
            ScrapList:ScrapReturn,
            ScrapInfo:resultado
        };
    }

}
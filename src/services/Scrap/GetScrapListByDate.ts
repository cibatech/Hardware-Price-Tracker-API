import { Scrap } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../../repository/IssueRepository";
import { ScrapRepository } from "../../repository/ScrapRepository";


interface ScrapReturnCode{
    succeeded:number,failed:number
}
interface GetScrapListByDateResponse{
    ScrapList:Scrap[],
    ScrapInfo:Record<string,ScrapReturnCode>
}

export class GetScrapListByDateUseCase {
    constructor(private ScrapRepo:ScrapRepository, private IssuesRepo:IssuesRepository){}
    async execute(PasDays:number):Promise<GetScrapListByDateResponse>{
        // Chama o método findByDate para obter os dados filtrados
        const scrapData = await this.ScrapRepo.findByDate(PasDays);

        const IssuesDate = await this.IssuesRepo.findByDate(PasDays)

        // Obtém o ano atual
        const anoAtual = new Date().getFullYear();

        console.log("got there")
        // Inicializa o dicionário com os meses
        const meses = [
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ];
        const resultado = meses.reduce<Record<string,ScrapReturnCode >>((acc, mes) => {
            acc[mes] = {succeeded:0,failed:0}; // Inicializa cada mês com 0
            return acc;
        }, {});

        // Filtra os itens do último ano e contabiliza os dados
        scrapData.forEach(item => {
            const createdAt = new Date(item.CreatedAt);
            const anoItem = createdAt.getFullYear();
            if (anoItem === anoAtual) {
                const mes = meses[createdAt.getMonth()]; // Obtém o mês pelo índice
                resultado[mes].succeeded += 1; // Incrementa a contagem para o mês
            }
        });
        //Valores que fracassaram 
        IssuesDate.forEach(item => {
            const createdAt = new Date(item.When);
            const anoItem = createdAt.getFullYear();
            if (anoItem === anoAtual) {
                const mes = meses[createdAt.getMonth()]; // Obtém o mês pelo índice
                resultado[mes].failed += 1; // Incrementa a contagem para o mês
            }
        });

        return {
            ScrapList:scrapData,
            ScrapInfo:resultado,
            
        };
    }

}
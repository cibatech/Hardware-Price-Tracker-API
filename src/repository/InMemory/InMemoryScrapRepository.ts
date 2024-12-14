import { Scrap } from "../../../prisma/deploy-output";
import { ScrapRepository } from "../ScrapRepository";

export class InMemoryScrapRepository implements ScrapRepository{
    private itens:Scrap[] = []

    async findByDate(pasDays: number): Promise<Scrap[]> {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - pasDays); // Calcula a data no passado
    
        // Filtra os itens cujo `AtDate` está no intervalo de tempo
        const filteredPrices = this.itens.filter(item => {
            return item.CreatedAt >= pastDate && item.CreatedAt <= now;
        });
        return filteredPrices;
    }   

}
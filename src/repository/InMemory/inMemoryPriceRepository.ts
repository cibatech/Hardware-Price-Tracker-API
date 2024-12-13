import { Price } from "../../../prisma/deploy-output";
import { PriceReferenceRepository } from "../PriceRefRepository";

export class InMemoryPriceRepository implements PriceReferenceRepository{
    public list:Price[] = [];
    async findByDay(daysAgo: number,ProdId:string): Promise<Price[]> {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - daysAgo); // Calcula a data no passado
    
        // Filtra os itens cujo `AtDate` está no intervalo de tempo
        const filteredPrices = this.list.filter(item => {
            return item.AtDate >= pastDate && item.AtDate <= now;
        });
        const filterPricesByProd = filteredPrices.filter(item => item.ProdId == ProdId)
        return filteredPrices;
    }
    async findByProduct(ProdId: string): Promise<Price[]> {
        const returnMany = this.list.filter(iten=> iten.ProdId == ProdId);
        return returnMany
    }
}
import { Price } from "../../../prisma/deploy-output";
import { PriceReferenceRepository } from "../PriceRefRepository";

export class InMemoryPriceRepository implements PriceReferenceRepository{
    public list:Price[] = [];
    async findByDay(Date: Date): Promise<Price[]> {
        //work a little bit better here
        const returnMany = this.list.filter(iten=> iten.AtDate == Date);
        return returnMany
    }
    async findByProduct(ProdId: string): Promise<Price[]> {
        const returnMany = this.list.filter(iten=> iten.ProdId == ProdId);
        return returnMany
    }
}
import { Price } from "../../../prisma/deploy-output";
import { prisma } from "../../lib/prisma";
import { PriceReferenceRepository } from "../PriceRefRepository";

export class PrismaPriceRepository implements PriceReferenceRepository{
    async findByDay(daysAgo: number,ProdId:string): Promise<Price[]> {
        const now = new Date(); // Data atual
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - daysAgo); // Data inicial (dias no passado)
    
        return await prisma.price.findMany({
            where: {
                ProdId,
                AtDate: {
                    gte: pastDate, // Maior ou igual à data no passado
                    lte: now       // Menor ou igual à data atual
                }
            }
        });
    }
    async findByProduct(ProdId: string): Promise<Price[]> {
        return await prisma.price.findMany({
            where:{
                ProdId
            }
        })
    }
}
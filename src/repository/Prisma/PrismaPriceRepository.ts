import { Price } from "../../../prisma/deploy-output";
import { prisma } from "../../lib/prisma";
import { PriceReferenceRepository } from "../PriceRefRepository";

export class PrismaPriceRepository implements PriceReferenceRepository{
    async findByDay(Date: Date): Promise<Price[]> {
        return await prisma.price.findMany({
            where:{
                AtDate:Date
            }
        })
    }
    async findByProduct(ProdId: string): Promise<Price[]> {
        return await prisma.price.findMany({
            where:{
                ProdId
            }
        })
    }
}
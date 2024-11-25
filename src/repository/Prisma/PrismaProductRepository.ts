import { kind, Product } from "../../../prisma/deploy-output";
import { prisma } from "../../lib/prisma";
import { ProductRepository } from "../ProductRepository";

export class PrismaProductRepository implements ProductRepository{
    async findByLink(Link: string): Promise<Product | null> {
        return await prisma.product.findUnique({
            where:{
                Link
            }
        })
    }

    async findBySearchQuery(Query: string, Page: number): Promise<Product[]> {
        return await prisma.product.findMany({
            where:{
                Description:{
                    contains:Query
                }
            },
            take:Page*20,
            skip:(Page-1)*20
        })
    }
    async findBySite(WebSite: kind): Promise<Product[]> {
        return await prisma.product.findMany({
            where:{
                Kind:WebSite
            }
        })
    }
    async findBySiteCategory(Where: kind): Promise<Product[]> {
        return await prisma.product.findMany({
            where:{
                Where
            }
        })
    }

}
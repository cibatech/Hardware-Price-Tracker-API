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
    async findById(Id: string): Promise<Product | null> {
        return await prisma.product.findUnique({
            where:{
                Id
            }
        })
    }

    async findBySearchQuery(Query: string, Page: number): Promise<Product[]> {
        if(Page>0){
            return await prisma.product.findMany({
                where:{
                    Description:{
                        contains:Query.toLowerCase()
                    }
                },
                take:Page*20,
                skip:(Page-1)*20
            })
        }else{
            return await prisma.product.findMany({
                where:{
                    Description:{
                        contains:Query
                    }
                }
            })
        }
    }
    async findBySite(WebSite: kind,Page:number): Promise<Product[]> {
        if(Page<0){
            return await prisma.product.findMany({
                where:{
                    Kind:WebSite
                }
            })
        }else{
            return await prisma.product.findMany({
                where:{
                    Kind:WebSite
                },
                take:Page*20,
                skip:(Page-1)*20
            })
        }
    }
    async findBySiteCategory(Where: string,Page:number): Promise<Product[]> {
        return Page>0?await prisma.product.findMany({
            where:{
                Where:{
                    contains:Where.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
            },
            take:Page*20,
            skip:(Page-1)*20
        }):await prisma.product.findMany({
            where:{
                Where:{
                    contains:Where.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
            }
        })
        
    }
    async returnByPage(Page: number): Promise<Product[]> {
        if(Page<0){
            return await prisma.product.findMany({})
        }else{
            return await prisma.product.findMany({
                take:Page*20,
                skip:(Page-1)*20
            })
        }
    }
    async findByProductByCategory(Category: string,Page:number): Promise<Product[]> {
        return await prisma.product.findMany({
            where:{
                Where:{
                    contains:Category.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }
            },
            take:Page*20,
            skip:(Page-1)*20
        })
    }
    async findAll(): Promise<Product[]> {
        return await prisma.product.findMany()
    }

}
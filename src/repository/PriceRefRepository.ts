import { Price, Product } from "../../prisma/deploy-output";

export interface PriceReferenceRepository{
    findByProduct(ProdId:string):Promise<Price[]>
    findByDay(daysAgo:number,ProdId:string):Promise<Price[]>
}
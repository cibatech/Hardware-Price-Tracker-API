import { kind, Product } from "../../prisma/deploy-output";

export interface ProductRepository {
    findByLink(Link:string):Promise<Product | null>
    findBySite(WebSite:string):Promise<Product[]>
    findBySiteCategory(Where:kind):Promise<Product[]>
    findBySearchQuery(Query:string,Page:number):Promise<Product[]>
    
}
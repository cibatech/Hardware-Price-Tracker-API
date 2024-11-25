import { kind, Product } from "../../prisma/deploy-output";

export interface ProductRepository {
    returnByPage(Page:number):Promise<Product[]>
    findByLink(Link:string):Promise<Product | null>
    findBySite(WebSite:kind):Promise<Product[]>
    findBySiteCategory(Where:string):Promise<Product[]>
    findBySearchQuery(Query:string,Page:number):Promise<Product[]>
    
}
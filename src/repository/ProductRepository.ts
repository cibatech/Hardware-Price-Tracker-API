import { kind, Product } from "../../prisma/deploy-output";

export interface ProductRepository {

    returnByPage(Page:number):Promise<Product[]>
    findById(Id:string):Promise<Product | null>
    findByLink(Link:string):Promise<Product | null>
    findBySite(WebSite:kind,Page:number):Promise<Product[]>
    findBySiteCategory(Where:string,Page:number):Promise<Product[]>
    findBySearchQuery(Query:string,Page:number):Promise<Product[]>
    
}
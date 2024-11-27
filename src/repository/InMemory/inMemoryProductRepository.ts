import { kind, Product } from "../../../prisma/deploy-output";
import { ProductRepository } from "../ProductRepository";

export class InMemoryProductRepository implements ProductRepository{
    public itens:Product[] = [];
    async findByLink(Link: string): Promise<Product | null> {
        const finUnique = this.itens.find(iten=>iten.Link == Link);
        return finUnique?finUnique:null
    }
    async findBySite(WebSite: kind,Page:number): Promise<Product[]> {
        const findMany = this.itens.filter(iten => iten.Kind == WebSite).slice((Page-1)*20,Page*20);
        return findMany
    }
    //fix this latter
    async findBySearchQuery(Query: string, Page: number): Promise<Product[]> {
        return this.itens
    }
    async findBySiteCategory(Where: string,Page:number): Promise<Product[]> {
        return this.itens.filter(iten=>iten.Where == Where).slice((Page-1)*20,Page*20);
    }
    async returnByPage(Page: number): Promise<Product[]> {
        return this.itens.slice((Page-1)*20,Page*20)
    }
    async findById(Id: string): Promise<Product | null> {
        const finUnique = this.itens.find(iten=>iten.Id == Id);
        return finUnique?finUnique:null
    }
}
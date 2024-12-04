import { kind, Product } from "../../../prisma/deploy-output";
import { ProductRepository } from "../ProductRepository";

export class InMemoryProductRepository implements ProductRepository{
    public itens:Product[] = [];
    async findByLink(Link: string): Promise<Product | null> {
        const finUnique = this.itens.find(iten=>iten.Link == Link);
        return finUnique?finUnique:null
    }
    async findBySite(WebSite: kind,Page:number): Promise<Product[]> {
        if(Page>0){
            return this.itens.filter(iten=>iten.Kind == WebSite).slice((Page-1)*20,Page*20);
        }else{ // do this for dev and test algorithism latter
            return this.itens.filter(iten=>iten.Kind == WebSite)
        }
    }
    async findBySearchQuery(Query: string, Page: number): Promise<Product[]> {
        var fixArray:Product[] = [];
        const findByDescription = this.itens.filter(iten => iten.Description?iten.Description.includes(Query):null);
        fixArray = fixArray.concat(findByDescription);
        return fixArray
    }
    async findBySiteCategory(Where: string,Page:number): Promise<Product[]> {
        if(Page>0){
            return this.itens.filter(iten=>iten.Where == Where).slice((Page-1)*20,Page*20);
        }else{ // do this for dev and test algorithism latter
            return this.itens.filter(iten=>iten.Where == Where)
        }

    }
    async returnByPage(Page: number): Promise<Product[]> {
        return this.itens.slice((Page-1)*20,Page*20)
    }
    async findById(Id: string): Promise<Product | null> {
        const finUnique = this.itens.find(iten=>iten.Id == Id);
        return finUnique?finUnique:null
    }
    async findByProductByCategory(Category: string,Page:number): Promise<Product[]> {
        const findMany = this.itens.filter(iten=> iten.Where == Category).slice((Page-1)*20,Page*20);
        return findMany
    }
    async findAll(): Promise<Product[]> {
        return this.itens
    }
}
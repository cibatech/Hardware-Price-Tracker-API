import { Product } from "../../../prisma/deploy-output";
import { ProductRepository } from "../../repository/ProductRepository";

interface GetProductListParams{
    Page:number
}

interface GetProductListResponse{
    ProductList:Product[]    
}

export class GetProductListUseCase{
    constructor(private ProductRepository:ProductRepository){}
    async execute({Page}:GetProductListParams):Promise<GetProductListResponse>{
        if(Page<0){
            throw new Error("Invalid page number. Try Something between 0 and 999")
        }

        const productTotalList = await this.ProductRepository.returnByPage(Page);
        
        return {
            ProductList:productTotalList
        }
    }
}
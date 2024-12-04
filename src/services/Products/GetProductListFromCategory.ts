import { ProductRepository } from "../../repository/ProductRepository";
import { InvalidParameterError } from "../Error/InvalidParameterError";

export class GetProdListFromCategoryUseCase{
    constructor(private ProdRepo:ProductRepository){}
    async execute(Category:string,Page:number){
        if(Category==""){
            throw new InvalidParameterError("Category", "Provide a non-empty string");
        }
        if(Page<0 || !Number.isInteger(Page)){
            throw new InvalidParameterError("Page number","Try to provide an integer between 1 and 9999")
        }
        const prodResponse = await this.ProdRepo.findByProductByCategory(Category,Page);

        return{
            ProductWithCategory:prodResponse
        }
    }
}
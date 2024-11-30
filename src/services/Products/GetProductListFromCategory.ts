import { ProductRepository } from "../../repository/ProductRepository";
import { InvalidParameterError } from "../Error/InvalidParameterError";

export class GetProdListFromCategoryUseCase{
    constructor(private ProdRepo:ProductRepository){}
    async execute(Category:string){
        if(Category==""){
            throw new InvalidParameterError("Category", "Provide a non-empty string");
        }

        const prodResponse = await this.ProdRepo.findByProductByCategory(Category);

        return{
            ProductWithCategory:prodResponse
        }
    }
}
import { ProductRepository } from "../../repository/ProductRepository";
import { InvalidParameterError } from "../Error/InvalidParameterError";


interface GetProductListFromQueryParams{
    Query:string,
    Page:number
}
export class GetProductListFromQueryUseCase{
    constructor(private ProdRepo:ProductRepository){}
    async execute({Page,Query}:GetProductListFromQueryParams){  
        if(Query ==""){
            throw new InvalidParameterError("Query","provide a non-empty string")
        }
        if(Page<=0){
            throw new InvalidParameterError("Page","Try To provide a number between 0 and infinite")
        }

        const ResponseList = await this.ProdRepo.findBySearchQuery(Query,Page);
        
        return ResponseList
    }
}
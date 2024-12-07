import { Product } from "../../../prisma/deploy-output";
import { ProductRepository } from "../../repository/ProductRepository";
import { InvalidParameterError } from "../Error/InvalidParameterError";

interface GetProductListParams{
    Page:number
}

interface GetProductListResponse{
    ProductList:Product[]    
}



/**
 * Use case for retrieving a product and its associated price references based on a product link.
 */
export class GetProductListUseCase{
    /**
     * Creates an instance of GetPriceReferenceFromSingleProductByLinkUseCase.
     * 
     * @param ProductRepo - Repository for accessing product data.
     * @param priceRepo - Repository for accessing price reference data.
     */
    constructor(private ProductRepository:ProductRepository){}
    /**
     * Executes the use case to fetch a product and its associated price references by the provided link.
     * 
     * @param params - Parameters required for execution.
     * @param params.Link - The product link used to search for the product and its price references.
     * 
     * @returns An object containing the product and its associated price references.
     * 
     * @throws {ResourceNotFoundError} If no product is found with the specified link.
    */
    async execute({Page}:GetProductListParams):Promise<GetProductListResponse>{
        console.log("Get service called")
        if(Page<-1){
            throw new InvalidParameterError("Page","use something between 0 and 999")
        }

        const productTotalList = await this.ProductRepository.returnByPage(Page);
        
        return {
            ProductList:productTotalList
        }
    }
}
import { Price, Product } from "../../../prisma/deploy-output";
import { PriceReferenceRepository } from "../../repository/PriceRefRepository";
import { ProductRepository } from "../../repository/ProductRepository";
import { ResourceNotFoundError } from "../Error/ResourceNotFound";


interface GetPriceReferenceFromSingleProductByIdParams{
    Id:string
}
interface GetPriceReferenceFromSingleProductByIdReturn{
    Product:Product,
    PriceRef:Price[]
}

/**
 * Use case to fetch price references for a single product identified by its link.
 * 
 * This class interacts with the `ProductRepository` and `PriceReferenceRepository` 
 * to fetch a product's details and its associated price references.
 */
export class GetPriceReferenceFromSingleProductByIdUseCase{
     /**
     * Constructs an instance of `GetPriceReferenceFromSingleProductByLinkUseCase`.
     * 
     * @param ProductRepo - Repository for managing product data.
     * @param priceRepo - Repository for managing price reference data.
     */

    constructor(private ProductRepo:ProductRepository,private priceRepo:PriceReferenceRepository){}
    /**
     * Executes the use case to fetch product and price reference data.
     * 
     * @param params - Parameters containing the link of the product.
     * @param params.Link - The link to identify the product.
     * @returns An object containing the product and its associated price references.
     * @throws {ResourceNotFoundError} If no product is found for the given link.
     */
    async execute({Id}:GetPriceReferenceFromSingleProductByIdParams):Promise<GetPriceReferenceFromSingleProductByIdReturn>{
        const TheresAnyProductWithThisId = await this.ProductRepo.findById(Id)
        if(!TheresAnyProductWithThisId){
            //Retorna um Error informando a entidade que nao foi encontrada e a chave que nao foi encontrada (No caso o Link).
            throw new ResourceNotFoundError("Product",Id);
        }

        const FindPriceReferenceWithThisId = await this.priceRepo.findByProduct(TheresAnyProductWithThisId.Id);
        
        return{
            Product:TheresAnyProductWithThisId,
            PriceRef:FindPriceReferenceWithThisId
        }
    }
}
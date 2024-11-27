import { kind, Product } from "../../../prisma/deploy-output";
import { ProductRepository } from "../../repository/ProductRepository";
import { InvalidParameterError } from "../Error/InvalidParameterError";



interface UseCaseParams{
    Store:kind,
    Page:number
}

interface UseCaseResponse{
    Params:UseCaseParams,
    prodListFromProvidedStore:Product[]
}

export class GetProdListFromASpecificStoreUseCase {
    constructor(private prodRepo:ProductRepository){}
    async execute({Page,Store}:UseCaseParams):Promise<UseCaseResponse>{
        if(Page<0 || !Number.isInteger(Page)){
            throw new InvalidParameterError("Page number","Try to provide an integer between 1 and 9999")
        }

        const prodListFromProvidedStore = await this.prodRepo.findBySite(Store,Page)
        
        return{
            Params:{
                Page,
                Store
            },
            prodListFromProvidedStore
        }
    }
}
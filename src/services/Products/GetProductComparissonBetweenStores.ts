import { Product } from "../../../prisma/deploy-output";
import { ProductRepository } from "../../repository/ProductRepository";
import { FindBestProductPrice } from "../../utils/algorithims/FindBestPrice";
import { ClosestProduct } from "../../utils/algorithims/LongestCommonSubstring";
import { GotEmptyList } from "../../Error/InternalServerError";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";

interface EveryStoreReturn{
    KabumAlternative:Product,
    TerabyteAlternative:Product,
    PichauAlternative:Product
}
interface GetProductPriceCompareBetweenDiferentStoresRequest{
    Id:string,

}

export class GetProductPriceCompareBetweenDiferentStoresUseCase{
    constructor(private ProdRepo:ProductRepository){}
    async execute({Id}:GetProductPriceCompareBetweenDiferentStoresRequest){

        const doesTheProductReallyExists = await this.ProdRepo.findById(Id);
        if(!doesTheProductReallyExists){
            throw new ResourceNotFoundError("Product",Id)
        }
        const QueryTitle = String(doesTheProductReallyExists.Title)
        //Get Every Store product List
        const Pichau_ProdList = await this.ProdRepo.findBySite("Pichau",-1);
        const Kabum_ProdList = await this.ProdRepo.findBySite("Kabum",-1);
        const TeraByte_ProdList = await this.ProdRepo.findBySite("TeraByte",-1);
  
        if(!Pichau_ProdList[0]||!Kabum_ProdList[0]||!TeraByte_ProdList[0]){
            throw new GotEmptyList("GetProductPriceCompareBetweenDiferentStoresUseCase")
        }

        const MatchProductFromPichau = ClosestProduct(QueryTitle,Pichau_ProdList)
        const MatchProductFromKabum = ClosestProduct(QueryTitle,Kabum_ProdList)
        const MatchProductFromTerabyte = ClosestProduct(QueryTitle,TeraByte_ProdList)

        console.log([
            MatchProductFromKabum,
            MatchProductFromPichau,
            MatchProductFromTerabyte
        ]);
        
        const bestPrice = FindBestProductPrice([
            MatchProductFromKabum,
            MatchProductFromPichau,
            MatchProductFromTerabyte
        ]);

        return{
            FindInThreeStores:[
                MatchProductFromKabum,
                MatchProductFromPichau,
                MatchProductFromTerabyte
            ],
            BestPrice:bestPrice
        };
    }
}
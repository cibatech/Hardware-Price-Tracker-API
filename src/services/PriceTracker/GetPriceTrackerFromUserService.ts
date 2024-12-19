import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { UserRepository } from "../../repository/UserRepository";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";
import { ProductRepository } from "../../repository/ProductRepository";
interface GetPriceTrackerInformations {
    TargetPrice:number,
    ProdImage:string | null,
    ProdName:string | null
}

export class GetPriceTrackerFromUserUseCase{
    constructor(private PriceTrackerRepo:PriceTrackerRepository,private UserRepo:UserRepository,private ProdRepo:ProductRepository){}
    async execute(UserId:string){
        const DoesTheUserExists = await this.UserRepo.FindById(UserId)
        if(!DoesTheUserExists){
            throw new ResourceNotFoundError("User",UserId);
        }
        const findByUser = await this.PriceTrackerRepo.findByUser(UserId)

        const ResponseList:GetPriceTrackerInformations[] = []
    
        for(let i=0;i<findByUser.length;i++){
            const e = findByUser[i]
            const product = await this.ProdRepo.findById(e.ProdId);
            ResponseList.push({
                TargetPrice:e.TargetPrice,
                ProdImage:product?product.ImageUrl:null,
                ProdName:product?product.Title:null,
            })
        }

       

        console.log(ResponseList)
        return ResponseList
    }
}
import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { ProductRepository } from "../../repository/ProductRepository";
import { UserRepository } from "../../repository/UserRepository";
import { ResourceNotFoundError } from "../Error/ResourceNotFound";

export class GetPriceTrackerFromProductUseCase{
    constructor(private PriceTrackerRepo:PriceTrackerRepository,private ProdRepo:ProductRepository){}
    async execute(Pid:string){
        const DoesTheUserExists = await this.ProdRepo.findById(Pid)
        if(!DoesTheUserExists){
            throw new ResourceNotFoundError("Product",Pid);
        }
        const ReturnList = await this.PriceTrackerRepo.findByProduct(Pid)
        return ReturnList
    }
}
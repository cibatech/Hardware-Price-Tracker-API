import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { UserRepository } from "../../repository/UserRepository";
import { ResourceNotFoundError } from "../Error/ResourceNotFound";

export class GetPriceTrackerFromUserUseCase{
    constructor(private PriceTrackerRepo:PriceTrackerRepository,private UserRepo:UserRepository){}
    async execute(UserId:string){
        const DoesTheUserExists = await this.UserRepo.FindById(UserId)
        if(!DoesTheUserExists){
            throw new ResourceNotFoundError("User",UserId);
        }
        const ReturnList = await this.PriceTrackerRepo.findByUser(UserId)
        return ReturnList
    }
}
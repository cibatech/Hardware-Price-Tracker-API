import { TriggerWarning } from "../../../prisma/deploy-output";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";
import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { UserRepository } from "../../repository/UserRepository";

export class DeleteManyPriceTrackersByUserUseCase{
    constructor(private PriceTRepo:PriceTrackerRepository, private UserRepo:UserRepository){}
    async execute(UserId:string):Promise<TriggerWarning[]>{
        const doesTheUserExists = await this.UserRepo.FindById(UserId);
        if(!doesTheUserExists){
            throw new ResourceNotFoundError("User",UserId)
        }

        const PriceTrackerListFromUser = await this.PriceTRepo.findByUser(UserId);
        const deletedList:TriggerWarning[] = []
        PriceTrackerListFromUser.forEach(async PT=>{
            const deleted = await this.PriceTRepo.delete(PT.Id)
            deletedList.push(deleted)
        })

        return deletedList
    }
}
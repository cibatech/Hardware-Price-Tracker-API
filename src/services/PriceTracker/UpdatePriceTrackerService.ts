import { TriggerWarning } from "../../../prisma/deploy-output";
import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { ResourceNotFoundError } from "../Error/ResourceNotFound";

export class UpdatePriceTrackerUseCase{
    constructor(private PriceTrackerRepo:PriceTrackerRepository){}
    async execute(Id:string, newPriceValue:number):Promise<TriggerWarning>{
        const DoesTheTrackerExists = await this.PriceTrackerRepo.findById(Id);
        if(!DoesTheTrackerExists){
            throw new ResourceNotFoundError("Price Tracker",Id);
        }
        const newValue = this.PriceTrackerRepo.update(Id,{TargetPrice:newPriceValue});

        return newValue
    }
}
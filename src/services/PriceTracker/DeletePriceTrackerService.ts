import { TriggerWarning } from "../../../prisma/deploy-output";
import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";

export class DeletePriceTrackerUseCase{
    constructor(private PriceTRepo:PriceTrackerRepository){}
    async execute(Id:string):Promise<TriggerWarning>{
        const DoesTheTrackerExists = await this.PriceTRepo.findById(Id);
        if(!DoesTheTrackerExists){
            throw new ResourceNotFoundError("Price Tracker",Id);
        }

        const deleted = await this.PriceTRepo.delete(Id);

        return deleted
    }
}
import { Prisma, TriggerWarning } from "../../../prisma/deploy-output";
import { PriceTrackerRepository } from "../../repository/PriceTracker";
import { ProductRepository } from "../../repository/ProductRepository";
import { UserRepository } from "../../repository/UserRepository";
import { TriedInvalidOperation } from "../../Error/InvalidOperationTried";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";

interface CreatePriceTrackerRequest{
    Data:Prisma.TriggerWarningUncheckedCreateInput
}

export class CreatePriceTrackerUseCase{
    constructor(private PriceRepo:PriceTrackerRepository, private UserRepo:UserRepository,private productRepo:ProductRepository){}
    async execute({Data}:CreatePriceTrackerRequest):Promise<TriggerWarning>{
        const doesTheUserExists = await this.UserRepo.FindById(Data.UserId);
        if(!doesTheUserExists){
            throw new ResourceNotFoundError("User", Data.UserId);
        }
        const doesTheProductExists = await this.productRepo.findById(Data.ProdId);
        if(!doesTheProductExists){
            throw new ResourceNotFoundError("Product", Data.ProdId);
        }
        const prodList = await this.PriceRepo.findByProduct(Data.ProdId);
         prodList.forEach(element => {
            if(element.UserId == Data.UserId){
                throw new TriedInvalidOperation("User tried to create a price tracker in a product that he already has created a price tracker")
            }
        });

        const createPriceTracker = this.PriceRepo.create(Data)
        return createPriceTracker
    }
}
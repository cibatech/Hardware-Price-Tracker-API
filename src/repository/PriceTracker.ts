import { Prisma, TriggerWarning } from "../../prisma/deploy-output";

export interface PriceTrackerRepository{
    create(data:Prisma.TriggerWarningUncheckedCreateInput):Promise<TriggerWarning>
    findById(Id:string):Promise<TriggerWarning | null>
    findByUser(UserId:string):Promise<TriggerWarning[]>
    findByProduct(ProdId:string):Promise<TriggerWarning[]>
    delete(Id:string):Promise<TriggerWarning>
    update(Id:string,data:Partial<TriggerWarning>):Promise<TriggerWarning>
}

import { randomUUID } from "crypto";
import { Prisma, TriggerWarning } from "../../../prisma/deploy-output";
import {PriceTrackerRepository} from "../PriceTracker"

export class InMemoryPriceTrackerRepository implements PriceTrackerRepository {
    private triggerWarnings: TriggerWarning[] = [];

    // Cria um novo TriggerWarning
    async create(data: Prisma.TriggerWarningUncheckedCreateInput): Promise<TriggerWarning> {
        const newTriggerWarning: TriggerWarning = {
            Id:randomUUID(),
            ProdId:String(data.ProdId),
            TargetPrice:Number(data.TargetPrice),
            UserId:String(data.UserId)
        };
        this.triggerWarnings.push(newTriggerWarning);
        return newTriggerWarning;
    }

    // Busca por ID
    async findById(id: string): Promise<TriggerWarning | null> {
        return this.triggerWarnings.find((tw) => tw.Id === id) || null;
    }

    // Busca por usuário
    async findByUser(userId: string): Promise<TriggerWarning[]> {
        return this.triggerWarnings.filter((tw) => tw.UserId === userId);
    }

    // Busca por produto
    async findByProduct(productId: string): Promise<TriggerWarning[]> {
        return this.triggerWarnings.filter((tw) => tw.ProdId === productId);
    }
    async delete(Id: string): Promise<TriggerWarning> {
        const FoundIndex = this.triggerWarnings.findIndex(i => i.Id == Id);
        const oldValue = this.triggerWarnings[FoundIndex];
        this.triggerWarnings.splice(FoundIndex,1);

        return oldValue
    }
    async update(Id: string, data: Partial<TriggerWarning>): Promise<TriggerWarning> {
            const Index = this.triggerWarnings.findIndex(itens=>itens.Id==Id);
            const oldId = this.triggerWarnings[Index]
            const newTrigger:TriggerWarning = {
                TargetPrice:data.TargetPrice?data.TargetPrice:oldId.TargetPrice,
                Id:oldId.Id,
                ProdId:oldId.ProdId,UserId:oldId.UserId
            }
            this.triggerWarnings[Index] = newTrigger
            return this.triggerWarnings[Index];
    }
}


import { randomUUID } from "crypto";
import { Prisma, TriggerWarning } from "../../../prisma/deploy-output";
import { PriceTracker } from "../PriceTracker";

export class InMemoryPriceTracker implements PriceTracker {
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
}

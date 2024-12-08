import { Prisma, TriggerWarning } from "../../../prisma/deploy-output";
import { prisma } from "../../lib/prisma";
import { PriceTrackerRepository } from "../PriceTracker";

export class PrismaPriceTrackerRepository implements PriceTrackerRepository {
  async create(data: Prisma.TriggerWarningUncheckedCreateInput): Promise<TriggerWarning> {
    return prisma.triggerWarning.create({
      data,
    });
  }

  async findById(Id: string): Promise<TriggerWarning | null> {
    return prisma.triggerWarning.findUnique({
      where: {
        Id
      },
    });
  }

  async findByUser(UserId: string): Promise<TriggerWarning[]> {
    return prisma.triggerWarning.findMany({
      where: {
        UserId,
      },
    });
  }

  async findByProduct(ProdId: string): Promise<TriggerWarning[]> {
    return prisma.triggerWarning.findMany({
      where: {
        ProdId,
      },
    });
  }
}

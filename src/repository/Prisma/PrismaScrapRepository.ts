import { Scrap } from "../../../prisma/deploy-output";
import { prisma } from "../../lib/prisma";
import { ScrapRepository } from "../ScrapRepository";

export class PrismaScrapRepository implements ScrapRepository{
    async findByDate(pasDays: number): Promise<Scrap[]> {
            const now = new Date(); // Data atual
            const pastDate = new Date();
            pastDate.setDate(now.getDate() - pasDays); // Data inicial (dias no passado)
        
            return await prisma.scrap.findMany({
                where: {
                      CreatedAt: {
                        gte: pastDate, // Maior ou igual à data no passado
                        lte: now       // Menor ou igual à data atual
                    }
                }
            });
    }
}
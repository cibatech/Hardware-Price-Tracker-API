
import { ADDRGETNETWORKPARAMS } from "dns";
import { Issue } from "../../../prisma/deploy-output";
import {prisma} from "../../lib/prisma"
import {IssuesRepository} from "../IssueRepository"
export class PrismaIssuesRepository implements IssuesRepository {

  async findById(id: string): Promise<Issue | null> {
    return await prisma.issue.findUnique({
      where: { Id:id },
    });
  }

  async findByDate(daysAgo:number): Promise<Issue[]> {
    const now = new Date(); // Data atual
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - daysAgo); // Data inicial (dias no passado)

    return await prisma.issue.findMany({
        where: {
              When: {
                gte: pastDate, // Maior ou igual à data no passado
                lte: now       // Menor ou igual à data atual
            }
        }
    });
  }

  async findByAt(at: string): Promise<Issue[]> {
    return await prisma.issue.findMany({
      where: { At:at },
    });
  }
  async findAll(Page: number): Promise<Issue[]> {
    return prisma.issue.findMany({
      skip:(Page-1)*20,
      take:Page*20
    }) 
  }
}

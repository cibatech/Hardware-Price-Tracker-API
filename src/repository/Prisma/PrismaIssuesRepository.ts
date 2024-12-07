
import { Issue } from "../../../prisma/deploy-output";
import {prisma} from "../../lib/prisma"
import {IssuesRepository} from "../IssueRepository"
export class PrismaIssuesRepository implements IssuesRepository {

  async findById(id: string): Promise<Issue | null> {
    return prisma.issue.findUnique({
      where: { Id:id },
    });
  }

  async findByDate(date: Date): Promise<Issue[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return prisma.issue.findMany({
      where: {
        When: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });
  }

  async findByAt(at: string): Promise<Issue[]> {
    return prisma.issue.findMany({
      where: { At:at },
    });
  }
}

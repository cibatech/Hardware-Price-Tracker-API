import { Issue, Prisma } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../IssueRepository";

export class InMemoryIssuesRepository implements IssuesRepository {
  public issues: Issue[] = [];

  async findById(id: string): Promise<Issue | null> {
    const p =this.issues.find(issue => issue.Id == id)
    return p?p:null;
  }

  async findByDate(daysAgo: number): Promise<Issue[]> {
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - daysAgo); // Calcula a data no passado

    // Filtra os itens cujo `AtDate` está no intervalo de tempo
    const filteredPrices = this.issues.filter(item => {
        return item.When >= pastDate && item.When <= now;
    });
    return filteredPrices;
  }

  async findByAt(at: string): Promise<Issue[]> {
    return this.issues.filter(issue => issue.At === at);
  }
  async findAll(Page: number): Promise<Issue[]> {
    return this.issues.slice((Page-1)*20,Page*20);
  }
}

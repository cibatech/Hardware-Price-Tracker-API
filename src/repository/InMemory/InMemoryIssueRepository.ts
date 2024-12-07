import { Issue, Prisma } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../IssueRepository";

export class InMemoryIssuesRepository implements IssuesRepository {
  public issues: Issue[] = [];

  async findById(id: string): Promise<Issue | null> {
    const p =this.issues.find(issue => issue.Id == id)
    return p?p:null;
  }

  async findByDate(date: Date): Promise<Issue[]> {
    const targetDate = date.toISOString().split("T")[0]; // Comparar apenas a data
    return this.issues.filter(
      issue => issue.When.toISOString().split("T")[0] === targetDate
    );
  }

  async findByAt(at: string): Promise<Issue[]> {
    return this.issues.filter(issue => issue.At === at);
  }
}

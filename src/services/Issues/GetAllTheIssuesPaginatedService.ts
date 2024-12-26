import { Issue } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../../repository/IssueRepository";

export class GetAllTheIssuesPaginatedUseCase {
    constructor(private IssuesRepo:IssuesRepository){}
    async execute(Page:number):Promise<Issue[]>{
        const IssuesList = await this.IssuesRepo.findAll(Page)

        return IssuesList
    }
}
import { Issue } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../../repository/IssueRepository";

export class GetIssuesByDateUseCase{
    constructor(private IssuesRepo:IssuesRepository){}
    async execute(pasDays:number):Promise<Issue[]>{
        return this.IssuesRepo.findByDate(pasDays)
    }
}
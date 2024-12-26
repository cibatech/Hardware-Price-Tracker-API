import { Issue } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../../repository/IssueRepository";

export class GetIssueByPlaceUseCase{
    constructor(private IssuesRepo:IssuesRepository){}
    async execute(where:string):Promise<Issue[]>{
        return this.IssuesRepo.findByAt(where)
    }
}
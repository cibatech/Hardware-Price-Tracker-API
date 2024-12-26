import { Issue, Prisma } from "../../prisma/deploy-output";

export interface IssuesRepository{
    findById(id:string):Promise<Issue | null>
    findByDate(daysAgo:number):Promise<Issue[]> //return from a specific day
    findByAt(at:string):Promise<Issue[]>
    findAll(Page:number):Promise<Issue[]>
}
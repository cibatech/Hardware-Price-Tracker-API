import { Scrap } from "../../prisma/deploy-output";

export interface ScrapRepository{
    findByDate(pasDays:number):Promise<Scrap[]>
}
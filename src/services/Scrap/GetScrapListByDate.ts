import { Scrap } from "../../../prisma/deploy-output";
import { ScrapRepository } from "../../repository/ScrapRepository";

export class GetScrapListByDateUseCase {
    constructor(private ScrapRepo:ScrapRepository){}
    async execute(PasDays:number):Promise<Scrap[]>{
        return this.ScrapRepo.findByDate(PasDays)
    }
}
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetIssuesByDateUseCase } from "../../../services/Issues/GetIssuesListByDateService";
import { PrismaIssuesRepository } from "../../../repository/Prisma/PrismaIssuesRepository";

export async function GETIssueListByDateController(req:FastifyRequest,res:FastifyReply) {
    const {pasDays} = z.object({
        pasDays:z.string()
    }).parse(req.params)
    const service = new GetIssuesByDateUseCase(new PrismaIssuesRepository);
    try{
        const a = Number(pasDays)
        const response = await service.execute(a)

        res.status(200).send({
            DescriptioN:"Successfully returned response list",
            response,
            config:{
                pasDays
            }
        })
    }catch(err){
        res.status(500).send({
            Description:"Unknow server Error"
        })
    }
    
}
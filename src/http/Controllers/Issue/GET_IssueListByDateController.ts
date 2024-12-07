import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetIssuesByDateUseCase } from "../../../services/Issues/GetIssuesListByDateService";
import { PrismaIssuesRepository } from "../../../repository/Prisma/PrismaIssuesRepository";

export async function GETIssueListByDateController(req:FastifyRequest,res:FastifyReply) {
    const {date} = z.object({
        date:z.string()
    }).parse(req.params)
    const service = new GetIssuesByDateUseCase(new PrismaIssuesRepository);
    try{
        const a = new Date(date)
        const response = await service.execute(a)

        res.status(200).send({
            DescriptioN:"Successfully returned response list",
            response,
            config:{
                date
            }
        })
    }catch(err){
        res.status(500).send({
            Description:"Unknow server Error"
        })
    }
    
}
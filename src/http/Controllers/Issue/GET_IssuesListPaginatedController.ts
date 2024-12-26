import { FastifyReply, FastifyRequest } from "fastify";
import { GetAllTheIssuesPaginatedUseCase } from "../../../services/Issues";
import { PrismaIssuesRepository } from "../../../repository/Prisma/PrismaIssuesRepository";
import { z } from "zod";

export async function GETIssuesListPaginatedController(req:FastifyRequest,res:FastifyReply) {
    const {Page} = z.object({
        Page:z.string()
    }).parse(req.params)
    
    const service = new GetAllTheIssuesPaginatedUseCase(new PrismaIssuesRepository);
    
    try{
        const response = await service.execute(Number(Page))

        res.status(200).send({
            DescriptioN:"Successfully returned response list",
            response,
            config:{
                Page
            }
        })
    }catch(err){
        res.status(500).send({
            Description:"Unknow server Error"
        })
    }
    
}
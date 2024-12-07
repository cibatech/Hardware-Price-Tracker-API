import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetIssuesByDateUseCase } from "../../../services/Issues/GetIssuesListByDateService";
import { PrismaIssuesRepository } from "../../../repository/Prisma/PrismaIssuesRepository";
import { GetIssueByPlaceUseCase } from "../../../services/Issues/GetIssueByAppPlaceService";

export async function GETIssueListByAtController(req:FastifyRequest,res:FastifyReply) {
    const {Place} = z.object({
        Place:z.string()
    }).parse(req.params)
    const service = new GetIssueByPlaceUseCase(new PrismaIssuesRepository);
    try{
        const response = await service.execute(Place)

        res.status(200).send({
            DescriptioN:"Successfully returned response list",
            response,
            config:{
                Place
            }
        })
    }catch(err){
        res.status(500).send({
            Description:"Unknow server Error"
        })
    }
    
}
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetScrapListByDateUseCase } from "../../../services/Scrap/GetScrapListByDate";
import { PrismaScrapRepository } from "../../../repository/Prisma/PrismaScrapRepository";
import { PrismaIssuesRepository } from "../../../repository/Prisma/PrismaIssuesRepository";

export async function GETScrapListByDateController(req:FastifyRequest,res:FastifyReply){
    const {PasDays} = z.object({
        PasDays:z.string()
    }).parse(req.params)
    const Service = new GetScrapListByDateUseCase(new PrismaScrapRepository, new PrismaIssuesRepository)

    try{
        const response = await Service.execute(Number(PasDays))

        res.status(200).send({
            Description:"Successfully returned Scrap Registry",
            response,
            config:{
                PasDays
            }
        })
    }catch(err){
        res.status(500).send({
            Description:"Unknow Error"
        })
    }
}
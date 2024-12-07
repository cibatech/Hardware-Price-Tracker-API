import { FastifyReply, FastifyRequest } from "fastify";
import { GetProductListUseCase, GetProductListFromQueryUseCase} from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { InvalidParameterError } from "../../../services/Error/InvalidParameterError";

export async function GETProductListFromQueryController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetProductListFromQueryUseCase(new PrismaProductRepository)
    
    const {Page,Query} = z.object({
        Page:z.string(),
        Query:z.string()
    }).parse(req.params)
    
    try{
        let a = Number(Page)
        const response = await service.execute({Page:a,Query})

        res.status(200).send({
            Description:"Successfully returned products list from a query",
            response,
            Config:{
                Page,
                Query
            }
        })
    }catch(err){
        if(err instanceof InvalidParameterError){
            res.status(400).send({
                Description:"Invalid Parameter Error",
                Reason:"Page number or Query is invalid. Try to provide something between 0 and 999999999 for the page and a non empty string for query",
                Error:{
                    err
                },
                
            })
        }else{
            res.status(500).send({
                Description:"Unknow Server Error"
            })
        }
    }
}
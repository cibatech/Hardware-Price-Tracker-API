import { FastifyReply, FastifyRequest } from "fastify";
import { GetProductListUseCase, GetProductsByFilterUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { InvalidParameterError } from "../../../services/Error/InvalidParameterError";

export async function GETProductsListWithFilltersController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetProductsByFilterUseCase(new PrismaProductRepository);
    
    const {Page,Category,Max,Min,Store,Query} = z.object({
        Page:z.string(),
        Category:z.string(),
        Min:z.string(),
        Max:z.string(),
        Store:z.enum(["TeraByte","Pichau","Kabum","null"]),
        Query:z.string()

    }).parse(req.params)
    
    try{
        let a = Number(Page)
        const response = await service.execute({
            Page:a,
            Max:Max!="null"?Number(Max):null,
            Category:Category="null"?Category:null,
            Min:Min!="null"?Number(Min):null,
            Store:Store!="null"?Store:null,
            Query:Query!="null"?Query:null
        })
        

        res.status(200).send({
            Description:"Successfully returned products list",
            response,
            Config:{
                Page,Query,Store,Min,Max
            }
        })
    }catch(err){
        if(err instanceof InvalidParameterError){
            res.status(400).send({
                Description:"Invalid Parameter Error",
                Reason:"Page number is invalid. Try to provide something between 0 and 999999999",
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
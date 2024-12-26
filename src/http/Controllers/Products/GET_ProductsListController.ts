import { FastifyReply, FastifyRequest } from "fastify";
import { GetProductListUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";

export async function GETProductsListController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetProductListUseCase(new PrismaProductRepository);
    
    const {Page} = z.object({
        Page:z.string()
    }).parse(req.params)
    
    try{
        let a = Number(Page)
        const response = await service.execute({
            Page:a
        })

        res.status(200).send({
            Description:"Successfully returned products list",
            response,
            Config:{
                Page
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
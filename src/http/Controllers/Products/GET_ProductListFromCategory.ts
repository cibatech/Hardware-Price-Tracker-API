import { FastifyReply, FastifyRequest } from "fastify";
import { GetProdListFromCategoryUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";

export async function GETProductListFromCategoryController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetProdListFromCategoryUseCase(new PrismaProductRepository)
    const {Category,Page} = z.object({
        Category:z.string(),
        Page:z.string()
    }).parse(req.params)

    try{
        const response = await service.execute(Category,Number(Page))

        res.status(200).send({
            Description:"Successfully returned Information",
            response,
            Config:{
                Category,
                Page
            }
        })
    }catch(err){
        if(err instanceof InvalidParameterError){
            res.status(400).send({
                Description:"Invalid Parameter Error",
                Reason:"Page or Category values are invalid, try to follow the the error fix tip",
                Error:{
                    err
                }
            })
        }else{
            res.status(500).send({
                Description:"Unknow Server Error"
            })
        }
    }
}
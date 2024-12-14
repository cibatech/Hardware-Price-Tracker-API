import { FastifyReply, FastifyRequest } from "fastify";
import { GetProdListFromASpecificStoreUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { kind } from "../../../../prisma/deploy-output";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";

export async function GETProductListFromASpecificStoreController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetProdListFromASpecificStoreUseCase(new PrismaProductRepository)
    const {Page,Store} = z.object({
        Store:z.enum(["TeraByte","Pichau","Kabum"]),
        Page:z.string()
    }).parse(req.params)

    try{
        const response = await service.execute({
            Page:Number(Page),
            Store
        })

        res.status(200).send({
            Description:"Successfully returned Information",
            response,
            Config:{
                SelectedStore:Store,
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
                }
            })
        }else{
            res.status(500).send({
                Description:"Unknow Server Error!"
            })
        }
    }
}
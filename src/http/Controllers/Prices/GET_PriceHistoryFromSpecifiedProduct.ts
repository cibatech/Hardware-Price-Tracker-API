import { FastifyReply, FastifyRequest } from "fastify";
import { GetPriceReferenceFromSingleProductByIdUseCase, GetProductListUseCase, GetProductsByFilterUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";
import { PrismaPriceRepository } from "../../../repository/Prisma/PrismaPriceRepository";

export async function GETPRiceReferenceFromSingleProductController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetPriceReferenceFromSingleProductByIdUseCase(new PrismaProductRepository,new PrismaPriceRepository);
    
    const {Id,PasDays} = z.object({
        Id:z.string().uuid(),
        PasDays:z.string()
    }).parse(req.params)
    
    try{
        const a = Number(PasDays)
        const response = await service.execute({Id,PasDays:a})
        console.log(response)
        res.status(200).send({
            Description:"Successfully returned product's price list from specified time elapse",
            response,
            Config:{
                Id,
                PasDays
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
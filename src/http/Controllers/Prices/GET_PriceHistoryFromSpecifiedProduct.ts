import { FastifyReply, FastifyRequest } from "fastify";
import { GetPriceReferenceFromSingleProductByIdUseCase, GetProductListUseCase, GetProductsByFilterUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { InvalidParameterError } from "../../../services/Error/InvalidParameterError";
import { PrismaPriceRepository } from "../../../repository/Prisma/PrismaPriceRepository";

export async function GETProductsListWithFilltersController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetPriceReferenceFromSingleProductByIdUseCase(new PrismaProductRepository,new PrismaPriceRepository);
    
    const {Id} = z.object({
        Id:z.string().uuid()

    }).parse(req.params)
    
    try{
        const response = await service.execute({Id})

        res.status(200).send({
            Description:"Successfully returned products list",
            response,
            Config:{
                Id
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
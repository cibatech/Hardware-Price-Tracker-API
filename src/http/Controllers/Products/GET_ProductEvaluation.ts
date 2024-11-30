import { FastifyReply, FastifyRequest } from "fastify";
import { GetPriceReferenceFromSingleProductByIdUseCase, GetProdListFromASpecificStoreUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { kind } from "../../../../prisma/deploy-output";
import { InvalidParameterError } from "../../../services/Error/InvalidParameterError";
import { PrismaPriceRepository } from "../../../repository/Prisma/PrismaPriceRepository";
import { ResourceNotFoundError } from "../../../services/Error/ResourceNotFound";

export async function GETProductEvaluationController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetPriceReferenceFromSingleProductByIdUseCase(new PrismaProductRepository, new PrismaPriceRepository)
    const {Id} = z.object({
        Id:z.string().uuid()
    }).parse(req.params)

    try{
        const response = await service.execute({
            Id
        })

        res.status(200).send({
            Description:"Successfully returned Information",
            response,
            Config:{
                Id
            }
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError){
            res.status(404).send({
                Description:"Product Not Found",
                Reason:"Try to provide an existing product.",
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
import { FastifyReply, FastifyRequest } from "fastify";
import { GetProdListFromASpecificStoreUseCase } from "../../../services";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { kind } from "../../../../prisma/deploy-output";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";
import { GetProductPriceCompareBetweenDiferentStoresUseCase } from "../../../services/Products/GetProductComparissonBetweenStores";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";

export async function GETBestProductFromAllStoresController(req:FastifyRequest,res:FastifyReply) {
    const service = new GetProductPriceCompareBetweenDiferentStoresUseCase(new PrismaProductRepository)
    const {Id} = z.object({
        Id:z.string().uuid()
    }).parse(req.params)

    try{
        const response = await service.execute({Id})

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
            });
        }else{
            res.status(500).send({
                Description:"Unknow Server Error"
            })
        }
    }
}
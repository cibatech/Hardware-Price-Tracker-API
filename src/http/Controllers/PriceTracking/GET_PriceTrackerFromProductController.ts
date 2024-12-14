import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import {GetPriceTrackerFromProductUseCase} from "../../../services"
import { PrismaPriceTrackerRepository } from "../../../repository/Prisma/PrismaPriceTrackerRepository";
import { ResourceNotFoundError } from "../../../services/Error/ResourceNotFound";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";

export async function GETPriceTrackerFromProductController(req:FastifyRequest,res:FastifyReply) {
    const {ProdId} = z.object({
        ProdId:z.string().uuid()
    }).parse(req.params)

    const service = new GetPriceTrackerFromProductUseCase(new PrismaPriceTrackerRepository,new PrismaProductRepository)
    try{
        const resp = await service.execute(ProdId)

        res.status(200).send({
            Description:"Successfully returned priceTracker list from provided Product",
            resp,
            config:{
                ProdId
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
        }
    }
}
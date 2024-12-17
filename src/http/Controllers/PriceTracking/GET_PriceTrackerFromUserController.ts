import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import {GetPriceTrackerFromUserUseCase} from "../../../services"
import { PrismaPriceTrackerRepository } from "../../../repository/Prisma/PrismaPriceTrackerRepository";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";

export async function GETPriceTrackerFromUserController(req:FastifyRequest,res:FastifyReply) {
    const {UserId} = z.object({
        UserId:z.string().uuid()
    }).parse(req.params)

    const service = new GetPriceTrackerFromUserUseCase(new PrismaPriceTrackerRepository,new PrismaUserRepository, new PrismaProductRepository)
    try{
        const resp = await service.execute(UserId)

        res.status(200).send({
            Description:"Successfully returned priceTracker list from provided user",
            resp
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError){
            res.status(404).send({
                Description:"User Not Found",
                Reason:"Try to provide an existing User.",
                Error:{
                    err
                }
            })
        }
    }
}
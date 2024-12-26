import { FastifyReply, FastifyRequest } from "fastify";
import {CreatePriceTrackerUseCase} from "./../../../services/index"
import { PrismaPriceTrackerRepository } from "../../../repository/Prisma/PrismaPriceTrackerRepository";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { PrismaProductRepository } from "../../../repository/Prisma/PrismaProductRepository";
import { z } from "zod";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";
import { TriedInvalidOperation } from "../../../Error/InvalidOperationTried";
export async function POSTPriceTrackerController(req:FastifyRequest, res:FastifyReply) {
    const service = new CreatePriceTrackerUseCase(new PrismaPriceTrackerRepository,
                                              new PrismaUserRepository,
                                              new PrismaProductRepository)
    const {ProdId,TargetPrice,UserId} = z.object({
        TargetPrice: z.number(),
        UserId: z.string().uuid(),
        ProdId: z.string().uuid()
    }).parse(req.body)

    try{
        const response = await service.execute({Data:{
            ProdId,TargetPrice,UserId
        }})
        res.status(201).send({
            Description:"Successfully created a PriceTracker",
            response,
            config:{
                ProdId,TargetPrice,UserId
            }
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError){
            res.status(400).send({
                DescriptioN:"Cant create the Price Tracker because either the user or the product does not exits",
                Error:{
                    err
                }
            })
        }else if( err instanceof TriedInvalidOperation){
            res.status(405).send({
                DescriptioN:"Cant create the Price Tracker because there's already a price tracker created from this user to this product. Only one is acepted",
                Error:{
                    err
                }
            })
        }
    }
}
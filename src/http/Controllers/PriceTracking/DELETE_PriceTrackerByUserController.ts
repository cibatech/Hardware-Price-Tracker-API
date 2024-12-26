import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import {DeleteManyPriceTrackersByUserUseCase} from "../../../services"
import { PrismaPriceTrackerRepository } from "../../../repository/Prisma/PrismaPriceTrackerRepository";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
export async function DELETEManyPriceTrackersByUserController(req:FastifyRequest,res:FastifyReply) {
    const {UserId} = z.object({
        UserId:z.string()
    }).parse(req.params)
    const service = new DeleteManyPriceTrackersByUserUseCase(new PrismaPriceTrackerRepository,new PrismaUserRepository);

    try{

        const resp = await service.execute(UserId);
        console.log(resp)
        res.status(202).send({
            Description:"Price Tracker sucessfully deleted",
            resp,
            config:{
                UserId
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
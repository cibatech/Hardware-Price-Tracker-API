import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import {DeletePriceTrackerUseCase} from "../../../services"
import { PrismaPriceTrackerRepository } from "../../../repository/Prisma/PrismaPriceTrackerRepository";
import { InvalidParameterError } from "../../../services/Error/InvalidParameterError";
import { ResourceNotFoundError } from "../../../services/Error/ResourceNotFound";
export async function DELETEPriceTrackerController(req:FastifyRequest,res:FastifyReply) {
    const {Id} = z.object({
        Id:z.string()
    }).parse(req.params)
    const service = new DeletePriceTrackerUseCase(new PrismaPriceTrackerRepository);

    try{
        const resp = await service.execute(Id);

        res.status(202).send({
            Description:"Price Tracker sucessfully deleted",
            resp,
            config:{
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
        }
    }
}
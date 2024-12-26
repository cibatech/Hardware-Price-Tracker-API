import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import {UpdatePriceTrackerUseCase} from "../../../services"
import { PrismaPriceTrackerRepository } from "../../../repository/Prisma/PrismaPriceTrackerRepository";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";
export async function PUTPriceTrackerController(req:FastifyRequest,res:FastifyReply) {
    const {Id,value} = z.object({
        Id:z.string(),
        value:z.string()
    }).parse(req.params)
    const service = new UpdatePriceTrackerUseCase(new PrismaPriceTrackerRepository);

    try{
        const resp = await service.execute(Id,Number(value));
        console.log(resp)
        res.status(201).send({
            Description:"Price Tracker sucessfully updated with the new value",
            resp,
            config:{
                Id,value
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
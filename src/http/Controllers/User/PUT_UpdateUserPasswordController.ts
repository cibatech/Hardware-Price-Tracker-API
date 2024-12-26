import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ChangeUserPasswordUseCase } from "../../../services/User";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceAlreadyExistsError } from "../../../Error/ResourceAlreadyExistsError";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";

export async function PUTUpdateUserPasswordController(req:FastifyRequest,res:FastifyReply) {
    const {Email,Password} = z.object({
        Email:z.string(),
        Password:z.string()
    }).parse(req.body)
    const service = new ChangeUserPasswordUseCase(new PrismaUserRepository)
    try{
        const response = await service.execute(Email,Password)
        res.status(201).send({
            Description:"Successfully created the user",
            data:response
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError){
            res.status(409).send({
                Description:"Cant find any user with this email adress"
            })
        }
    }
}
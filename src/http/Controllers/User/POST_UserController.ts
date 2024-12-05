import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateUserUseCase } from "../../../services/User/CreateUserService";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceAlreadyExistsError } from "../../../services/Error/ResourceAlreadyExistsError";

export async function CreateUserController(req:FastifyRequest,res:FastifyReply) {
    const {Email,Password} = z.object({
        Email:z.string(),
        Password:z.string()
    }).parse(req.body)
    const service = new CreateUserUseCase(new PrismaUserRepository)
    try{
        const response = await service.execute({
            Email,Password
        })
        res.status(201).send({
            Description:"Successfully created the user",
            data:response
        })
    }catch(err){
        if(err instanceof ResourceAlreadyExistsError){
            res.status(409).send({
                Description:"Theres already an email with this adress"
            })
        }
    }
}
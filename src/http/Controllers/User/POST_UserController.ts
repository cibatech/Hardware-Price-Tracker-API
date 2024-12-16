import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateUserUseCase } from "../../../services/User/CreateUserService";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceAlreadyExistsError } from "../../../Error/ResourceAlreadyExistsError";

export async function CreateUserController(req:FastifyRequest,res:FastifyReply) {
    const {Email,Password,UserName} = z.object({
        Email:z.string(),
        Password:z.string(),
        UserName:z.string().optional()
    }).parse(req.body)
    const service = new CreateUserUseCase(new PrismaUserRepository)
    try{
        const response = await service.execute({
            Email,Password,UserName
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
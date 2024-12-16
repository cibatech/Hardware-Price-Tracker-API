import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetProfileUseCase } from "../../../services/User/ProfileService";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";

export async function GETProfileInformationController(req:FastifyRequest,res:FastifyReply) {
    const {UserId} = z.object({
        UserId:z.string()
    }).parse(req.params)
    const service = new GetProfileUseCase(new PrismaUserRepository);

    try{
        const response = await service.execute(UserId)

        res.status(200).send({
            Description:"Successfully returned profile information",
            response
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError ){
            res.status(400).send({
                Description:"Não conseguimos encontrar nenhum usuário com o email informado por favor informe um novo email",
            })
        }
    }
}
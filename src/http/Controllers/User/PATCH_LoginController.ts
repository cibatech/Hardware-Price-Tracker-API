import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserLoginUseCase } from "../../../services/User/UserLoginService";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { z } from "zod";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";
import { InvalidParameterError } from "../../../Error/InvalidParameterError";

export async function PatchLoginController(req:FastifyRequest,res:FastifyReply) {
    const service = new UserLoginUseCase(new PrismaUserRepository);
    const {Email,Password} =z.object({
        Password:z.string(),
        Email:z.string().email()
    }).parse(req.body)
    try{
        const response = await service.execute({
            Email,Password
        })


        res.status(200).send({
            Description:"Password e Email foram checados. O login Foi um sucesso!",
            UserId:response
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError ){
            res.status(400).send({
                Description:"Não conseguimos encontrar nenhum usuário com o email informado por favor informe um novo email",
            })
        }
        if(err instanceof InvalidParameterError){
            res.status(405).send({
                Description:"Senha incorreta",
            })
        }
    }
}
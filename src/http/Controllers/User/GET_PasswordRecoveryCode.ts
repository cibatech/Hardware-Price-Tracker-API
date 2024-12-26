import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { RecoveryCodeUseCase } from "../../../services/User/PasswordRecovery/GenRecoveryCode";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";

export async function GETPasswordRecoveryCode(req:FastifyRequest, res:FastifyReply) {
    const {Email} = z.object({
        Email:z.string().email()
    }).parse(req.params)

    const servioe = new RecoveryCodeUseCase(new PrismaUserRepository)

    try{
        const response = await servioe.SendCode({Email})

        res.status(200).send({
            Description:"Sent Recovery code",
            CodeSent:response,
            config:{
                Email
            }
        })
        
    }catch(err){
        if(err instanceof ResourceNotFoundError ){
            res.status(400).send({
                Description:"Não conseguimos encontrar nenhum usuário com o email informado por favor informe um novo email",
            })
        }
    }
}
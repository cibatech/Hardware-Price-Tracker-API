import { FastifyReply, FastifyRequest } from "fastify";
import { string, z } from "zod";
import { RecoveryCodeUseCase } from "../../../services/User/PasswordRecovery/GenRecoveryCode";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceNotFoundError } from "../../../Error/ResourceNotFound";
import { ValidationError } from "../../../Error/ValidationError";


export async function PUTUserPasswordByCode(req:FastifyRequest,res:FastifyReply) {
    const {StoredCode,UserProvidedCode,Email,Password} = z.object({
        UserProvidedCode:z.string(),
        StoredCode:z.string(),
        Email:z.string().email(),
        Password:z.string()
    }).parse(req.body)

    const service = new RecoveryCodeUseCase(new PrismaUserRepository)
    try{
        const response = await service.CompareRecoveryCode(UserProvidedCode,StoredCode,Email,Password);
        
        res.status(201).send({
            Description:"Successfully updated password",
            NewPassword:response,
            config:{
                Email,UserProvidedCode,StoredCode,Password
            }
        })
    }catch(err){
        if(err instanceof ResourceNotFoundError ){
            res.status(400).send({
                Description:"Não conseguimos encontrar nenhum usuário com o email informado por favor informe um novo email",
            })
        }else if(err instanceof ValidationError){
            res.status(405).send({
                Description:"Codigo nao foi comparado corretamente",
            })
        }
        else{
            res.status(500).send("Unknow Error")
        }

    }
}
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateUserUseCase } from "../../../services/User/CreateUserService";
import { PrismaUserRepository } from "../../../repository/Prisma/PrismaUserRepository";
import { ResourceAlreadyExistsError } from "../../../Error/ResourceAlreadyExistsError";
import { SendEmail } from "../../../lib/nodemailer";

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
        //Envia email de boas vindas
        await SendEmail({
            to:Email,
            subject:"No-Reply bem vindo ao HPT",
            text:`
Olá ${UserName},

Seja muito bem-vindo(a) ao HTP - Hardware Price Tracker, a solução criada pela Cibatech para tornar sua experiência de compras de hardware mais inteligente, prática e econômica!

Estamos muito felizes em tê-lo(a) conosco. Com o HTP, você terá acesso a ferramentas avançadas de monitoramento de preços e receberá alertas personalizados para aproveitar as melhores ofertas do mercado.

O que você pode fazer com o HTP:
Acompanhar preços em tempo real: monitore os valores dos seus produtos favoritos.
Definir metas de preço: seja avisado(a) assim que o preço atingir o valor desejado.
Receber dicas e insights: aproveite ofertas exclusivas e tendências de mercado.
Seu próximo passo? Comece configurando sua conta e adicione os itens que deseja monitorar. Clique no botão abaixo para acessar a plataforma:

👉 https://hardware-price-tracker-app.vercel.app

Se precisar de ajuda ou tiver dúvidas, nossa equipe de suporte estará à disposição pelo e-mail suporte@cibatech.com.

Mais uma vez, seja bem-vindo(a)! Estamos aqui para transformar sua experiência de compras em algo simples e eficiente.

Atenciosamente,
Equipe Cibatech
Simplificando suas compras com tecnologia.
                `
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
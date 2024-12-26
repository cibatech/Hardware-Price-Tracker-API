import { ResourceNotFoundError } from "../../../Error/ResourceNotFound"
import { ValidationError } from "../../../Error/ValidationError"
import { SendEmail } from "../../../lib/nodemailer"
import { UserRepository } from "../../../repository/UserRepository"
import { EmailType } from "../../../types/EmailType"
import { GenRecoveryCode } from "../../../utils/GetRecoveryCode"

interface SendCodeRequest{
    Email:string,
}

export class RecoveryCodeUseCase{
    constructor(private userRepositorie:UserRepository){}
    async SendCode({Email}:SendCodeRequest):Promise<string>{
        //check if the user exists
        const doesTheUserExists = await this.userRepositorie.FindByEmail(Email)
        if(!doesTheUserExists){
            throw new ResourceNotFoundError("User",Email)
        }
        const recovery = GenRecoveryCode()

        const email:EmailType = {
            to:Email,
            subject:`No-Reply Recuperação de Senha`,
            text:  `Assunto: Instruções para Recuperação de Senha

                    Olá ${doesTheUserExists.UserName},

                    Recebemos uma solicitação para redefinir a sua senha. Se você não fez essa solicitação, por favor, ignore este e-mail.

                    Para criar uma nova senha, utilize o código numerico abaixo:
                                    
                                        ${recovery} 

                    Atenciosamente,
                    CibaTech
                    entre em contato conosco em: Nem fudendo que vou passar meu email`
            
        }
        //send email
        const response = await SendEmail(email)
        if(!response){
            throw new Error()
        }
        return recovery
    }
    
    async CompareRecoveryCode(Code:string,Provided:string,Email:string,Password:string):Promise<string>{
        if(Code!=Provided){
            throw new ValidationError("Invalid Code provided")
        }

        const FindByEmail = await this.userRepositorie.FindByEmail(Email);

        if(!FindByEmail){
            throw new ResourceNotFoundError("User",Email)
        }
        const UpdatePassword = await this.userRepositorie.update(FindByEmail.Id,{Password})

        return UpdatePassword.Password
    }
}
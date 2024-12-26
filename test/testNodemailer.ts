import { SendEmail } from "../src/lib/nodemailer";


SendEmail({
    subject:`No-Reply Recuperação de Senha`,
    text:  `Assunto: Instruções para Recuperação de Senha

                    Olá teste,

                    Recebemos uma solicitação para redefinir a sua senha. Se você não fez essa solicitação, por favor, ignore este e-mail.

                    Para criar uma nova senha, utilize o código numerico abaixo:
                                    
                                        2345 

                    Atenciosamente,
                    CibaTech
                    entre em contato conosco em: Nem fudendo que vou passar meu email`,
    to:"xeseloc467@cctoolz.com"
})
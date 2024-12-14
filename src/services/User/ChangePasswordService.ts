import { User } from "../../../prisma/deploy-output";
import { UserRepository } from "../../repository/UserRepository";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";

export class ChangeUserPasswordUseCase{
    constructor(private UserRepo:UserRepository){}
    async execute(Email:string,newPassword:string):Promise<User>{
        const doesTheEmailAlreadyExists = await this.UserRepo.FindByEmail(Email);
        if(!doesTheEmailAlreadyExists){
            throw new ResourceNotFoundError("User",Email)
        }

        const createNewUser = await this.UserRepo.update(doesTheEmailAlreadyExists.Id,{
            Password:newPassword
        })

        return createNewUser
    }
}
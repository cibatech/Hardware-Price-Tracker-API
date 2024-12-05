import { Prisma, User } from "../../../prisma/deploy-output";
import { UserRepository } from "../../repository/UserRepository";
import { ResourceAlreadyExistsError } from "../Error/ResourceAlreadyExistsError";

export class CreateUserUseCase{
    constructor(private UserRepo:UserRepository){}
    async execute(data:Prisma.UserCreateInput):Promise<User>{
        const doesTheEmailAlreadyExists = await this.UserRepo.FindByEmail(data.Email);
        if(doesTheEmailAlreadyExists){
            throw new ResourceAlreadyExistsError("User")
        }

        const createNewUser = await this.UserRepo.Create(data);

        return createNewUser
    }
}
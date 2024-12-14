import { UserRepository } from "../../repository/UserRepository";
import { InvalidParameterError } from "../../Error/InvalidParameterError";
import { ResourceNotFoundError } from "../../Error/ResourceNotFound";
interface UserLoginRequest{
    Email:string,
    Password:String
}
export class UserLoginUseCase{
    constructor(private UserRepo:UserRepository){}
    async execute({Email,Password}:UserLoginRequest):Promise<string>{
        const theresAnyUserWithThisEmailAdress = await this.UserRepo.FindByEmail(Email)
        if(!theresAnyUserWithThisEmailAdress){
            throw new ResourceNotFoundError("User",Email);
        }

        if(theresAnyUserWithThisEmailAdress.Password != Password){
            throw new InvalidParameterError("Password","Provide the rigth password")
        }

        return theresAnyUserWithThisEmailAdress.Id
    }
}
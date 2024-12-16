import { ResourceNotFoundError } from "../../Error/ResourceNotFound";
import { ProductRepository } from "../../repository/ProductRepository";
import { UserRepository } from "../../repository/UserRepository";
interface GetProfileResponse{
    Email:string
    UserName:string
}
export class GetProfileUseCase{
    constructor(private UserRepo:UserRepository){}
    async execute(UserId:string):Promise<GetProfileResponse>{
        const doesTheUserExists = await this.UserRepo.FindById(UserId);
        if(!doesTheUserExists){
            throw new ResourceNotFoundError("User",UserId)
        }

        return {
            Email:doesTheUserExists.Email,
            UserName:doesTheUserExists.UserName
        }
    }
}
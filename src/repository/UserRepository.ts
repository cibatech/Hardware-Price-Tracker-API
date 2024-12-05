import { Prisma, User } from "../../prisma/deploy-output";

export interface UserRepository{
    Create(data:Prisma.UserCreateInput):Promise<User>
    FindById(uid:string):Promise<User | null>
    FindByEmail(Email:string):Promise<User | null>
    delete(Uid:string):Promise<User>
    update(Uid:string,data:Partial<User>):Promise<User>
}
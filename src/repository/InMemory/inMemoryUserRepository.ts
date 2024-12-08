import { randomUUID } from "crypto";
import { Prisma, User } from "../../../prisma/deploy-output";
import { UserRepository } from "../UserRepository";
import { string } from "zod";

export class InMemoryUserRepository implements UserRepository {
    public itens: User[] = [];

    async Create(data: Prisma.UserCreateInput): Promise<User> {
        const newUser: User = {
            Email:String(data.Email),
            Id:randomUUID(),
            Password:String(data.Password)
        };
        this.itens.push(newUser);
        return newUser;
    }

    async FindById(uid: string): Promise<User | null> {
        const user = this.itens.find(item => item.Id === uid);
        return user?user:null;
    }

    async FindByEmail(email: string): Promise<User | null> {
        const user = this.itens.find(item => item.Email === email);
        return user?user:null;
    }

    async delete(uid: string): Promise<User> {
        const index = this.itens.findIndex(item => item.Id === uid);
        if (index === -1) {
            throw new Error(`User with ID ${uid} not found`);
        }
        const [deletedUser] = this.itens.splice(index, 1);
        return deletedUser;
    }

    async update(uid: string, data: Partial<User>): Promise<User> {
        const Index = this.itens.findIndex(itens=>itens.Id==uid);
        const oldId = this.itens[Index]
        const newuser:User = {
            Email:data.Email?String(data.Email):oldId.Email,
            Id:oldId.Id,
            Password:data.Password?String(data.Password):oldId.Password
        }
        this.itens[Index] = newuser
        return this.itens[Index];
    }
}

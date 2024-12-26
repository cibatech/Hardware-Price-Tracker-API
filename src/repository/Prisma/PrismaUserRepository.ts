import { Prisma, User } from "../../../prisma/deploy-output";
import { prisma } from "../../lib/prisma";
import { UserRepository } from "../UserRepository";

export class PrismaUserRepository implements UserRepository {

    async Create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await prisma.user.create({
            data,
        });
        return user;
    }

    async FindById(uid: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { Id: uid },
        });
        return user;
    }

    async FindByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findMany({
            where: { Email:email },
        });
        return user[0];
    }

    async delete(uid: string): Promise<User> {
        const user = await prisma.user.delete({
            where: { Id: uid },
        });
        return user;
    }

    async update(uid: string, data: Partial<User>): Promise<User> {
        const user = await prisma.user.update({
            where: { Id: uid },
            data,
        });
        return user;
    }
}
